Ext.define('smiley360.view.SideMenu', {
	extend: 'Ext.Panel',
	alias: 'widget.sidemenu',
	requires: [
	],
	config: {
		id: 'xSideMenu',
		layout: 'vbox',
		style: 'font-family: franklin; text-align: right;',
		items: [{
			xtype: 'container',
			layout: 'vbox',
			style: 'color: #333132; text-align: right; min-height: 60px; min-width: 90px; background-color:white;border-style: solid; border-color: white; border-radius: 3px; border-width: 2px;',
			margin: '0px 10px 0px 10px ',
			cls: 'has-shadow',
			docked: 'top',
			items: [{
				xtype: 'image',
				id: 'xProfileImage',
				style: ' min-height: 60px; min-width: 80px;background-color:white;',
			}, {
				xtype: 'label',
				style: 'padding-top: 10px;',
				id: 'xFirstLastName',
				html: 'Noel Zahra',
				style: 'font-size:1.1em; margin-bottom: -4px;text-align: right; line-height: 130%;',
			}, {
				xtype: 'label',
				id: 'xCityState',
				html: 'Austin, TX',
				style: 'padding-bottom: 10px;',
				style: 'font-size: 0.8em; margin-bottom: 8px; margin-left: 2px; text-align: right;',
			}],
		}, {
			xtype: 'container',
			layout: 'vbox',
			docked: 'right',
			style: 'color: white; font-family: franklin; font-size:1.4em; text-align: right;',
			padding: '30px 0px',
			items: [{
				xtype: 'button',
				html: 'Edit Profile',
				margin: '20px 0px 0px 0px',
				style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
				cls: 'listmenuitem',
				ui: 'plain',
				listeners: {
					tap: function () {
						this.up('#xMainView').showExternalView('editprofileview');
					}
				}
			}, /*{
				xtype: 'button',
				text: 'Refer Friends',
				margin: '20px 0px 0px 0px',
				style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
				cls: 'listmenuitem',
				ui: 'plain',
				listeners: {
					tap: function () {
						alert('refer a friend is not avaliable now');//this.up('#xHomeView').fireEvent('getProfileHomeCommand', this);
					}
				}
			}, */{
				xtype: 'button',
				text: 'Terms of Use',
				margin: '20px 0px 0px 0px',
				style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
				cls: 'listmenuitem',
				ui: 'plain',
				listeners: {
					tap: function () {
						Ext.widget('termsofuseview').show();//this.up('#xHomeView').fireEvent('getProfileHomeCommand', this);
					}
				}
			}, {
				xtype: 'button',
				text: 'Tutorial',
				margin: '20px 0px 0px 0px',
				style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
				cls: 'listmenuitem',
				ui: 'plain',
				listeners: {
					tap: function () {
					    smiley360.animateViewLeft('tutorialiew');
					}
				}
			}, {
				xtype: 'button',
				text: 'Contact Us',
				margin: '20px 0px 0px 0px',
				style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
				cls: 'listmenuitem',
				ui: 'plain',
				listeners: {
					tap: function () {
						//Ext.widget('contactusview').show();
						Ext.getCmp('xOfferView').fireEvent('LoadContactUsCommand', this);
					}
				}
			}, {
				xtype: 'button',
				text: 'Log Out',
				margin: '20px 0px 0px 0px',
				style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
				cls: 'listmenuitem',
				ui: 'plain',
				listeners: {
				    tap: function () {
				        Ext.getCmp('xMainView').hideSidePanel();

				        var members = Ext.getStore('membersStore');
				        if (members.getCount() > 0) {
				            members.getAt(0).data.memberId = null;
				            members.sync();
                        }

					    smiley360.animateViewLeft('loginview');
					}
				}
			}],
		}],
	}
});