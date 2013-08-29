var counter = 0;

Ext.define('smiley360.view.Home', {
	extend: 'Ext.Panel',
	alias: 'widget.homeview',
	requires: [
		'Ext.util.DelayedTask',
        'Ext.Rating',
		'Ext.carousel.Carousel',
	],
	config: {
		id: 'xHomeView',
		title: 'HOME',
		items: [{
			xtype: 'container',
			id: 'home-left',
			layout: 'vbox',
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
				laytout: { type: 'vbox' },
				items: [{
					xtype: 'container',
					cls: 'has-shadow',
					layout: { type: 'hbox' },
					items: [{
						xtype: 'label',
						html: 'WHAT\'S HAPPENING?',
						cls: 'heading-text active-sign',
						style: 'padding-left: 15px;',
						flex: 2
					}, {
						xtype: 'label',
						id: 'xUserLevelLabel',
						html: 'LEVEL',
						cls: 'heading-text headings-home',
					}, {
						xtype: 'rating',
						id: 'xUserLevelRating',
						disabled: true,
						itemsCount: 5,
						baseCls: 'x-level-field',
						itemCls: 'x-level-star',
						itemHoverCls: 'x-level-star-hover',
					}],
				}, {
					xtype: 'container',
					id: 'xWhatsHappeningList',
					laytout: { type: 'vbox' },
				}, {
					xtype: 'spacer',
					height: '10px',
					style: 'background-color: #f4f3f1; margin: 0px 2px;'
				}, {
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #efecea;'
				}, {
					xtype: 'label',
					html: '<p>SPECIAL OFFERS</p>',
					cls: 'heading-text has-shadow',
					style: 'padding-left: 15px;'
				}, {
					xtype: 'container',
					height: 140,
					style: 'background-color: #efecea',
					items: [{
						xtype: 'carousel',
						id: 'xSpecialOffersList',
						cls: 'browse-pict',
						direction: 'horizontal',
						style: 'background-color: #efecea',
						dragable: false,
						indicator: false,
						defaults: {
							styleHtmlContent: true
						},
						width: '100%',
						height: 130,
						listeners: {
							painted:
                                function (carousel) {
                                	me = Ext.getCmp('xSpecialOffersList');

                                	carousel.pageTurner = new Ext.util.DelayedTask(
                                        function () {
                                        	//alert('fr' + Ext.getCmp('xSpecialOffersList').getActiveIndex());
                                        	if (Ext.getCmp('xSpecialOffersList').getActiveIndex() == Ext.getCmp('xSpecialOffersList').items.length - 1) {
                                        		//alert('next page');
                                        		if (Ext.getCmp('SpCont0')) {
                                        			//console.log(Ext.getCmp('SpCont0').valueOf());
                                        			//Ext.getCmp('xFeaturedList').setActiveItem(Ext.getCmp('SpCont0'));
                                        			//alert(Ext.getCmp('xSpecialOffersList').getActiveIndex());
                                        		}
                                        	}
                                        	else {
                                        		Ext.getCmp('xSpecialOffersList').next();
                                        	}
                                        	//console.log(me.pageTurner.valueOf());
                                        	//me.pageTurner.delay(3000); //comment this to avoid js-bug
                                        }, carousel);

                                	carousel.pageTurner.delay(3000);
                                },
							activeitemchange: function () {

							}
						},
					}, {
						xtype: 'button',
						cls: 'specialoffers-left-btn',
					}, {
						xtype: 'button',
						cls: 'specialoffers-right-btn',
					}],
				}, {
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

				}, {
					xtype: 'spacer',
					height: '10px',
					style: 'background: transparent;'
				}]
			}],
		}],

		listeners: {
			show: function () {
				console.log('Home view showed!');
			},

			painted: function () {
				console.log('Home view painted!');

				this.setUserLevel();
				this.setWhatsHappening();
				this.setSpecialOffers();
				this.setUser();
			}
		},
	},

	setUser: function () {
		Ext.getCmp('xProfileImage').setSrc(smiley360.userProfileImage);
		Ext.getCmp('xFirstLastName').setHtml(smiley360.memberData.Profile.fName + ' ' + smiley360.memberData.Profile.lName);
		var tmpStateId = '';
		for (var item in smiley360.ProfileDropdowns.stateID) {
			if (smiley360.ProfileDropdowns.stateID[item] == smiley360.memberData.Profile.stateID)
				tmpStateId = item;
		};
		var str_tmp = '';
		if (smiley360.memberData.Profile.city)
			str_tmp += smiley360.memberData.Profile.city;
		if ((tmpStateId != '') && (smiley360.memberData.Profile.city))
			str_tmp += ', ';
		if (tmpStateId != '')
			str_tmp += tmpStateId;

		Ext.getCmp('xCityState').setHtml(str_tmp);
	},

	setUserLevel: function () {
		var userLevel = smiley360.memberData.UserLevel
            ? smiley360.memberData.UserLevel : 0;

		this.down('#xUserLevelLabel').setHtml('LEVEL ' + userLevel);

		var xUserLevelRating = this.down('#xUserLevelRating');

		xUserLevelRating.applyValue(-1);
		xUserLevelRating.setValue(userLevel - 1);
	},

	setWhatsHappening: function () {
		var xWhatsHappeningList = this.down('#xWhatsHappeningList');

		xWhatsHappeningList.removeAll(true, true);

		for (var key in smiley360.memberData.WhatsHappening) {
			var oneItem = smiley360.memberData.WhatsHappening[key];
			var oneElement = new Ext.Container({ layout: 'hbox', cls: 'whatshappening-image' });

			oneElement.add(new Ext.Img(
            {
            	flex: 2,
            	src: oneItem.iconURL,
            	height: 20,
            	width: 20,
            	margin: '20px 0px',
            }));

			oneElement.add(new Ext.Label(
            {
            	flex: 8,
            	html: oneItem.text,
            	cls: 'whatshappening-label'
            }));

			xWhatsHappeningList.add(oneElement);
		}
	},

	setSpecialBrand: function () {

	},

	setSpecialOffers: function () {
		counter = 0;
		var xSpecialOffersList = this.down('#xSpecialOffersList');
		//xSpecialOffersList.removeAll(true, true);

		for (var key in smiley360.memberData.SpecialOffers) {
			var oneItem = smiley360.memberData.SpecialOffers[key];
			var oneItemContainer = new Ext.Container({
				layout: 'hbox',
				cls: 'cont-pad',
				id: 'SpCont' + oneItem.brandID,
				myLink: oneItem.link,
				listeners: {
					element: 'element',
					tap: function () {						
						if (this.config.myLink != "") {
							//try {
							Ext.device.Device.openURL(this.config.myLink);
							//}
							//catch (err) {
							//	window.open(this.Mylink, '_blank');
							//}
						}//Ext.device.Device.openURL(oneItem.link);//window.open(oneItem.link)
						else {
							Ext.getCmp('xConnectView').fireEvent('onBrandTapCommand', this, smiley360.memberData.UserId, this.getId().substr(6), 0, 100);
						}
					}
				}
			});
			console.log(oneItemContainer.valueOf());
			var incLabel = oneItemContainer.add(new Ext.Label({
				width: '55%',
				style: 'font-size: 1.1em; font-family: \'din medium\';padding-right: 10px;',
				html: oneItem.desc, //'Description goes here lorem ipsum.',
				//Mylink: oneItem.link,
				listeners: {
					//element: 'element',
					//tap: function () {
					//	if (this.Mylink != '') alert(this.Mylink);//
					//	else { this.up('#xHomeView').fireEvent('onBrandTapCommand', this, smiley360.memberData.UserId, this.getId().substr(5), 0, 100); };
					//}
				}
			}));
			var incImg = oneItemContainer.add(new Ext.Img({
				src: smiley360.configuration.getResourceDomain() + '/' + oneItem.brandImage,//'resources/images/offers_logo3.png',
				width: 100,
				height: 100,
				cls: 'has-shadow',
				style: 'background-color: white; border-radius: 5px; border-style: solid; border-width: 1px; border-color: white;',
			}));
			counter += 1;
			xSpecialOffersList.add(oneItemContainer);
		};

	},
});