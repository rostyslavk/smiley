Ext.define('smiley360.view.ShareToBlog', {
    extend: 'Ext.Container',
    alias: 'widget.sharetoblogview',
    config: {
        modal: true,
        centered: true,
        fullscreen: true,
        hideOnMaskTap: true,
        id: 'xView',
        scrollable: 'vertical',
        cls: 'popup-panel',
        items: [{
            xtype: 'panel',
            id: 'xRootPanel',
            cls: 'popup-root-panel',
            items: [{
                xtype: 'image',
                docked: 'top',
                cls: 'popup-close-button',
                listeners: {
                    tap: function () {
                        this.up('#xView').destroy();
                    }
                }
            }, {
                xtype: 'panel',
                layout: 'hbox',
                cls: 'popup-top-panel blog-background',
                items: [
                    {
                        xtype: 'label',
                        id: 'xTitleLabel',
                        cls: 'popup-title-text',
                        html: 'Submit a Link to Your Blog Review to earn {0} Smiles',
                    }, {
                        xtype: 'image',
                        docked: 'right',
                        cls: 'popup-title-image',
                        src: 'resources/images/share_blog.png',
                    }],
            }, {
                xtype: 'panel',
                id: 'xStatusIndicator',
                cls: 'popup-status-indicator',
            }, {
                xtype: 'panel',
                cls: 'popup-middle-panel popup-status-container',
                items: [{
                    xtype: 'label',
                    cls: 'popup-top-text',
                    html: 'Submit a share-blog URL',
                }, {
                    xtype: 'urlfield',
                    required: true,
                    id: 'xBlogUrlField',
                    cls: 'cust-input',
                    autoCapitalize: false,
                    value: '',
                    listeners: {
                        keyup: function () {
                            this.up('#xView').doShareValidation();
                        }
                    }
                }]
            }, {
                xtype: 'panel',
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'checkboxfield',
                    id: 'xAgreementCheckbox',
                    label: 'I disclosed that I received a free sample in my video.',
                    labelAlign: 'right',
                    labelWidth: '100%',
                    labelWrap: true,
                    labelCls: 'popup-checkbox-grey-label',
                    //inputCls: 'popup-checkbox-input',
                    cls: 'popup-checkbox',
                    listeners: {
                        check: function () {
                            this.up('#xView').doShareValidation();
                        },
                        uncheck: function () {
                            this.up('#xView').doShareValidation();
                        }
                    }
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    id: 'xShareButton',
                    text: 'SUBMIT',
                    icon: 'resources/images/share-initial.png',
                    iconAlign: 'right',
                    iconCls: 'popup-post-icon',
                    cls: 'popup-post-button',
                    disabled: true,
                    listeners: {
                        tap: function () {
                            this.up('#xView').doShare();
                        }
                    },
                }],
            }],
        }],
        listeners: {
            initialize: function () {
                smiley360.adjustPopupSize(this);
            },
            hide: function () {
                this.destroy();
            }
        },
    },

    isValid: function () {
        var urlModel = Ext.create('smiley360.model.UrlModel', {
            url: this.down('#xBlogUrlField').getValue()
        });

        var urlModelErrors = urlModel.validate();
        if (urlModelErrors.isValid()) {
            return true;
        } else {
            var msg = '';

            urlModelErrors.each(function (err) {
                msg += err.getMessage() + '\n\n';
            });

            Ext.Msg.alert('ERROR', msg);

            return false;
        }
    },

    doShare: function () {
        if (this.isValid()) {
            var shareView = this;
            var shareData = {
                missionID: shareView.missionId,
                memberID: smiley360.memberData.UserId,
                blogURL: this.down('#xBlogUrlField').getValue(),
            };

            smiley360.setViewStatus(shareView, smiley360.viewStatus.progress, { progress: 'SUBMIT' });
            smiley360.services.postToBlog(shareData, function (response) {
                smiley360.setResponseStatus(shareView, response, { successful: 'DONE' });
            });
        }
    },

    doShareValidation: function () {
        if (this.down('#xBlogUrlField').getValue().length > 0 &&
            this.down('#xAgreementCheckbox').getChecked() == true) {
            this.down('#xShareButton').enable();
        }
        else {
            this.down('#xShareButton').disable();
        }
    },

    setEarnSmiles: function (smiles) {
        var xTitleLabel = this.down('#xTitleLabel');

        xTitleLabel.setHtml(Ext.String.format(
            xTitleLabel.getHtml(), smiles));
    },


    setMissionId: function (missionId) {
        this.missionId = missionId;
    },

    missionId: undefined,

    setLink: function (link_to_set)
    {
    	var xBlogUrlField = this.down('#xBlogUrlField');
    	xBlogUrlField.setValue(link_to_set);
    }
	
});