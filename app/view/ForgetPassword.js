Ext.define('smiley360.view.ForgetPassword', {
    extend: 'Ext.Container',
    alias: 'widget.forgetpasswordview',
    config: {
        modal: true,
        centered: true,
        fullscreen: true,
        hideOnMaskTap: true,
        id: 'xForgetPasswordView',
        scrollable: 'vertical',
        cls: 'popup-panel',
        items: [{
            xtype: 'panel',
            id: 'xRootPanel',
            cls: 'popup-root-panel',
            items: [{
                xtype: 'image',
                //docked: 'top',
                cls: 'popup-close-button',
                listeners: {
                    tap: function () {
                        Ext.getCmp('xForgetPasswordView').destroy();
                    }
                }
            }, {
                xtype: 'panel',
                layout: 'hbox',
                cls: 'popup-top-panel forgetpwd-background',
                items: [{
                    xtype: 'label',
                    cls: 'popup-title-text',
                    html: 'Recover your Password.',
                }, {
                    xtype: 'image',
                    docked: 'right',
                    id: 'xTitleImage',
                    cls: 'popup-title-image',
                    src: 'resources/images/lock.png',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'emailfield',
                    required: true,
                    id: 'xEmailField',
                    placeHolder: 'Email',
                    cls: 'cust-input',
					autoCapitalize: false
                }, {
                    xtype: 'label',
                    id: 'xMessageText',
                    cls: 'popup-message-text',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    text: 'SUBMIT',
                    //icon: 'resources/images/share-initial.png',
                    //iconAlign: 'right',
                    //iconCls: 'popup-post-icon',
                    id: 'xShareButton',
                    cls: 'popup-submit-button',
                    listeners: {
                        tap: function () {
                            if (this.getHtml() == 'CLOSE') {
                                Ext.getCmp('xForgetPasswordView').destroy();
                            }
                            else {
                                Ext.getCmp('xForgetPasswordView').doSubmit();
                            }
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

    doSubmit: function () {
        var submitView = this;
        var submitData = {
            email: Ext.getCmp('xEmailField').getValue()
        };

        //smiley360.setViewStatus(submitView, smiley360.viewStatus.progress);
        smiley360.services.recoverPassword(Ext.getCmp('xEmailField').getValue(), function (response) {
            smiley360.setResponseStatus(submitView, response);
        });
    },

    setStatus: function (status) {
        var xEmailField = Ext.getCmp('xEmailField');
        var xTitleImage = Ext.getCmp('xTitleImage');
        var xMessageText = Ext.getCmp('xMessageText');
        var xShareButton = Ext.getCmp('xShareButton');
        //var xShareStatus = Ext.getCmp('xShareStatus');

        switch (status) {
            //case smiley360.viewStatus.progress: {
            //    xShareButton.setText('POSTING...');
            //    xShareButton.setIcon('resources/images/share-initial.png');
            //    xShareStatus.setStyle('background-color: #F9A419;');

            //    var statusAnimation = new Ext.Anim({
            //        autoClear: false,
            //        duration: 2000,
            //        easing: 'ease-in',
            //        from: { width: 0 },
            //        to: { width: this.getWidth() },
            //    });

            //    statusAnimation.run(xShareStatus.element, 'slide');

            //    break;
            //}
            case smiley360.viewStatus.successful: {
                xEmailField.hide();
                xShareButton.setHtml('CLOSE')
                xTitleImage.setSrc('resources/images/smile-successful.png');
                xMessageText.setHtml('Thank you, your password reminder was sent.');
                //xShareStatus.setStyle('background-color: #5F9E45;');

                break;
            }
            case smiley360.viewStatus.unsuccessful: {
                xTitleImage.setSrc('resources/images/smile-unsuccessful.png');
                xMessageText.setHtml('Oops, the email address you entered is not found in our member accounts. Try again, or <a id="xConactUsRef" style="text-decoration: underline;">contact us</a> for assistance.');
                //xShareStatus.setStyle('background-color: #ED1C24;');
                xMessageText.element.down('a#xConactUsRef').on('tap', function () {
                    Ext.getCmp('xOfferView').fireEvent('LoadContactUsCommand', this);
                });

                break;
            }
            default:
        }
        // resize container after state has been changed
        smiley360.adjustPopupSize(this);
    }
});