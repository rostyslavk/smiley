Ext.define('smiley360.view.Details', {
    extend: 'Ext.Panel',
    alias: 'widget.detailsview',
    requires: [
        'Ext.carousel.Carousel',
        'Ext.TitleBar',
        'Ext.Video',
		'Ext.Rating'
    ],
    config: {
        id: 'xDetailsView',
        title: 'MISSIONS',
        //masked: {
        //	xtype: 'loadmask',
        //	fullscreen: true,
        //	message: 'Please wait while we fetch some more data... ',
        //	indicator: true
        //},
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
            laytout: { type: 'vbox' },
            //cls: 'has-shadow',
            items: [{
                xtype: 'container',
                cls: 'has-shadow',
                layout: { type: 'hbox' },
                items: [{
                    xtype: 'label',
                    id: 'xDetailsTitleLabel',
                    html: 'CAMPBELL\'S &reg; SLOW KETTLE &reg; SOUPS ',
                    cls: 'heading-text active-sign',
                    style: 'padding-left: 15px;',
                    flex: 2,
                }, {
                    xtype: 'label',
                    id: 'xTopMissionScore',
                    html: '',
                    cls: 'heading-text',
                    style: 'padding-left: 15px; padding-right: 10px;',
                    flex: 0.3,
                }],
            }, {
                xtype: 'container',
                style: 'background-color: #efecea; ',
                items: [{
                    xtype: 'carousel',
                    id: 'xMissionsCarousel',
                    direction: 'horizontal',
                    cls: 'missionsIndicator',
                    style: 'background-color: #efecea;',
                    //dragable: false,
                    ui: 'dark',
                    indicator: true,
                    defaults: {
                        styleHtmlContent: true
                    },
                    width: '100%',
                    height: 160,
                    listeners: {
                        activeitemchange: function (carousel, value, oldValue) {
                        	this.up('#xDetailsView').setMissionDetails(value.id);
                        	this.up('#xDetailsView').setUserLevel();
                        }
                    }
                }, {
                    xtype: 'button',
                    id: 'missionLeftBtn',
                    cls: 'specialoffers-left-btn',
                    listeners: {
                        tap: function () {
                            var xDetailsView = this.up('#xDetailsView');
                            if (xDetailsView) {
                                xDetailsView.down('#xMissionsCarousel').previous();
                            }
                        }
                    },
                }, {
                    xtype: 'button',
                    id: 'missionRightBtn',
                    cls: 'specialoffers-right-btn',
                    listeners: {
                        tap: function () {
                            var xDetailsView = this.up('#xDetailsView');
                            if (xDetailsView) {
                                xDetailsView.down('#xMissionsCarousel').next();
                            }
                        }
                    },
                }, {
                    xtype: 'spacer',
                    style: 'background-color: #efecea; border-bottom: 1px dashed #d7cfcd;',
                    height: 20,
                }, {
                    xtype: 'container',
                    id: 'xExpandersPanel',
                    //margin: '20px 25px',
                    style: 'background-color: #F4F3F1; padding: 40px 25px;',
                    layout: { type: 'vbox' },
                    items: [{
                        xtype: 'container',
                        id: 'xMission',
                        layout: { type: 'vbox', },
                    }, {
                        xtype: 'label',
                        id: 'xDetailsPromo',
                        style: 'font-family: franklin; font-size:1em;padding: 30px 0px 50px 0px; margin: -113px 0px 50px 0px;',
                        html: '',
                        padding: '10px 20px',
                    }, {
                        xtype: 'panel',
                        layout: 'hbox',
                        cls: 'menu-list-btn-recieve',
                        style: 'margin-bottom: 20px;',
                        listeners: {
                            element: 'element',
                            tap: function () {
                                if (Ext.getCmp('recieve_panel').getHidden() == true) {
                                    Ext.getCmp('recieve_panel').show(); this.setCls('after-menu-list-btn-recieve');
                                }
                                else {
                                    Ext.getCmp('recieve_panel').hide(); this.setCls('menu-list-btn-recieve');
                                }
                            }
                        },
                        items: [{
                            xtype: 'container',
                            docked: 'left',
                            items: [{
                                xtype: 'label', style: 'padding: 15px 2px 15px 15px;',
                                html: 'WHAT YOU\'LL RECIEVE',
                            }],
                        }, {
                            xtype: 'spacer',
                            style: 'background: -webkit-linear-gradient(top, #9f9a98 0%, #423c39 100%); height: 50px;',
                        }, {
                            xtype: 'container',
                            docked: 'right',
                            style: 'margin-top: 8px;',
                            items: [{
                                xtype: 'image',
                                style: 'margin-right: 10px;',
                                src: 'resources/images/missions-box.png',
                                padding: '17px 22px',
                            }],
                        }],
                    }, {
                        xtype: 'panel',
                        layout: 'vbox',
                        cls: 'has-shadow',
                        style: 'border-radius: 0px 0px 5px 5px; background-color: #e2ddda; margin: -20px -10px 20px -10px;',
                        id: 'recieve_panel',
                        listeners: {
                            initialize: function () {
                                this.hide();
                            }
                        },
                        items: [{
                            xtype: 'label',
                            height: '3px',
                            style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
                        }, {
                            xtype: 'label',
                            id: 'xDetailsWhatYoullRecieve',
                            style: 'font-family: franklin; font-size:1em;',
                            cls: 'ddl-text-size',
                            html: '1 Campbell\'s Slow Kettle Soup',
                            padding: '10px 20px',
                        }],
                        //}, {
                        //    xtype: 'button',
                        //    itemId: 'recievebtn',
                        //    style: 'padding: 30px 0px 50px 0px; margin: 60px 0px;text-align: left;',
                        //    cls: 'menu-list-btn-new',
                        //    text: 'TRY NEW THINGS',
                        //    listeners:
                        //        {
                        //            tap: function () {
                        //                if (Ext.getCmp('trynew_panel').getHidden() == true)
                        //                { Ext.getCmp('trynew_panel').show(); this.setCls('after-missions-trynew-btn'); }
                        //                else { Ext.getCmp('trynew_panel').hide(); this.setCls('missions-trynew-btn'); }
                        //            }
                        //        }
                    }, {
                        xtype: 'panel',
                        layout: 'hbox',
                        cls: 'menu-list-btn-recieve',
                        style: 'margin-bottom: 20px;',
                        listeners: {
                            element: 'element',
                            tap: function () {
                                if (Ext.getCmp('trynew_panel').getHidden() == true) {
                                    Ext.getCmp('trynew_panel').show(); this.setCls('after-menu-list-btn-recieve');
                                }
                                else {
                                    Ext.getCmp('trynew_panel').hide(); this.setCls('menu-list-btn-recieve');
                                }
                            }
                        },
                        items: [{
                            xtype: 'container',
                            docked: 'left',
                            items: [
                            {
                                xtype: 'label', style: 'padding: 15px 2px 15px 15px;',
                                html: 'TRY NEW THINGS',
                            }],
                        }, {
                            xtype: 'spacer',
                            style: 'background: -webkit-linear-gradient(top, #9f9a98 0%, #423c39 100%); height: 50px;',
                        }, {
                            xtype: 'container',
                            docked: 'right',
                            style: 'margin-top: 8px;',
                            items: [{
                                xtype: 'image',
                                style: 'margin-right: 10px;',
                                src: 'resources/images/code.png',
                                padding: '11px 23px',
                            }],
                        }],
                    }, {
                        xtype: 'panel',
                        layout: 'vbox',
                        cls: 'has-shadow',
                        style: 'background-color:#e2ddda; border-radius: 0px 0px 5px 5px; margin: -20px -10px 20px -10px;',
                        id: 'trynew_panel',
                        cls: 'ddl-text-size',
                        listeners: {
                            initialize: function () {
                                this.hide();
                            }
                        },
                        items: [{
                            xtype: 'label',
                            height: '3px',
                            style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
                        }, {
                            xtype: 'label',
                            id: 'xDetailsTryNew',
                            style: 'font-family: franklin; font-size:1em;',
                            html: '1 Campbell\'s Slow Kettle Soup',
                            padding: '10px 20px',
                        }, {
                            xtype: 'label',
                            id: 'xDetailsShipment',
                            style: 'font-family: franklin; font-size:1em;',
                            html: 'This will ship later.',
                            padding: '10px 20px',
                        }],
                        //}, {
                        //    xtype: 'button',
                        //    itemId: 'recievebtn',
                        //    style: 'padding: 30px 0px 50px 0px; margin: -45px 0px 0px 0px;',
                        //    cls: 'menu-list-btn-smiles',
                        //    text: 'MISSION SMILES',
                        //    listeners: {
                        //        tap: function () {
                        //            if (Ext.getCmp('mission_smiles_panel').getHidden() == true)
                        //            { Ext.getCmp('mission_smiles_panel').show(); this.setCls('after-missions-smiles-btn'); }
                        //            else { Ext.getCmp('mission_smiles_panel').hide(); this.setCls('missions-smiles-btn'); }
                        //        }
                        //    }
                    }, {
                        xtype: 'panel',
                        layout: 'hbox',

                        cls: 'menu-list-btn-recieve',
                        listeners: {
                            element: 'element',
                            tap: function () {
                                if (Ext.getCmp('mission_smiles_panel').getHidden() == true) {
                                    Ext.getCmp('mission_smiles_panel').show(); this.setCls('after-menu-list-btn-recieve');
                                }
                                else {
                                    Ext.getCmp('mission_smiles_panel').hide(); this.setCls('menu-list-btn-recieve');
                                }
                            }
                        },
                        items: [{
                            xtype: 'container',
                            docked: 'left',
                            items: [{
                                xtype: 'label', style: 'padding: 15px 2px 15px 15px;',
                                html: 'MISSION SMILES',
                            }],
                        }, {
                            xtype: 'spacer',
                            style: 'background: -webkit-linear-gradient(top, #9f9a98 0%, #423c39 100%); height: 50px;',
                        }, {
                            xtype: 'container',
                            docked: 'right',
                            style: 'margin-top: 8px;',
                            items: [{
                                xtype: 'image',
                                src: 'resources/images/bookmark-missions.png',
                                padding: '14px 33px',
                            }],
                        }],
                    }, {
                        xtype: 'panel',
                        layout: 'vbox',
                        cls: 'has-shadow',
                        style: 'background-color:#e2ddda; border-radius: 0px 0px 5px 5px; margin: -20px -10px 20px -10px;',
                        id: 'mission_smiles_panel',
                        listeners: {
                            initialize: function () {
                                this.hide();
                            }
                        },
                        items: [{
                            xtype: 'label',
                            height: '3px',
                            style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
                        }, {
                            xtype: 'container',
                            id: 'xMissionSmileScore',
                            layout: { type: 'vbox', },
                            items: [{
                                xtype: 'label',
                                id: 'xMissionSmileScoreLabel',
                                style: 'font-family: franklin; font-size:1em;',
                                padding: '10px 20px',
                            }],
                        }, {
                            xtype: 'panel',
                            layout: 'hbox',
                            style: 'padding: 5px 15px;',
                            items: [{
                                xtype: 'label',
                                id: 'xMissionUserLevelLabel',
                                html: 'LEVEL',
                                cls: 'heading-text headings-home',
                            }, {
                                xtype: 'rating',
                                id: 'xMissionUserLevelRating',
                                disabled: true,
                                itemsCount: 5,
                                baseCls: 'x-level-field',
                                itemCls: 'x-level-star',
                                itemHoverCls: 'x-level-star-hover',
                            }],
                        }],
                    }],
                }, {
                    xtype: 'sharepanel',
                    id: 'xSharePanel',
                    hidden: true,
                }],
            }, {
                xtype: 'spacer',
                height: '7px',
                style: 'background-color: #efecea;',
                cls: 'has-shadow',
            }, {
                xtype: 'spacer',
                height: '7px',
                style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'
            }, {
                xtype: 'spacer',
                height: '10px',
                style: 'background: transparent;'
            }],
        }],

        listeners: {
            show: function () {
                console.log('Details view showed!');
            },

            painted: function () {
                console.log('Details view painted!');
                this.up('#xMainView').enableSharing();
                Ext.Viewport.element.dom.addEventListener('click', function (e) {
                	if (e.target.tagName !== 'A') {
                		return;
                	};
                	e.preventDefault();
                	var href = e.target.getAttribute('href');
                }, false);
            },
        },
    },

    showSharePanel: function () {
        this.down('#xExpandersPanel').hide();
        this.up('#xMainView').setTitle('SHARE');

        this.down('#xSharePanel').show();
        this.down('#xSharePanel').setShareButtons(this.getCurrentMission());
    },

    hideSharePanel: function () {
        this.down('#xSharePanel').hide();
        this.down('#xExpandersPanel').show();
        this.up('#xMainView').setTitle('MISSIONS');
    },

    onGoToProfileTap: function () {
        console.log('GoToProfile button tapped');
        this.fireEvent('GoToProfileCommand', this);
    },

    oneditLabel: function () {
        console.log("oneditLabel");
        this.fireEvent('oneditLabelCommand', this);
    },

    setAllMissions: function () {
        for (var key in smiley360.AllMissionsList) {
            var additem = smiley360.AllMissionsList[key];

            this.down('#xMissionsCarousel').add(
                new Ext.Container({
                    layout: 'vbox',
                    id: additem.MissionId,
                    items: [{
                        xtype: 'image',
                        src: smiley360.configuration.getOfferImagesUrl(additem.MissionId, additem.MissionDetails.link),
                        height: 160
                    }],
                }));
        };
    },

    setMissionDetails: function (missionId) {
        var missionIndex = this.getMissionIndex(missionId);
        var missionDetails = smiley360.AllMissionsList[missionIndex];
        if (missionDetails) {
            var xSharePanel = this.down('#xSharePanel');
            if (!xSharePanel.getHidden()) {
                xSharePanel.setShareButtons(missionDetails);
            }

            this.down('#xDetailsTitleLabel').setHtml(missionDetails.MissionDetails.title);
            this.down('#xDetailsWhatYoullRecieve').setHtml(missionDetails.MissionDetails.youllReceive);
            this.down('#xDetailsTryNew').setHtml(missionDetails.MissionDetails.tryNewThings);

            if (this.down('#' + missionDetails.MissionId)) {
                this.down('#xMissionsCarousel').setActiveItem(this.down('#' + missionDetails.MissionId));
            }

            this.down('#xMissionSmileScore').removeAll(true, true);

            var detailsArray = missionDetails.MissionDetails;
            if (detailsArray.mission_promo_Activated == '1') {
                this.down('#xDetailsPromo').setHtml(detailsArray.promo_message);
            }
            else {
                this.down('#xDetailsPromo').setHtml('');
            }

            if (detailsArray.mission_shipment_active == '1') {
                this.down('#xDetailsShipment').setHtml('Your package will ship ' + detailsArray.mission_shipment_message);
            }
            else {
                this.down('#xDetailsShipment').setHtml('');
            }

            var smilesArray = missionDetails.MissionPoints.sharingToolScore;
            for (var key in smilesArray) {
                var oneItem = smilesArray[key];
                this.setSmileItem(oneItem.sharingTool_name, oneItem.sharingTool_current_smiles + '/' + oneItem.sharingTool_max_smiles, 'padding: 3px 15px;');

            };

            var pointsArray = missionDetails.MissionPoints;

            this.setSmileItem('Bonus', pointsArray.mission_bonus_smiles, 'padding: 3px 15px;');
            this.setSmileItem('Mission Total', pointsArray.mission_current_smiles + '/' + pointsArray.mission_max_smiles, 'padding: 10px 15px; font-weight: bold;');
            this.setSmileItem('Total Smiles', pointsArray.mission_total_smiles, 'padding: 10px 15px;');

            this.down('#xTopMissionScore').setHtml(pointsArray.mission_current_smiles + '/' + pointsArray.mission_max_smiles);
        }
    },

    getMissionIndex: function (missionId) {
        for (var key in smiley360.AllMissionsList) {
            if (smiley360.AllMissionsList[key].MissionId == missionId) {
                return key;
            }
        }
    },

    getCurrentMission: function () {
        var activeMission = this.down('#xMissionsCarousel').getActiveItem();
        if (activeMission) {
            return smiley360.AllMissionsList[this.getMissionIndex(activeMission.id)];
        }
        else {
            return smiley360.AllMissionsList[0];
        }
    },

    setSmileItem: function (left_html, right_html, addstyle) {
        var smilesArrayItem = new Ext.Container({

            style: addstyle,
            layout: {
                type: 'hbox',
            },
        });

        smilesArrayItem.add(new Ext.Label(
		{
		    style: 'font-family: franklin; font-size:1em;',
		    html: left_html,
		    docked: 'left',
		}));

        smilesArrayItem.add(new Ext.Label(
		{
		    style: 'font-family: franklin; font-size:1em;',
		    html: right_html,
		    docked: 'right',
		}));

        this.down('#xMissionSmileScore').add(smilesArrayItem);
    },

    setUserLevel: function () {
        var userLevel = smiley360.memberData.UserLevel
            ? smiley360.memberData.UserLevel : 0;

        this.down('#xMissionUserLevelLabel').setHtml('LEVEL ' + userLevel);

        var xMissionUserLevelRating = this.down('#xMissionUserLevelRating');

        xMissionUserLevelRating.applyValue(-1);
        xMissionUserLevelRating.setValue(userLevel - 1);
    },
});