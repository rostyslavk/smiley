Ext.define('smiley360.view.SharePanel', {
	extend: 'Ext.Container',
	alias: 'widget.sharepanel',
	requires: ['Ext.ux.ShareButton'],
	config: {
		cls: 'share-panel',
		layout: 'fit',
		html: '<div id="xShareButtons" align="center"></div>'
	},

	missionDetails: {},

	setShareButtons: function (missionDetails) {
		this.missionDetails = missionDetails;

		var xShareButtons = Ext.get('xShareButtons');
		var smilesArray = missionDetails.MissionPoints.sharingToolScore;
		var pointsArray = missionDetails.MissionPoints;
		var currentBrand = missionDetails.MissionDetails.brandName;
		var currentBrandId = missionDetails.MissionDetails.brandID;

		if (missionDetails.MissionDetails.mission_sharing_disabled == '1') {
			xShareButtons.setHtml(missionDetails.MissionDetails.sharing_disabled_message);
		}
		else {
			// clear existed buttons
			xShareButtons.setHtml('');

			for (var key in smilesArray) {
				var oneItem = smilesArray[key];
				var oneButton = undefined;

				switch (oneItem.sharingTool_typeID) {
					case smiley360.sharingType.facebook:
						oneButton = this.createShareButton(oneItem, 'share-fb-btn', 'sharetofacebookview');
						break;
					case smiley360.sharingType.twitter:
						oneButton = this.createShareButton(oneItem, 'share-tw-btn', 'sharetotwitterview');
						break;
					case smiley360.sharingType.shareLink:
						oneButton = this.createShareButton(oneItem, 'share-link-btn', 'sharelinkview');
						break;
					case smiley360.sharingType.face2face:
						oneButton = this.createShareButton(oneItem, 'share-f2f-btn', 'sharetoface2faceview');
						break;
					case smiley360.sharingType.smileyConnect:
						oneItem.currentBrand = currentBrand;
						oneItem.currentBrandId = currentBrandId;
						oneButton = this.createShareButton(oneItem, 'share-sm_conn-btn', 'reviewforfenderview');
						break;
					case smiley360.sharingType.uploadPhoto:
						oneButton = this.createShareButton(oneItem, 'share-photo-btn', 'uploadphotoview');
						break;
					case smiley360.sharingType.blog:
						oneButton = this.createShareButton(oneItem, 'share-blog-btn', 'sharetoblogview');
						break;
					case smiley360.sharingType.youtube:
						oneButton = this.createShareButton(oneItem, 'share-yt-btn', 'sharetoyoutubeview');
						break;
					case smiley360.sharingType.pinterest:
						oneButton = this.createShareButton(oneItem, 'share-pin-btn', 'sharetopinterestview');
						break;
					default:
						console.log('SharePanel -> undefined sharing type detected: ', oneItem.sharingTool_typeID);
				}

				var divTag = document.createElement("div");
				divTag.style.width = '90px';
				divTag.style.height = '90px';
				divTag.style.padding = '2px';
				divTag.style.display = 'inline-table';
				divTag.setAttribute("align", "left");

				oneButton.renderTo(divTag);
				xShareButtons.appendChild(divTag);
			}
		}
	},

	createShareButton: function (shareItem, buttonCls, shareViewAlias) {
		var me = this;

		return new Ext.ux.ShareButton(
            {
            	cls: buttonCls,
            	smilesDone: shareItem.sharingTool_current_smiles,
            	smilesTotal: shareItem.sharingTool_max_smiles,
            	smilesCurrent: shareItem.sharingTool_perShare_smiles,
            	listeners: {
            		tap: function () {
            			if ((shareViewAlias == 'sharetofacebookview' && (!smiley360.memberData.Profile.fbtoken || smiley360.memberData.Profile.fbtoken == ""))
							|| (shareViewAlias == 'sharetotwitterview' && (!smiley360.memberData.Profile.twitter_token || smiley360.memberData.Profile.twitter_token == ""))) {
            				
            				var shareView = Ext.widget('connectpopupview').show();
            				if (shareView.setToolName)
            					if (shareViewAlias == 'sharetofacebookview')
            						shareView.setToolName('Facebook')
            					else shareView.setToolName('Twitter');
            			}

            			else {
            				var shareView = Ext.widget(shareViewAlias).show();
            				Ext.getCmp('xDetailsView').fireEvent('goSetSharingInfo', this, me.missionDetails.MissionId, smiley360.memberData.UserId, shareItem.sharingTool_typeID, shareView);

            				if (shareView.setEarnSmiles)
            					shareView.setEarnSmiles(this.getSmilesCurrent());

            				if (shareView.setMissionId)
            					shareView.setMissionId(me.missionDetails.MissionId);

            				if (shareViewAlias == 'reviewforfenderview')
            					Ext.getCmp('xDetailsView').fireEvent('onShareConnectTapCommand', 'Share', smiley360.memberData.UserId, shareItem.currentBrand, shareItem.currentBrandId);
            			}
            		}
            	}
            });
	}
});