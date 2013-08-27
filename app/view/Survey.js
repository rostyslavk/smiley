Ext.define('smiley360.view.Survey', {
    extend: 'Ext.Panel',
    alias: 'widget.surveyview',
    config: {
        title: 'Take This Survey',
        layout: 'fit',
        items: [{
            xtype: 'panel',
            scrollable: 'vertical',
            cls: 'popup-survey-innerpanel',
            items: [{
                xtype: 'panel',
                margin: '0px -16px 0px 0px',
                html: '<iframe id="xSurveyFrame" frameborder="0" scrolling="yes" class="popup-survey-iframe"></iframe>',
            }]
        }],
    },
});