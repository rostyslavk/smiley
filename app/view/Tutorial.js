Ext.define('smiley360.view.Tutorial', {
    extend: 'Ext.Panel',
    alias: 'widget.tutorialiew',
    config: {
        id: 'xTutorialView',
        layout: 'fit',
        fullscreen: true,
        items: [{
            xtype: 'image',
            id: 'xTutorialImage',
            //centered: true,
            src: 'resources/images/mobie_tutorial_1.png',
            style: 'background-size: 100% auto;',
            currentImageIndex: 1,
            listeners: {
                tap: function () {
                    if (++this.currentImageIndex > 7){
                        smiley360.animateViewLeft('mainview');
                        Ext.getCmp('xMainView').hideSidePanel();
                    }
                    else {
                        var imageScr = Ext.String.format(
                            'resources/images/mobie_tutorial_{0}.png', this.currentImageIndex)

                        this.setSrc(imageScr)
                    }
                }
            }
        }],
    },
    listeners: {
        show: function () {
            var xTutorialImage = this.down('#xTutorialImage');

            xTutorialImage.currentImageIndex = 1;
            xTutorialImage.setSrc('resources/images/mobie_tutorial_1.png');
        }
    },
});