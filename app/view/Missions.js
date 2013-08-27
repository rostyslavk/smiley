Ext.define('smiley360.view.Missions', {
    extend: 'Ext.Panel',
    alias: 'widget.missionsview',
    requires: ['Ext.carousel.Carousel'],
    config: {
        id: 'xMissionView',
        items: [{
            xtype: 'container',
            layout: 'hbox',
            id: 'missions-cont',
            items: [{
                xtype: 'container',
                layout: 'vbox',
                flex: 1,
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
                            html: 'CURRENT MISSIONS',
                            cls: 'heading-text active-sign',
                            style: 'padding-left: 15px;',
                            flex: 1
                        }]
                    }, {
                        xtype: 'container',
                        id: 'xMissionList',
                        layout: 'vbox',
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
                    }]
                }],
            }],//end panel added
        }],//ens strange container
        listeners: {
            painted: function () {
                console.log('Mission view showed!');
                this.setMissions();
                //this.setWhatsHappening();
                //this.setSpecialOffers();
            },
        },
    },

    setMissions: function () {
        Ext.getCmp('xMissionList').removeAll(true, true);
        for (var key in smiley360.memberData.MissionList) {
            var oneItem = smiley360.memberData.MissionList[key];

            var allContainer = new Ext.Container({
                id: 'MissionID_pane' + oneItem.missionID,
                cls: 'missions-mission-panel',
                listeners: {
                    element: 'element',
                    tap: function () {
                        console.log('MissionDetailsCommandPanel', oneItem.missionID, this.valueOf());

                        this.up('#xMissionView').fireEvent('showMissionDetailsCommand', this, this.getId().substr(14), false);
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
            titleTag.style.margin = '0px';
            descTag.style.paddingTop = '10px';
            descTag.style.fontSize = '1em';
            descTag.style.fontFamily = 'din medium';
            descTag.style.color = '#413f40';
            descTag.innerText = oneItem.descr;
            descTag.setAttribute('class', 'set-height');

            domContainer.appendChild(descTag);

            var xMissionList = this.down('#xMissionList')// + oneItem.mission_typeID);
            if (xMissionList) {//&& smiley360.memberData.isProfileComplete.complete) {
                //xOfferList.removeAll(true, true);
                xMissionList.add(allContainer);

                //this.down('#xMissionListHeader' + oneItem.mission_typeID).setCls('heading-text active-sign');
            }
            //else Ext.widget('missingoffersview').show();
        }
    },
});
