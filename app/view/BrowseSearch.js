var hide_panel, first_time, dock_panel, new_mass = [];
Ext.define('smiley360.view.BrowseSearch', {
	extend: 'Ext.Panel',
	alias: 'widget.browsesearchview',
	requires: [
        'Ext.TitleBar',
        'Ext.Video',
		'Ext.List',
		'Ext.dataview.List',
		'Ext.ux.ShareButton',
	],
	config: {
		id: 'xBrowseSearch',
		title: 'CONNECT/search',
		cls: 'browse-pict',
		items: [
                    {
                    	xtype: 'spacer',
                    	height: '14px',
                    	style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 5px 5px 0px 0px;'
                    },
							{
								xtype: 'spacer',
								height: '7px',
								style: 'background-color: #efecea;'
							},

                    {
                    	xtype: 'container',
                    	layout: 'hbox',
                    	id: 'browseinst-cont',
                    	style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                    	items: [{
                    		xtype: 'container',
                    		layout: 'vbox',
                    		flex: 1,

                    		listeners:
                                {
                                	painted: function () {
                                	},
                                },
                    		items: [
                                {
                                	xtype: 'container',
                                	id: 'addtest',
                                	style: 'background: #e2ddda;',
                                	laytout: { type: 'vbox' },
                                	cls: 'has-shadow',
                                	items: [
                                        {
                                        	xtype: 'container',
                                        	style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                                        	layout: { type: 'hbox' },
                                        	items: [
                                                {
                                                	xtype: 'label',
                                                	id: 'xBrowseSearchstring',
                                                	html: 'searchstring',
                                                	cls: 'heading-text active-sign',
                                                	style: 'padding-left: 15px;',
                                                	flex: 1
                                                },
                                        	],
                                        	listeners: {
                                        		painted: function () { Ext.getCmp('xBrowseSearchstring').setHtml(smiley360.SearchStr); }
                                        	}
                                        },
										{
											xtype: 'container',
											//html: '<div id="xSearchResults" align="center"></div>',
										},
                                        {
                                        	xtype: 'spacer',
                                        	height: '14px',
                                        	style: 'background-color: #efecea; margin: 0px -2px;',
                                        }, ],
                                }, ],
                    	}, ]
                    }],
		listeners: {
			painted: function () {

				Ext.define('SearchRes', {
					extend: 'Ext.data.Model',
					config: {
						fields: ['title', 'img_src', 'brand_id', 'title2', 'img_src2', 'brand_id2', 'title3', 'img_src3', 'brand_id3', 'title4', 'img_src4', 'brand_id4', 'title5', 'img_src5', 'brand_id5', 'title6', 'img_src6', 'brand_id6'],

					}
				});

				//title = itemInside.sc_brandname, img_src....

				//function(title,img_src, brand_id)
				//{ var tempstore = Ext.getStore(store);

				//tempstore.removeAll();
				//tempstore.add({ title:title ,img_src: img_src, brand_id: brand_id });
				//tempstore.sync(); }

				///for dynamic load
				//if (store != null) {
				//	store.each(function (record) {
				//		if (record.get('field')) {
				//			template += 
				//				' {field} <br/>';
				//		}
				//	}
				//create an array with data for list
				//for (var i = 0; i < 36; i++) {
				var i = -1;
				var store = Ext.create('Ext.data.Store', {
					model: 'SearchRes',
					pageSize: 1,
					autoLoad: true,
					storeId: 'MyStore',
					listeners: {
						load: function () {
							//alert('trynewload');
							//i++;
							//for (var j = 0; j < 4; j++) {
							//var itemInside = smiley360.SearchResults[i + j]
							//	if (smiley360.SearchResults[i + 1] && smiley360.SearchResults[i + 1]&&smiley360.SearchResults[i + 1]&&)
							Ext.getCmp('xBrowseSearch').AddFunction(smiley360.SearchResults[i + 1].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 1].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 1].sc_brandID,
								smiley360.SearchResults[i + 2].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 2].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 2].sc_brandID,
								smiley360.SearchResults[i + 3].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 3].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 3].sc_brandID,
								smiley360.SearchResults[i + 4].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 4].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 4].sc_brandID,
								smiley360.SearchResults[i + 5].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 5].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 5].sc_brandID,
								smiley360.SearchResults[i + 6].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 6].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 6].sc_brandID);

							//i += j;
							i += 6;
						},
						refresh:
							function () {
								//alert('reload');
								//i++;
								//for (var j = 0; j < 4; j++) {
								//	var itemInside = smiley360.SearchResults[i + j]
								//	if (itemInside)
								//	Ext.getCmp('xBrowseSearch').AddFunction(itemInside.sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + itemInside.smileyConnect_summaryImage_URL, itemInside.sc_brandID);
								//	i += j;
								//}
								Ext.getCmp('xBrowseSearch').AddFunction(smiley360.SearchResults[i + 1].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 1].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 1].sc_brandID,
										smiley360.SearchResults[i + 2].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 2].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 2].sc_brandID,
										smiley360.SearchResults[i + 3].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 3].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 3].sc_brandID,
										smiley360.SearchResults[i + 4].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 4].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 4].sc_brandID,
										smiley360.SearchResults[i + 5].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 5].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 5].sc_brandID,
										smiley360.SearchResults[i + 6].sc_brand_name.toString().substr(0, 12), smiley360.configuration.getResourceDomain() + '/' + smiley360.SearchResults[i + 6].smileyConnect_summaryImage_URL, smiley360.SearchResults[i + 6].sc_brandID);
								//i += j;
								i += 6;
								//this.load();
							}
						//store.sync(); }
						/*take another 36*/
						//console.log(this.valueOf()); }
					},
					data: [
	//			{ title: 'Maintz', img_src: 'resources/images/pin_share.png', brand_id: 1 },
	//	{ title: 'Dougan', img_src: 'resources/images/pin_share.png', brand_id: 2 },
	//{ title: 'Spencer', img_src: 'resources/images/pin_share.png', brand_id: 3 },
					],
					clearOnPageLoad: true
				});

				var template = '<table><tr><td valign="top"><img src="{title}"' +
				' width=80px height=80px />' +
				'&nbsp;&nbsp;</td><td><span><b>{img_src}</b></span> <br/>';




				Ext.getCmp('addtest').add(Ext.create(
						'Ext.List', {
							cls: 'searchlist browse-pict',
							style: 'background: #e2ddda;',
							inline: { wrap: false },
							width: 400,
							height: 400,
							//margin: '-2px 0px',
							//itemTpl: '<div id="xSearchResults" style="height: 60px;" ><img src="{title}"' +
							//' width=20px height=22px /></div>',
							itemTpl: '<div id="xSearchResults" style="margin: 10px 20px; float: left; background: white; border-radius: 5px;" ><img style="border-radius: 5px;"src="{img_src}"' +
							' width=80 height=80 /><p style="text-align: center; margin-top:-10px; font-size: 0.8em; color: rgb(65, 63, 64); font-family: din medium;" >{title}</p></div>' +
							 '<div id="xSearchResults" style="margin: 10px 20px; float: left; background: white; border-radius: 5px;" ><img style="border-radius: 5px;"src="{img_src2}"' +
							' width=80 height=80 /><p style="text-align: center; margin-top:-10px; font-size: 0.8em; color: rgb(65, 63, 64); font-family: din medium;" >{title2}</p></div>' +
							 '<div id="xSearchResults" style="margin: 10px 20px; float: left; background: white; border-radius: 5px;" ><img style="border-radius: 5px;"src="{img_src3}"' +
							' width=80 height=80 /><p style="text-align: center; margin-top:-10px; font-size: 0.8em; color: rgb(65, 63, 64); font-family: din medium;" >{title3}</p></div>' +
							 '<div id="xSearchResults" style="margin: 10px 20px; float: left; background: white; border-radius: 5px;" ><img style="border-radius: 5px;"src="{img_src4}"' +
							' width=80 height=80 /><p style="text-align: center; margin-top:-10px; font-size: 0.8em; color: rgb(65, 63, 64); font-family: din medium;" >{title4}</p></div>' +
							'<div id="xSearchResults" style="margin: 10px 20px; float: left; background: white; border-radius: 5px;" ><img style="border-radius: 5px;"src="{img_src5}"' +
							' width=80 height=80 /><p style="text-align: center; margin-top:-10px; font-size: 0.8em; color: rgb(65, 63, 64); font-family: din medium;" >{title5}</p></div>' +
							'<div id="xSearchResults" style="margin: 10px 20px; float: left; background: white; border-radius: 5px;" ><img style="border-radius: 5px;"src="{img_src6}"' +
							' width=80 height=80 /><p style="text-align: center; margin-top:-10px; font-size: 0.8em; color: rgb(65, 63, 64); font-family: din medium;" >{title6}</p></div>',
							//itemTpl: '<div ><div id="left" style="width: 25%; float:left; font-size: 20px; "><p>{title}</p><p>{title}</p></div><div id="center" style="width: 25%; float:left; font-size: 20px; ">{title}</div><div id="semi-center" style="width: 25%; float:left; font-size: 20px; ">{img_src}</div><div id="right" style="width: 25%; float:left; font-size: 20px; ">{img_src}</div></div>',
							//itemTpl: '<div>{title}<br />verified star<br />" "</div>"
							//itemTpl: myTpl,

							store: store,
							plugins: [
										{
											xclass: 'Ext.plugin.ListPaging',
											autoPaging: true,
										}
							],
							listeners: {
								initialize: function () { console.log(this.valueOf()); },
								itemtap: function () { store.setData(newdata); alert('resetdata'); },
								//updatedata: function () { store.load() }
							},
						}));
				var xSearchResults = Ext.get('xSearchResults');
				//var smilesArray = smiley360.missionData.MissionDetails.MissionPoints.sharingToolScore;
				//var pointsArray = smiley360.missionData.MissionDetails.MissionPoints;

				// clear existed buttons
				////xSearchResults.setHtml('');

				//for (var key in smilesArray) {
				//	var oneItem = smilesArray[key];
				//	var oneButton = this.createShareButton('share-yt-btn', 'sharetofacebookview');
				//}

				//var divTag = document.createElement("div");
				//divTag.style.width = '40px';
				//divTag.style.height = '40px';
				//divTag.style.margin = '5px 20px 5px 20px';
				//divTag.style.display = 'inline-block';
				//divTag.setAttribute("align", "left");

				//oneButton.renderTo(divTag);

				//xSearchResults.appendChild(divTag);
				//alert('child' + divTag);

			}
		}
	},
	AddFunction: function (title_, img_src_, brand_id_, title_2, img_src_2, brand_id_2, title_3, img_src_3, brand_id_3, title_4, img_src_4, brand_id_4, title_5, img_src_5, brand_id_5, title_6, img_src_6, brand_id_6) {
		Ext.getStore('MyStore').add({
			title: title_, img_src: img_src_, brand_id: brand_id_,
			title2: title_2, img_src2: img_src_2, brand_id2: brand_id_2,
			title3: title_3, img_src3: img_src_3, brand_id3: brand_id_3,
			title4: title_4, img_src4: img_src_4, brand_id4: brand_id_4,
			title5: title_5, img_src5: img_src_5, brand_id5: brand_id_5,
			title6: title_6, img_src6: img_src_6, brand_id6: brand_id_6
		});
		//alert('store+1');
	},
	createShareButton: function (buttonCls, shareViewAlias) {
		return new Ext.Button(
			{
				icon: 'resources/images/pin_share.png',
				//cls: buttonCls,
				height: 70,
				width: 70,
				text: 'New',
				cls: 'customtxt',
				listeners: {
					tap: function () {
						Ext.widget(shareViewAlias).show();
					}
				}
			});
	}
});
