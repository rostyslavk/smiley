Ext.define('smiley360.view.MissionIsFull', {
	extend: 'Ext.Container',
	alias: 'widget.missionisfull',
	config: {
		modal: true,
		centered: true,
		fullscreen: true,
		id: 'xMFView',
		scrollable: 'vertical',
		cls: 'popup-panel',
		items: [{
			xtype: 'panel',
			id: 'xRootPanel',
			cls: 'popup-root-panel',
			items: [{
				xtype: 'image',
				cls: 'popup-close-button',
				listeners: {
					tap: function () {
						this.up('#xMFView').destroy();
					}
				}
			}, {
				xtype: 'panel',
				layout: 'hbox',
				cls: 'popup-top-panel forgetpwd-background',
				items: [{
					xtype: 'label',
					cls: 'missing-offers-title-text',
					style: 'max-height: 40px; padding-right: 10px;',
					html: 'This Mission is Full!',
				},				
				],
			}, {
				xtype: 'panel',
				cls: 'popup-bottom-panel',
				items: [{
					xtype: 'label',
					id: 'xMessageText',
					cls: 'popup-message-text',
					html: 'We\'re sorry. This is mission is now full.<br>'+
						'Sometimes our missions fill very fast, and we<br>'+
						'have unfortunately exceeded the number of <br>' +
						'spots avaliable.<br>'+
						'Please be on the lookout for future<br>'+
						'opportunities!',
				}],
			}, {
				xtype: 'panel',
				cls: 'popup-button-panel',
				items: [{
					xtype: 'button',
					text: 'Continue',
					id: 'xSubmitButton',
					cls: 'addr-accept-btn',
					listeners: {
						tap: function () {
							Ext.widget('offeracceptaddressview').hide();
							Ext.widget('offeracceptview').hide();
							Ext.widget('missionisfull').hide();
							Ext.getCmp('xMainView').showExternalView('homeview');
						}
					},
				}],
			}],
		}],
		listeners: {
			initialize: function () {
			    smiley360.adjustPopupSize(this, 20);
			},
			painted: function () {
			},
			hide: function () {
				this.destroy();
			}
		},
	},

});