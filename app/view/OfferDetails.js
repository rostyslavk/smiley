var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.OfferDetails', {
	extend: 'Ext.Panel',
	alias: 'widget.offerdetailsview',
	requires: [
        'Ext.carousel.Carousel',
        'Ext.TitleBar',
        'Ext.Video'
	],
	config: {
		id: 'xOfferDetailsView',
		title: 'OFFERS',
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
				laytout: { type: 'vbox' },
				//cls: 'has-shadow',
				items: [
					{
						xtype: 'container',
						cls: 'has-shadow',
						layout: { type: 'hbox' },
						items: [
							{
								xtype: 'label',
								id: 'OfferDetailsTitleLabel',
								html: 'CAMPBELL\'S &reg; SLOW KETTLE &reg; SOUPS ',
								cls: 'heading-text active-sign',
								style: 'padding-left: 15px;',
								flex: 2,
								height: 'auto',
							},
							{
								xtype: 'label',
								html: '',
								cls: 'heading-text',
								style: 'padding-left: 15px; padding-right: 10px;',
								flex: 0.2,
							},
							//{
							//    xtype: 'label',
							//    html: '/92',
							//    cls: 'heading-text',
							//    style: 'padding-left: 15px;',
							//    flex: 1.2,
							//},
						]
					},
					{
						xtype: 'container',
						style: 'background-color: #efecea; ',

						items: [
							{
								xtype: 'carousel',
								direction: 'horizontal',
								style: 'background-color: #efecea;',
								dragable: false,
								indicator: false,
								defaults: {
									styleHtmlContent: true
								},
								width: '100%',
								height: 160,

								items: [
										{
											xtype: 'container',
											layout: 'vbox',
											items: [

												{
													xtype: 'image',
													id: 'OfferDetailsHero',
													//margin: '0px -20px 0px -50px',
													//style:'padding-left: 15px;',
													//src: 'resources/images/campbells.png',
													height: 160
												}
											]
										},

								]
							},
							{
								xtype: 'panel',
								hidden: true,
								html: '<div class="left-btn-mission"></div><div class="right-btn-mission"></div>'
							},
					//{
					//	xtype: 'spacer',
					//	style: 'background-color: #efecea; border-bottom: 1px dashed #d7cfcd;',
					//	height: 20,
					//},

							{
								xtype: 'container',
								//margin: '20px 25px',
								cls: 'has-shadow',
								style: 'background-color: #efecea; padding: 40px 25px 15px 25px;',
								layout: { type: 'vbox' },
								items: [
									//{
									//	xtype: 'button',
									//	//itemId: 'recievebtn',
									//	cls: 'offers-offer-btn',
									//	style: 'padding: 30px 0px 50px 0px; margin: -50px 0px; margin-top: -15px 0px;',
									//	text: 'OFFER',
									//	//icon: 'resources/images/missions-box.png',
									//	//iconAlign: 'right',
									//	//iconCls: 'icon-recieve', 
									//	listeners:
									//		{
									//			tap: function () {
									//				if (Ext.getCmp('offer_offer_panel').getHidden() == true)
									//				{ Ext.getCmp('offer_offer_panel').show(); this.setCls('after-offers-offer-btn'); }
									//				else { Ext.getCmp('offer_offer_panel').hide(); this.setCls('offers-offer-btn'); }
									//			}
									//		}

									//},
									{
										xtype: 'panel',
										layout: 'hbox',
										cls: 'offers-offer-btn',
										listeners: {
											element: 'element',
											tap: function () {
												if (Ext.getCmp('offer_offer_panel').getHidden() == true)
												{ Ext.getCmp('offer_offer_panel').show(); this.setCls('after-offers-offer-btn'); }
												else { Ext.getCmp('offer_offer_panel').hide(); this.setCls('offers-offer-btn'); }
											}
										},
										items: [{
											xtype: 'container',
											docked: 'left',
											items: [{
												xtype: 'label', style: 'padding: 15px 2px 15px 15px;',
												html: 'OFFER',
											}],
										}, {
											xtype: 'spacer',
											style: 'background: -webkit-linear-gradient(top, #9f9a98 0%, #423c39 100%); height: 50px;',
										}, {
											xtype: 'container',
											docked: 'right',
											style: 'padding-top: 5px;',
											items: [{
												xtype: 'image',
												style: 'margin: 10px;',
												src: 'resources/images/offer_offer_btn.png',
												padding: 14,
											}],
										}],
									},
												{
													xtype: 'panel',
													layout: 'vbox',
													cls: 'has-shadow',
													style: 'border-radius: 0px 0px 5px 5px; background-color: #e2ddda; margin: -20px -10px 20px -10px;',
													id: 'offer_offer_panel',
													cls: 'ddl-text-size',
													listeners: {
														initialize: function ()
														{ this.hide(); }
													},
													items:
														[
														{
															xtype: 'label',
															height: '3px',
															style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
														},
												{
													xtype: 'label',
													id: 'OfferDetailsOffer',
													style: 'font-family: franklin; font-size:1em;',
													html: 'You will recieve one Campbell\'s Go&trade; soup of your choice, fun items to use when sharing your thoughts about Campbell\'s Go&trade; soup and 10 coupons to share with your friends and family for $2 off Campbell\'s Go&trade; soup.',
													padding: '10px 20px',
												},
														],
												},

									//{
									//	xtype: 'button',
									//	//itemId: 'recievebtn',
									//	style: 'padding: 30px 0px 50px 0px; margin: 60px 0px;',
									//	cls: 'offers-mission-btn',
									//	text: 'MISSION',
									//	listeners:
									//		{
									//			tap: function () {
									//				if (Ext.getCmp('offer_mission_panel').getHidden() == true)
									//				{ Ext.getCmp('offer_mission_panel').show(); this.setCls('after-offers-mission-btn'); }
									//				else { Ext.getCmp('offer_mission_panel').hide(); this.setCls('offers-mission-btn'); }
									//			}
									//		}
									//},
									{
										xtype: 'panel',
										layout: 'hbox',
										cls: 'offers-offer-btn',
										listeners: {
											element: 'element',
											tap: function () {
												if (Ext.getCmp('offer_mission_panel').getHidden() == true)
												{ Ext.getCmp('offer_mission_panel').show(); this.setCls('after-offers-offer-btn'); }
												else { Ext.getCmp('offer_mission_panel').hide(); this.setCls('offers-offer-btn'); }
											}
										},
										items: [{
											xtype: 'container',
											docked: 'left',
											items: [
											{
												xtype: 'label', style: 'padding: 15px 2px 15px 15px;',
												html: 'MISSION',
											}, ],
										}, {
											xtype: 'spacer',
											style: 'background: -webkit-linear-gradient(top, #9f9a98 0%, #423c39 100%); height: 50px;',
										}, {
											xtype: 'container',
											docked: 'right',
											style: 'padding-top: 5px;',
											items: [{
												xtype: 'image',
												style: 'margin-right: 5px;',
												src: 'resources/images/offer-mission-btn.png',
												padding: '13px 21px',
											}],
										}],
									},
									{
										xtype: 'panel',
										layout: 'vbox',
										cls: 'has-shadow',
										style: 'background-color:#e2ddda; border-radius: 0px 0px 5px 5px; margin: -20px -10px 20px -10px;',
										id: 'offer_mission_panel',
										cls: 'ddl-text-size',
										listeners: {
											initialize: function ()
											{ this.hide(); }
										},
										items:
											[
											{
												xtype: 'label',
												height: '3px',
												style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
											},
									{
										xtype: 'label',
										id: 'OfferDetailsMission',
										style: 'font-family: franklin; font-size:1em;',
										html: 'Try Campbell\'s Go&trade; soup once and you\'ll be hooked! Once you\'ve tried it, share your experience with your social circle both on and offline using your talk bubble and disguise accessories that are in your Smiley kit. Let your inner foodie shine bright and all about Campbell\'s Go&trade; soup. ',
										padding: '10px 20px',
									},
											],
									},
											//{
											//	xtype: 'button',
											//	//itemId: 'recievebtn',
											//	style: 'padding: 30px 0px 50px 0px; margin: -45px 0px 0px 0px;',
											//	cls: 'offers-recieve-btn',
											//	text: 'WHAT YOU\'LL RECIEVE',
											//	listeners:
											//{
											//	tap: function () {
											//		if (Ext.getCmp('offer_recieve_panel').getHidden() == true)
											//		{ Ext.getCmp('offer_recieve_panel').show(); this.setCls('after-offers-recieve-btn'); }
											//		else { Ext.getCmp('offer_recieve_panel').hide(); this.setCls('offers-recieve-btn'); }
											//	}
											//}
											//},

											{
												xtype: 'panel',
												layout: 'hbox',

												cls: 'offers-offer-btn',
												listeners: {
													element: 'element',
													tap: function () {
														if (Ext.getCmp('offer_recieve_panel').getHidden() == true)
														{ Ext.getCmp('offer_recieve_panel').show(); this.setCls('after-offers-offer-btn'); }
														else { Ext.getCmp('offer_recieve_panel').hide(); this.setCls('offers-offer-btn'); }
													}
												},
												items: [{
													xtype: 'container',
													docked: 'left',
													items: [{
														xtype: 'label', style: 'padding: 15px 2px 15px 15px;',
														html: 'WHAT YOU\'LL RECIEVE',
													}],
												}, {
													xtype: 'spacer',
													style: 'background: -webkit-linear-gradient(top, #9f9a98 0%, #423c39 100%); height: 50px;',
												}, {
													xtype: 'container',
													docked: 'right',
													style: 'padding-top: 5px;',
													items: [{
														xtype: 'image',
														src: 'resources/images/missions-box.png',
														padding: '15px 25px',

													}],
												}],
											},
											{
												xtype: 'panel',
												layout: 'vbox',
												cls: 'has-shadow',
												style: 'background-color:#e2ddda; border-radius: 0px 0px 5px 5px; margin: -20px -10px 20px -10px;',
												id: 'offer_recieve_panel',
												cls: 'ddl-text-size',
												listeners: {
													initialize: function ()
													{ this.hide(); }
												},
												items:
													[
												{
													xtype: 'label',
													height: '3px',
													style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
												},
												{
													xtype: 'label',
													id: 'OfferDetailsWhatYoullRecieve',
													style: 'font-family: franklin; font-size:1em;',
													cls: 'mission-t',
													html: 'Fun items to use when sharing about your Campbell\'s GO&trade; experience',
													padding: '10px 20px',
												},

													],
											},
									  {
									  	xtype: 'label',
									  	html: 'NO THANKS, REMOVE THIS OFFER.',
									  	style: 'text-decoration:underline; background-color:#efecea; font-family: din bold; font-size:1em;',
									  	padding: '10px 0px',
									  	listeners: {
									  		element: 'element',
									  		tap: function () {
									  			Ext.widget('offerremoveview').show();
									  		},
									  	},
									  },
								],
							},
					{
						xtype: 'button',
						style: 'margin: 10px 10px 0px 10px;',
						cls: 'accept-btn',
						text: 'ACCEPT THIS OFFER',
						listeners: {
							tap: function () {
								if (smiley360.missionData.MissionDetails.MissionDetails.mission_shipment_active == '1') {
									if (smiley360.memberData.Profile.address_status == '1')
										Ext.widget('offeracceptview').show()
									else Ext.widget('offeracceptaddressview').show();
								}
								else {
									Ext.getCmp('xOfferView').fireEvent('acceptMissionCommand', this, smiley360.memberData.UserId, smiley360.missionData.MissionDetails.MissionId);

									smiley360.services.getMissionDetails(smiley360.missionData.MissionDetails.MissionId, smiley360.memberData.UserId,
									function (response) {
										if (response.success) {
											delete response.success;
											smiley360.AllMissionsList.push(response);
											console.log('Missiondetails is added...for mission' + smiley360.missionData.MissionDetails.MissionId);
											//add to list
											var additem = smiley360.missionData.MissionDetails;
											Ext.getCmp('xDetailsView').down('#xMissionsCarousel').add(
											new Ext.Container({
												layout: 'vbox',
												id: additem.MissionId,
												items: [{
													xtype: 'image',
													src: smiley360.configuration.getOfferImagesUrl(additem.MissionId, additem.MissionDetails.link),
													height: 160
												}],
											}));
											if (Ext.getCmp('xDetailsView').down('#xMissionsCarousel').down('#' + additem.MissionId)) {
												Ext.getCmp('xOfferView').fireEvent('showMissionDetailsCommand', this, smiley360.missionData.MissionDetails.MissionId, false);
											}
										}
										else {
											console.log('Missiondetails is corrupted for mission' + item.missionID);//show error on view
										}
									});

								};
							},
						}
					},
						]
					},
					{
						xtype: 'spacer',
						height: '7px',
						style: 'background-color: #efecea;',
						cls: 'has-shadow',
					},
					{
						xtype: 'spacer',
						height: '7px',
						style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'
					},
					{
						xtype: 'spacer',
						height: '10px',
						style: 'background: transparent;'
					}
				]
			},

		],
		listeners: {
			show: function () {
				Ext.getCmp('xOfferView').fireEvent('getAddressCommand', this, smiley360.memberData.UserId);
				console.log('OfferDetails view showed!');
				this.setOfferDetails();
				Ext.Viewport.element.dom.addEventListener('click', function (e) {
					if (e.target.tagName !== 'A') {
						return;
					};
					e.preventDefault();
					var href = e.target.getAttribute('href');
				}, false);
			},
		},
	},
	onGoToProfileTap: function () {
		console.log('GoToProfile button tapped');
		this.fireEvent('GoToProfileCommand', this);
	},
	oneditLabel: function () {
		console.log("oneditLabel");
		this.fireEvent('oneditLabelCommand', this);
	},
	setOfferDetails: function () {
		//alert('1');
		//alert(smiley360.missionData.MissionDetails.MissionId);
		Ext.getCmp('OfferDetailsTitleLabel').setHtml(smiley360.missionData.MissionDetails.MissionDetails.title);
		Ext.getCmp('OfferDetailsHero').setSrc(smiley360.configuration.getOfferImagesUrl(smiley360.missionData.MissionDetails.MissionId, smiley360.missionData.MissionDetails.MissionDetails.link));
		Ext.getCmp('OfferDetailsOffer').setHtml(smiley360.missionData.MissionDetails.MissionDetails.offerDetails);
		Ext.getCmp('OfferDetailsMission').setHtml(smiley360.missionData.MissionDetails.MissionDetails.missionDetails);
		Ext.getCmp('OfferDetailsWhatYoullRecieve').setHtml(smiley360.missionData.MissionDetails.MissionDetails.youllReceive);

	},
});
