Ext.define('smiley360.view.ShareLink', {
    extend: 'Ext.Container',
    alias: 'widget.sharelinkview',
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
                cls: 'popup-top-panel link-background',
                items: [
                    {
                    	xtype: 'label',
                    	id: 'xTitleLabel',
                        cls: 'popup-title-text',
                        html: 'Earn {0} Smiles Sharing a Link',
                    }, {
                        xtype: 'image',
                        docked: 'right',
                        cls: 'popup-title-image',
                        src: 'resources/images/share_link.png',
                    }],
            }, {
                xtype: 'panel',
                id: 'xMiddlePanel',
                cls: 'popup-middle-panel',
                items: [{
                    xtype: 'label',
                    cls: 'popup-top-text',
                    html: 'Copy the following link',
                }, {
                    xtype: 'textfield',
                    id: 'xLinkField',
                    cls: 'cust-input',
                    value: '',
                }]
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    text: 'COPY',
                    icon: 'resources/images/share-copy.png',
                    iconAlign: 'right',
                    iconCls: 'popup-post-icon',
                    cls: 'popup-submit-button',
                    listeners: {
                        tap: function () {
                            this.up('#xView').hide();
                        }
                    },
                }],
            }],
        }],
        listeners: {
            initialize: function () {
                smiley360.adjustPopupSize(this);

                var xLinkField = this.down('#xLinkField');

                xLinkField.focus();
                xLinkField.select();
            },
            hide: function () {
                this.destroy();
            }
        },
    },
    setEarnSmiles: function (smiles) {
    	var xTitleLabel = this.down('#xTitleLabel');

    	xTitleLabel.setHtml(Ext.String.format(
            xTitleLabel.getHtml(), smiles));
    },
    setLink: function (link_to_set)
    {
    	var xLinkField = this.down('#xLinkField');
    	xLinkField.setValue(link_to_set);
    }
});