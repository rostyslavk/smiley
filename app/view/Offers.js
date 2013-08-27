var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.Offers', {
	extend: 'Ext.Panel',
	alias: 'widget.offersview',
	config: {
		id: 'xOfferView',
		//cls: 'cust-tabbar normal-page-bg',
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
			layout: 'hbox',
			id: 'offers-cont',
			style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
			items: [{
				xtype: 'container',
				layout: 'vbox',
				flex: 1,
				items: [{
					xtype: 'container',
					laytout: { type: 'vbox' },
					cls: 'has-shadow',
					items: [{
						xtype: 'container',
						style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
						layout: { type: 'hbox' },
						items: [{
							xtype: 'label',
							id: 'xOfferListHeader1',
							html: 'MISSION OFFERS',
							cls: 'heading-text active-sign',
							style: 'padding-left: 15px;',
							flex: 1
						}]
					}, {
						xtype: 'container',
						id: 'xOfferList1',
						layout: { type: 'vbox', },
					}, {
						xtype: 'spacer',
						height: '14px',
						style: 'background-color: #efecea; margin: 0px 2px;',
					}]
				}, {//end first
					xtype: 'container',
					laytout: { type: 'vbox' },
					cls: 'has-shadow',
					items: [{
						xtype: 'spacer',
						height: '7px',
						style: 'background-color: #efecea;'
					}, {
						xtype: 'container',
						cls: 'has-shadow',
						layout: { type: 'hbox' },
						items: [{
							xtype: 'label',
							id: 'xOfferListHeader2',
							html: 'QUALIFY FOR A NEW MISSION',
							cls: 'heading-text active-sign',
							style: 'padding-left: 15px;',
							flex: 1
						}]
					}, {
						xtype: 'container',
						id: 'xOfferList2',
						layout: { type: 'vbox', },
					},
					{
						xtype: 'spacer',
						height: '7px',
						style: 'background-color: #efecea;',
						cls: 'has-shadow',
					}]
				}, {//end second
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #f4f3f1; margin: 0px 2px;'

				}, {
					xtype: 'container',
					laytout: { type: 'vbox' },
					cls: 'has-shadow',
					items: [{
						xtype: 'container',
						style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
						layout: { type: 'hbox' },
						items: [{
							xtype: 'label',
							id: 'xOfferListHeader3',
							html: 'POST-MISSION SURVEYS',
							cls: 'heading-text active-sign-inactive',
							style: 'padding-left: 15px;',
							flex: 1
						}]
					}, {
						xtype: 'container',
						id: 'xOfferList3',
						layout: { type: 'vbox', },
					}, {
						xtype: 'container',
						layout: { type: 'hbox' },
						style: 'padding: 10px 15px; background-color: #efecea;',
						flex: 1,
					}, {
						xtype: 'spacer',
						height: '14px',
						style: 'background-color: #efecea; margin: 0px 2px;',
					}]
				}, {//end third
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #f4f3f1; margin: 0px 2px;'

				}, {
					xtype: 'container',
					laytout: { type: 'vbox' },
					cls: 'has-shadow',
					items: [{
						xtype: 'container',
						style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
						layout: { type: 'hbox' },
						items: [{
							xtype: 'label',
							id: 'xOfferListHeader4',
							html: 'BONUS SURVEYS',
							cls: 'heading-text active-sign',
							style: 'padding-left: 15px;',
							flex: 1
						}]
					}, {
						xtype: 'container',
						id: 'xOfferList4',
						layout: { type: 'vbox', },
					},

					{
						xtype: 'spacer',
						height: '7px',
						style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

					}, {
						xtype: 'spacer',
						height: '10px',
						style: 'background: transparent;'
					}]
				}]//end last
			}, {//end vbox container
				xtype: 'panel',
				id: 'offers_menu',
				layout: 'vbox',
				flex: 0.3,
				listeners: {
					initialize: function () {
						this.hide();
					},
				},
				items: [{
					xtype: 'container', layout: 'vbox',
					style: 'font-family: franklin; text-align: right;',
					items: [{
						xtype: 'container', layout: 'vbox',
						//padding: '0px 20px',
						style: 'color: #333132; text-align: right; min-height: 60px; background-color:white;border-style: solid; border-color: white; border-radius: 3px; border-width: 2px;',
						margin: '0px 20px 0px 20px',
						cls: 'has-shadow',
						docked: 'top',
						items: [{
							xtype: 'image',
							style: ' min-height: 60px; background-color:white;',

						}, {
							xtype: 'label',
							style: 'padding-top: 10px;',
							html: 'Noel Zahra',
							style: 'font-size:1.4em; margin-bottom: -8px;text-align: right;',
						}, {
							xtype: 'label',
							html: 'Austin, TX',
							//padding: '-8px 0px 0px 0px',
							style: 'padding-bottom: 10px;',
							style: 'font-size: 0.8em; margin-bottom: 8px; margin-left: 2px; text-align: right;',
						}]
					}, {
						xtype: 'container', layout: 'vbox',
						//padding: '0px 20px',
						docked: 'right',
						style: 'color: white; font-family: franklin; font-size:1.4em; text-align: right;',
						padding: '30px 10px',
						items: [{
							xtype: 'button',
							html: 'Edit Profile',
							margin: '20px 0px 0px 0px',
							//padding: '0px 20px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
							itemId: 'gotoeditprofileBtn',
						}, {
							xtype: 'button',
							text: 'Refer Friends',
							margin: '20px 0px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
						}, {
							xtype: 'button',
							text: 'Terms of Use',
							margin: '20px 0px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
						}, {
							xtype: 'button',
							text: 'Tutorial',
							margin: '20px 0px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
						}, {
							xtype: 'button',
							text: 'Contact Us',
							margin: '20px 0px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
						}, {
							xtype: 'button',
							text: 'Log Out',
							margin: '20px 0px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
						}]
					}]
				}]//end add
			}]//end panel added
		}],//ens strange container
		listeners: {
			painted: function () {
				console.log('Offer view painted!');
				this.setOffers();
				//this.setWhatsHappening();
				//this.setSpecialOffers();
			},
		},

	},

	getParagraph: function myfunction(ctrl) {
		var TextInside = ctrl.getElementsByTagName('p')[0].innerHTML;
		return TextInside;
	},

	setOffers: function () {
		//bugfix, need to be rewrited
		Ext.getCmp('xOfferList1').removeAll(true, true);
		Ext.getCmp('xOfferList2').removeAll(true, true);
		Ext.getCmp('xOfferList3').removeAll(true, true);
		Ext.getCmp('xOfferList4').removeAll(true, true);
		//end bugfix, need to be rewrited

		for (var key in smiley360.memberData.Offers) {
			var oneItem = smiley360.memberData.Offers[key];
			var allContainer = new Ext.Container({
				id: 'OfferID_pane' + oneItem.missionID,
				cls: 'offers-offer-panel',
				listeners: {
					element: 'element',
					tap: function () {
						console.log('Offers -> Offer Container tap listener: ', oneItem.valueOf());//last mission in list

						if (this.parent.valueOf().getId().substr(10) == '1') {
							this.up('#xOfferView').fireEvent('LoadOfferDetailsCommand', this, this.getId().substr(12));
						}
						else {
							this.up('#xOfferView').fireEvent('LoadOfferSurveyCommand', this, this.getId().substr(12));
						}
					}
				}
			});

			var domContainer = allContainer.element.dom.firstChild;

			var imgTag = document.createElement("img");
			imgTag.style.marginRight = '5px',
			imgTag.style.float = 'left';
			imgTag.setAttribute('id', 'OfferID_pict' + oneItem.missionID);
			imgTag.setAttribute('src', smiley360.configuration.getOfferImagesUrl(oneItem.missionID, oneItem.link));
			imgTag.setAttribute('class', 'has-shadow');
			imgTag.style.borderRadius = '5px';

			domContainer.appendChild(imgTag);

			var titleTag = document.createElement("p");
			titleTag.style.margin = '0px';
			titleTag.style.fontSize = '1.3em';
			titleTag.style.fontFamily = 'din bold';
			titleTag.style.color = '#413f40';
			titleTag.innerText = oneItem.title;
			titleTag.setAttribute('class', 'set-height');

			domContainer.appendChild(titleTag);

			var descTag = document.createElement("p");
			descTag.style.margin = '0px';
			descTag.style.paddingTop = '10px';
			descTag.style.fontSize = '1em';
			descTag.style.fontFamily = 'din medium';
			descTag.style.color = '#413f40';
			descTag.innerText = oneItem.descr;
			descTag.setAttribute('class', 'set-height');

			domContainer.appendChild(descTag);

			var xOfferList = this.down('#xOfferList' + oneItem.mission_categoryID);
			if (xOfferList)
			{
				//xOfferList.removeAll(true, true);
				xOfferList.add(allContainer);
				this.down('#xOfferListHeader' + oneItem.mission_categoryID).setCls('heading-text active-sign');
			}
		}

		if (smiley360.memberData.isProfileComplete.complete == 'false') {
			Ext.widget('missingoffersview').show();
			smiley360.memberData.isProfileComplete.complete = 'user is already informed'
		}
	},
});
