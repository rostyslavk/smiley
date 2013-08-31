var xIsReviewState = true;

Ext.define('smiley360.view.ReviewForFender', {
	extend: 'Ext.Container',
	alias: 'widget.reviewforfenderview',
	requires: [
        'Ext.Anim',
        'Ext.Rating',
        'Ext.ux.Fileup',
	],
	config: {
		modal: true,
		centered: true,
		fullscreen: true,
		hideOnMaskTap: true,
		id: 'xReviewView',
		scrollable: 'vertical',
		cls: 'popup-panel',
		items: [{
			xtype: 'panel',
			id: 'xRootPanel',
			cls: 'popup-root-panel',
			items: [{
				xtype: 'image',
				docked: 'top',
				cls: 'popup-close-button',
				listeners: {
					tap: function () {
						this.up('#xReviewView').destroy();
					}
				}
			}, {
				xtype: 'panel',
				layout: 'hbox',
				cls: 'popup-top-panel forgetpwd-background',
				items: [{
					xtype: 'label',
					id: 'xTitleLabel',
					cls: 'popup-title-text',
					html: 'Add your review for Fender',
				}],
			}, {
				xtype: 'panel',
				id: 'xStatusIndicator',
				cls: 'popup-status-indicator',
			}, {
				xtype: 'panel',
				id: 'xReviewPanel',
				cls: 'popup-middle-panel popup-status-container',
				items: [{
					xtype: 'fileupload',
					id: 'xAddPhotoButton',
					cls: 'popup-photo-button',
					style: 'height: 30px; padding: 5px; margin-top: -3px;',
					autoUpload: true,
					states: {
						browse: {
							text: 'ADD PHOTO'
						},
						uploading: {
							text: 'Uploading',
							loading: true// Enable loading spinner on button
						}
					},
					listeners: {
						success: function (response) {
							this.disable();

							//var xView = this.up('#xView');
							//var xAddedImage = xView.down('#xAddedImage');
							//var xReviewText = xView.down('#xReviewText');

							//xAddedImage.show();
							//xAddedImage.setHeight(xReviewText.element.getHeight());
							//xAddedImage.setWidth(xReviewText.element.getWidth() * 0.4);
							//xAddedImage.setSrc(smiley360.configuration.getServerDomain() + response.filepath);
						}
					}
				}, {
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'rating',
						id: 'xRating',
						label: 'Rate the product:',
						labelWidth: 'auto',
						itemsCount: 5,
						itemCls: 'x-rating-star',
						itemHoverCls: 'x-rating-star-hover',
					}]
				}, {
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'textareafield',
						flex: 1,
						maxRows: 5,
						minLength: 70,
						isFocused: false,
						id: 'xReviewText',
						cls: 'popup-input popup-input-text',
						listeners: {
							keyup: function () {
								var xReviewView = this.up('#xReviewView');
								var postLenght = this.getValue().length;

								xReviewView.down('#xReviewCountLabel').setHtml(postLenght.toString());
								xReviewView.validateForm();
							}
						}
					}, {
						xtype: 'image',
						id: 'xAddedImage',
						cls: 'popup-photo-image',
						style: 'margin: 5px 0px 5px 5px;',
						hidden: true,
					}]
				}, {
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'label',
						cls: 'popup-post-bottom-text',
						style: 'color: #878789;',
						html: 'Post must contain at least 70 characters.',
					}, {
						xtype: 'label',
						id: 'xReviewCountLabel',
						docked: 'right',
						cls: 'popup-post-bottom-text',
						html: '0',
					}],
				}],
			}, {
				xtype: 'panel',
				id: 'xGuidelinesPanel',
				cls: 'popup-middle-panel popup-status-container',
				hidden: true,
				items: [{
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'label',
						minWidth: 20,
						cls: 'popup-guidelines-text',
						html: '1.'
					}, {
						xtype: 'label',
						maxWidth: '95%',
						cls: 'popup-guidelines-text',
						html: 'Please remember the FTC requires you to mention that you received a free sample courtesy of Smiley360 when sharing.',
					}]
				}, {
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'label',
						minWidth: 20,
						cls: 'popup-guidelines-text',
						html: '2.'
					}, {
						xtype: 'label',
						maxWidth: '95%',
						cls: 'popup-guidelines-text',
						html: 'Written from the 1st person perspective about a personal expierence with a brand, product or service',
					}]
				}, {
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'label',
						minWidth: 20,
						cls: 'popup-guidelines-text',
						html: '3.'
					}, {
						xtype: 'label',
						maxWidth: '95%',
						cls: 'popup-guidelines-text',
						html: 'Generally, 1 to 2 paragraphs with 175-300 words',
					}]
				}, {
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'label',
						minWidth: 20,
						cls: 'popup-guidelines-text',
						html: '4.'
					}, {
						xtype: 'label',
						maxWidth: '95%',
						cls: 'popup-guidelines-text',
						html: 'May contain a photograph, video or link',
					}]
				}, {
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'label',
						minWidth: 20,
						cls: 'popup-guidelines-text',
						html: '5.'
					}, {
						xtype: 'label',
						maxWidth: '95%',
						cls: 'popup-guidelines-text',
						html: 'Colorful language and imagery is fine, but threads, harassment, profanity, lewdness or other inappropriate displays will be flagged and removed.',
					}]
				}, {
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'label',
						minWidth: 20,
						cls: 'popup-guidelines-text',
						html: '6.'
					}, {
						xtype: 'label',
						maxWidth: '95%',
						cls: 'popup-guidelines-text',
						html: 'Reviews should be factually accurate. If the review or opnition contains facts, care should be taken not to exaggerate or misrepresent the expirience.',
					}]
				}, {
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'label',
						minWidth: 20,
						cls: 'popup-guidelines-text',
						html: '7.'
					}, {
						xtype: 'label',
						maxWidth: '95%',
						cls: 'popup-guidelines-text',
						html: 'Reviews should be unbiased and objective when possible.',
					}]
				}]
			}, {
				xtype: 'panel',
				cls: 'popup-bottom-panel',
				items: [{
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'checkboxfield',
						id: 'xAgreementCheckbox',
						label: 'You agree to the ',
						labelAlign: 'right',
						labelWidth: '100%',
						labelCls: 'popup-checkbox-grey-label',
						cls: 'popup-checkbox',
						listeners: {
							check: function () {
								this.up('#xReviewView').validateForm();
							},
							uncheck: function () {
								this.up('#xReviewView').validateForm();
							},
						}
					}, {
						xtype: 'button',
						ui: 'plain',
						cls: 'popup-checkbox-link',
						html: 'Review Guidelines',
						listeners: {
							tap: function () {
								var xReviewView = this.up('#xReviewView');

								xReviewView.showGuidelines();
								xReviewView.down('#xShareButton').enable();
							}
						}
					}],
				}],
			}, {
				xtype: 'panel',
				cls: 'popup-button-panel',
				items: [{
					xtype: 'button',
					text: 'ADD REVIEW',
					id: 'xShareButton',
					cls: 'popup-submit-button',
					disabled: true,
					listeners: {
						tap: function () {
							var xReviewView = this.up('#xReviewView');

							if (xIsReviewState) {
								if (smiley360.postReview) xReviewView.doAddReview()
								else xReviewView.doPostConnect();
							}
							else {
								xReviewView.showReviewForm();
								xReviewView.validateForm();
							}
						}
					},
				}],
			}],
		}],
		listeners: {
			initialize: function () {
				smiley360.adjustPopupSize(this);
			},
			hide: function () {
				this.destroy();
			},
			painted: function () {
				var fileName = guid();
				var uploadUrl = smiley360.configuration.getServerDomain() +
                    'getfile.php?foldername=comments&filename=' + fileName;

				this.down('#xAddPhotoButton').setUrl(uploadUrl);
			}
		},
	},

	doAddReview: function () {
		var commentView = this;
		var commentData = {
			memberID: smiley360.memberData.UserId,
			brandID: smiley360.brandData.BrandId,
			text: this.down('#xReviewText').getValue(),
			rating: this.down('#xRating').getValue(),
			imageID: 23,
		};

		smiley360.setViewStatus(commentView, smiley360.viewStatus.progress);
		smiley360.services.createComment(commentData, function (response) {
			smiley360.setResponseStatus(commentView, response);
		});
	},

	doPostConnect: function () {
		//alert('PostConnect');
		var commentView = this;
		var commentData = {
			memberID: smiley360.memberData.UserId,
			missionID: Ext.getCmp('xDetailsView').getCurrentMission().MissionId,
			text: this.down('#xReviewText').getValue(),
			rating: this.down('#xRating').getValue()
			//imageID: imageID,
		};

		smiley360.setViewStatus(commentView, smiley360.viewStatus.progress);
		smiley360.services.postToConnect(commentData, function (response) {
			smiley360.setResponseStatus(commentView, response);
		});
	},

	showReviewForm: function () {
		xIsReviewState = true;

		this.down('#xReviewPanel').show();
		this.down('#xGuidelinesPanel').hide();
		this.down('#xTitleLabel').setHtml('Add your Review for Fender')
		this.down('#xShareButton').setText('ADD REVIEW');

		smiley360.adjustPopupSize(this);
	},

	showGuidelines: function () {
		xIsReviewState = false;

		this.down('#xReviewPanel').hide();
		this.down('#xGuidelinesPanel').show();
		this.down('#xTitleLabel').setHtml('Review Guidelines')
		this.down('#xShareButton').setText('GO BACK TO YOUR REVIEW');

		smiley360.adjustPopupSize(this);
	},

	validateForm: function () {
		var postLenght = this.down('#xReviewText').getValue().length;
		if (postLenght < 70 || this.down('#xAgreementCheckbox').getChecked() == false) {
			this.down('#xShareButton').disable();
		}
		else {
			this.down('#xShareButton').enable();
		}
	},

	//setMissionId: function (missionId) {
	//    this.missionId = missionId;
	//},

	//missionId: undefined,
});