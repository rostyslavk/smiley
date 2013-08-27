Ext.define('smiley360.view.BrandImage', {
	extend: 'Ext.Container',
	alias: 'widget.brandimageview',
	requires: [
	'Ext.util.DelayedTask'
	],
	config: {
		modal: true,
		centered: true,
		fullscreen: true,
		hideOnMaskTap: true,
		id: 'xBrandImageView',
		scrollable: 'vertical',
		cls: 'popup-panel',
		items: [{
			xtype: 'panel',
			id: 'xBrandImageRootPanel',
			cls: 'popup-root-panel',
			items: [{
				xtype: 'image',
				cls: 'popup-close-button',
				listeners: {
					tap: function () {
						Ext.getCmp('xBrandImageView').destroy();
					}
				}
			}, {
				xtype: 'carousel',
				height: 300,
				indicator: false,
				id: 'xBrandImageCarousel',
				items: [{
					xtype: 'container',
					layout: 'vbox',
					style: 'background: transparent;',
					items: [
								{
									xtype: 'image',
									height: '100%',
									src: 'resources/images/guitar_.png',
								},
								{
									xtype: 'panel',
									html: '<div class="left-btn-brandimage"></div><div class="right-btn-brandimage"></div>'
								},
					],
				},
				///first	
				],
			},
			],
		},
		],
		listeners: {
			initialize: function () {
				this.setHeight(Ext.getCmp('xBrandImageRootPanel').element.getHeight());
			},
			hide: function () {
				this.destroy();
			},
			painted:
				function (carousel) {
					var slide_carousel = Ext.getCmp('xBrandImageCarousel');
					carousel.pageTurner = new Ext.util.DelayedTask(function () {
						if (slide_carousel.getActiveIndex() == slide_carousel.items.length - 1) {
							slide_carousel.setActiveItem(0, 'slide');
						}
						else {
							slide_carousel.next();
						}
						//console.log(slide_carousel.pageTurner.valueOf());
						//slide_carousel.pageTurner.delay(3000); //comment this to avoid js-bug
					}, carousel);
					carousel.pageTurner.delay(3000);
				},
			show: function () {
				this.setItem(smiley360.slideShowImages);
				Ext.getCmp('xBrandImageCarousel').setActiveItem(Ext.getCmp('xBrandImage_Pict' + smiley360.slideShowImages));
			},
		},
	},
	setItem: function (item_pict) {
		var brandTopImages = smiley360.brandData.BrandDetails.smileyConnect_topTenCommentImages;
		Ext.getCmp('xBrandImageCarousel').removeAll(true, true);
		for (var item in brandTopImages) {
			//alert('i am showed' + brandTopImages[item].sc_commentID);
			this.addItem(Ext.getCmp('xBrandImageCarousel'), brandTopImages[item].fullImage_URL, brandTopImages[item].sc_commentID);
		};
		
	},
	addItem: function (control, imageURL, id) {
		//alert('i add pict');
		Ext.getCmp('xBrandImageCarousel').add(new Ext.Container({
			layout: 'vbox',
			style: 'background: transparent;',
			items: [
						{
							id: 'xBrandImage_Pict' + id,
							xtype: 'image',
							height: '100%',
							src: smiley360.configuration.getResourceDomain() + '/' + imageURL,
						},
						{
							xtype: 'panel',
							html: '<div class="left-btn-brandimage"></div><div class="right-btn-brandimage"></div>'
						},
			],
		}));
	},
});