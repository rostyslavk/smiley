var hide_panel, first_time, dock_panel, RowBrowseItem;
Ext.define('smiley360.view.BrowseInstruments', {
    extend: 'Ext.Panel',
    alias: 'widget.browseinstrumentsview',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
		'Ext.List',
		'Ext.dataview.List'
    ],
    config: {
        id: 'xBrowseInstruments',
        title: 'CONNECT/browse',
        cls:'browse-pict',
        items: [{
            xtype: 'spacer',
            height: '14px',
            style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 5px 5px 0px 0px;'
        }, {
            xtype: 'spacer',
            height: '7px',
            style: 'background-color: #efecea;'
        }, {
            xtype: 'container',
            layout: 'hbox',
            id: 'browseinst-cont',            
            style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
            items: [{
                xtype: 'container',
                layout: 'vbox',
                flex: 1,
                listeners: {
                    painted: function () {
                        Ext.getCmp('xBrowseInstr_TopLabel').setHtml(smiley360.CategoryString.toString());
                    },
                },
                items: [{
                    xtype: 'container',
                    laytout: { type: 'vbox' },
                    cls: 'has-shadow',
                    items: [{
                        xtype: 'container',
                        style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                        layout: { type: 'hbox' },
                        items: [{
                            xtype: 'label',
                            id: 'xBrowseInstr_TopLabel',
                            html: '',
                            cls: 'heading-text active-sign',
                            style: 'padding-left: 15px;',
                            flex: 1
                        }],
                    }, {
                        xtype: 'container',
                        id: 'xMyBrowse',
                        style: 'background-color: #efecea;',
                        cls: 'has-shadow',
                        padding: 20,
                    }, {
                        xtype: 'spacer',
                        height: '7px',
                        style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

                    }, {
                        xtype: 'spacer',
                        height: '10px',
                        style: 'background: transparent;'
                    }],
                }],
            }]
        }],
        listeners: {
            painted: function () {
                this.setBrowse();
            }
        }
    },

    setBrowse: function () {
        Ext.getCmp('xMyBrowse').removeAll(true, true);
        var counter = 0;

        var BrowseBrands = smiley360.CategoryResults;
        for (var key in BrowseBrands) {
            var oneBrowseIt = BrowseBrands[key];

            if (oneBrowseIt.sc_brand_name && (counter == 0)) {
                Ext.getCmp('xBrowseInstruments').createRow(oneBrowseIt);
                counter += 1;
            }
            else if (oneBrowseIt.sc_brand_name && (counter < 2)) {
                counter += 1;
                Ext.getCmp('xBrowseInstruments').existingRow(oneBrowseIt);
            }
            else if (oneBrowseIt.sc_brand_name && (counter == 2)) {
                counter = 0;
                Ext.getCmp('xBrowseInstruments').existingRow(oneBrowseIt);
            }

        };
        console.log('Browse brands');
    },
    existingRow: function (oneBrowseIt) {
        console.log('added existing item');
        //console.log(Ext.getCmp('xBrowseInstruments').setBrowseItem(oneBrowseIt).valueOf());
        RowBrowseItem.add(Ext.getCmp('xBrowseInstruments').setBrowseItem(oneBrowseIt));
        //Ext.getCmp('xMyBrowse').add(RowBrowseItem);
    },
    createRow: function (oneBrowseIt) {
        console.log('added row');
        RowBrowseItem = new Ext.Container({
            layout: 'hbox',
            width: '100%',
            margin: '10px 0px',
        });
        //console.log(Ext.getCmp('xBrowseInstruments').setBrowseItem(oneBrowseIt).valueOf());
        RowBrowseItem.add(Ext.getCmp('xBrowseInstruments').setBrowseItem(oneBrowseIt));
        Ext.getCmp('xMyBrowse').add(RowBrowseItem);
    },
    setBrowseItem: function (oneBrowseIt) {

        var BrowseItem = new Ext.Container({
            //id: id + 'container',
            layout: 'vbox',
            cls: 'has-shadow',
            width: 100,
            style: 'background: #f7f5f6; border-radius: 5px;margin-right: 15px;',
        });
        var ContItem = BrowseItem.add(new Ext.Container(
		{
		    height: 100,
		    width: 100,
		    style: 'border-radius: 5px;',
		}));
        var Item = ContItem.add(new Ext.Img(
		{
		    //src: 'resources/images/secret-logo.png',
			style: 'border-radius: 5px; background-color: white;',
		    src: smiley360.configuration.getResourceDomain() + '/' + oneBrowseIt.smileyConnect_summaryImage_URL,
		    padding: 50,
		    listeners: {
		        tap: function () {
		            this.up('#xBrowseInstruments').fireEvent('onBrandTapCommand', this, smiley360.memberData.UserId, oneBrowseIt.sc_brandID, 0, 10);
		        }
		    }
		}));

        var NextItem = BrowseItem.add(new Ext.Label(
		{
		    //html: 'McDonald\'s',
		    html: oneBrowseIt.sc_brand_name,
		    style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',

		}));

        if (NextItem.getHtml().toString().length > 12) {
            NextItem.setHtml(NextItem.getHtml().toString().substr(0, 9) + '...');
        };
        return BrowseItem;
    },
});
