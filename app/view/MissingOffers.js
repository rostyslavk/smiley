Ext.define('smiley360.view.MissingOffers', {
	extend: 'Ext.Container',
	alias: 'widget.missingoffersview',
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
				cls: 'popup-close-button',
				listeners: {
					tap: function () {
						this.up('#xView').destroy();
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
					html: 'You are missing<br> out on offers!',
				}, {
					xtype: 'container',
					layout: 'vbox',
					docked: 'right',
					style: 'max-width: 60px; min-width: 60px; color: #333132; margin-top: -30px; text-align: right; min-height: 60px; min-width: 90px; background-color:white;border-style: solid; border-color: white; border-radius: 3px; border-width: 2px;',

					cls: 'has-shadow',
					items: [{
						xtype: 'image',
						id: 'xProfileImage',
						style: ' min-height: 60px; min-width: 60px;background-color:white;',
					}, {
						xtype: 'label',
						style: 'padding-top: 10px;',
						id: 'xFirstLastName',
						html: 'Noel Zahra',
						style: 'font-size:0.8em; text-align: right;',
					}, {
						xtype: 'label',
						html: 'Austin, TX',
						id: 'xCityState',
						style: 'padding-bottom: 10px;',
						style: 'font-size: 0.6em; text-align: right;',
					}],
				}, ],
			}, {
				xtype: 'panel',
				cls: 'popup-bottom-panel',
				items: [{
					xtype: 'label',
					id: 'xMessageText',
					cls: 'popup-message-text',
					html: 'Complete your personal info now.',
				}],
			}, {
				xtype: 'panel',
				cls: 'popup-button-panel',
				items: [{
					xtype: 'button',
					text: 'EDIT PROFILE',
					id: 'xSubmitButton',
					cls: 'popup-submit-button',
					listeners: {
						tap: function () {
							Ext.widget('missingoffersview').hide();
							Ext.getCmp('xMainView').showExternalView('editprofileview');
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
				this.setMOUser();
			},
			hide: function () {
				this.destroy();
			}
		},
	},

	setMOUser: function () {
		this.down('#xProfileImage').setSrc(smiley360.userProfileImage);
		this.down('#xFirstLastName').setHtml(smiley360.memberData.Profile.fName + ' ' + smiley360.memberData.Profile.lName);
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
		this.down('#xCityState').setHtml(str_tmp);
	},
});