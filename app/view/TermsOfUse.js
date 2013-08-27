Ext.define('smiley360.view.TermsOfUse', {
    extend: 'Ext.Container',
    alias: 'widget.termsofuseview',
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
                //docked: 'top',
                cls: 'popup-close-button',
                listeners: {
                    tap: function () {
                        Ext.getCmp('xView').destroy();
                    }
                }
            }, {
                xtype: 'panel',
                layout: 'hbox',
                cls: 'popup-top-panel forgetpwd-background',
                items: [{
                    xtype: 'label',
                    cls: 'popup-title-text',
                    html: 'Terms of Use',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'label',
                    cls: 'popup-message-title',
                    html: 'SMILEY360.COM TERMS OF SERVICE AGREEMENT',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-middle-panel',
                items: [{
                	xtype: 'label',
					style: 'font-size: 0.6em ;',
                    cls: 'popup-message-text',
                    html: 'Welcome to the smiley 360.com web site. These terms of service (referred to in this document as' +
						'\"TOS\") govern all use of the smiley360.com web site (referred to this document as "Site"), including' +
						'interactive resources suah as user profiles, blogs and chat groups (which we call collectively the' +
						'"Communication Platform"). These TOS also govern your membership in smiley360.com. Please read these' +
						'TOS carefully as they contain important information regarding your legal rights and obligations.' +
						'<br><br>By using the Site, by registering with smiley360.com, and/or by' +
						' becoming a member of smiley360.com, you agree to be bound by these TOS. smiley360.com ' +
						' reserves the right, in its sole discretion, to change, modify, add to,' +
						'or delete from these TOS on this page. Each version of these TOS will indicate' +
						' at the top of this page the date they were last revised. Your continued use of the Site, or your' +
						' subsequent registration or entry into membership, after any revised version of these TOS' +
						' is posted constitutes your acceptance of the revised version.' +
						' Notwithstanding the foregoing, if you arfe a member of smiley360.com.'
                    }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    text: 'CLOSE',
                    id: 'xCloseButton',
                    cls: 'popup-submit-button',
                    listeners: {
                        tap: function () {
                            Ext.getCmp('xView').destroy();
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
});