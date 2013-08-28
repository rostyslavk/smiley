Ext.define('smiley360.view.ShareToTwitter', {
    extend: 'Ext.Container',
    alias: 'widget.sharetotwitterview',
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
                id: 'xTopPanel',
                cls: 'popup-top-panel twitter-background',
                items: [{
                    xtype: 'label',
                    id: 'xTitleLabel',
                    cls: 'popup-title-text',
                    html: 'Earn {0} Smiles Sharing on Twitter',
                }, {
                    xtype: 'image',
                    docked: 'right',
                    cls: 'popup-title-image',
                    src: 'resources/images/twi_share.png',
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
                        xtype: 'label',
                        cls: 'popup-post-bottom-text',
                        style: 'color: #878789;',
                        html: 'Tweet must contain a maximum of 84 characters.',
                    }, {
                        xtype: 'label',
                        id: 'xPostCountLabel',
                        docked: 'right',
                        cls: 'popup-post-bottom-text',
                        html: '0',
                    }],
                }, {
                    xtype: 'textareafield',
                    id: 'xPostText',
                    maxRows: 5,
                    //maxLength: 84,
                    isFocused: false,
                    cls: 'popup-input popup-input-text',
                    listeners: {
                        keyup: function () {
                            var postLenght = this.getValue().length;

                            var xView = this.up('#xView')
                            var xPostCountLabel = xView.down('#xPostCountLabel');

                            xPostCountLabel.setHtml(postLenght.toString());

                            if (postLenght > 84) {
                                xPostCountLabel.setStyle('color: red;')
                                xView.down('#xShareButton').disable();
                            }
                            else {
                                xPostCountLabel.setStyle('color: #878789;')

                                if (postLenght > 0) {
                                    xView.down('#xShareButton').enable();
                                }
                                else {
                                    xView.down('#xShareButton').disable();
                                }
                            }
                        }
                    }
                }],
            }, {
                xtype: 'panel',
                id: 'xBottomPanel',
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'label',
                    cls: 'popup-post-comment',
                    html: 'The following text will automatically be added to your post:',
                }, {
                    xtype: 'label',
                    cls: 'popup-post-comment-text',
                    id: 'xSeedPhrase',
                    html: 'Try Campbell\'s Slow Kettle Style Soups and be sure to use this $1.00 off coupon! http://bit.ly/YxVW1D',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    id: 'xShareButton',
                    text: 'POST',
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
            text: this.down('#xPostText').getValue(),
        };

        smiley360.setViewStatus(shareView, smiley360.viewStatus.progress);
        smiley360.services.postToTwitter(shareData, function (response) {
            smiley360.setResponseStatus(shareView, response);
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
    setSeedPhrase: function (seedPhrase){
    	Ext.getCmp('xSeedPhrase').setHtml(seedPhrase);
    },

    missionId: undefined,
});