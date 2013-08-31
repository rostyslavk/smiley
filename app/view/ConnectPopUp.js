Ext.define('smiley360.view.ConnectPopUp', {
	extend: 'Ext.Container',
	alias: 'widget.connectpopupview',
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
					id: 'xTitleLabel',
					cls: 'missing-offers-title-text',
					style: 'max-height: 40px; padding-right: 10px;',
					html: 'Connect {0} <br> to share!',
				},
				{
					xtype: 'image',
					docked: 'right',
					id: 'xTitleImage',
					cls: 'popup-title-image',
					src: 'resources/images/smile-successful.png',
				}
				],
			},
			{
				xtype: 'panel',
				cls: 'popup-bottom-panel',
				items: [{
					xtype: 'label',
					id: 'xMessageText',
					cls: 'popup-message-text',
					html: 'Click the button below to connect to {0}, otherwise close this prompt to continue sharing without {0}.',
				}],
			}, {
				xtype: 'panel',
				cls: 'popup-button-panel',
				items: [{
					xtype: 'button',
					text: 'Connect!',
					id: 'xSubmitButton',
					cls: 'popup-submit-button',
					listeners: {
						tap: function () {
							this.up('#xView').destroy();
							
								allow_fb = true;
							if (smiley360.memberData.Profile.twitter_token && smiley360.memberData.Profile.twitter_token != "")
								allow_twitter = true;
							//Ext.widget('missingoffersview').hide();
							//Ext.getCmp('xMainView').showExternalView('editprofileview');
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
	setToolName: function (name) {
		var xTitleLabel = this.down('#xTitleLabel');

		xTitleLabel.setHtml(Ext.String.format(
            xTitleLabel.getHtml(), name));

		var xMessageText = this.down('#xMessageText');

		xMessageText.setHtml(Ext.String.format(
            xMessageText.getHtml(), name));

		if (name == 'Facebook')
			this.onFacebookLoginTap();
		else
			this.onTwitterLoginTap();
	},
	onFacebookLoginTap: function () {
		var deviceId = Ext.getStore('membersStore').getAt(0).data.deviceId;

		console.log('Login -> login to Facebook with deviceId: ', deviceId);

		window.location =
            smiley360.configuration.getServerDomain() +
            'oauth/Facebook.html?deviceId=' + deviceId;
	},

	onTwitterLoginTap: function () {
		var deviceId = Ext.getStore('membersStore').getAt(0).data.deviceId;

		console.log('Login -> login to Twitter with deviceId: ', deviceId);

		window.location =
	        smiley360.configuration.getServerDomain() +
	        'oauth/Twitter.html?deviceId=' + deviceId;
	},

});