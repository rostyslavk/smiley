Ext.define('Ext.ux.ShareButton', {
    extend: 'Ext.Button',
    xtype: 'sharebutton',

    requires: [],

    template: [{
        // Default button elements (do not change!)
        tag: 'span',
        reference: 'badgeElement',
        hidden: true
    }, {
        tag: 'span',
        className: Ext.baseCSSPrefix + 'share-button-icon',
        reference: 'iconElement',
        hidden: true
    }, {
        tag: 'span',
        reference: 'textElement',
        hidden: true
    }, {// Loading spinner
        tag: 'div',
        className: Ext.baseCSSPrefix + 'share-button-badge',
        reference: 'badgeContainer',

        children: [{
            tag: 'span',
            className: Ext.baseCSSPrefix + 'share-button-badge-summary-text',
            reference: 'smilesSummaryElement',
        }, {
            tag: 'span',
            className: Ext.baseCSSPrefix + 'share-button-badge-current-text',
            reference: 'smilesCurrentElement',
        }],
    }],

    // Default button states config
    defaultStates: {
        browse: {
            text: 'Browse',
            cls: Ext.baseCSSPrefix + 'fileup',
            ui: 'filebrowse'
        },

        ready: {
            text: 'Upload',
            cls: Ext.baseCSSPrefix + 'fileup-ready',
            ui: 'fileready'
        },

        uploading: {
            text: 'Uploading',
            cls: Ext.baseCSSPrefix + 'fileup-uploading',
            ui: 'fileupload',
            loading: true
        }
    },

    // Current button state
    currentState: null,

    config: {
        baseCls: Ext.baseCSSPrefix + 'share-button',

        /**
         * @cfg {String} name Input element name, check on server for $_FILES['userfile']
         */
        name: 'userfile',

        /**
         * @cfg {Object} states 
         */
        states: true,

        smilesDone: 0,
        smilesTotal: 0,
        smilesCurrent: 0,
    },

    // @private
    applyStates: function (states) {
        var me = this;

        if (states) {

            if (Ext.isObject(states)) {

                // Merge custom config with default
                return Ext.merge({}, me.defaultStates, states);
            } else {
                return me.defaultStates;
            }
        } else {
            return me.defaultStates;
        }
    },

    // @private
    initialize: function () {
        var me = this;
        me.callParent();

        me.on({
            scope: me,
            buffer: 250,// Avoid multiple tap 
            tap: me.onButtonTap
        });

        // Stup initial button state
        //me.changeState('browse');
    },

    updateSmilesDone: function (smilesDone) {
        this.smilesSummaryElement.setText(
            smilesDone + '/' + this.getSmilesTotal());
    },

    updateSmilesTotal: function (smilesTotal) {
        this.smilesSummaryElement.setText(
            this.getSmilesDone() + '/' + smilesTotal);
    },

    updateSmilesCurrent: function (smilesCurrent) {
        this.smilesCurrentElement.setText(smilesCurrent);
    },

    // @private
    onButtonTap: function () {
        var me = this;

        //switch (me.currentState) {

        //    // Currently we handle tap event while button in ready state
        //    // because in all other states button is not accessible
        //    case 'ready':                
        //        me.changeState('uploading');
        //        var file = me.fileElement.dom.files[0];

        //        if (!me.getLoadAsDataUrl()) {
        //            me.fireEvent('uploadstart', file);
        //            me.doUpload(file);                
        //        } else {
        //            me.doLoad(file);
        //        }
        //        break;
        //}
    },

    // @private
    onChanged: function (e) {
        var me = this;

        if (e.target.files.length > 0) {
            me.fireAction('ready', [e.target.files[0]], function () {
                me.changeState('ready');
            }, me);
        } else {
            Ext.device.Notification.show({
                title: 'Error',
                message: 'File selected but not accessible',
                buttons: Ext.MessageBox.OK,
                callback: function () {
                    me.changeState('browse');
                }
            });
        }
    },

    // @private
    changeState: function (state) {
        var me = this;
        var states = me.getStates();

        if (Ext.isDefined(states[state])) {

            // Common tasks for all states
            if (states[state].text) {
                me.setText(states[state].text);
            } else {
                me.setText('');
            }

            if (states[state].cls) {
                me.setCls(states[state].cls);
            } else {
                me.setCls('');
            }

            if (states[state].ui) {
                me.setUi(states[state].ui);
            } else {
                me.setUi('normal');
            }

            if (states[state].loading) {
                me.loadingElement.show();
            } else {
                me.loadingElement.hide();
            }

            // State specific tasks
            switch (state) {
                case 'browse':
                    me.currentState = 'browse';
                    me.reset();
                    break;

                case 'ready':
                    me.currentState = 'ready';
                    me.fileElement.hide();

                    if (me.getAutoUpload()) {
                        me.onButtonTap();
                    }
                    break;

                case 'uploading':
                    me.currentState = 'uploading';
                    break;
            }
        } else {
            // <debug>
            Ext.Logger.warn('Config for FileUp state "' + state + '" not found!');
            // </debug>
        }
    },

    /**
     * @method reset
     * Component reset
     */
    reset: function () {
        var me = this;

        me.setBadgeText(null);
    },
});
