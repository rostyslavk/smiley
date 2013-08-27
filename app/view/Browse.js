var hide_panel, first_time, dock_panel, id_arr_browse = [], categoryArray = [], globalCount = 0;
Ext.define('smiley360.view.Browse', {
	extend: 'Ext.Panel',
	alias: 'widget.browseview',
	requires: [
        'Ext.TitleBar',
        'Ext.Video'
	],
	config: {
		title: 'BROWSE',
		id: 'xBrowse',
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

                    	//id: 'missions-cont',
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
                                                	html: 'HOT BRANDS',
                                                	cls: 'heading-text active-sign',
                                                	style: 'padding-left: 15px;',
                                                	flex: 1
                                                },
                                        	]
                                        },
                                        {
                                        	xtype: 'carousel',
                                        	cls: 'browse-pict',
                                        	direction: 'horizontal',
                                        	style: 'background-color: #efecea;',
                                        	dragable: true,
                                        	indicator: false,
                                        	defaults: {
                                        		styleHtmlContent: true
                                        	},
                                        	width: '100%',
                                        	height: 180,
                                        	items: [{
                                        		xtype: 'container',
                                        		layout: 'hbox',
                                        		id: 'xMyHot',
                                        		style: 'background-color: #efecea;',
                                        		cls: 'has-shadow',
                                        		padding: 20,
                                        		scrollable: {
                                        			direction: 'horizontal',
                                        			directionLock: true
                                        		},
                                        		items: [
                                        		],
                                        	}, ]
                                        },
                                        {
                                        	xtype: 'spacer',
                                        	height: '14px',
                                        	style: 'background-color: #efecea; margin: 0px 2px;',
                                        },
                                	],
                                },
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
												html: 'FAVORITES',
												cls: 'heading-text active-sign',
												style: 'padding-left: 15px;',
												flex: 1
											},
										]
									},

                                    {
                                    	xtype: 'carousel',
                                    	direction: 'horizontal',
                                    	cls: 'browse-pict',
                                    	style: 'background-color: #efecea;',
                                    	dragable: false,
                                    	indicator: false,
                                    	defaults: {
                                    		styleHtmlContent: true
                                    	},
                                    	width: '100%',
                                    	height: 180,

                                    	items: [{
                                    		xtype: 'container',
                                    		layout: 'hbox',
                                    		id: 'xMyFavorited',
                                    		style: 'background-color: #efecea;',
                                    		cls: 'has-shadow',
                                    		padding: 20,
                                    		scrollable: {
                                    			direction: 'horizontal',
                                    			directionLock: true
                                    		},
                                    		items: [
                                    		],
                                    	}, ]
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
                                    	xtype: 'container',
                                    	style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                                    	layout: { type: 'hbox' },
                                    	items: [
                                            {
                                            	xtype: 'label',
                                            	html: 'CATEGORIES',
                                            	cls: 'heading-text active-sign',
                                            	style: 'padding-left: 15px;',
                                            	flex: 1
                                            },
                                    	]
                                    },
                                    //auto, baby, clothes
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb; padding: 20px 10px 20px 20px;',
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Auto',
                                            	cls: 'has-shadow browse_container',
												style: 'margin-right: 20px;',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	//style: 'background: #e2ddda; border-radius: 5px;margin-right: 20px ',
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xAutoPict',
                                                    	src: 'resources/images/auto_c.png',
                                                    	height: 35,
                                                    	width: '100%',
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xAutoLabel',
                                                     	html: 'Automotive',
                                                     	cls: 'browse_text',
                                                     	//style: 'text-align: center; font-size:1.25em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din bold\';',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Baby',
                                            	cls: 'has-shadow browse_container',
                                            	style: 'margin-right: 20px;',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xBabyPict',
                                                    	src: 'resources/images/baby_c.png',
                                                    	height: 35,
                                                    	width: '70%',
                                                    	margin: '15px 16px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xBabyLabel',
                                                     	html: 'Baby',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Clothes',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xClothesPict',
                                                    	src: 'resources/images/clothes_c.png',
                                                    	height: 35,
                                                    	width: '100%',
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xClothesLabel',
                                                     	html: 'Clothing & Accessories',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//1st row end
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xAuto_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Cars', 'Trucks', 'Motorcycles', 'Boats'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'left', 'AUTOMOTIVE', 1);
									 			this.hide();
									 		}
									 	}
									 },
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xBaby_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Baby Toys',
													'Clothing & Shoe Brands & Stores', 'Diapers & Accessories',
													'Feeding', 'General Parenting Info & Websites',
													'Safety', 'Strollers & Carriers'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'middle', 'BABY', 6);
									 			this.hide();
									 		}
									 	}
									 },
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xClothes_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Athletic', 'Clothing Retailers',
													'Department Stores', 'Fashion Designers &<br> Retailers',
													'Jewelry & Wathches', 'Maternity', 'Shoes',
													'Sunglasses, Handbags and Other<br> Accessories'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'right', 'CLOTHING & ACCESSORIES', 18);
									 			this.hide();
									 		}
									 	}
									 },
                                    //software,eco,education
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb; padding: 20px 10px 20px 20px;',
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Computer',
                                            	style: 'margin-right: 20px;',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xComputerPict',
                                                    	src: 'resources/images/computer_c.png',
                                                    	height: 35,
                                                    	align: 'center',
                                                    	margin: '10px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xComputerLabel',
                                                     	html: 'Computer & Software',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Eco_Friendly',
                                            	style: 'margin-right: 20px;',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xEco_FriendlyPict',
                                                    	src: 'resources/images/eco_friendly_c.png',
                                                    	height: 35,
                                                    	margin: '10px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xEco_FriendlyLabel',
                                                     	html: 'Eco-Friendly',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	id: 'Edu',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xEduPict',
                                                    	src: 'resources/images/edu_c.png',
                                                    	height: 35,
                                                    	width: '60%',
                                                    	margin: '10px 21px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xEduLabel',
                                                     	html: 'Education',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//2nd row end
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xComputer_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Computer Makes & Models',
													'Social Networking & Email Program',
													'General Software'];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'left', 'COMPUTER & SOFTWARE', 14);
												this.hide();
											}
										}
									},
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xEco_Friendly_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Cleaning & Household', 'Food & Beverage',
													'General Eco-Friendly', ' Wellness Products'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'middle', 'ECO-FRIENDLY', 31);
									 			this.hide();
									 		}
									 	}
									 },
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xEdu_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Colleges & Universities',
													'Educational Services &<br> Websites', 'General Education'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'right', 'EDUCATION', 27);
									 			this.hide();
									 		}
									 	}
									 },
                                    //electronics, financial,food
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb; padding: 20px 10px 20px 20px;',
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Mobile',
                                            	style: 'margin-right: 20px;',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xMobilePict',
                                                    	src: 'resources/images/mobile_c.png',
                                                    	height: 35,
                                                    	margin: '10px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xMobileLabel',
                                                     	html: 'Electronics',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Finance',
                                            	style: 'margin-right: 20px;',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xFinancePict',
                                                    	src: 'resources/images/finance_c.png',
                                                    	height: 35,
                                                    	margin: '10px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xFinanceLabel',
                                                     	html: 'Financial Services',
                                                     	style: 'margin-top: -20px; line-height: 110%;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	id: 'Food',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xFoodPict',
                                                    	src: 'resources/images/food_c.png',
                                                    	height: 35,
                                                    	margin: '10px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xFoodLabel',
														style: 'line-height: 110%;',
                                                     	html: 'Food & Drinks',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//3rd row end
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xMobile_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Cameras', ' Computers', 'Electronics Misc',
													'Music Players', 'Phones', 'Retailers, Websites & Models'];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'left', 'ELECTRONICS', 36);
												this.hide();
											}
										}
									},
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xFinance_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Banking', ' Mortgages & Loans'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'middle', 'FINANCIAL SERVICES', 128);
									 			this.hide();
									 		}
									 	}
									 },
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xFood_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Allergy-Free',
													'Beer, Wine & Liquor',
													'Beverage',
													'Candy, Dessert & Snacks',
													'Coffee, Tea & Water',
													'Condiments & Seasonings',
													'Fast Food & Chain Restaurants',
													'Gourmet',
													'Grocery',
													'General Restaurants & Bars',
													'Information, Websites & Recipes',
													'Milk, Juice & Soda'
									 			];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'right', 'FOOD & DRINKS', 43);
									 			this.hide();
									 		}
									 	}
									 },
                                    //health,hobbies,home
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb; padding: 20px 10px 20px 20px;',
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Health',
                                            	style: 'margin-right: 20px;',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xHealthPict',
                                                    	src: 'resources/images/health_c.png',
                                                    	height: 35,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xHealthLabel',
                                                     	html: 'Health & Beauty',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Hobbies',
                                            	style: 'margin-right: 20px;',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xHobbiesPict',
                                                    	src: 'resources/images/hobbies_c.png',
                                                    	height: 35,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xHobbiesLabel',
                                                     	html: 'Hobbies',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Home',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xHomePict',
                                                    	src: 'resources/images/home_c.png',
                                                    	height: 35,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xHomeLabel',
                                                     	html: 'Home & Garden',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//4th row end
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xHealth_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Cosmetics',
													'Fragrances',
													'Hair Care',
													'Information, Websites & Magazines',
													'Lotions & Moisturizers',
													'Medicines & Vitamins',
													'Nutrition',
													'Skin Care',
													'Wellness'
												];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'left', 'HEALTH & BEAUTY', 57);
												this.hide();
											}
										}
									},
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xHobbies_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Board Games, Action Figures<br> & Dolls',
													'General Games',
													'Other',
													'Scrapbooking and <br>Arts & Crafts',
													'Websites & Arcades',
													'Video & Electronic Games'
												];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'middle', 'HOBBIES', 67);
												this.hide();
											}
										}
									},
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xHome_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Appliances',
													'Cooking',
													'Home Furnishings',
													'Housekeeping',
													'Lawn & Garden',
													'Recreation',
													'Remodeling',
													'Tools & Home Improvement'
												];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'right', 'HOME & GARDEN', 74);
												this.hide();
											}
										}
									},
                                    //media,music,non-prof
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb; padding: 20px 10px 20px 20px;',
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	style: 'margin-right: 20px;',
                                            	cls: 'has-shadow browse_container',
                                            	id: 'Media',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xMediaPict',
                                                    	src: 'resources/images/media_c.png',
                                                    	height: 35,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xMediaLabel',
                                                     	html: 'Media',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Music',
                                            	style: 'margin-right: 20px;',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

													{
														id: 'xMusicPict',
														xtype: 'image',
														src: 'resources/images/music_c.png',
														height: 35,
														margin: '15px 0px',
													},
													 {
													 	id: 'xMusicLabel',
													 	xtype: 'label',
													 	html: 'Music & Arts',
													 	cls: 'browse_text',
													 },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Non-profit',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xNon-profitPict',
                                                    	src: 'resources/images/non-profit_c.png',
                                                    	height: 35,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xNon-profitLabel',
                                                     	html: 'Non-Profit',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//5th row end
                                    {
                                    	xtype: 'container',
                                    	layout: 'vbox',
                                    	id: 'xMusic_panel_browse',
                                    	width: '100%',
                                    	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
                                    	listeners: {
                                    		initialize: function () {
                                    			var arr = ['ArtSupplies', 'Artists',
													'Instruments', 'Musical Gear',
													'Performers'];
                                    			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'middle', 'MUSIC & ARTS', 90);
                                    			this.hide();
                                    		}
                                    	}
                                    },
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xMedia_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Books',
													'Movies',
													'TV',
													'In Print',
													'Internet',
													'Radio'
												];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'left', 'MEDIA', 83);
												this.hide();
											}
										}
									},
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xNon-profit_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Foundations & Charities',
													'General Non-Profit',
													'Institutes & Research'
												];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'right', 'NON-PROFIT', 96);
												this.hide();
											}
										}
									},
                                    	//people, pets, sports
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb; padding: 20px 10px 20px 20px;',
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'People',
                                            	style: 'margin-right: 20px;',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xPeoplePict',
                                                    	src: 'resources/images/people_c.png',
                                                    	height: 35,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xPeopleLabel',
                                                     	html: 'People',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Pets',
                                            	style: 'margin-right: 20px;',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xPetsPict',
                                                    	src: 'resources/images/pets_c.png',
                                                    	height: 35,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xPetsLabel',
                                                     	html: 'Pets',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Sports',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xSportsPict',
                                                    	src: 'resources/images/sports_c.png',
                                                    	height: 35,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xSportsLabel',
                                                     	html: 'Sports',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//6th row end
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xPeople_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Actors, Actresses & Filmmakers',
													'Athletes',
													'Musicians & Performers',
													'Personalities',
													'Talk Show Hosts & Comedians',
													'Writers'
												];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'left', 'PEOPLE', 100);
												this.hide();
											}
										}
									},
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xPets_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Pet Care',
													'Pet Food',
													'Pet Gear',
													'Pet Misc'
												];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'middle', 'PETS', 107);
												this.hide();
											}
										}
									},
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xSports_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Equipment',
													'Athletes',
													'Sports Services',
													'Teams & Leagues'
												];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'right', 'SPORTS', 112);
												this.hide();
											}
										}
									},
                                    //travel, work
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb; padding: 20px 10px 20px 20px;',
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Travel',
                                            	style: 'margin-right: 20px;',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xTravelPict',
                                                    	src: 'resources/images/travel_c.png',
                                                    	height: 35,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xTravelLabel',
                                                     	html: 'Travel',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Work',
                                            	cls: 'has-shadow browse_container',
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xWorkPict',
                                                    	src: 'resources/images/work_c.png',
                                                    	height: 35,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xWorkLabel',
                                                     	html: 'Work',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel

                                    	],//1st row items
                                    },//6th row end
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xTravel_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Airlines',
													'Car Rental & Trains',
													'Cruises',
													'Destinations',
													'Hotels',
													'Outdoor & Fitness'
												];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'left', 'TRAVEL', 116);
												this.hide();
											}
										}
									},
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xWork_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['General Work',
													'Work Furnishings',
													'Work Services',
													'Supplies'
												];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'middle', 'WORK', 123);
												this.hide();
											}
										}
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
									},
                            	],
                            },//end last
                    		],
                    	},//end vbox container


                    	]
                    }//ens strange container
		],
		listeners: {
			activate: function () {
				this.setHot();
			},
			painted: function () {
				this.setFavorited();

			}
		}
	},
	setFavorited: function () {
		Ext.getCmp('xMyFavorited').removeAll(true, true);
		var FavBrands = smiley360.memberData.UserBrands;
		for (var key in FavBrands) {
			var oneItem = FavBrands[key];
			if (oneItem.title)
				this.setFavoritedItem(oneItem);
		};
	},
	setFavoritedItem: function (oneItem) {
		var FavoritedItem = new Ext.Container({
			layout: 'vbox',
			cls: 'has-shadow',
			style: 'background: #f7f5f6; border-radius: 5px;margin-right: 18px;',
		});
		var ContItem = FavoritedItem.add(new Ext.Container(
		{
			height: 90,
			width: 90,
			style: 'border-radius: 5px;',
		}));
		var Item = ContItem.add(new Ext.Img(
		{
			style: 'border-radius: 5px;background-color: white;',
			src: smiley360.configuration.getResourceDomain() + '/' + oneItem.imageURL,
			padding: 45,
			listeners: {
				tap: function () {
					this.up('#xBrowse').fireEvent('onBrandTapCommand', this, smiley360.memberData.UserId, oneItem.smileyconnectID, 0, 10);
				}
			}
		}));

		var NextItem = FavoritedItem.add(new Ext.Label(
		{
			html: oneItem.title,
			style: 'text-align: center; font-size:1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',

		}));

		Ext.getCmp('xMyFavorited').add(FavoritedItem);
		if (NextItem.getHtml().toString().length > 10) {
			NextItem.setHtml(NextItem.getHtml().toString().substr(0, 7) + '...');
		};
	},
	//////////////

	setHot: function () {
		Ext.getCmp('xMyHot').removeAll(true, true);
		var HotBrands = smiley360.HotBrands;
		for (var key in HotBrands) {
			var oneItem = HotBrands[key];
			if (oneItem.title)
				this.setHotItem(oneItem);
		};
		console.log('Hot brands');
	},
	setHotItem: function (oneItem) {
		var HotItem = new Ext.Container({

			layout: 'vbox',
			cls: 'has-shadow',
			style: 'background: #f7f5f6; border-radius: 5px;margin-right: 18px;',
		});
		var ContItem = HotItem.add(new Ext.Container(
		{
			height: 90,
			width: 90,
			style: 'border-radius: 5px;',
		}));
		var Item = ContItem.add(new Ext.Img(
		{
			cls: 'browse-pict',
			style: 'border-radius: 5px; background-color: white;',
			src: smiley360.configuration.getResourceDomain() + '/' + oneItem.imageURL,
			padding: 45,
			listeners: {
				tap: function () {
					this.up('#xBrowse').fireEvent('onBrandTapCommand', this, smiley360.memberData.UserId, oneItem.smileyconnectID, 0, 10);
				}
			}
		}));

		var NextItem = HotItem.add(new Ext.Label(
		{
			html: oneItem.title,
			style: 'text-align: center; font-size:1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',

		}));

		Ext.getCmp('xMyHot').add(HotItem);
		if (NextItem.getHtml().toString().length > 10) {
			NextItem.setHtml(NextItem.getHtml().toString().substr(0, 7) + '...');
		};
	},
	doCreateItems: function (items_arr, id, pos, category, categoryCount) {
		var lbl_padding = '10px 0px 10px ';
		if (pos == 'left') { lbl_padding += '20px'; }
		if (pos == 'middle') { lbl_padding += '128px'; }
		if (pos == 'right') { lbl_padding += '240px'; }
		var sub_categoryCount = categoryCount;
		for (var key in items_arr) {
			sub_categoryCount += 1;
			Ext.getCmp(id).add(new Ext.Label(
				{
					html: items_arr[key].toString(),
					padding: lbl_padding,
					id: 'xBrSub' + sub_categoryCount,
					style: 'max-width: 260px; text-align: left; font-size:1em; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
					listeners: {
						element: 'element',
						tap: function () {
							this.up('#xBrowse').fireEvent('onBrowseResultsByCategoryTapCommand', this, categoryCount, sub_categoryCount, 0, 100, category, this.getHtml());
						}
					}
				}));
		};
	},
	doTap: function (id) {
		if (Ext.getCmp(id)) {
			categoryArray.push(id);
		}
		for (var cat_item in categoryArray)
			if (categoryArray[cat_item] != id) {
				Ext.getCmp(categoryArray[cat_item]).setCls('has-shadow browse_container');
				Ext.getCmp('x' + categoryArray[cat_item] + '_panel_browse').hide();
				Ext.getCmp('x' + categoryArray[cat_item] + 'Pict').setSrc('resources/images/' + categoryArray[cat_item].toLowerCase() + '_c.png');
				Ext.getCmp('x' + categoryArray[cat_item] + 'Label').setCls('browse_text');
			}
		if (Ext.getCmp(id).getCls() == 'has-shadow browse_container') {
			Ext.getCmp(id).setCls('has-shadow after_browse_container');
			Ext.getCmp('x' + id + '_panel_browse').show();
			Ext.getCmp('x' + id + 'Pict').setSrc('resources/images/' + id.toLowerCase() + '_c.png');
			Ext.getCmp('x' + id + 'Label').setCls('after_browse_text');
		}
		else {
			Ext.getCmp(id).setCls('has-shadow browse_container');
			Ext.getCmp('x' + id + '_panel_browse').hide();
			Ext.getCmp('x' + id + 'Pict').setSrc('resources/images/' + id.toLowerCase() + '_c.png');
			Ext.getCmp('x' + id + 'Label').setCls('browse_text');
		}
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
