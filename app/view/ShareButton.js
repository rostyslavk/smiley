Ext.define('smiley360.view.ShareButton', {
    extend: 'Ext.Container',
    alias: 'widget.sharebutton',
    requires: [],
    config: {
        items: [{
            xtype: 'button',
            id: 'xShareButton',
            ui: 'plain',
        }, {
            xtype: 'container',
            docked: 'top',
            cls: 'share-badge',
            items: [{
                xtype: 'label',
                html: '5/10',
            }, {
                xtype: 'label',
                html: '5',
                style: 'font-family: din bold; font-size: 1em;'
            }],
        }],
    },
});