smiley360 = smiley360 || {};
smiley360.services = smiley360.services || {};
var mask = false;


smiley360.services.authenticateservice = function (login, password, deviceId, onCompleted) {
	smiley360.services.ajax(
		"authenticate",
		{
			email: login,
			password: password,
			guid: deviceId,
		},
		function (response) {
			response.success = response.success && response.memberID;
			response.ID = response.memberID;
			onCompleted(response);
		});
}

smiley360.services.recoverPassword = function (email, onCompleted) {
	smiley360.services.ajax(
	"recoverPassword",
	{
		email: email
	},
	function (response) {
		if (response.success) {
			(response.status != 'failed') ?
			response.success = true :
			response.success = false;
		}
		onCompleted(response);
	});
}

smiley360.services.sendMessage = function (messageData, onCompleted) {
	smiley360.services.ajax(
        "logComment",
        {
        	memberID: messageData.userId,
        	name: messageData.userName,
        	email: messageData.userEmail,
        	category: messageData.commentCategoryId,
        	comment: messageData.commentText,
        },
            onCompleted
        );
}

/***************** Getter Methods *****************/

smiley360.services.getMemberData = function (memberId, onCompleted) {
	var memberRequest = { memberID: memberId };
	var globalResponse = { UserId: memberId };

	smiley360.services.ajax("getProfile", memberRequest,
        function (response) {
        	if (!response.success) { onCompleted(response) }
        	else { delete response.success; }

        	globalResponse.Profile = response;

        	smiley360.services.ajax("get_member_level", memberRequest,
                function (response) {
                	if (!response.success) { onCompleted(response) }
                	else { delete response.success; }

                	globalResponse.UserLevel = response.level;

                	smiley360.services.ajax("getWhatsHappening", memberRequest,
                        function (response) {
                        	if (!response.success) { onCompleted(response) }
                        	else { delete response.success; }

                        	globalResponse.WhatsHappening = response;

                        	smiley360.services.ajax("getSpecialOffers", memberRequest,
                                function (response) {
                                	if (!response.success) { onCompleted(response) }
                                	else { delete response.success; }

                                	globalResponse.SpecialOffers = response;

                                	smiley360.services.ajax("getOffers", memberRequest,
										function (response) {
											if (!response.success) { onCompleted(response) }
											else { delete response.success; }

											globalResponse.Offers = response;

											smiley360.services.ajax("getMissionList", memberRequest,
												function (response) {
													if (!response.success) { onCompleted(response) }
													else { delete response.success; }

													globalResponse.MissionList = response;

													smiley360.services.ajax("isProfileComplete", memberRequest,
														function (response) {
															if (!response.success) { onCompleted(response) }
															else { delete response.success; }

															globalResponse.isProfileComplete = response;
															globalResponse.specialOffersBrands = [];
															for (var key in globalResponse.SpecialOffers) {
																smiley360.services.ajax("get_smileyConnect_details",
																{
																	memberID: memberId,
																	brandID: globalResponse.SpecialOffers[key].brandID
																},
																function (response) {
																	if (!response.success) { onCompleted(response) }
																	else { delete response.success; }

																	globalResponse.specialOffersBrands.push(response);
																	//alert(response.smileyConnect_detailsImage_URL);
																	globalResponse.success = true;
																	onCompleted(globalResponse);
																});

															};


														});
												});
										});
                                });
                        });
                });
        });
}

smiley360.services.updateMemberData = function (memberId, onCompleted) {
	var memberRequest = { memberID: memberId };
	smiley360.services.ajax("getProfile", memberRequest,
		function (response) {
			if (!response.success) { onCompleted(response) }
			else { delete response.success; }

			smiley360.memberData.Profile = response;

			smiley360.services.ajax("isProfileComplete",
				{
					memberID: memberId
				},
				function (response) {
					if (!response.success) { onCompleted(response) }
					else { delete response.success; }

					smiley360.memberData.isProfileComplete = response;

					response.success = true;
					onCompleted(response);
				});
		});
}

smiley360.services.getMissionDetails = function (missionID, memberID, onCompleted) {
	var missionResponse = { MissionId: missionID };
	smiley360.services.ajax(
		"getMissionDetails",
		{
			missionID: missionID
		},
        function (response) {
        	if (!response.success) { onCompleted(response) }
        	else { delete response.success; }

        	missionResponse.MissionDetails = response;

        	smiley360.services.ajax("getMissionPoints",
				{
					missionID: missionID,
					memberID: memberID
				},
				function (response) {
					if (!response.success) { onCompleted(response) }
					else { delete response.success; }

					missionResponse.MissionPoints = response;
					missionResponse.success = true;

					onCompleted(missionResponse);

				});
        });
}
smiley360.services.getMissionSharingToolDetails = function (missionID, memberID, sharingTool_typeID, onCompleted) {
	smiley360.services.ajax(
		"getMissionSharingToolDetails",
		{
			missionID: missionID,
			memberID: memberID,
			sharingTool_typeID: sharingTool_typeID
		},
			onCompleted
		);
}


smiley360.services.getConnectBrand = function (memberID, brandID, start, howmany, onCompleted) {
	var brandResponse = { BrandId: brandID };
	smiley360.services.ajax(
		"get_smileyConnect_details",
		{
			memberID: memberID,
			brandID: brandID
		},
        function (response) {
        	if (!response.success) { onCompleted(response) }
        	else { delete response.success; }

        	brandResponse.BrandDetails = response;
        	smiley360.services.ajax("get_smileyConnect_comments",
				{
					brandID: brandID,
					start: start,
					howmany: howmany
				},
				function (response) {
					if (!response.success) { onCompleted(response) }
					else { delete response.success; }

					brandResponse.BrandComments = response;

					brandResponse.success = true;

					onCompleted(brandResponse);

				});
        });
}

smiley360.services.getBrandDetails = function (memberID, brandID, onCompleted) {
	smiley360.services.ajax("get_smileyConnect_comments",
					{
						memberID: memberID,
						brandID: brandID
					},

						onCompleted
					);
},
smiley360.services.getProfile = function (memberID, onCompleted) {
	smiley360.services.ajax(
        "getProfile",
        {
        	memberID: memberID
        },
            onCompleted
        );
}

smiley360.services.getConnects_bySearch = function (query, index, pageSize, onCompleted) {
	smiley360.services.ajax("get_smileyConnects_bySearch",
					{
						query: query,
						index: index,
						pageSize: pageSize
					},

						onCompleted
					);
},

smiley360.services.getConnects_byCategory = function (category, subcategory, index, pageSize, onCompleted) {
	smiley360.services.ajax("get_smileyConnects_byCategory",
					{
						category: category,
						subcategory: subcategory,
						index: index,
						pageSize: pageSize
					},

						onCompleted
					);
},

smiley360.services.getMemberIdByDeviceId = function (deviceID, onCompleted) {
	smiley360.services.ajax(
        "getUserByDeviceId",
        {
        	guid: deviceID
        },
        function (response) {
        	response.success = response.success && response.memberID != 0;
        	response.ID = response.memberID;
        	onCompleted(response);
        });
}

smiley360.services.getMemberLevel = function (memberID, onCompleted) {
	smiley360.services.ajax(
		"get_member_level",
		{
			memberID: memberID
		},
			onCompleted
		);
}

smiley360.services.getWhatsHappening = function (memberID, onCompleted) {
	smiley360.services.ajax(
		"getWhatsHappening",
		{
			memberID: memberID
		},
			onCompleted
		);
}


smiley360.services.getSpecialOffers = function (memberID, onCompleted) {
	smiley360.services.ajax(
		"getSpecialOffers",
		{
			memberID: memberID
		},
			onCompleted
		);
}

smiley360.services.getMyBrands = function (memberID, onCompleted) {
	smiley360.services.ajax(
		"getMyBrands",
		{
			memberID: memberID
		},
			onCompleted
		);
}

smiley360.services.getFeaturedBrands = function (onCompleted) {
	smiley360.services.ajax(
		"getFeaturedBrands",
		{
		},
			onCompleted
		);
}

smiley360.services.getHotBrands = function (onCompleted) {
	smiley360.services.ajax(
		"getHotBrands",
		{
		},
			onCompleted
		);
}
smiley360.services.getContactUs = function (onCompleted) {
	smiley360.services.ajax(
		"commentCategories",
		{
		},
			onCompleted
		);
}
smiley360.services.getOffers = function (memberID, onCompleted) {
	smiley360.services.ajax(
		"getOffers",
		{
			memberID: memberID
		},
			onCompleted
		);
}
smiley360.services.getMissionList = function (memberID, onCompleted) {
	smiley360.services.ajax(
		"getMissionList",
		{
			memberID: memberID
		},
			onCompleted
		);
}
/*********************** Create Methods *************/

smiley360.services.createComment = function (commentData, onCompleted) {
	smiley360.services.ajax(
        "create_smileyConnect_comment",
        {
        	memberID: commentData.memberID,
        	brandID: commentData.brandID,
        	text: commentData.text,
        	rating: commentData.rating,
        	imageID: 23,//commentData.imageID,
        },
        onCompleted);
}

/*********************** Util for EditProfile dropdowns *************/

smiley360.services.getLocation = function (zip, onCompleted) {
	smiley360.services.ajax(
		"getLocation",
		{
			zip: zip
		},
			onCompleted
		);
}

smiley360.services.getProfileDropdowns = function (onCompleted) {
	var dropdownValues = {};
	smiley360.services.ajax(
		"get_gender_options",
		{
		},
		function (response) {
			if (!response.success) { onCompleted(response) }
			else { delete response.success; }

			dropdownValues.gender = response;
			smiley360.services.ajax(
				"get_country_options",
				{
				},
				function (response) {
					if (!response.success) { onCompleted(response) }
					else { delete response.success; }

					dropdownValues.country = response;
					smiley360.services.ajax(
						"get_marriageStatus_options",
						{
						},
						function (response) {
							if (!response.success) { onCompleted(response) }
							else { delete response.success; }

							dropdownValues.marital = response;

							smiley360.services.ajax(
								"get_haveChildren_options",
								{
								},
								function (response) {
									if (!response.success) { onCompleted(response) }
									else { delete response.success; }

									dropdownValues.children = response;
									smiley360.services.ajax(
										"get_numberChildren_options",
										{
										},
										function (response) {
											if (!response.success) { onCompleted(response) }
											else { delete response.success; }

											dropdownValues.howmanychildren = response;
											smiley360.services.ajax(
												"get_householdIncome_options",
												{
												},
												function (response) {
													if (!response.success) { onCompleted(response) }
													else { delete response.success; }

													dropdownValues.income = response;
													smiley360.services.ajax(
														"get_raceEthnicity_options",
														{
														},
														function (response) {
															if (!response.success) { onCompleted(response) }
															else { delete response.success; }

															dropdownValues.race = response;
															smiley360.services.ajax(
																"get_state_options",
																{
																},
																function (response) {
																	if (!response.success) { onCompleted(response) }
																	else { delete response.success; }

																	dropdownValues.stateID = response;

																	dropdownValues.success = true;

																	onCompleted(dropdownValues);
																});
														});
												});
										});
								});
						});
				});
		});
}

/***************** OfferAcceptance ******************/

smiley360.services.declineMission = function (memberID, missionID, onCompleted) {
	smiley360.services.ajax(
		"declineMission",
		{
			memberID: memberID,
			missionID: missionID
		},
			onCompleted
		);
}

smiley360.services.acceptMission = function (memberID, missionID, onCompleted) {
	smiley360.services.ajax(
		"acceptMission",
		{
			memberID: memberID,
			missionID: missionID
		},
			onCompleted
		);
}

/***************** ContactUs Methods *****************/

smiley360.services.contactUs = function (memberID, name, email, category, comment, onCompleted) {
	smiley360.services.ajax(
		"logComment",
		{
			memberID: memberID,
			name: name,
			email: email,
			category: category,
			comment: comment
		},
			onCompleted
		);
}

/***************** Address Methods ******************/

smiley360.services.getMemberAddress = function (memberID, onCompleted) {
	smiley360.services.ajax(
		"getMemberAddress",
		{
			memberID: memberID
		},
			onCompleted
		);
}

smiley360.services.setMemberAddress = function (memberID, addr1, addr2, city, stateID, zip, countryID, onCompleted) {
	smiley360.services.ajax(
		"setMemberAddress",
		{
			memberID: memberID,
			addr1: addr1,
			addr2: addr2,
			city: city,
			stateID: stateID,
			zip: zip,
			countryID: countryID
		},
			function (response) {
				if (!response.success) { onCompleted(response) }
				else { delete response.success; }

				smiley360.services.ajax(
					"getMemberAddress",
					{
						memberID: memberID
					},
					function (response) {
						if (!response.success) { onCompleted(response) }
						else { delete response.success; }

						//dropdownValues.stateID = response;

						response.success = true;

						onCompleted(response);
					});
			});
}

smiley360.services.verifyMemberAddress = function (memberID, onCompleted) {
	smiley360.services.ajax(
		"verifyMemberAddress",
		{
			memberID: memberID
		},
			onCompleted
		);
}

/***************** Setter Methods *****************/

smiley360.services.setProfile = function (memberID, profArr, onCompleted) {
	smiley360.services.ajax(
		"setProfile",
		{
			memberID: memberID,
			profArr: profArr
		},
			function (response) {
				if (!response.success) { onCompleted(response) }
				else { delete response.success; }

				smiley360.services.ajax("getProfile",
				{
					memberID: memberID
				},
				function (response) {
					if (!response.success) { onCompleted(response) }
					else { delete response.success; }

					smiley360.memberData.Profile = response;

					smiley360.services.ajax("isProfileComplete",
						{
							memberID: memberID
						},
						function (response) {
							if (!response.success) { onCompleted(response) }
							else { delete response.success; }

							smiley360.memberData.isProfileComplete = response;

							response.success = true;
							onCompleted(response);
						});
				});
			});
}
smiley360.services.follow = function (memberID, brandID, onCompleted) {
	smiley360.services.ajax(
		"follow_smileyConnect",
		{
			memberID: memberID,
			brandID: brandID
		},
			onCompleted
		);
}
smiley360.services.unfollow = function (memberID, brandID, onCompleted) {
	smiley360.services.ajax(
		"unfollow_smileyConnect",
		{
			memberID: memberID,
			brandID: brandID
		},
			onCompleted
		);
}

smiley360.services.signupMember = function (first, last, username, password, email, zip, birthdate, gender, guid, onCompleted) {
	smiley360.services.ajax(
		"signupMember",
		{
			first: first,
			last: last,
			username: username,
			password: password,
			email: email,
			zip: zip,
			birthdate: birthdate,
			gender: gender,
			guid: guid,
		},
			onCompleted
		);
}

/***************** Share Methods *****************/

smiley360.services.postToBlog = function (postData, onCompleted) {
	smiley360.services.ajax(
        "postblog",
        {
        	missionID: postData.missionID,
        	memberID: postData.memberID,
        	blogURL: postData.blogURL,
        },
        onCompleted);
}

smiley360.services.postToYoutube = function (postData, onCompleted) {
	smiley360.services.ajax(
        "postyoutube",
        {
        	missionID: postData.missionID,
        	memberID: postData.memberID,
        	youtubeURL: postData.youtubeURL,
        },
        onCompleted);
}

smiley360.services.postToTwitter = function (postData, onCompleted) {
	smiley360.services.ajax(
        "posttwitter",
        {
        	missionID: postData.missionID,
        	memberID: postData.memberID,
        	text: postData.text,
        },
        onCompleted);
}

smiley360.services.postToFacebook = function (postData, onCompleted) {
	smiley360.services.ajax(
        "postfacebook",
        {
        	missionID: postData.missionID,
        	memberID: postData.memberID,
        	text: postData.text,
        	rating: postData.rating,
        	postOptionIDs: postData.postOptionIDs,
        },
        onCompleted);
}

smiley360.services.postToUploadPhoto = function (postData, onCompleted) {
	smiley360.services.ajax(
        "postuploadphoto",
        {
        	missionID: postData.missionID,
        	memberID: postData.memberID,
        	text: postData.text,
        	postOptionIDs: postData.postOptionIDs,
        },
        onCompleted);
}

smiley360.services.postToConnect = function (postData, onCompleted) {
	smiley360.services.ajax(
        "postconnect",
        {
        	missionID: postData.missionID,
        	memberID: postData.memberID,
        	text: postData.text,
        	rating: postData.rating,
        	imageID: postData.imageID,
        },
        onCompleted);
}

smiley360.services.postToFace2face = function (postData, onCompleted) {
	smiley360.services.ajax(
        "postface2face",
        {
        	missionID: postData.missionID,
        	memberID: postData.memberID,
        	sharepeople: postData.sharepeople,
        	rating: postData.rating,
        	desc: postData.desc,
        },
        onCompleted);
}

/***************** Helper Members *****************/
function delayedUnMask() {
	Ext.Function.defer(function () {
		if (mask == false) {
			Ext.Viewport.setMasked(false);
		}
	}, 3500);
}

smiley360.services.ajax = function (method, params, onCompleted) {
	mask = true;
	//alert(Ext.Viewport.getMasked());
	var preventLoadIndicator = false;
	var noSpecialLoadMethods = ['getMissionSharingToolDetails', 'postconnect', 'postblog',
		'postyoutube', 'postfacebook', 'posttwitter', 'postuploadphoto'];
	for (var method_key in noSpecialLoadMethods)
		if (noSpecialLoadMethods[method_key] == method)
			preventLoadIndicator = true;

	if (isLoadedApp && !preventLoadIndicator)
		if (!Ext.Viewport.getMasked() || Ext.Viewport.getMasked()) {
			Ext.Viewport.setMasked({ xtype: 'loadmask', indicator: true, message: 'We are fetching data for you...<br>Please, wait...' });
		}

	Ext.data.JsonP.request(
	{
		url: smiley360.configuration.getServerUrl() + "?method=" + method + "&params=" + Ext.JSON.encode(params),
		callback: function (result, response) {
			if (response == null) {
				onCompleted(Ext.apply({ success: false }, response));
				mask = false;
				delayedUnMask();
			}
			else if (response.error == 'Error. This method requires authorization') {
				Ext.Msg.alert('You are not authorized or your session is expired.');
				smiley360.animateViewLeft('loginview');
				mask = false;
				delayedUnMask();
			}
			else {
				onCompleted(Ext.apply({ success: (result && !response.error) }, response));
				mask = false;
				delayedUnMask();
			}
		}
	});
}