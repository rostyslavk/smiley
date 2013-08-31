var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.Brand', {
	extend: 'Ext.Panel',
	alias: 'widget.brandview',
	requires: [
        'Ext.TitleBar',
        'Ext.Rating'
	],
	config: {
		id: 'xBrandView',
		title: 'Brand',
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
                    	style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                    	flex: 1,
                    	items: [{
                    		xtype: 'container',
                    		layout: 'vbox',
                    		items: [
                                {
                                	xtype: 'container',
                                	laytout: { type: 'vbox' },
                                	width: '100%',
                                	cls: 'has-shadow',
                                	items: [

                                        {
                                        	xtype: 'container',
                                        	layout: { type: 'hbox' },
                                        	width: '100%',
                                        	style: 'background-color: #efecea;',
                                        	items: [
                                                {
                                                	xtype: 'container',
                                                	style: 'background-color: #efecea; padding-top: 15px; padding-right: 10px;',
                                                	layout: {
                                                		type: 'vbox',
                                                	},
                                                	width: '45%',
                                                	items: [
                                                        {
                                                        	xtype: 'label',
                                                        	width: 200,
                                                        	id: 'xBrandTitle',
                                                        	html: 'FENDER',
                                                        	style: 'text-align:left;font-size:1.4em; padding: 10px 15px 10px 10px; background-color: #efecea; color:#413f40; font-family: \'franklin\';',

                                                        },
                                                        {
                                                        	xtype: 'label',
                                                        	width: 200,
                                                        	id: 'xBrandDescription',
                                                        	html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                                                        	style: 'font-size:1em; margin-top: -10px; padding: 0px 0px 10px 10px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'franklin\';',

                                                        },
														{
															xtype: 'container',
															layout: 'hbox',
															hidden: true,
															id: 'Top10Container',
															style: 'padding-left: 15px;',
															items: [
															//	{
															//	xtype: 'image',
															//	width: 50,
															//	height: 50,
															//	style: 'border-radius:0px; margin-left:-4px;',
															//	src: 'resources/images/brands_1.png',
															//	listeners: {
															//		tap: function () {
															//			Ext.widget('brandimageview').show();
															//		}
															//	},
															//},//1

															],
														}
                                                	],


                                                },
                                                {
                                                	xtype: 'container',
                                                	layout: { type: 'vbox', },
                                                	style: 'padding: 20px 0px 20px 30px;',
													width:'50%',
                                                	items: [
                                                            {
                                                            	xtype: 'container',
                                                            	layout: { type: 'vbox', align: 'middle' },
                                                            	style: 'padding: 20px 0px 0px 30px; background-color: white; border-style:inset; border-width: 1px; border-radius: 5px;',
                                                            	cls: 'has-shadow browse-pict',
                                                            	width: 120,
                                                            	height: 120,
                                                            	items: [
																		{
																			xtype: 'image',
																			padding: 50,
																			margin: '0px 0px',
																			id: 'xBrandImage',
																			src: 'resources/images/fender.png',
																		}, ],
                                                            }, {
                                                            	xtype: 'rating',
                                                            	id: 'xBrandRating',
                                                            	labelWidth: 'auto',
                                                            	itemsCount: 5,
                                                            	readOnly: true,
                                                            	style: 'padding: 10px 0px 10px 10px;',
                                                            	itemCls: 'x-rating-star',
                                                            	itemHoverCls: 'x-rating-star-hover',
                                                            	disabled: true
                                                            },
															{
																xtype: 'button',
																cls: 'has-shadow follow-btn',
																id: 'xBrandIsFollow',
																style: 'font-family: franklin; font-size: 0.8em; margin: 20px 0px 5px 0px;',
																width: 135,
																height: 30,
																text: 'FOLLOW',
																listeners: {
																	tap: function () {
																		if (this.getCls() == 'has-shadow follow-btn') {
																			Ext.getCmp('xBrandView').fireEvent('goFollow', this, smiley360.memberData.UserId, smiley360.brandData.BrandId);
																			//this.setText('FOLLOWING');
																		}
																		else {

																			Ext.getCmp('xBrandView').fireEvent('goUnFollow', this, smiley360.memberData.UserId, smiley360.brandData.BrandId);
																			//this.setText('FOLLOW');
																		}
																	}
																}
															},
															{
																xtype: 'button',
																cls: 'has-shadow add-review-btn',
																style: 'font-family: franklin; font-size: 0.8em; margin: 5px 0px 5px 0px;',
																width: 135,
																height: 30,
																text: 'ADD REVIEW',
																listeners: {
																	tap: function () {
																		Ext.widget('reviewforfenderview').show();
																		Ext.getCmp('xDetailsView').fireEvent('onShareConnectTapCommand', 'Brand', smiley360.memberData.UserId, smiley360.brandData.BrandDetails.smileyConnect_title, smiley360.brandData.BrandId);
																	}
																}
															},

                                                	],
                                                },
                                        	]
                                        },
                                        {
                                        	xtype: 'spacer',
                                        	height: '14px',
                                        	style: 'background-color: #efecea; margin: 0px 2px;',
                                        },
                                	],
                                },
                            ///end first

                            {
                            	xtype: 'container',
                            	laytout: { type: 'vbox' },
                            	cls: 'has-shadow',
                            	items: [
									{

										xtype: 'spacer',
										height: '7px',
										style: 'background-color: #efecea;'
									}, {
										xtype: 'container',
										cls: 'has-shadow',
										layout: { type: 'hbox' },
										items: [
											{
												xtype: 'label',
												html: 'REVIEWS',
												cls: 'heading-text active-sign',
												style: 'padding-left: 15px;',
												flex: 1
											},
										]
									},
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xAllCommentsContainer'
									},
									{
										xtype: 'spacer',
										height: '7px',
										style: 'background-color: #efecea;',
										cls: 'has-shadow',
									},
                            	]
                            },//end second
                              {
                              	xtype: 'spacer',
                              	height: '7px',
                              	style: 'background-color: #f4f3f1; margin: 0px 2px;'

                              },
                            {
                            	xtype: 'container',
                            	laytout: { type: 'vbox' },
                            	cls: 'has-shadow',
                            	items: [
                                     {
                                     	xtype: 'spacer',
                                     	height: '7px',
                                     	style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

                                     },
									{
										xtype: 'spacer',
										height: '10px',
										style: 'background: transparent;'
									},
                            	],
                            },//end last
                    		],
                    	},//end vbox container


                    	]
                    }//ens strange container
		],
		listeners: {
			show: function () {
				console.log('Brand view showed!');
				this.setBrandDetails();
				this.setBrandComments();
			},
			initialize: function () {

			},
		},
	},
	setBrandDetails: function () {
		var BrDetails = smiley360.brandData.BrandDetails;

		if (BrDetails.smileyConnect_title)
			Ext.getCmp('xBrandTitle').setHtml(BrDetails.smileyConnect_title);
		if (BrDetails.smileyConnect_description)
			Ext.getCmp('xBrandDescription').setHtml(BrDetails.smileyConnect_description);
		if (BrDetails.smileyConnect_detailsImage_URL)
			var str = smiley360.configuration.getResourceDomain() + '/' + BrDetails.smileyConnect_detailsImage_URL;

		Ext.getCmp('xBrandImage').setSrc(str);

		if (BrDetails.smileyConnect_rating) {
			Ext.getCmp('xBrandRating').setValue(BrDetails.smileyConnect_rating - 1);
		}

		if (BrDetails.smileyConnect_isFollowed) {
			Ext.getCmp('xBrandIsFollow').setCls('has-shadow after-follow-btn');
			Ext.getCmp('xBrandIsFollow').setText('FOLLOWING');
		}
		else {
			Ext.getCmp('xBrandIsFollow').setCls('has-shadow follow-btn');
			Ext.getCmp('xBrandIsFollow').setText('FOLLOW');
		};
		Ext.getCmp('xBrandView').setTop10();
	},

	setTop10: function () {
		var brandTopImages = smiley360.brandData.BrandDetails.smileyConnect_topTenCommentImages;
		//xt.getCmp('xBrandImageCarousel').removeAll(true, true);
		//another removal
		//console.log(brandTopImages.valueOf());
		for (var item in brandTopImages) {
			//alert('add thumb' + brandTopImages[item].sc_commentID);
			Ext.getCmp('Top10Container').add(new Ext.Img(
				{
					width: 50,
					height: 50,
					id: 'Top10_' + brandTopImages[item].sc_commentID,
					style: 'border-radius:0px; margin-left:-4px;',
					src: smiley360.configuration.getResourceDomain() + '/' + brandTopImages[item].thumbnailImage_URL,
					listeners: {
						tap: function () {
							//Ext.getCmp('xBrandView').setItem(brandTopImages[item].sc_commentID);
							smiley360.slideShowImages = brandTopImages[item].sc_commentID;
							Ext.widget('brandimageview').show();
							//Ext.getCmp('xBrandImageCarousel').setActiveItem(Ext.getCmp('xBrandImage_Pict' + brandTopImages[item].sc_commentID));
						},
					},
				}));
		};
	},

	setBrandComments: function () {
		Ext.getCmp('xAllCommentsContainer').removeAll(true, true);
		var BrComments = smiley360.brandData.BrandComments;
		for (var key in BrComments) {
			var oneItem = BrComments[key];
			this.setCommentItem(oneItem);
		};


	},
	setCommentItem: function (oneItem) {

		var commentsArrayItem = new Ext.Container({
			//id: id + 'container',
			layout: { type: 'hbox' },
			cls: 'myContItem',
			style: 'padding: 10px 15px /*280px 15px*/; background-color: #efecea;',
			flex: 1,
		});
		var SpacerItem = Ext.getCmp('xAllCommentsContainer').add(new Ext.Spacer(
		{
			height: '2px',
			style: 'background-color: #efecea; border-bottom: 1px dashed #D7CFCD;'
		}));

		//left
		var LeftSubItem = commentsArrayItem.add(new Ext.Container(
		{
			style: 'background-color: #efecea; padding-top: 15px;',
			layout: {
				type: 'vbox',
				align: 'middle',
			},
		}));
		var ImageSubItem = LeftSubItem.add(new Ext.Img(
		{
			style: 'padding: 20px 0px 0px 0px;background-color: #efecea; border-radius: 5px; border-style: solid; border-width:2px; border-color: white;',
			cls: 'has-shadow',
			width: 100,
			height: 100,
			src: smiley360.configuration.getProfilePic(oneItem.memberID, oneItem.member_image_file_name),
			//src: 'resources/images/lays.png',
		}));
		//middle
		var MiddleSubItem = commentsArrayItem.add(new Ext.Container(
		{
			layout: { type: 'vbox' },
			flex: 4,
			style: 'padding-left: 10px;',
		}));
		//start include
		var IncludeMiddleSubItem = MiddleSubItem.add(new Ext.Container(
		{
			xtype: 'container',
			layout: { type: 'hbox' },
		}));
		var LabelItem = IncludeMiddleSubItem.add(new Ext.Label(
		{
			html: oneItem.member_user_name,
			//html: 'JOANNA SIMPSON',
			style: 'font-size:1.1em; padding: 10px 15px 10px 0px; background-color: #efecea; font-family: \'franklin\';',
		}));
		LabelItem = IncludeMiddleSubItem.add(new Ext.Label(
		{
			html: oneItem.sc_comment_date_created,
			//html: '03/25/2013',
			style: 'color: #7c7a7b; font-size:0.8em; padding: 10px 15px 10px 0px; background-color: #efecea; font-family: \'franklin\';',

		}));
		//end include
		LabelItem = MiddleSubItem.add(new Ext.Label(
		{
			html: oneItem.sc_comment_text,
			//html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel malesuada odio. Phasellus aliquam dignissim scelerisque. Sed ullamcorper libero nec placerat posuere.',
			style: 'line-height: 110%; color: #7c7a7b; font-size:1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'franklin\';',

		}));
		if (oneItem.commenter_isonMission == 1)
			LabelItem = MiddleSubItem.add(new Ext.Label(
			{
				cls: 'rew_comment',
				style: 'font-size:0.8em; margin-top: 0px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea;font-family: \'franklin\';',
				html: 'I\'m on the mission!',
			}));
		//right
		var RightSubItem = commentsArrayItem.add(new Ext.Container(
		{
			style: 'background-color: #efecea; padding-top: 15px;',
			layout: {
				type: 'vbox',
				align: 'middle',
			},
		}));
		if (oneItem.has_image == 1)
			ImageSubItem = RightSubItem.add(new Ext.Img(
			{
				style: 'padding: 20px 0px 0px 0px;background-color: #efecea; border-radius: 5px; border-style: solid; border-width:2px; border-color: white;',
				cls: 'has-shadow',
				width: 70,
				height: 70,
				id: 'comment_img_' + oneItem.sc_commentID,
				src: smiley360.configuration.getResourceDomain() + '/' + oneItem.thumbnailImage_URL,//'resources/images/brands_1.png',
				listeners: {
					tap: function () {
						Ext.widget('brandimageview').show();
					}
				},
			}));
		Ext.getCmp('xAllCommentsContainer').add(commentsArrayItem);
		//////////////////////////////////


	},
	onBackButtonTap: function () {
		console.log('back button tapped');
		this.fireEvent('backButtonCommandOffers', this);
	},
	onGoToProfileTap: function () {
		console.log('GoToProfile button tapped');
		this.fireEvent('GoToProfileCommand', this);
	},
	oneditLabel: function () {
		console.log("oneditLabel");
		this.fireEvent('oneditLabelCommand', this);
	},
});
