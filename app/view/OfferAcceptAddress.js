Ext.define('smiley360.view.OfferAcceptAddress', {
	extend: 'Ext.Container',
	alias: 'widget.offeracceptaddressview',
	config: {
		modal: true,
		centered: true,
		fullscreen: true,
		hideOnMaskTap: true,
		id: 'xOAView',
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
						Ext.getCmp('xOAView').destroy();
					}
				}
			}, {
				xtype: 'panel',
				layout: 'hbox',
				cls: 'popup-top-panel forgetpwd-background',
				items: [{
					xtype: 'label',
					cls: 'popup-title-text',
					html: 'Accept Offer',
				}],
			}, {
				xtype: 'panel',
				id: 'xMiddlePanel',
				cls: 'popup-middle-panel',
				items: [{
					xtype: 'label',
					cls: 'popup-message-text',
					html: 'In order to send product your way, please provide us with you most current address.',
				}, {
					xtype: 'panel',
					id: 'address_panel',
					layout: 'vbox',
					items: [{
						xtype: 'label',
						cls: 'popup-message-text',
						style: 'margin-top: 10px;',
						html: 'EDIT CURRENT ADDRESS:',
					}, {
						xtype: 'textfield',
						cls: 'cust-input',
						id: 'address_address1',
						value: '263 West Street',
					}, {
						xtype: 'textfield',
						cls: 'cust-input',
						id: 'address_address2',
						value: '8th Floor',
					},
					{
						xtype: 'container',
						layout: 'hbox',
						items: [{
							xtype: 'textfield',
							cls: 'cust-input',
							id: 'address_city',
							value: 'New York',
							flex: 1,
							style: 'margin-right: 10px;'
						}, {
							xtype: 'selectfield',
							id: 'address_stateID',
							cls: 'cust-input cust-input-ddl',
							flex: 1,
						}]
					}, {
						xtype: 'textfield',
						cls: 'cust-input',
						id: 'address_zip',
						value: '10018',
						listeners: {
							blur: function () {
								Ext.getCmp('xOfferView').fireEvent('getLocationCommand', Ext.getCmp('xOAView'), Ext.getCmp('address_zip').getValue());
							}
						}
					}, {
						xtype: 'textfield',
						cls: 'cust-input',
						id: 'address_countryID',
						value: 'United States of America',
					}, ],
				}, {
					xtype: 'panel',
					style: 'margin-top: 10px;',
					items: [{
						xtype: 'label',
						id: 'verify-label',
						docked: 'left',
						cls: 'popup-address-comment',
						html: 'This address is VERIFIED!',
					}, {
						xtype: 'spacer',
						id: 'verify-spacer',
					},
					{
						xtype: 'image',
						id: 'question-icon',
						width: 30,
						height: 30,
						docked: 'right',
						src: 'resources/images/question.png',
						cls: 'popup-post-icon',
						listeners: {
							tap: function () {
								Ext.getCmp('xOAView').hide();
								Ext.widget('contactusview').show();

							}
						}
					}, {
						xtype: 'button',
						id: 'question-help-button',
						ui: 'plain',
						text: 'Need Help?',
						docked: 'right',
						cls: 'popup-help-button',
						//icon: 'resources/images/question.png',
						//iconAlign: 'right',
						//iconCls: 'popup-post-icon',
						listeners: {
							tap: function () {
								Ext.getCmp('xOAView').hide();
								Ext.getCmp('xOfferView').fireEvent('LoadContactUsCommand', this);

							},
							initialize: function () {
								Ext.getCmp('question-icon').setDocked('right');
								Ext.getCmp('question-help-button').setDocked('right');
								Ext.getCmp('verify-label').setDocked('left');
							},

						}
					}],
				}],
			}, {
				xtype: 'panel',
				cls: 'popup-button-panel',
				items: [{
					xtype: 'button',
					style: 'margin: 10px 10px 0px 10px;',
					cls: 'addr-accept-btn br-accept-btn',
					html: 'SAVE ADDRESS<br> AND CONTINUE TO MISSION',
					listeners: {
						tap: function () {
							//save address always					
							//go accept mission
							Ext.getCmp('xOfferView').fireEvent(
												'setAddressCommand', this,
												smiley360.memberData.UserId,
												Ext.getCmp('address_address1').getValue(),
												Ext.getCmp('address_address2').getValue(),
												Ext.getCmp('address_city').getValue(),
												Ext.getCmp('address_stateID').getValue(),
												Ext.getCmp('address_zip').getValue(),
												Ext.getCmp('address_countryID').getValue()
												);
							//verify on need		
							Ext.getCmp('xOfferView').fireEvent('verifyAddressCommand', this, smiley360.memberData.UserId);
							//go accept mission
							Ext.getCmp('xOfferView').fireEvent('acceptMissionCommand', this, smiley360.memberData.UserId, smiley360.missionData.MissionDetails.MissionId);
							//if accepted to go

							
							if (smiley360.missionData.MissionDetails.MissionDetails.mission_full) {
								//if (Ext.widget('offeracceptview')) Ext.widget('offeracceptview').hide();
								Ext.getCmp('xOAView').hide();
								Ext.widget('missionisfull').show();
							}
							else {
								//if (Ext.widget('offeracceptview')) Ext.widget('offeracceptview').hide();
								Ext.getCmp('xOAView').hide();								
								Ext.getCmp('xOfferView').fireEvent('showMissionDetailsCommand', this, smiley360.missionData.MissionDetails.MissionId, false);
							};							
						}
					}
				}, ],
			}],
		}],
		listeners: {
			initialize: function () {
				smiley360.adjustPopupSize(this);
			},
			painted: function() {
			},
			show: function () {

				if (smiley360.memberData.Profile.address_status == '1') {
					Ext.getCmp('verify-label').setHtml('This address is VERIFIED!');
					Ext.getCmp('verify-label').setCls('popup-address-comment');
					//this.down('#verify-label').hide();
				}
				if (smiley360.memberData.Profile.address_status == '2') {
					Ext.getCmp('verify-label').setHtml('This address is not VERIFIED!');
					Ext.getCmp('verify-label').setCls('popup-address-comment-not');
				}
				var stateIdTemp = [];
				for (var it in smiley360.ProfileDropdowns.stateID) {
					var temp_array = new Array();
					temp_array["text"] = it;
					temp_array["value"] = smiley360.ProfileDropdowns.stateID[it];
					stateIdTemp.push(temp_array);
				};
				Ext.getCmp('address_stateID').setOptions(stateIdTemp, true);

				Ext.getCmp('address_countryID').setValue('United States of America');

				//Ext.getCmp('xOfferView').fireEvent('getAddressCommand', this, smiley360.memberData.UserId);
				var profile = smiley360.memberData.Profile;

				for (var field in profile) {
					var element = (field == 'address')
                        ? Ext.getCmp('address_' + field + '1')
                        : Ext.getCmp('address_' + field);

					if (element) {
						element.setValue(profile[field]);
					}
				}
				this.setDropdownLists();
			},
			hide: function () {
				this.destroy();
			},
		},
	},
	setAddress: function () {
		if (Ext.getCmp('address_stateID'))
			Ext.getCmp('address_stateID').setValue(smiley360.memberData.Profile.stateID);
		Ext.getCmp('address_city').setValue(smiley360.memberData.Profile.city);
	},
	doRemoveOffer: function () {
		var submitView = this;
		var submitData = {
			email: Ext.getCmp('xEmailField').getValue()
		};

		//smiley360.setViewStatus(submitView, smiley360.viewStatus.progress);
		smiley360.services.restorePassword(submitData, function (response) {
			smiley360.setResponseStatus(submitView, response);
		});
	},
	setOrder: function (obj, callback, context) {
		var tuples = [];

		for (var key in obj) tuples.push([key, obj[key]]);

		tuples.sort(function (a, b) { return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0 });


		var length = tuples.length;
		while (length--) callback.call(context, tuples[length][0], tuples[length][1]);
	},
	setAnyOptions: function (field, otherOptions) {
		field.setOptions(otherOptions, true);
	},
	setDropdownLists: function () {
		var me = this;
		var otherOptions = [];
		for (var item in smiley360.ProfileDropdowns)
			if (item == 'stateID') {
				otherOptions = [];
				me.setOrder(smiley360.ProfileDropdowns[item], function (key, value) {
					//alert(key + ": " + value);
					var temp_array = new Array();
					temp_array["text"] = key;
					temp_array["value"] = value;

					otherOptions.push(temp_array);
				});

				if (Ext.getCmp(item)) {
					me.setAnyOptions(Ext.getCmp('address_' + item), otherOptions);
				};
			};
	},

	setStatus: function (status) {
		var xEmailField = Ext.getCmp('xEmailField');
		var xTitleImage = Ext.getCmp('xTitleImage');
		var xMessageText = Ext.getCmp('xMessageText');
		var xSubmitButton = Ext.getCmp('xSubmitButton');
		//var xSubmitStatus = Ext.getCmp('xSubmitStatus');

		switch (status) {
			case smiley360.viewStatus.progress: {
				xSubmitButton.setText('POSTING...');
				xSubmitButton.setIcon('resources/images/share-initial.png');
				xSubmitStatus.setStyle('background-color: #F9A419;');

				var statusAnimation = new Ext.Anim({
					autoClear: false,
					duration: 2000,
					easing: 'ease-in',
					from: { width: 0 },
					to: { width: this.getWidth() },
				});

				statusAnimation.run(xSubmitStatus.element, 'slide');

				break;
			}
			case smiley360.viewStatus.successful: {
				xEmailField.hide();
				xSubmitButton.setHtml('CLOSE')
				xTitleImage.setSrc('resources/images/smile-successful.png');
				xMessageText.setHtml('Thankyou, your password reminder was sent');
				//xSubmitStatus.setStyle('background-color: #5F9E45;');

				break;
			}
			case smiley360.viewStatus.unsuccessful: {
				xTitleImage.setSrc('resources/images/smile-unsuccessful.png');
				xMessageText.setHtml('Oops, the email address you entered is not found in our member accouns. Try again, or contact us for assistance.');
				//xSubmitStatus.setStyle('background-color: #ED1C24;');

				break;
			}
			default:
		}
		// resize container after state has been changed
		smiley360.adjustPopupSize(this);
	}
});