Ext.define('smiley360.view.ShareToYouTube', {
    extend: 'Ext.Container',
    alias: 'widget.sharetoyoutubeview',
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
                cls: 'popup-top-panel youtube-background',
                items: [
                    {
                        xtype: 'label',
                        id: 'xTitleLabel',
                        cls: 'popup-title-text',
                        html: 'Submit a Link to Your YouTube video to earn {0} Smiles',
                    }, {
                        xtype: 'image',
                        docked: 'right',
                        cls: 'popup-title-image',
                        src: 'resources/images/youtube_share.png',
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
                    html: 'Submit a YouTube video URL',
                }, {
                    xtype: 'textfield',
                    id: 'xUrlField',
                    required: true,
                    cls: 'cust-input',
                    value: '',
                }]
            }, {
                xtype: 'panel',
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'checkboxfield',
                    label: 'I disclosed that I received a free sample in my video.',
                    labelAlign: 'right',
                    labelWidth: '100%',
                    labelWrap: true,
                    labelCls: 'popup-checkbox-red-label',
                    //inputCls: 'popup-checkbox-input',
                    cls: 'popup-checkbox',
                    listeners: {
                        check: function () {
                            this.setLabelCls('popup-checkbox-grey-label');
                            this.up('#xView').down('#xShareButton').enable();
                        },
                        uncheck: function () {
                            this.setLabelCls('popup-checkbox-red-label');
                            this.up('#xView').down('#xShareButton').disable();
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

    doShare: function () {
        var shareView = this;
        var shareData = {
            missionID: shareView.missionId,
            memberID: smiley360.memberData.UserId,
            youtubeURL: this.down('#xUrlField').getValue(),
        };

        smiley360.setViewStatus(shareView, smiley360.viewStatus.progress, { progress: 'SUBMIT' });
        smiley360.services.postToYoutube(shareData, function (response) {
            smiley360.setResponseStatus(shareView, response, { successful: 'DONE' });
        });
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
});