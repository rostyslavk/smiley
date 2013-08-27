Ext.define('smiley360.view.UploadPhoto', {
    extend: 'Ext.Container',
    alias: 'widget.uploadphotoview',
    requires: [
        'Ext.Anim',
        'Ext.Rating',
        'Ext.ux.Fileup',
    ],
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
                cls: 'popup-top-panel photo-background',
                items: [{
                    xtype: 'label',
                    cls: 'popup-title-text',
                    html: 'Earn 5 Smiles uploading a Photo',
                }, {
                    xtype: 'image',
                    docked: 'right',
                    cls: 'popup-title-image',
                    src: 'resources/images/photo_share.png',
                }],
            }, {
                xtype: 'panel',
                id: 'xStatusIndicator',
                cls: 'popup-status-indicator',
            }, {
                xtype: 'panel',
                cls: 'popup-middle-panel popup-status-container',
                items: [{
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'panel',
                        layout: 'vbox',
                        items: [{
                            xtype: 'fileupload',
                            id: 'xBrowsePhotoButton',
                            cls: 'popup-photo-button',
                            autoUpload: true,
                            states: {
                                browse: {
                                    text: 'ADD PHOTO'
                                },
                                uploading: {
                                    text: 'Uploading',
                                    loading: true// Enable loading spinner on button
                                }
                            },
                            listeners: {
                                success: function (response) {
                                    this.hide();

                                    var xView = this.up('#xView');
                                    var xAddedImage = xView.down('#xAddedImage');
                                    var xPostText = xView.down('#xPostText');

                                    xAddedImage.show();
                                    xAddedImage.setHeight(xPostText.element.getHeight());
                                    xAddedImage.setWidth(xPostText.element.getWidth() * 0.4);
                                    xAddedImage.setSrc(smiley360.configuration.getServerDomain() + response.filepath);
                                }
                            }
                        }, {
                            xtype: 'image',
                            id: 'xAddedImage',
                            cls: 'popup-photo-image',
                            hidden: true,
                        }]
                    }, {
                        xtype: 'textareafield',
                        id: 'xPostText',
                        flex: 1,
                        maxRows: 5,
                        //maxLength: 84,
                        isFocused: false,
                        cls: 'popup-input popup-input-text',
                        listeners: {
                            keyup: function () {
                                var postLenght = this.getValue().length;
                                var xPostCountLabel = this.up('#xView').down('#xPostCountLabel');

                                xPostCountLabel.setHtml(postLenght.toString());

                                if (postLenght > 84) {
                                    xPostCountLabel.setStyle('color: red;')
                                }
                                else {
                                    xPostCountLabel.setStyle('color: #878789;')
                                }
                            }
                        }
                    }]
                }, {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'label',
                        cls: 'popup-post-bottom-text',
                        style: 'color: #878789;',
                        html: 'Post must contain a maximum of 84 characters.',
                    }, {
                        xtype: 'label',
                        id: 'xPostCountLabel',
                        docked: 'right',
                        cls: 'popup-post-bottom-text',
                        html: '0',
                    }],
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'panel',
                    layout: 'hbox',
                    defaults: {
                        width: '50%',
                        labelAlign: 'right',
                        labelWidth: '100%',
                    },
                    items: [{
                        xtype: 'checkboxfield',
                        id: 'xFacebookCheckbox',
                        label: 'Post to Facebook',
                        labelCls: 'popup-checkbox-grey-label',
                        cls: 'popup-checkbox',
                        checked: true,
                        listeners: {
                            check: function () {
                                this.up('#xView').onCheck();
                            },
                            uncheck: function () {
                                this.up('#xView').onUncheck();
                            }
                        }
                    }, {
                        xtype: 'checkboxfield',
                        id: 'xTwitterCheckbox',
                        label: 'Post to Twitter.',
                        labelCls: 'popup-checkbox-grey-label',
                        cls: 'popup-checkbox',
                        listeners: {
                            check: function () {
                                this.up('#xView').onCheck();
                            },
                            uncheck: function () {
                                this.up('#xView').onUncheck();
                            }
                        }
                    }],
                }, {
                    xtype: 'label',
                    cls: 'popup-post-comment',
                    html: 'The following text will automatically be added to your post:',
                }, {
                    xtype: 'label',
                    cls: 'popup-post-comment-text',
                    html: 'Try Campbell\'s Slow Kettle Style Soups and be sure to use this $1.00 off coupon! http://bit.ly/YxVW1D',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    text: 'POST',
                    icon: 'resources/images/share-initial.png',
                    iconAlign: 'right',
                    iconCls: 'popup-post-icon',
                    id: 'xShareButton',
                    cls: 'popup-post-button',
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
            },
            painted: function () {
                var fileName = guid();
                var uploadUrl = smiley360.configuration.getServerDomain() +
                    'getfile.php?foldername=photos&filename=' + fileName;

                this.down('#xBrowsePhotoButton').setUrl(uploadUrl);
            }
        },
    },

    onCheck: function () {
        this.down('#xBrowsePhotoButton').setCls('popup-photo-button');
        this.down('#xFacebookCheckbox').setLabelCls('popup-checkbox-grey-label');
        this.down('#xTwitterCheckbox').setLabelCls('popup-checkbox-grey-label');
    },

    onUncheck: function () {
        var xTwitterCheckbox = this.down('#xTwitterCheckbox');
        var xFacebookCheckbox = this.down('#xFacebookCheckbox');

        if (!xTwitterCheckbox.getChecked() &&
            !xFacebookCheckbox.getChecked()) {

            xTwitterCheckbox.setLabelCls('popup-checkbox-red-label');
            xFacebookCheckbox.setLabelCls('popup-checkbox-red-label');

            this.down('#xBrowsePhotoButton').setCls('popup-photo-button-required');
        }
    },

    doShare: function () {
        var shareView = this;
        var shareOptions = [];

        if (this.down('#xFacebookCheckbox').getChecked() == true) {
            shareOptions.push(1);
        }

        if (this.down('#xTwitterCheckbox').getChecked() == true) {
            shareOptions.push(3);
        }

        var shareData = {
            missionID: smiley360.missionData.MissionDetails.MissionId,
            memberID: smiley360.memberData.UserId,
            text: this.down('#xPostText').getValue(),
            postOptionIDs: shareOptions,
        };

        smiley360.setViewStatus(shareView, smiley360.viewStatus.progress);
        smiley360.services.postToUploadPhoto(shareData, function (response) {
            smiley360.setResponseStatus(shareView, response);
        });
    },
});