var xMainView, xTitlebar, xTabpanel, xSidePanel, xBackButton;
var mainViews = {}, mainHistory = [], isBackNow = false;

Ext.define('smiley360.view.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.mainview',
    requires: [
        'Ext.TabBar',
        'Ext.TitleBar',
        'Ext.tab.Panel',
    ],
    config: {
        id: 'xMainView',
        layout: 'fit',
        fullscreen: true,
        items: [{
            xtype: 'titlebar',
            id: 'xTitlebar',
            docked: 'top',
            title: 'HOME',
            ui: 'light',
            items: [{
                xtype: 'button',
                id: 'xBackButton',
                ui: 'plain',
                align: 'left',
                cls: 'toolbar-btn-size toolbar-btn-back-size',
                iconCls: 'back-btn',
                iconMask: true,
                hidden: true,
                listeners: {
                    tap: function () {
                        isBackNow = true;
                        xTabpanel.setActiveItem(mainHistory.pop());
                        isBackNow = false;
                    }
                }
            }, {
                xtype: 'button',
                ui: 'plain',
                align: 'right',
                cls: 'toolbar-btn-size toolbar-btn-menu-size',
                iconCls: 'menu-btn',
                iconMask: true,
                listeners: {
                    tap: function () {
                        xMainView.swapSidePanel();
                    },
                },
            }],
        }, {
            xtype: 'tabpanel',
            id: 'xTabpanel',
            tabBarPosition: 'bottom',
            cls: 'cust-tabbar normal-page-bg',

            defaults: {
                styleHtmlContent: true,
                scrollable: true,
            },

            items: [{
                title: 'HOME',
                id: 'xHomeTab',
                cls: 'tab-item',
                iconCls: 'home-img',
                items: { xtype: 'homeview' },
            }, {
                title: 'MISSIONS',
                id: 'xMissionsTab',
                iconCls: 'mission-img',
                items: { xtype: 'missionsview' },
            }, {
                title: 'SHARE',
                id: 'xShareTab',
                iconCls: 'share-img',
                items: { xtype: 'detailsview' },
            }, {
                title: 'OFFERS',
                id: 'xOffersTab',
                iconCls: 'offers-img',
                items: { xtype: 'offersview' },
            }, {
                title: 'CONNECT',
                id: 'xConnectTab',
                iconCls: 'connect-img',
                items: { xtype: 'connectview' },
            }, {
                title: 'sidepanel',
                id: 'xSidePanel',
                cls: 'side-panel',
                hidden: true,
                items: { xtype: 'sidemenu' }
            }],

            listeners: {
                activeitemchange: function (tabbar, value, oldValue, eOpts) {
                    if (!value.tab) return;

                    xMainView.setTitle(value.tab.getTitle());

                    if (!xSidePanel.getHidden()) {
                        xMainView.hideSidePanel(oldValue.element);
                    }

                    if (isBackNow == false) {
                        mainHistory.push(oldValue);
                        xBackButton.show();
                    }
                    else if (mainHistory.length == 0) {
                        xBackButton.hide();
                    }
                }
            },
        }],

        listeners: {
            initialize: function () {
                console.log('MainView -> initialized!');

                xMainView = this;
                xTitlebar = this.down('#xTitlebar');
                xTabpanel = this.down('#xTabpanel');
                xSidePanel = this.down('#xSidePanel');
                xBackButton = this.down('#xBackButton');

                mainViews['homeview'] = this.down('#xHomeTab');
                mainViews['missionsview'] = this.down('#xMissionsTab');
                mainViews['detailsview'] = this.down('#xShareTab');
                mainViews['offersview'] = this.down('#xOffersTab');
                mainViews['connectview'] = this.down('#xConnectTab');


                var shareButton = xTabpanel.getTabBar().getComponent(2);

                shareButton.on('tap', function () {
                    xTabpanel.down('#xDetailsView').showSharePanel();
                });

                if (smiley360.memberData.MissionList[0] == null) {
                    shareButton.disable();
                }
            },
        }
    },

    setTitle: function (title) {
        xTitlebar.setTitle(title);
    },

    swapSidePanel: function () {
        var currentTab = xTabpanel.getActiveItem().element;

        if (xSidePanel.getHidden()) {
            this.showSidePanel(currentTab);
        }
        else {
            this.hideSidePanel(currentTab);
        }
    },

    showSidePanel: function (currentTab) {
        if (!currentTab) {
            currentTab = xTabpanel.getActiveItem().element;
        }

        xSidePanel.show();

        var currentTabWidth = currentTab.getWidth();
        var panelWidth = xTabpanel.down('#xSideMenu').element.getWidth() + 16;// 8px = 0.5em + 0.5em of the .x-html padding

        Ext.Animator.run({
            element: currentTab,
            easing: 'ease-out',
            preserveEndState: true,
            from: { left: 0, right: 0 },
            to: { left: -panelWidth, right: panelWidth },
            onEnd: function () {
                currentTab.setLeft(-panelWidth);
                currentTab.setRight(panelWidth);
            }
        });

        Ext.Animator.run({
            element: xSidePanel.element,
            easing: 'ease-out',
            preserveEndState: true,
            from: { left: currentTabWidth },
            to: { left: currentTabWidth - panelWidth },
            before: { fn: xSidePanel.show() },
            onEnd: function () {
                xSidePanel.element.setLeft(currentTabWidth - panelWidth);
            },
        });
    },

    hideSidePanel: function (currentTab) {
        if (!currentTab) {
            currentTab = xTabpanel.getActiveItem().element;
        }

        var currentTabWidth = currentTab.getWidth();
        var panelWidth = xTabpanel.down('#xSideMenu').element.getWidth() + 16;// 8px = 0.5em + 0.5em of the .x-html padding

        Ext.Animator.run({
            element: currentTab,
            easing: 'ease-out',
            preserveEndState: true,
            from: { left: -panelWidth, right: panelWidth },
            to: { left: 0, right: 0 },
            onEnd: function () {
                currentTab.setLeft('0px');
                currentTab.setRight('0px');
            }
        });

        Ext.Animator.run({
            element: xSidePanel.element,
            easing: 'ease-out',
            preserveEndState: true,
            from: { left: currentTabWidth - panelWidth },
            to: { left: currentTabWidth },
            onEnd: function () {
                xSidePanel.hide();
                xSidePanel.element.setLeft('100%');
            },
        });
    },

    showExternalView: function (viewAlias) {
        if (!mainViews[viewAlias]) {
            mainViews[viewAlias] = xTabpanel.insert(
                xTabpanel.getItems().length, {
                    xtype: viewAlias, hidden: true
                });
        }

        xTabpanel.setActiveItem(mainViews[viewAlias]);
    },

    enableSharing: function () {
        xTabpanel.getTabBar().getComponent(2).enable();
    }
});
