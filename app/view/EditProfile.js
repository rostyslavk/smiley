var save_size, s_hide, first_time = true, first_time_children = true, field_about, field_url, child_field_hide, make_hide = false;
Ext.define('smiley360.view.EditProfile', {
	extend: 'Ext.Panel',
	alias: 'widget.editprofileview',
	requires: [
        'Ext.field.DatePicker',
        'Ext.field.Select',
	],
	config: {
		id: 'xEditProfile',
		title: 'Edit Profile',
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
			laytout: 'vbox',
			items: [{
				xtype: 'container',
				cls: 'has-shadow',
				layout: 'hbox',
				items: [{
					xtype: 'label',
					html: 'GENERAL INFORMATION',
					cls: 'heading-text active-sign',
					style: 'padding-left: 15px;',
					flex: 1
				}],
			}, {
				xtype: 'container',
				cls: 'has-shadow',
				layout: { type: 'vbox' },
				style: 'background-color: #efecea;',
				padding: 10,
				items: [{
					xtype: 'container',
					layout: { type: 'hbox' },
					style: 'background-color: #efecea; padding-bottom: 5px;',
					items: [{
						xtype: 'image',
						id: 'userProfileImage',
						style: 'min-width: 60px;border-style: solid; border-color: white; border-radius: 3px; border-width: 2px;',
						flex: 1,
						cls: 'has-shadow',
					}, {
						xtype: 'container',
						layout: 'vbox',
						style: 'background-color: #efecea; padding-top: 30px; padding-left: 10px;',
						flex: 6,
						items: [{
							xtype: 'textfield',
							placeHolder: 'First Name',
							itemId: 'txtFirstName',
							id: 'fName',
							name: 'txtFirstName',
							cls: 'cust-input',
							required: true
						}, {
							xtype: 'textfield',
							placeHolder: 'Last Name',
							itemId: 'txtLastName',
							id: 'lName',
							name: 'txtLastName',
							cls: 'cust-input',
							required: true
						}]
					}],
				}, {
					xtype: 'emailfield',
					placeHolder: 'Email',
					itemId: 'txtEmail',
					id: 'email',
					name: 'txtEmail',
					cls: 'cust-input',
					autoCapitalize: false,
					required: true
				}, {
					xtype: 'datepickerfield',
					//xtype: 'textfield',
					cls: 'cust-input cust-input-ddl',
					name: 'birthday',
					itemId: 'calDob',
					id: 'birthdate',
					name: 'calDob',
					ui: 'light',
					readOnly: true,
					picker: {
						yearFrom: 1900,
					},
					placeHolder: 'Date of birth',
					required: true,
					listeners: {
						painted: function () {
							if (smiley360.memberData.Profile.birthdate == "" || smiley360.memberData.Profile.birthdate == null)
								this.setReadOnly(false);
						}
					}
				}, {
					xtype: 'selectfield',
					itemId: 'ddlGender',
					name: 'ddlGender',
					id: 'gender',
					cls: 'cust-input cust-input-ddl',
					placeHolder: 'Gender',
					autoSelect: false,
					readOnly: true,
					listeners: {
						painted: function () {
							if (smiley360.memberData.Profile.gender == "" || smiley360.memberData.Profile.birthdate == null)
								this.setReadOnly(false);
						}
					},
					options: [
						{ text: 'Female', value: 0 },
						{ text: 'Male', value: 1 },
					]
				}],//end items top vbox
			}, {
				xtype: 'spacer',
				height: '10px',
				style: 'background-color: #f4f3f1; margin: 0px 2px;'
			}, {
				xtype: 'spacer',
				height: '7px',
				style: 'background-color: #efecea;'
			}, {
				xtype: 'container',
				cls: 'has-shadow',
				layout: { type: 'hbox' },
				items: [{
					xtype: 'label',
					html: 'SHIPPING INFORMATION',
					cls: 'heading-text active-sign',
					style: 'padding-left: 15px;',
					flex: 1
				}]
			}, {
				xtype: 'container',
				cls: 'has-shadow',
				layout: { type: 'vbox' },
				style: 'background-color: #efecea;',
				padding: 10,
				items: [{
					xtype: 'container',
					layout: { type: 'hbox' },
					items: [{
						xtype: 'container',
						layout: { type: 'vbox' },
						flex: 6,
						items: [{
							xtype: 'textfield',
							placeHolder: 'Address1',
							id: 'address1',
							itemId: 'txtAddress1',
							name: 'txtAddress1',
							cls: 'cust-input',
							required: false
						}, {
							xtype: 'textfield',
							placeHolder: 'Address2',
							id: 'address2',
							itemId: 'txtAddress2',
							name: 'txtAddress2',
							cls: 'cust-input',
							required: false
						}]
					}],
				}, {
					xtype: 'container',
					layout: { type: 'hbox' },
					items: [{
						xtype: 'textfield',
						flex: 20,
						placeHolder: 'City',
						id: 'city',
						itemId: 'txtCity',
						name: 'txtCity',
						cls: 'cust-input',
						required: false
					}, {
						xtype: 'spacer', height: '10px'
					}, {
						xtype: 'selectfield',
						flex: 20,
						itemId: 'ddlState',
						id: 'stateID',
						name: 'ddlState',
						cls: 'cust-input cust-input-ddl',
						autoSelect: false,
						placeHolder: 'State',
						options: [
                            { text: '', value: '' },
						]
					}],
				}, {
					xtype: 'textfield',
					placeHolder: 'Zip',
					itemId: 'txtCityStateZip',
					id: 'zip',
					name: 'txtCityStateZip',
					cls: 'cust-input',
					listeners: {
						blur: function () {
							Ext.getCmp('xEditProfile').fireEvent('getLocationCommand', Ext.getCmp('xEditProfile'), Ext.getCmp('zip').getValue());
						}
					},
					required: false
				}, {
					xtype: 'selectfield',
					itemId: 'ddlCountry',
					id: 'country',
					name: 'ddlCountry',
					cls: 'cust-input cust-input-ddl',
					autoSelect: true,
					placeHolder: 'Country',
					options: [
                        { text: '', value: '' },
					]
				}],
			}, {
				xtype: 'spacer',
				height: '10px',
				style: 'background-color: #f4f3f1; margin: 0px 2px;'
			}, {
				xtype: 'spacer',
				height: '7px',
				style: 'background-color: #efecea;'
			}, {
				xtype: 'container',
				cls: 'has-shadow',
				layout: { type: 'hbox' },
				items: [{
					xtype: 'label',
					html: 'ABOUT YOU',
					cls: 'heading-text active-sign',
					style: 'padding-left: 15px;',
					flex: 1
				}],
			}, {
				xtype: 'container',
				cls: 'has-shadow ',
				layout: { type: 'vbox' },
				style: 'background-color: #efecea;',
				padding: 10,
				items: [{
					xtype: 'selectfield',
					label: 'Marital status - ',
					labelCls: 'custom-ddl-label',
					itemId: 'ddlStatus',
					name: 'ddlStatus',
					id: 'marital',
					cls: 'cust-input cust-input-ddl',
					autoSelect: false,
					placeHolder: 'Single',
					options: [
                        { text: '', value: '' }
					],
					listeners: {
						painted: function () {
							if (this.getValue() == null) { this.setLabel(''); this.setLabelWidth('0px'); }
							else { this.setLabel('Marital status - '); this.setLabelWidth('30%'); }
						},
						change: function () {
							if (this.getValue() == null) { this.setLabel(''); this.setLabelWidth('0px'); }
							else { this.setLabel('Marital status - '); this.setLabelWidth('30%'); }
						}
					},
				}, {
					xtype: 'selectfield',
					itemId: 'ddlChildren',
					name: 'ddlChildren',
					label: 'Children? - ',
					labelCls: 'custom-ddl-label',
					id: 'children',
					autoSelect: false,
					cls: 'cust-input cust-input-ddl',
					placeHolder: 'Do you have children?',
					listeners: {
						painted: function () {
							if (this.getValue() == null) { this.setLabel(''); this.setLabelWidth('0px'); }
							else { this.setLabel('Children? - '); this.setLabelWidth('30%'); }
						},
						change: function (selectbox, newValue, oldValue) {
							//first_time = false;//check if custom variable has been set to false
							if (newValue == 1) {
								Ext.getCmp('howmanychildren').show();
								//Ext.getCmp('howmanychildren').setValue(smiley360.memberData.Profile.howmanychildren);
							}
							if (newValue != 1) {
								Ext.getCmp('howmanychildren').hide();
								Ext.getCmp('howmanychildren').setValue('');
							}
							if (this.getValue() == null) { this.setLabel(''); this.setLabelWidth('0px'); }
							else { this.setLabel('Children? - '); this.setLabelWidth('30%'); }
						},
					},
				}, {
					xtype: 'selectfield',
					itemId: 'ddlHaveChildren',
					name: 'ddlHaveChildren',
					label: 'How Many? - ',
					labelCls: 'custom-ddl-label',
					id: 'howmanychildren',
					//style: 'my-ddl-color',
					cls: 'cust-input cust-input-ddl',
					autoSelect: false,
					placeHolder: 'How many children do you have?',
					listeners: {
						painted: function () {
							if (this.getValue() == null) { this.setLabel(''); this.setLabelWidth('0px'); }
							else { this.setLabel('How Many? - '); this.setLabelWidth('30%'); }
						},
						change: function () {
							if (this.getValue() == null) { this.setLabel(''); this.setLabelWidth('0px'); }
							else { this.setLabel('How Many? - '); this.setLabelWidth('30%'); }
						}
					},
					options: [
                        { text: '', value: '' },
					]
				}, {
					xtype: 'selectfield',
					itemId: 'ddlHousehold',
					name: 'ddlHousehold',
					label: 'Income - ',
					labelCls: 'custom-ddl-label',
					id: 'income',
					autoSelect: false,
					cls: 'cust-input cust-input-ddl',
					placeHolder: 'Household Income',
					options: [
                        { text: '', value: '' },
					],
					listeners: {
						painted: function () {
							if (this.getValue() == null) { this.setLabel(''); this.setLabelWidth('0px'); }
							else { this.setLabel('Income - '); this.setLabelWidth('30%'); }
						},
						change: function () {
							if (this.getValue() == null) { this.setLabel(''); this.setLabelWidth('0px'); }
							else { this.setLabel('Income - '); this.setLabelWidth('30%'); }
						}
					}
				}, {
					xtype: 'textfield',
					itemId: 'ddlRace',
					name: 'ddlRace',
					readOnly: true,
					//style: 'my-ddl-color',
					cls: 'cust-input cust-input-ddl',
					placeHolder: 'Race / Ethnicity',
					id: 'race_etn',
					listeners: {
						element: 'element',
						mousedown: function () {
							//alert('race tap');
							this.setValue('Race / Ethnicity');
							this.setReadOnly(true);
							//this.setCls('cust-input cust-input-ddl my-ddl-color');
							if (Ext.getCmp('ddlCheckboxes').isHidden()) {
								Ext.getCmp('ddlCheckboxes').show();
								field_about.setValue(' ');
								field_url.setValue(' ');
								field_about.setReadOnly(true);
								field_url.setReadOnly(true);
								field_about.setPadding('0px 20px');
								field_url.setPadding('0px 20px');
							}
							else {
								Ext.getCmp('ddlCheckboxes').hide();
								if (smiley360.memberData.Profile.aboutself)
									field_about.setValue(smiley360.memberData.Profile.aboutself);
								if (smiley360.memberData.Profile.blogURL)
									field_url.setValue(smiley360.memberData.Profile.blogURL);
								field_about.setReadOnly(false);
								field_url.setReadOnly(false);
								field_about.setPadding('0px 0px');
								field_url.setPadding('0px 0px');
							};
						},
					},
					options: [
                        { text: '', value: '' },
					]
				}, {
					xtype: 'panel',
					layout: 'vbox',
					id: 'ddlCheckboxes',
					//hidden: 'true',
					name: 'ddlCheckboxes',
					style: 'border-radius: 0px 0px 5px 5px; background-color:white; margin:-10px 0px -10px 0px;',
					cls: 'cust-input',
					listeners: {
						//element: 'element',
						initialize: function () {
							this.hide();
						},
					},
					//padding: 5,
					items: [{
						xtype: 'label',
						html: '(please select all that apply)',
						cls: 'my-checkbox-label',
						style: 'padding-top: 10px; font-family: \'franklin\';font-size: 0.8em; color: black; background-color:transparent; padding-left: 120px;',
						margin: '-30px 0px 0px 0px',
						listeners: {
							element: 'element',
							tap: function () {
								//alert('lbl tap');
								Ext.getCmp('race_etn').setValue('Race / Ethnicity');
								Ext.getCmp('race_etn').setReadOnly(true);
								//this.setCls('cust-input cust-input-ddl my-ddl-color');
								if (Ext.getCmp('ddlCheckboxes').isHidden()) {
									Ext.getCmp('ddlCheckboxes').show();
									field_about.setValue(' ');
									field_url.setValue(' ');
									field_about.setReadOnly(true);
									field_url.setReadOnly(true);
									field_about.setPadding('0px 20px');
									field_url.setPadding('0px 20px');
								}
								else {
									Ext.getCmp('xEditProfile').doHide();
								};
							},
						}
					},

					],//end chackbox items
				}, {
					xtype: 'textfield',
					height: 80,
					placeHolder: 'Tell us about yourself',
					itemId: 'txtAboutYourself',
					id: 'aboutself',
					name: 'txtAboutYourself',
					cls: 'cust-input',
					required: false,
					listeners: {
						initialize: function () {
							field_about = this;
						}
					}
				}, {
					xtype: 'textfield',
					placeHolder: 'Blog URL',
					itemId: 'txtBlogURL',
					id: 'blogURL',
					name: 'txtBlogURL',
					cls: 'cust-input',
					required: false,
					listeners: {
						initialize: function () {
							field_url = this;
						}
					}
				}],//end items top vbox
			}, {
				xtype: 'container',
				margin: '0px 2px 0px 2px',
				padding: '25px 0px 0px 0px',
				style: 'background-color: #F4F3F1; padding: 0px 20px;',
				layout: { type: 'vbox' },
				items: [{
					xtype: 'button',
					itemId: 'btnSavechanges',
					style: 'z-index: 0;',
					cls: 'cust-btn signup-btn save-changes-btn',
					text: 'SAVE CHANGES',
					listeners: {
						tap: function () {
							this.up('#xEditProfile').fireEvent('onbtnSavechangesCommandProfile', this);
							console.log('editprofiletap');
						}
					}
				}],
			}, {
				xtype: 'spacer',
				height: '10px',
				style: 'background-color: #f4f3f1; margin: 0px 2px;'
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

		listeners: {
			show: function () {
				console.log('EditProfile view showed!');
				this.setDropdownLists();
				this.setDropdownRace();
				var profile = smiley360.memberData.Profile;
				Ext.getCmp('xEditProfile').doHide();
				//Ext.getCmp('xEditProfile').getScrollable().getScroller().refresh();
				Ext.getCmp('xEditProfile').getScrollable().getScroller().scrollTo(0, 0);

				for (var field in profile) {

					var element = (field == 'address')
                        ? Ext.getCmp(field + '1')
                        : Ext.getCmp(field);

					if (element && (field != 'race')) {
						element.setValue(profile[field]);
					}
					else if (field == 'race') {
						Ext.getCmp('race_etn').setReadOnly(true);
						if (profile.race) {
							Ext.getCmp('race_etn').setValue('Race / Ethnicity');
							for (var raceID_key in profile.race) {
								switch (profile.race[raceID_key]) {
									case '1':
										Ext.getCmp('raceCheckbox1').check();
										break;
									case '2':
										Ext.getCmp('raceCheckbox2').check();
										break;
									case '3':
										Ext.getCmp('raceCheckbox3').check();
										break;
									case '4':
										Ext.getCmp('raceCheckbox4').check();
										break;
									case '5':
										Ext.getCmp('raceCheckbox5').check();
										break;
									case '6':
										Ext.getCmp('raceCheckbox6').check();
										break;
									default:
								};
							};
						}
						else {
						};
					};
				};
				Ext.getCmp('userProfileImage').setSrc(smiley360.userProfileImage);
				//console.log(smiley360.ProfileDropdowns.race.valueOf());

			},

			activate: function () {
				console.log('EditProfile view activated!');
			}
		},
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
			if (item != 'race') {
				otherOptions = [];
				if (item == 'howmanychildren') {
					for (var it in smiley360.ProfileDropdowns[item]) {
						var temp_array = new Array();
						temp_array["text"] = smiley360.ProfileDropdowns[item][it];
						temp_array["value"] = parseInt(it);
						otherOptions.push(temp_array);
					};
				}
				else {
					me.setOrder(smiley360.ProfileDropdowns[item], function (key, value) {

						//alert(key + ": " + value);
						var temp_array = new Array();
						temp_array["text"] = key;
						temp_array["value"] = value;

						otherOptions.push(temp_array);
					});
				};
				if (Ext.getCmp(item)) {
					me.setAnyOptions(Ext.getCmp(item), otherOptions);
				};
			}
			else {

			};
	},

	setAddress: function () {
		Ext.getCmp('stateID').setValue(smiley360.memberData.Profile.stateID);
		Ext.getCmp('city').setValue(smiley360.memberData.Profile.city);
	},
	setDropdownRace: function () {
		//race
		this.setOrder(smiley360.ProfileDropdowns.race, function (key, value) {
			//alert(key + ": " + value);
			var allContainer = new Ext.Container({
				id: value.toString() + 'check-panel',
				style: 'background-color:white; border-radius: 0px 0px 5px 5px;',
				layout: 'hbox',
				padding: 5,
			});
			allContainer.add(new Ext.field.Checkbox({
				id: 'raceCheckbox' + value.toString(),
				cls: 'popup-checkbox',
				height: 23,
				width: 23,
			}));
			allContainer.add(new Ext.Label({

				html: key,//'black\\african-american',
				cls: 'my-checkbox-label',
				style: 'background-color:white;',
				height: 23,
			}));
			Ext.getCmp('ddlCheckboxes').add(allContainer);
		});
	},
	doHide: function () {
		Ext.getCmp('ddlCheckboxes').hide();
		field_about.setValue(smiley360.memberData.Profile.aboutself);
		field_url.setValue(smiley360.memberData.Profile.blogURL);
		field_about.setReadOnly(false);
		field_url.setReadOnly(false);
		field_about.setPadding('0px 0px');
		field_url.setPadding('0px 0px');
	},
});
