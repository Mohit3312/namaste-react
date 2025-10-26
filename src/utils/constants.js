export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://cdn6.f-cdn.com/contestentries/1076909/19407170/596ace798bbb0_thumb900.jpg";

export const MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.601586&lng=77.306868&restaurantId=";

export const RES_MENU_MOCK_RESPONSE = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Flavour Of Southvala",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
              {
                id: "Dineout",
                title: "Dineout",
                cta: "https://swiggy.com/menu/177752/dineout",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "177752",
              name: "Flavour Of Southvala",
              city: "Delhi",
              slugs: {
                restaurant:
                  "flavour-of-southvala-pvt-ltd-padam-singh-road-karol-bagh",
                city: "delhi",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "n9kwebsp4c3xr4st8gmo",
              locality: "Karol Bagh",
              areaName: "Karol Bagh",
              costForTwo: "30000",
              costForTwoMessage: "₹300 for two",
              cuisines: ["South Indian", "Chinese"],
              avgRating: 4.4,
              feeDetails: {
                restaurantId: "177752",
                fees: [{}],
                icon: "v1648635511/Delivery_fee_new_cjxumu",
              },
              parentId: "80346",
              avgRatingString: "4.4",
              totalRatingsString: "9.2K+ ratings",
              sla: {
                restaurantId: "177752",
                deliveryTime: 52,
                minDeliveryTime: 50,
                maxDeliveryTime: 60,
                lastMileTravel: 6.9,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_IT_IS_LONG_DISTANCE",
                zoneId: 96,
                slaString: "50-60 MINS",
                lastMileTravelString: "6.9 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-10-25 22:45:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "Get items under 69",
                shortDescriptionList: [
                  {
                    meta: "99 store",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "30% off | Use FIRSTMEAL",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "99 store",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "30% off | Use FIRSTMEAL",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString:
                "flavour-of-southvala-pvt-ltd-padam-singh-road-karol-bagh",
              multiOutlet: true,
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "6/79 Padam Singh Road, Wea Block, Karolbagh New Delhi-110005",
                },
                {
                  title: "Cuisines",
                  message: "South Indian,Chinese",
                },
              ],
              totalRatings: 9200,
              aggregatedDiscountInfoV2: {
                header: "Get items under 69",
                shortDescriptionList: [
                  {
                    meta: "99 store",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "30% off | Use FIRSTMEAL",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "99 store",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "30% off | Use FIRSTMEAL",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  priority: 5,
                  discountInfo: {
                    discountType: "FinalPrice",
                    value: 129,
                  },
                  unlockedMessage: "Deal of the Day unlocked!",
                  minItemCount: 1,
                  maxItemCount: 1,
                  type: "SILD",
                  nudgeTagInfo: {
                    title: "Deal of the Day",
                    fontName: "FONT_NAME_CONDENSED_BOLD",
                  },
                  logoCtx: {},
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/177752",
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                freedelMessage: "Free delivery on orders above ₹99",
              },
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "28.647357,77.19190200000003",
              backgroundImageOverlayInfo: {},
              featuredSectionInfo: {},
              requestContexts: ["enable_ecosaver", "99store"],
              dishStyle: {
                socialMarkerStyle: [
                  {
                    socialMarkerType: "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                    title: "Protein Rich",
                    textStyle: "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                    textColor: "highlight",
                  },
                  {
                    socialMarkerType: "SOCIAL_MARKER_TYPE_BESTSELLER",
                    title: "Bestseller",
                    textStyle: "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                    textColor: "color_swiggy_one",
                  },
                ],
              },
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "ITEMS AT ₹69",
                      offerTag: "DEAL OF DAY",
                      offerTagColor: "#E46D47",
                      offerIds: ["c8ef63a6-5cc7-484f-857d-a62833ad19b2"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      description: "ON SELECT ITEMS |",
                      offerType: "offers",
                      restId: "177752",
                      offerLogo: "offers/deal-of-day",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "30% OFF UPTO ₹75",
                      offerTag: "DEFAULT",
                      offerTagColor: "#E46D47",
                      offerIds: ["8b236079-1438-48a1-82e6-a0c1c0f351cf"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FIRSTMEAL",
                      description: "ABOVE ₹159",
                      offerType: "offers",
                      restId: "177752",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE FIRSTMEAL",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹150 OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["01e7e6e5-a7c8-4767-b3b2-4d6ee4ecdb87"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE DELICIOUS",
                      description: "ABOVE ₹549",
                      offerType: "offers",
                      restId: "177752",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE DELICIOUS",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹200 OFF",
                      offerTag: "DEFAULT",
                      offerTagColor: "#E46D47",
                      offerIds: ["95dba2d5-5f6d-4f4c-9eac-e7d0e56202a3"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE CELEBRATIONS",
                      description: "ABOVE ₹799",
                      offerType: "offers",
                      restId: "177752",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE CELEBRATIONS",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "20% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/10/2/a27b7409-4e94-4105-b4a5-4c9cfb2457d1_BankofBarodaMenuLogo.png",
                      offerIds: ["2733e4f8-68cf-4850-a398-28f03e12abdc"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE BOBDC100",
                      description: "ABOVE ₹499",
                      offerType: "offers",
                      restId: "177752",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/10/2/a27b7409-4e94-4105-b4a5-4c9cfb2457d1_BankofBarodaMenuLogo.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE BOBDC100",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                        isSelected: true,
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                      title: "Top Picks",
                      carousel: [
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "5549392",
                          creativeId: "TopPicks2024/40602322E.png",
                          title: "Chicken Biryani",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "40602322",
                              name: "Chicken Biryani",
                              category: "Briyani Varieties",
                              description: "(WITH SWEET, SALNA & RAITA)",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/5275f55d-f099-45c9-8aa2-facca8d43383_7e4658de-390a-4f44-83c0-0ead0c73e4d5.jpeg",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              itemPriceStrikeOff: true,
                              parentId: "44570449",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "highlight",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "5276060",
                          creativeId: "TopPicks2024/40602283B.png",
                          title: "Chicken Kothu Parotta",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "40602283",
                              name: "Chicken Kothu Parotta",
                              category: "Southvala Specials",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/7d7e4c77-9c87-4d1b-8817-bf01aa984213_50cf0405-c444-4d52-962c-b22a4f535c58.jpeg",
                              inStock: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                              itemPriceStrikeOff: true,
                              parentId: "44570457",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "highlight",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "5547824",
                          creativeId: "TopPicks2024/159133205E.png",
                          title: "Chicken 65 (150 Gm)",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "159133205",
                              name: "Chicken 65 (150 Gm)",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/dc544ec9-d695-4c1f-ab01-6cbf88d8c22a_ddeb0fb2-289d-4497-8385-29bea7cdbb1d.jpeg",
                              inStock: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              itemPriceStrikeOff: true,
                              parentId: "46311144",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "highlight",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "5272876",
                          creativeId: "TopPicks2024/40602335B.png",
                          title: "Masala Dosa",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "40602335",
                              name: "Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/10ea976a-8192-4cf1-be30-6859b9b79dbc_1c7dc206-9356-45a8-a119-f8dee76ced50.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                              itemPriceStrikeOff: true,
                              parentId: "33041223",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "highlight",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "5295466",
                          creativeId: "TopPicks2024/87122055B.png",
                          title: "Pepper Chicken Fry",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "87122055",
                              name: "Pepper Chicken Fry",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/22494794-e45e-4308-8916-a0f262d4472a_0025171e-8ead-48f9-9a0e-022d694356cc.jpeg",
                              inStock: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                              itemPriceStrikeOff: true,
                              parentId: "46311188",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "highlight",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "5274951",
                          creativeId: "TopPicks2024/40602382B.png",
                          title: "Parotta",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "40602382",
                              name: "Parotta",
                              category: "Southvala Tawa Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/c68e60cd-e6b9-4827-a8cb-8176637b6f92_6f24644c-63fb-4593-84ed-728b3c164f86.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              itemPriceStrikeOff: true,
                              parentId: "44570524",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "highlight",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "5276215",
                          creativeId: "TopPicks2024/40602282B.png",
                          title: "Egg Kothu Parotta",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "40602282",
                              name: "Egg Kothu Parotta",
                              category: "Southvala Specials",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/1cd51267-c8b3-40bb-b309-70e30387406b_85349f86-2517-4b6e-b8f7-44ec529b4fa8.jpeg",
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              itemPriceStrikeOff: true,
                              parentId: "44570483",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "highlight",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "5291499",
                          creativeId: "TopPicks2024/87122029B.png",
                          title: "Southvala Veg Meals",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "87122029",
                              name: "Southvala Veg Meals",
                              category: "Indian Platter",
                              description:
                                "(Rice + Poori / Chapati) / 2 Bowl Rice + Sambar Rasam, Kootu + Poriyal + Vatha Kulambu + Curd + Sweet + Appalam)",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/43a84ee4-27f4-4044-b328-0c7f3add166a_e9f96a74-bc45-435d-afc6-267dcf417578.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388484",
                                  groupName: "Choose Any 1",
                                  choices: [
                                    {
                                      id: "131734926",
                                      name: "Poori",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734928",
                                      name: "Chapati",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734922",
                                      name: "2 Bowl Rice",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              itemPriceStrikeOff: true,
                              parentId: "67552829",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "highlight",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Dosa Varieties",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602335",
                              name: "Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/10ea976a-8192-4cf1-be30-6859b9b79dbc_1c7dc206-9356-45a8-a119-f8dee76ced50.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041223",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794079",
                              name: "Set Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/55d9fb8f-90ea-4f41-972c-897f47b38833_73b957de-c9a5-412a-a918-8a6a9de52434.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 19000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "46311199",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794134",
                              name: "Schezwan Cheese Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/28839ccd-c89e-4e3d-bb7a-3f920c9b35c6_89687be0-dd2a-49dc-8fb6-f4234410c6f0.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "33041329",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "61211816",
                              name: "Plain Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/c3ad2001-6937-40e9-a360-e06d11539920_931a1d68-0440-4b3b-8b1e-598c73cec548.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 19000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "142 ratings",
                                  ratingCountV2: "142",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "8186797",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602386",
                              name: "Ghee Podi Dosa",
                              category: "Dosa Varieties",
                              imageId: "9f540afdbe8e752485bffc8cb0769ee3",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "75 ratings",
                                  ratingCountV2: "75",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "33041176",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602398",
                              name: "Butter Mysore Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/800f024a-acce-46fb-bbef-f854f5b9414b_21463e75-5fae-4396-995b-851bab550292.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "127 ratings",
                                  ratingCountV2: "127",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041116",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794160",
                              name: "Mutton Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/831b4cf7-1c4d-4f3d-8115-811a3cb866a0_734fff61-2fbc-429d-bb95-105eaa1016c5.jpeg",
                              inStock: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438116",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133172",
                              name: "Cheese Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/11/28/b5c02fba-e32d-4fd2-a1b2-7fbe1e2d1b57_c66e2bf7-36a9-4ca6-88e5-601ecd19c9c4.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "108657534",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122017",
                              name: "Cheese Paneer Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/72ad8f55-2fe5-4963-b694-75e374b97c0d_af899916-06d2-43c4-9049-50e0b341c648.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041136",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602404",
                              name: "Butter Paneer Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/e9adb592-5612-4873-a8e8-3f2c25b1ec2a_86b1033b-a1fb-4ec9-8afb-ea12605165c7.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041126",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794141",
                              name: "Chicken Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/cc3b8524-204c-44c5-9f63-0963b42c7cc0_a5cd450c-1a57-449d-8155-263edd12e512.jpeg",
                              inStock: 1,
                              price: 37000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438089",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602403",
                              name: "Paneer Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/214d8554-5a4d-4376-9573-460068f73799_1a124ccb-adc2-46f7-b946-8b4faa815870.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "28 ratings",
                                  ratingCountV2: "28",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041279",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133174",
                              name: "Ghee Roast Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/630cda63-dfdb-47f0-a553-b3e6d58db370_b4f453bc-6794-4863-8014-ff15b1386926.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438109",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122020",
                              name: "Butter Mysore Paneer Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/cdc13254-c275-40eb-80c4-dd566779802a_114a147f-6214-4656-a2fc-5ecb32099a91.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 32000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570442",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602390",
                              name: "Onion Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/601c34f7-375c-40cd-95be-14199f1e20e0_d7e78537-43f6-4124-b8cd-b2b0b4538bc8.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "61 ratings",
                                  ratingCountV2: "61",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041263",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87121993",
                              name: "Butter Onion Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/5da5cc42-41f3-461e-9de9-5ff563307651_e7dd18ff-1bab-4613-b9df-61f7241c0c6b.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 26000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041121",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133175",
                              name: "Spring Roll Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/25/ddc695d1-94b2-4fbe-8312-e41203222814_107da461-8ab3-46ef-b325-bb0d1653b030.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "108657535",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122007",
                              name: "Butter Roast Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/c911b2bb-c34e-4ab8-b18a-7f10b9b9288b_5277a489-0b6f-4554-a12a-fc0917bfad7c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570443",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122006",
                              name: "Butter Mysore Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/99f03ab7-2aea-49ef-afab-99661768a832_7df8036e-a41b-4c16-aa4b-a8575fc90f1f.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311133",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133173",
                              name: "Egg Dosa (2 Eggs)",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/9bd67390-99a5-4d3f-95f9-8d2440869ce1_91635c08-b08f-460b-9c70-ade459338edc.jpeg",
                              inStock: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207952",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602395",
                              name: "Ghee Podi Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/dc0ed3ba-febf-452a-bc72-2ef79f619183_67de8268-e833-4468-9912-89d44d80aa05.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "1.8",
                                  ratingCount: "27 ratings",
                                  ratingCountV2: "27",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#FFF0CD", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_low",
                                  ratingTextColor: "rating_low",
                                  ratingCountTextColor: "rating_low",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041178",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602393",
                              name: "Ghee Roast Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/ba17749b-4677-45b8-b3f6-8cf87f280a6f_775f484d-a2b6-48e4-b4ed-0829ede54e2e.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "48 ratings",
                                  ratingCountV2: "48",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041187",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133176",
                              name: "Veg. Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/5c57f8da-2b8f-459b-843b-324bdce1ef52_e57601a7-d63e-4070-a7de-ce5f2bbb0c5e.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438151",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122009",
                              name: "Schezwan Masala Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/a6fb50c2-28a6-4431-9b1c-1e152080741f_bfdc17c4-fb05-4725-b528-24379fa7768c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041331",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122000",
                              name: "Onion Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/2c703e04-81c3-4dff-a59d-3de5e9306b1c_dd280c4c-5968-474f-a995-edf1e6eb2765.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311181",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794068",
                              name: "Cheese Plain Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/2eca6c47-e3f6-401f-9895-96b0625d7164_8cf7a8bf-2196-4a41-9af3-8cea9f7d56e8.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336146",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122001",
                              name: "Butter Roast Dosa",
                              category: "Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/f1aa491f-50fb-4a5b-b24c-fb04ae271741_a2198462-f5a4-4f4f-85a0-85c2c049107b.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311139",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/10ea976a-8192-4cf1-be30-6859b9b79dbc_1c7dc206-9356-45a8-a119-f8dee76ced50.jpeg",
                      categoryId: "56933282",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chinese Rice & Noodles",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122102",
                              name: "Gobi 65",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/4a1f24f4-0ad5-4c5a-b4be-74e99556ea61_086fc1b5-c7c7-46fe-a183-0dcd232ea0d9.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570494",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602285",
                              name: "Chicken Fried Rice",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/09f9b991-3ff5-42f0-bb4e-bb82f8e5ec64_f388d7fc-7ee6-4f85-8272-ce22dfc7543a.jpeg",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "238 ratings",
                                  ratingCountV2: "238",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "8186685",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122123",
                              name: "Mutton Fried Rice",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/29a49f9d-0c36-441b-9780-9034497ad375_35c8dd91-1b24-462f-b70a-6e0140acff27.jpeg",
                              inStock: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311178",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794352",
                              name: "Mushroom 65",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/72b05515-65b4-4afc-a40e-286930225229_2b1ec2ce-aa07-4303-bd3f-a7e06e2669d0.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041242",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "97102087",
                              name: "Schezwan Chicken Fried Rice",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/c69ebdcd-a27b-478a-98b6-6fa2e304fab8_2bc06af9-114e-47a2-b42b-8ac33d81763a.jpeg",
                              inStock: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "54361306",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133229",
                              name: "Chilli Chicken(dry/gravy)",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/460c2df2-95ff-45d8-9edb-977fd639bded_1df5180f-0dae-48a7-89b0-c67c6532cbfb.jpeg",
                              inStock: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388485",
                                  groupName: "Choice Of Dry/gravy",
                                  choices: [
                                    {
                                      id: "131734930",
                                      name: "Dry",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734932",
                                      name: "Gravy",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207944",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133231",
                              name: "Chilli Mushroom (dry/gravy)",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/a61a3412-28a4-4a41-b393-806aae1b8025_a67eccfb-0059-4695-8f12-43e25dc5dacb.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388486",
                                  groupName: "Choice Of Dry/gravy",
                                  choices: [
                                    {
                                      id: "131734930",
                                      name: "Dry",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734932",
                                      name: "Gravy",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "112577193",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602374",
                              name: "Veg Noodles",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/9a1ea3a4-b556-4f78-b81f-bf2176240a8f_66f9ed1e-d766-4b27-94a1-bbdc13ef3f43.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "24 ratings",
                                  ratingCountV2: "24",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "8186845",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133233",
                              name: "Garlic Chicken(dry/gravy)",
                              category: "Chinese Rice & Noodles",
                              inStock: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388488",
                                  groupName: "Choice Of Dry/gravy",
                                  choices: [
                                    {
                                      id: "131734930",
                                      name: "Dry",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734932",
                                      name: "Gravy",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207955",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602278",
                              name: "Paneer Fried Rice",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/45aab18f-e8fa-4428-9a25-bd3aed4fb50c_15406ee1-a9ef-4359-8614-27c56d8f3518.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 32000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186785",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133232",
                              name: "Chilli Paneer (dry/gravy)",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/de852ac8-37f1-4852-b822-98a2de43e7c2_46b4deec-ee9e-4886-a78a-996d33945df7.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388487",
                                  groupName: "Choice Of Dry/gravy",
                                  choices: [
                                    {
                                      id: "131734930",
                                      name: "Dry",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734932",
                                      name: "Gravy",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207947",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794379",
                              name: "Schezwan Chicken Noodles",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/37c39536-97be-4991-80aa-e7af11d9d862_a8b80ff2-658a-416d-a8c3-1c315ed62316.jpeg",
                              inStock: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336179",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602291",
                              name: "Chilli Parotta",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/78b9107b-ea64-4f64-a690-677975da41e2_863078ba-215d-48eb-985e-38d7156b69ea.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "41 ratings",
                                  ratingCountV2: "41",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570472",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602287",
                              name: "Chicken Noodles",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/f5a676eb-a58f-4d2e-bb42-e8bda3e0ff0a_832677d6-7994-49f5-9dfe-dbcc3ec31b40.jpeg",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "35 ratings",
                                  ratingCountV2: "35",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186692",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602379",
                              name: "Mushroom Fried Rice",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/cdabcd10-3876-46f6-b5d0-60e1e3b97d8e_b788b98d-b868-4b91-aad8-73ff0c80f57b.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 32000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041244",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133237",
                              name: "Veg. Fried Rice",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/9549e187-f8cb-440a-b1bc-71dc2bc86e62_0c67a78b-8e00-478a-899b-c8db5f15441d.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "43 ratings",
                                  ratingCountV2: "43",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186844",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133236",
                              name: "Schezwan Veg Rice",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/0d21e148-5907-4455-abe5-7e7d27eb49d9_b4211313-c49f-4074-a805-031965875e6c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207977",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122118",
                              name: "Hakka Noodles",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/f8c64362-86a8-45fd-ad97-872a036f7f20_5af44c45-2889-4983-b479-66c4057f38c0.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "1.5",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#FFF0CD", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_low",
                                  ratingTextColor: "rating_low",
                                  ratingCountTextColor: "rating_low",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311165",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122115",
                              name: "Mushroom Noodles",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/2ec1683d-7630-48f4-b95c-6632f4bf5109_019d05cf-09f8-4388-93fa-ed1a572ad861.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 32000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570506",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602365",
                              name: "Egg Fried Rice",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/4b1bb9f0-7e6a-41fe-b4a4-4deb0b057875_61a246be-61d4-4f13-aa08-3ec14a599917.jpeg",
                              inStock: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "84 ratings",
                                  ratingCountV2: "84",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186725",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133238",
                              name: "Veg. Manchurian (dry/gravy)",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/e1cb5c0b-f7ff-4601-8f75-3559b5269cf0_6f3a49f9-2050-4549-9e92-a57c0f9b221f.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388490",
                                  groupName: "Choice Of Dry/gravy",
                                  choices: [
                                    {
                                      id: "131734930",
                                      name: "Dry",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734932",
                                      name: "Gravy",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207986",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122108",
                              name: "Paneer 65",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/fb806ba5-5e66-4bf1-acfc-069ae0ef2077_f07efb9a-af75-4387-9955-35802849c85c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311185",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794354",
                              name: "Singapuri Noodles",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/becc1106-2ca3-4ef3-b5c3-a1053149a583_7af5ea5b-5cee-4e0e-8b0a-eaab9659df63.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336181",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133234",
                              name: "Gobi Manchurian (dry/gravy)",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/8c244db2-6953-40e7-aa16-4226a3becbd8_ed9fa8e0-3725-427b-b16f-35c1f448d07f.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388489",
                                  groupName: "Choice Of Dry/gravy",
                                  choices: [
                                    {
                                      id: "131734930",
                                      name: "Dry",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734932",
                                      name: "Gravy",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "112577194",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602281",
                              name: "Paneer Noodles",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/dee78086-7f42-4014-967a-83746c586a1d_25bb4362-d0ec-414f-8b25-0794187fadd6.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 32000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186787",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133230",
                              name: "Chilli Garlic Noodles",
                              category: "Chinese Rice & Noodles",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207945",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602376",
                              name: "Egg Noodles",
                              category: "Chinese Rice & Noodles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/9b087927-466f-498f-bfbb-1eaf2609617e_8c53abb4-93ea-424f-9291-98fc8b09c84c.jpeg",
                              inStock: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186727",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133235",
                              name: "Schezwan Veg Noodles",
                              category: "Chinese Rice & Noodles",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207976",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/4a1f24f4-0ad5-4c5a-b4be-74e99556ea61_086fc1b5-c7c7-46fe-a183-0dcd232ea0d9.jpeg",
                      categoryId: "35963313",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Indian Non-veg Curries",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133225",
                              name: "Kadai Chicken",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/1277e059-dc06-483b-9dbd-642b57ee3c45_33586461-7958-4aa1-970f-ff17172ee26f.jpeg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "52871899",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 650,
                                        default: 1,
                                        id: "165152549",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 1100,
                                        id: "165152550",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Qtr",
                                        price: 380,
                                        id: "165152551",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "52871899",
                                        variationId: "165152549",
                                      },
                                    ],
                                    price: 65000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "52871899",
                                        variationId: "165152550",
                                      },
                                    ],
                                    price: 110000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "52871899",
                                        variationId: "165152551",
                                      },
                                    ],
                                    price: 38000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 65000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207960",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133227",
                              name: "Mutton Chettinad Masala (boneless)",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/59c0ae3e-7a43-4ccd-90b9-891183ed4576_946aa9ef-5e17-40db-82e8-19dda42bbda4.jpeg",
                              inStock: 1,
                              price: 48000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67552822",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87121971",
                              name: "Prawn Masala",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/373b887f-a938-4a12-9196-8bdf78bb8192_2242eac1-a8ec-4cc0-806b-338704b7f21c.jpeg",
                              inStock: 1,
                              price: 52000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67552823",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464404",
                              name: "Mutton Masala",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/e55a469b-bcbe-43a3-aa4d-10bdb213e51e_4b6863f5-7e05-4c39-af6b-24544e4c8f69.jpeg",
                              inStock: 1,
                              price: 50000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "13 ratings",
                                  ratingCountV2: "13",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570515",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602370",
                              name: "Chicken Chettinad Masala",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/bf4bdce8-d715-4c7a-b794-df4708368ff2_2934565e-29af-464e-a6f1-090ccfd380b8.jpeg",
                              inStock: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570451",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133226",
                              name: "Kadhai Mutton",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/25/5d6afcef-8461-434b-b38a-3e0dcb799e58_e9b7cc5d-ef91-486c-9e76-bd49d758ca17.jpg",
                              inStock: 1,
                              price: 50000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207962",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464402",
                              name: "Mutton Handi",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/c9d93e81-24f2-47a7-b99f-4bd2391ad820_e2882207-366c-4d66-8317-796f5fa611ec.jpeg",
                              inStock: 1,
                              price: 50000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186769",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464403",
                              name: "Mutton Rogan Josh",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/25/645d104a-f828-498f-a65c-35ad65e1f433_d91bbe36-a88f-4101-aa26-335cb0905a33.jpg",
                              inStock: 1,
                              price: 50000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186772",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133223",
                              name: "Chicken Tikka Masala (boneless)",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/b3ffc419-01a5-497c-ab56-416c7258da4c_a3627190-20a6-4ed8-940c-95c0ac7ca2b1.jpeg",
                              inStock: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67552814",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133222",
                              name: "Butter Chicken Boneless (6 Pcs)",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/b3ffc419-01a5-497c-ab56-416c7258da4c_a3627190-20a6-4ed8-940c-95c0ac7ca2b1.jpeg",
                              inStock: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207935",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133224",
                              name: "Handi Chicken",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/3/28/70bf7f7e-f532-4b9c-adaa-73f0d5c7f822_83ee4638-4e28-4607-adf6-c7fe72d39ee6.jpg",
                              inStock: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207958",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602286",
                              name: "Mutton Curry",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/e37d2d52-b663-4817-be21-84ee5b112c76_d934f847-7b64-4401-9d2e-89f61b7c1c1e.jpeg",
                              inStock: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "98 ratings",
                                  ratingCountV2: "98",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186768",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602377",
                              name: "Fish Curry",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/f0e2bfe0-b657-4e3e-bd34-57dae1529e43_a46c194b-12d6-4622-aef8-5dc561aaa5e2.jpeg",
                              inStock: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "83 ratings",
                                  ratingCountV2: "83",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186731",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464405",
                              name: "Chicken Korma",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/136ce4ce-68bf-4462-a40d-9af9f77f3372_10a27255-b902-4d5d-9613-4829965c8612.jpeg",
                              inStock: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186688",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464349",
                              name: "Tawa Chicken",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/0cbb68dc-5e3e-498c-b8c9-e8ec8bbe69ab_c4ff7d7d-ae97-4db5-94d3-9b7e85802cf3.jpeg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "52871900",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 650,
                                        default: 1,
                                        id: "165152552",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 1100,
                                        id: "165152553",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Qtr",
                                        price: 380,
                                        id: "165152554",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "52871900",
                                        variationId: "165152552",
                                      },
                                    ],
                                    price: 65000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "52871900",
                                        variationId: "165152553",
                                      },
                                    ],
                                    price: 110000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "52871900",
                                        variationId: "165152554",
                                      },
                                    ],
                                    price: 38000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 65000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186831",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464351",
                              name: "Butter Chicken",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/8da6b336-cc0c-484a-a36f-4a09ad96b896_d24402b8-aa7f-4c70-b0d0-930db1743c10.jpeg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "52871898",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 650,
                                        default: 1,
                                        id: "165152546",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 1100,
                                        id: "165152547",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Qtr",
                                        price: 380,
                                        id: "165152548",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "52871898",
                                        variationId: "165152546",
                                      },
                                    ],
                                    price: 65000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "52871898",
                                        variationId: "165152547",
                                      },
                                    ],
                                    price: 110000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "52871898",
                                        variationId: "165152548",
                                      },
                                    ],
                                    price: 38000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 65000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186665",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602366",
                              name: "Chicken Curry",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/49f86790-60bf-4359-94f8-584840a1d770_792495d4-6855-43ad-b7f5-af42d14791a8.jpeg",
                              inStock: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "246 ratings",
                                  ratingCountV2: "246",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186684",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794230",
                              name: "Egg Masala",
                              category: "Indian Non-veg Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/40d4dcca-705c-423f-8be8-14c604e9aaf6_4b32c515-6737-4cfb-b193-7a850bdebcf8.jpeg",
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67552816",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/1277e059-dc06-483b-9dbd-642b57ee3c45_33586461-7958-4aa1-970f-ff17172ee26f.jpeg",
                      categoryId: "56933291",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Rava Dosa Varieties",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602396",
                              name: "Rava Masala Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/d84a3fdb-c4f2-418d-9c75-5e754e2e2a6c_56e0f341-7c37-47f5-9f23-60f40dd8ea02.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "33041316",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122019",
                              name: "Rava Paneer Masala Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/b1311cbb-cab0-4eb1-bba4-4bc739ad1dc9_c98ca79c-5bb3-4787-95d7-62fc7b2a4878.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 33000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "54271600",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133178",
                              name: "Dry Fruits Rava Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/2cee91b6-afe1-4606-b79b-e57fca314109_0030cb9d-3fa6-4bd4-9b8b-03893b67f2bb.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207951",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794071",
                              name: "Butter Onion Rava Paneer Masala Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/26/170509e6-2fb2-4eaf-a957-32d5c10f18c5_b962fb5e-8708-4e0e-b72e-a959a3e7abd6.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041124",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133177",
                              name: "Butter Mysore Rava Masala Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/999a069d-2c36-4123-bd21-9b75b60f4c8a_26f330f0-351c-43cf-95f6-39b8621c545c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041119",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122013",
                              name: "Ghee Podi Rava Masala Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/39f04ad0-0fd4-4ad9-98c9-adce6c4e5a37_844c8f81-faa6-4282-9389-dad0fb00790e.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041179",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133180",
                              name: "Rava Veg. Masala Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/bb413886-e765-4546-8831-dc691e06dedc_f9df6256-d604-4800-bf08-f6b06564ec84.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438134",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122011",
                              name: "Ghee Podi Rava Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/edb3cedb-7b44-4df7-9c29-3ec9a32cf543_dde57e16-33b7-4e64-9d85-5dfdf93d7f1b.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438107",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87121997",
                              name: "Butter Onion Rava Masala Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/cd7e3100-0945-44d2-a46a-87f96dc0dc77_4469c586-3b78-41c1-a757-2c7e0fa7110c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041123",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602402",
                              name: "Butter Rava Masala Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/17ed2e25-8a10-4fe8-9531-3b43cc6dc918_e4b5b6fd-a709-4f35-a90d-5e3b1e15b984.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041129",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602399",
                              name: "Onion Rava Masala Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/897c7b3b-f187-4889-a0ce-3fd702d45577_d37f76fd-18c7-4cef-b07c-d4e4da32e603.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.5",
                                  ratingCount: "30 ratings",
                                  ratingCountV2: "30",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#FFF0CD", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_low",
                                  ratingTextColor: "rating_low",
                                  ratingCountTextColor: "rating_low",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041265",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122004",
                              name: "Rava Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/9e846c12-ffa1-4be0-aa15-b46190835a9c_ffbfde1e-9efe-4ed4-9157-9d632c187df5.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311192",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122008",
                              name: "Onion Rava Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/25/61da7379-1caa-41a4-afa4-760f44304694_5b5a3860-d4ad-4cd0-94b2-88b3725b726c.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311183",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133179",
                              name: "Onion Rava Veg. Masala Dosa",
                              category: "Rava Dosa Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/dd5da210-2349-43ab-a419-d9beee9f4051_c2cdb4f6-b5e5-4674-9979-8a3a48c66da1.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570520",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/d84a3fdb-c4f2-418d-9c75-5e754e2e2a6c_56e0f341-7c37-47f5-9f23-60f40dd8ea02.jpeg",
                      categoryId: "56933283",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "South Indian Rice Varieties",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602299",
                              name: "Curd Rice",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/cb13d553-9bc3-4696-9680-56d3dfc91f08_efeb5db4-a5c8-4fa1-9b38-d68905ad782f.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "119 ratings",
                                  ratingCountV2: "119",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "8186715",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602288",
                              name: "Tomato Rice",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/83b33c28-c2b2-4f4d-a368-9390c414caeb_ef7024f8-3420-4aa2-b06c-0997854f986c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "364 ratings",
                                  ratingCountV2: "364",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "33041358",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794574",
                              name: "Mushroom Biryani",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/e04be495-0d05-42b2-bc9c-22c313e99c63_d97aedd3-4d0a-4cd3-91f1-2db778b2d248.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041243",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464401",
                              name: "Sambar Rice",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/a98af190-9a3d-40ed-93b0-8297d6d56e6e_07b568e4-85d9-4cef-b70b-e02e590bbccf.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "107 ratings",
                                  ratingCountV2: "107",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "8186817",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602298",
                              name: "Lemon Rice",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/ca503866-aef1-4ef3-8a70-1f6de25efe5e_a08bb6c1-cd06-43f7-824e-24251ce8a99c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "133 ratings",
                                  ratingCountV2: "133",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "33041217",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794580",
                              name: "South Ponni Rice",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/d1df3a59-58e6-4101-8323-05c4416afd32_55d532d5-223e-498b-a563-ead1b12176cc.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336183",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "97101308",
                              name: "Paneer Biryani",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/2b76609d-a377-48e9-a127-207113c38c0e_c9a6611f-5c0e-4fcd-876a-c2d4f41d807d.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "54361302",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133199",
                              name: "Veg. Biryani",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/a57ccc13-9cc2-42d7-94c4-183f4e933129_877d2fa3-f72a-4c21-9ed3-0c9a15262389.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "77 ratings",
                                  ratingCountV2: "77",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186841",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133200",
                              name: "Veg. Pulao",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/85f4263e-4cc6-4f86-85e2-db554cea8d1e_8d6341ad-570d-4b1b-b3dd-b045ae3ccdc4.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311213",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87121982",
                              name: "Mutter Pulao",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/4552d5d2-8681-4c30-bd02-9c69164ec10d_74830d9c-66cc-4e00-b913-04ceae3b6b39.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311176",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87121981",
                              name: "Jeera Rice",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/e69e1fae-a5de-4dfc-9004-bb8b444f21fe_d20b8c7e-7919-4f48-b6e4-17d3086781f1.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311168",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87121980",
                              name: "Steam Rice",
                              category: "South Indian Rice Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/1314eaae-c8ed-4ba7-9cf0-f750db2d62f2_586ea8f4-9ed7-4ae4-8ac3-0425c9f13263.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311205",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/cb13d553-9bc3-4696-9680-56d3dfc91f08_efeb5db4-a5c8-4fa1-9b38-d68905ad782f.jpeg",
                      categoryId: "56933286",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Idli Vada Choice",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133166",
                              name: "Idli Sambar (2 Pcs)",
                              category: "Idli Vada Choice",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/929bdf9a-f2b8-491a-b547-2012edc66820_b08348f8-2506-4877-875e-ee6728b888e6.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              finalPrice: 8900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "29 ratings",
                                  ratingCountV2: "29",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "fe754725-cb1b-426c-b6f8-2241ab2639aa",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "67438112",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133171",
                              name: "Vada Sambar (2 Pcs)",
                              category: "Idli Vada Choice",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/7f18f094-97fa-41ad-8459-3b4797ad6191_343771a3-08dc-4b2c-9187-d3efbe43dadb.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              finalPrice: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "a663f85d-d487-4edb-ba0e-59abbaa0bf25",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "67438146",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133165",
                              name: "Fried Idly (best Snacks)",
                              category: "Idli Vada Choice",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/25/3632f1f6-d9fb-4f6f-8209-4f1864c887cb_9bdf9d9b-73da-4ca6-afe6-083138e4dbae.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              finalPrice: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "a663f85d-d487-4edb-ba0e-59abbaa0bf25",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "109052225",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133169",
                              name: "Sambar Vada (dipped)",
                              category: "Idli Vada Choice",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/5f0cadfc-24c1-47be-b798-50cc99e4b517_8c54b66c-25d5-4a14-96b3-85b1226dda34.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438137",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602340",
                              name: "Ghee Podi Idli",
                              category: "Idli Vada Choice",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/b0cd9720-3573-42ec-8ea0-d057fe804a0a_701c08c8-8730-4b3e-a66f-1708f4457085.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "73 ratings",
                                  ratingCountV2: "73",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438106",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133168",
                              name: "Sambar Idly (dipped)",
                              category: "Idli Vada Choice",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/bc022ad5-a52a-452d-9580-6574e81ee444_88233225-dfe3-49c5-bf46-01194e40392c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "67438136",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133164",
                              name: "Curd Vada (sweet & Salt)",
                              category: "Idli Vada Choice",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/9380400a-fb03-4db4-8ed9-e68a111d30ab_7ed18d73-aa2e-4058-ba34-033376038d4d.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438096",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133167",
                              name: "Rasam Vada (dipped)",
                              category: "Idli Vada Choice",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/66618ba2-d318-4836-a471-b5a8617ed99d_47a23f3d-60db-4b20-a2a0-a8223c151e36.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438131",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87121992",
                              name: "Mini Tiffin",
                              category: "Idli Vada Choice",
                              description:
                                "Idly (1 Pc) + Vada (1 Pc) + Mini Masala Dosa +Uppuma / Pongal + Sweet",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/85222fa6-f642-4715-9960-f2e59c4624d1_bb69784b-5d86-4cdd-85dd-95b9af663a6b.jpeg",
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388479",
                                  groupName: "Choice Of Uppuma / Pongal +",
                                  choices: [
                                    {
                                      id: "131734929",
                                      name: "Uppuma",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734931",
                                      name: "Pongal",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 8 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041233",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794376",
                              name: "Poori Bhaji",
                              category: "Idli Vada Choice",
                              description:
                                "(4 Pcs Poori, Sabji, Sweet, Chutney)",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/754f9ef0-77ae-40b0-8152-63080d023c34_b6b03754-3356-468c-acb4-1af3b4970632.jpeg",
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 8 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041307",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794361",
                              name: "Pongal + Vada",
                              category: "Idli Vada Choice",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/f61463a0-fb41-4e6b-8f7b-8e3b08c32d3d_d99c7f53-e77d-4797-b588-cc340f410914.jpeg",
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 8 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438129",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133170",
                              name: "Uppuma + Vada",
                              category: "Idli Vada Choice",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/5775be1e-cf9a-4f4c-a4cf-389f3e8c5ff2_6a48c5d8-212b-48d9-bc1b-6a7e688173dc.jpeg",
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 8 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438145",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133163",
                              name: "Chow Chow Bath",
                              category: "Idli Vada Choice",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/25/97ce986b-b1c4-4128-984e-50980b35c2c7_23c2e435-2330-403d-a6ea-e89c1a7e6d6c.jpg",
                              isVeg: 1,
                              price: 18000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 8 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "111282558",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/929bdf9a-f2b8-491a-b547-2012edc66820_b08348f8-2506-4877-875e-ee6728b888e6.jpeg",
                      categoryId: "56933281",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Indian Veg. Curries",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133220",
                              name: "Paneer Bhurji",
                              category: "Indian Veg. Curries",
                              imageId: "27ba61cc8d7c14822ae90e3e3c941082",
                              inStock: 1,
                              isVeg: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207969",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464359",
                              name: "Mushroom Masala",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/e46dbfb1-5968-4f33-89d7-b00df9eee7b4_e4fc6a77-9a36-4df4-9c45-88ded33cc954.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041247",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133219",
                              name: "Kadai Paneer",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/16682b53-6330-4537-8a40-ae25ea91d0fb_ccf8ed55-41c0-44ff-be68-dca5b338f731.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207961",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464365",
                              name: "Paneer Butter Masala",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/990d2276-1247-4fa1-8921-cd5dad48605e_62c6a732-923e-42fd-9d52-e4452ec0621c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041275",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464358",
                              name: "Mutter Mushroom Masala",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/20597e46-99aa-4c71-8fcc-4a75578960b3_94f99146-57a0-40ee-a514-7f0b787545a4.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "33041252",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464363",
                              name: "Shahi Paneer",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/238a94bd-67c0-4cd4-bd8d-ef207c79fe55_612ee86a-7218-4b83-bba0-7ceda3ceddde.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186819",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464362",
                              name: "Mutter Paneer",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/abafdbf2-d70e-4f58-9f73-6058dc8db684_0e0888a9-9b27-4028-9873-a6b60dab5993.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186765",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464356",
                              name: "Aloo Jeera",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/aa1d1efc-551f-4bec-8924-2867a63d226a_c814be8a-c186-43db-96ed-e47f92613111.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186657",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464366",
                              name: "Dal Makhani",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/0470cc90-3923-4c6b-916a-5d407e3b413a_f646daea-84a1-4630-9fce-9440d45fba25.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186718",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464357",
                              name: "Mix Veg Curry",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/9d583eec-fd8b-4624-a382-5d0197582d00_8d22a9e2-4658-4a29-920e-655882512227.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186760",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133218",
                              name: "Dal Fry (arhar Dal)",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/ca82c630-3e9b-459c-bd83-c5180aaac008_be316e30-c150-4d10-b9cb-da95db4cd27d.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186717",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133217",
                              name: "Aloo Gobhi",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/24/3f424b53-1162-44fd-9454-9cbd232e252a_7f17b687-9cee-47c9-9c5c-b56b11440f4f.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207933",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464354",
                              name: "Aloo Mutter",
                              category: "Indian Veg. Curries",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/de446bdf-8ce8-40b5-9b66-9b38801e2c24_dc79e6ba-3daf-4dc3-adf0-bb1e4e7d61f1.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186658",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "27ba61cc8d7c14822ae90e3e3c941082",
                      categoryId: "56933290",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Indian Platter",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133211",
                              name: "Spl. Non-veg Meals",
                              category: "Indian Platter",
                              description:
                                "Rice + Parotta + Chicken 65 (4 Pcs) + Chicken Curry + Mutton Curry + Fish Curry + Papper Chicken Fry + Mutton Sukka + Prwan Fry + Fish Fry Rasem + Omelette + Curd + Sweet + Appalam",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/8/3ed4e48e-2b41-4e12-9c8a-92fe1ec4576f_ed0d407a-eb89-4c47-8c46-ff5afdd05661.jpg",
                              inStock: 1,
                              price: 110000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207981",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122030",
                              name: "Southvala Non-veg Meals",
                              category: "Indian Platter",
                              description:
                                "Rice + Parotta + Chicken 65 (4 Pcs) + Chicken Curry + Mutton Curry + Fish Curry + Rasam + Omelette + Curd + Sweet + Appalam",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/1a760861-5870-4a0a-9c72-5522946dc489_9a437efb-d020-43ec-be23-16668f1ca695.jpeg",
                              inStock: 1,
                              price: 50000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570538",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122029",
                              name: "Southvala Veg Meals",
                              category: "Indian Platter",
                              description:
                                "(Rice + Poori / Chapati) / 2 Bowl Rice + Sambar Rasam, Kootu + Poriyal + Vatha Kulambu + Curd + Sweet + Appalam)",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/43a84ee4-27f4-4044-b328-0c7f3add166a_e9f96a74-bc45-435d-afc6-267dcf417578.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388484",
                                  groupName: "Choose Any 1",
                                  choices: [
                                    {
                                      id: "131734926",
                                      name: "Poori",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734928",
                                      name: "Chapati",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734922",
                                      name: "2 Bowl Rice",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "188 ratings",
                                  ratingCountV2: "188",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67552829",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794360",
                              name: "Southvala Special Meals",
                              category: "Indian Platter",
                              description:
                                "Dal Makhani + Mix Veg + Kadai Paneer + 2 Butter Roti + Rice + Raita + Sweet + Salad",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/772287f9-0f04-42db-829f-e5c91bbd6285_5a63961c-3fbb-4d6a-92bf-0980c3b78474.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336184",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133208",
                              name: "C.t.m. Platter",
                              category: "Indian Platter",
                              description:
                                "Chicken Tikka Masala + Dal Makhani + 1 Lachha Paratha + 1 Butter Roti + Rice + Salad + Raita + Papad",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/5cc63558-74f7-420e-9dae-e4e7ed209b1c_1397f2e1-2e74-4ad7-9e25-90e4aee27aaa.jpeg",
                              inStock: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186713",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133210",
                              name: "S. P. Platter",
                              category: "Indian Platter",
                              description:
                                "Shahi Paneer + Dal Makhani + 1 Butter Naan + Rice + Raita + Salad + Papad",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/d6295b48-6895-4ad2-9683-8def985699dc_8f4529f2-588a-4e5b-a9db-a5453d18ac98.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 32000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186824",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464384",
                              name: "Chicken Platter",
                              category: "Indian Platter",
                              description:
                                "Butter Chiken + 1 Butter Naan + 1 Roti + Salad + Papad + Raita",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/f678f685-47f8-42eb-b0ca-bda3670c8371_d395d17d-84f0-447b-aadf-053b968e7b72.jpeg",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186694",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464385",
                              name: "South North Platter",
                              category: "Indian Platter",
                              description:
                                "Kadai Paneer + 2 Malabar Parotta + Raita + Papad + Salad",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/c874f74a-a934-4652-b922-07abb9980528_1cd214ed-dbfa-4ece-9a3d-17d46b1c5a44.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186821",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464388",
                              name: "Dal Makhani Platter",
                              category: "Indian Platter",
                              description:
                                "Dal Makhani + Mix Veg + 2 Butter Roti + Rice + Salad + Papad + Raita",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/72429ba7-84f1-45d3-b9fd-ddd969fcc095_c38863ae-6391-4016-b364-e0d652e757f8.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186719",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133209",
                              name: "P. B. M. Platter",
                              category: "Indian Platter",
                              description:
                                "2 Pcs Paneer Tikka + Paneer Butter Masala + Dal Makhani 1 Lachha Paratha + 1 Butter Roti + Rice + Raita + Salad + Papad",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/2e1115ca-9385-4fb5-8211-da073540b464_28cf85d7-c36f-44bd-a816-41d06060eea3.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186796",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/4/8/3ed4e48e-2b41-4e12-9c8a-92fe1ec4576f_ed0d407a-eb89-4c47-8c46-ff5afdd05661.jpg",
                      categoryId: "35963315",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Southvala Specials",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133196",
                              name: "Parotta Veg. Kuruma",
                              category: "Southvala Specials",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/6b631992-db2e-46ad-8833-5f12ce050f4c_85c46a54-05b8-42d1-8c12-105bc37c6f77.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "289 ratings",
                                  ratingCountV2: "289",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "44570526",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602283",
                              name: "Chicken Kothu Parotta",
                              category: "Southvala Specials",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/7d7e4c77-9c87-4d1b-8817-bf01aa984213_50cf0405-c444-4d52-962c-b22a4f535c58.jpeg",
                              inStock: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "677 ratings",
                                  ratingCountV2: "677",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570457",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122027",
                              name: "Vegetable Kothu Parotta",
                              category: "Southvala Specials",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/854d0658-c00a-4558-b738-6c37a281f59e_290cb81f-dbdb-4d84-ad47-482d4c39f335.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "42 ratings",
                                  ratingCountV2: "42",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438149",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602325",
                              name: "Mutton Boneless Kothu Parotta",
                              category: "Southvala Specials",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/e69f9f36-5e0d-419b-9900-c1bedaa85e73_77371163-57de-4a66-98ac-ff421412ce37.jpeg",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "259 ratings",
                                  ratingCountV2: "259",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570509",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602282",
                              name: "Egg Kothu Parotta",
                              category: "Southvala Specials",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/1cd51267-c8b3-40bb-b309-70e30387406b_85349f86-2517-4b6e-b8f7-44ec529b4fa8.jpeg",
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "279 ratings",
                                  ratingCountV2: "279",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570483",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133194",
                              name: "Chappthi Veg Kuruma",
                              category: "Southvala Specials",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/d000e109-4b86-43b0-93f0-aed29afbd281_ae6e8d53-100b-42ce-92ed-2d13acf9ae19.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 17000,
                              finalPrice: 10900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "8889b23d-71c8-474b-b8b5-95374202c16d",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "44570447",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133195",
                              name: "Parotta Non-veg Salna",
                              category: "Southvala Specials",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/0309cec1-ee0a-4a17-8962-51ceb327fe83_c2aca05a-90c3-46dc-bc57-a3c9260f8a67.jpeg",
                              inStock: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570525",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133193",
                              name: "Chappthi Non Veg Salna",
                              category: "Southvala Specials",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/2f882e3c-acc6-4fed-8103-e69a590635b6_8aac55e7-1d1b-48ae-b084-8453b3dacbcc.jpeg",
                              inStock: 1,
                              price: 19000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570446",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/6b631992-db2e-46ad-8833-5f12ce050f4c_85c46a54-05b8-42d1-8c12-105bc37c6f77.jpeg",
                      categoryId: "35963309",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chettinad Fry Items",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794585",
                              name: "Prawns Pepper Fry",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/5b0b8620-f753-4430-9eda-8735b12d2b9f_04b341f4-0de4-48bc-abab-f7f23832869a.jpeg",
                              inStock: 1,
                              price: 50000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67552824",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602362",
                              name: "Fish Fry",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/99f2d3f0-3d73-4537-9647-ab79cd3f05dd_eb197415-0096-488f-897c-9a6179b8bfc7.jpeg",
                              inStock: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "107 ratings",
                                  ratingCountV2: "107",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186732",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122075",
                              name: "Mutton Sukka",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/3284abeb-da8b-436f-b645-561cb46b28d1_10f02e17-ba40-4251-8e5f-0a88286040c4.jpeg",
                              inStock: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "53 ratings",
                                  ratingCountV2: "53",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311180",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122055",
                              name: "Pepper Chicken Fry",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/22494794-e45e-4308-8916-a0f262d4472a_0025171e-8ead-48f9-9a0e-022d694356cc.jpeg",
                              inStock: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "139 ratings",
                                  ratingCountV2: "139",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311188",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133205",
                              name: "Chicken 65 (150 Gm)",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/dc544ec9-d695-4c1f-ab01-6cbf88d8c22a_ddeb0fb2-289d-4497-8385-29bea7cdbb1d.jpeg",
                              inStock: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "114 ratings",
                                  ratingCountV2: "114",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311144",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133206",
                              name: "Egg Podimass (2 Egg)",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/633f7b2c-f7a1-4366-b84f-942bb35b7bd2_05ee7d91-a107-4b9c-8ac7-e4ee500c6505.jpeg",
                              inStock: 1,
                              price: 10000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "32 ratings",
                                  ratingCountV2: "32",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311153",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122059",
                              name: "Single Omelet",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/a6389fd7-aa50-457e-a95d-7fea41ea328b_cd8fb112-0a26-47b5-a319-2ae8eac932b4.jpeg",
                              inStock: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "35 ratings",
                                  ratingCountV2: "35",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "46311200",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122064",
                              name: "Double Omelet",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/9b167449-de5e-4365-970b-7dbc1f58590b_97166d73-a8b7-454c-811a-c93fe7898966.jpeg",
                              inStock: 1,
                              price: 9000,
                              finalPrice: 6900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c8ef63a6-5cc7-484f-857d-a62833ad19b2",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "46311150",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87122054",
                              name: "Masala Omelet",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/7bd54fac-f78e-46cd-9daa-3f207e02b7e8_11fcae0f-282c-4bb6-a303-408723376062.jpeg",
                              inStock: 1,
                              price: 10000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67552820",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133207",
                              name: "Kalakki Egg",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/56c488b2-9543-4ece-901e-a28fdc1a9e6f_d1df0c23-70b2-4d4a-839c-6b136f9f2a48.jpeg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "52871895",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1 Pc",
                                        price: 50,
                                        default: 1,
                                        id: "165152538",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "2 Pcs",
                                        price: 100,
                                        id: "165152539",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "52871895",
                                        variationId: "165152538",
                                      },
                                    ],
                                    price: 5000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "52871895",
                                        variationId: "165152539",
                                      },
                                    ],
                                    price: 10000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 5000,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207963",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794356",
                              name: "Half Boiled",
                              category: "Chettinad Fry Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/35fbb88e-feaa-4d23-921a-c3c3b92be586_7584251a-1189-4f39-bd89-cf2fcdd55d5b.jpeg",
                              inStock: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336162",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/5b0b8620-f753-4430-9eda-8735b12d2b9f_04b341f4-0de4-48bc-abab-f7f23832869a.jpeg",
                      categoryId: "35963319",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Southvala Tawa Items",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602382",
                              name: "Parotta",
                              category: "Southvala Tawa Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/c68e60cd-e6b9-4827-a8cb-8176637b6f92_6f24644c-63fb-4593-84ed-728b3c164f86.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "193 ratings",
                                  ratingCountV2: "193",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570524",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602350",
                              name: "Mutton Lava",
                              category: "Southvala Tawa Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/7a631725-f103-42a9-92ff-53c92eeed543_7fffc7b7-226b-4b6c-a170-3242acf563fa.jpeg",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "13 ratings",
                                  ratingCountV2: "13",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570514",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602348",
                              name: "Chicken Lava",
                              category: "Southvala Tawa Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/a0c2f327-012b-4890-956d-de6d96cbfaf3_27891dc4-00cc-402e-b944-f4a896e3eb00.jpeg",
                              inStock: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "30 ratings",
                                  ratingCountV2: "30",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570458",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133214",
                              name: "2 Pcs Parotta Salna",
                              category: "Southvala Tawa Items",
                              imageId: "367c1f63ed85b63cec2eac422782e59d",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "112577192",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133216",
                              name: "Veg. Korma",
                              category: "Southvala Tawa Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/607c0533-8a70-477c-a3dc-db7a0fbed788_5bd894ea-8b56-4757-ad02-77cba34eb271.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "67552832",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133213",
                              name: "Chicken Salna (only Gravy)",
                              category: "Southvala Tawa Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/a269622c-9e86-4a97-8945-a87da8cedd10_59fe1b89-b0ba-43af-b6ff-6df3a5218c44.jpeg",
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207942",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794577",
                              name: "Fish Plain Gravy",
                              category: "Southvala Tawa Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/a1cee879-b75f-438d-8b61-adfc1c34e05e_064f30f4-c2cc-4ac5-a5f2-a0e19fbc4f90.jpeg",
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336160",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133215",
                              name: "Veechu Parotta + Gravy",
                              category: "Southvala Tawa Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/26/5759b78e-ec67-4891-a689-d1f23a5f2ecc_5d193a58-c9ac-4e3d-aa07-d9811cf0bba3.jpg",
                              inStock: 1,
                              price: 12000,
                              finalPrice: 8900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "fe754725-cb1b-426c-b6f8-2241ab2639aa",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "112577196",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133212",
                              name: "Chappathi",
                              category: "Southvala Tawa Items",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/edffe8d6-a110-4008-9802-bdaec9ca2a90_ba9efa4f-c081-420a-8d82-da853e1f84f0.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570445",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/c68e60cd-e6b9-4827-a8cb-8176637b6f92_6f24644c-63fb-4593-84ed-728b3c164f86.jpeg",
                      categoryId: "35963311",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Briyani Varieties",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602297",
                              name: "Egg Biryani",
                              category: "Briyani Varieties",
                              description:
                                "(Serve with Chicken Rice)(WITH SWEET, SALNA & RAITA)",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/eb55a2bf-1eae-4650-9731-a90e665f4f46_54d24711-b44e-4e07-9bee-0f150cdb6d4a.jpeg",
                              inStock: 1,
                              price: 26000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "46 ratings",
                                  ratingCountV2: "46",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "44570479",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602322",
                              name: "Chicken Biryani",
                              category: "Briyani Varieties",
                              description: "(WITH SWEET, SALNA & RAITA)",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/5275f55d-f099-45c9-8aa2-facca8d43383_7e4658de-390a-4f44-83c0-0ead0c73e4d5.jpeg",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570449",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602388",
                              name: "Mutton Biryani",
                              category: "Briyani Varieties",
                              description: "(WITH SWEET, SALNA & RAITA)",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/308c2782-ea84-42e6-a3a3-ca7e76cf2fbe_0c1df969-b135-456b-8a43-a1eb5e781111.jpeg",
                              inStock: 1,
                              price: 46000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "44570508",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794347",
                              name: "Chicken 65 Biryani",
                              category: "Briyani Varieties",
                              description: "(WITH SWEET, SALNA & RAITA)",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/566b0f5d-4df6-4463-8436-9e4afcaa666a_2ea7c9ef-e889-428d-9e94-105a0dc2a754.jpeg",
                              inStock: 1,
                              price: 39000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438084",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133197",
                              name: "Pepper Chicken Biryani",
                              category: "Briyani Varieties",
                              description: "(WITH SWEET, SALNA & RAITA)",
                              imageId: "a5d584e09194b38cfff6bb32033fa467",
                              inStock: 1,
                              price: 39000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "108975641",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/eb55a2bf-1eae-4650-9731-a90e665f4f46_54d24711-b44e-4e07-9bee-0f150cdb6d4a.jpeg",
                      categoryId: "56933285",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Non Veg Indian Snacks",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464377",
                              name: "Tandoori Chicken",
                              category: "Non Veg Indian Snacks",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/721fdfeb-0a95-45d1-83fc-865a877c07a5_93667b1e-d550-46f1-ab4e-5c7177c0d85e.jpeg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "52871903",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 400,
                                        default: 1,
                                        id: "165152559",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 650,
                                        id: "165152560",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "52871903",
                                        variationId: "165152559",
                                      },
                                    ],
                                    price: 40000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "52871903",
                                        variationId: "165152560",
                                      },
                                    ],
                                    price: 65000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 40000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "27 ratings",
                                  ratingCountV2: "27",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186828",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133228",
                              name: "Chicken Malai Tikka (8 Pcs)",
                              category: "Non Veg Indian Snacks",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/25/2dcca50d-7df9-4de3-b96f-1141f1ff753f_968fc90b-a1f2-475a-abf5-2dabf86f0e76.jpg",
                              inStock: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207941",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464372",
                              name: "Chicken Tikka (8 Pcs)",
                              category: "Non Veg Indian Snacks",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/de90de15-0e2f-4237-964a-808dc7cea0d3_2d9359a2-0097-48ce-8de9-5ef725c41f55.jpeg",
                              inStock: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186698",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464369",
                              name: "Chicken Seekh Kabab",
                              category: "Non Veg Indian Snacks",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/113016b6-e71f-4d2b-84e1-2101af3010df_2dc6cc49-be7d-4479-b145-352ee51e10ed.jpeg",
                              inStock: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.5",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186696",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464376",
                              name: "Afghani Chicken",
                              category: "Non Veg Indian Snacks",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/6cc591fa-0397-422e-a85a-6de525ffe696_6c74d9ee-3da2-441b-ad6a-b3dd7ac2223a.jpeg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "52871901",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 400,
                                        default: 1,
                                        id: "165152555",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 650,
                                        id: "165152556",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "52871901",
                                        variationId: "165152555",
                                      },
                                    ],
                                    price: 40000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "52871901",
                                        variationId: "165152556",
                                      },
                                    ],
                                    price: 65000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 40000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186655",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/721fdfeb-0a95-45d1-83fc-865a877c07a5_93667b1e-d550-46f1-ab4e-5c7177c0d85e.jpeg",
                      categoryId: "56933293",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Uthappam Varieties",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133185",
                              name: "Mix Veg. Uthappam",
                              category: "Uthappam Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/54904af3-e007-4204-9b56-4f423a5009ae_e6112771-72a6-45d8-8e36-179b8c73d7b7.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 26000,
                              finalPrice: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "c647fa7c-67e6-48b7-99e6-03571b69436a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "95207964",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133189",
                              name: "Paneer Uthappam",
                              category: "Uthappam Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/b4915a99-91b3-4bf9-9050-603221063c8b_fdd0bd4a-17a8-4210-9ed9-10bd139b5fc8.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207970",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133181",
                              name: "7 Taste Mini Uthappam",
                              category: "Uthappam Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/25/1ea6f771-2369-4408-95c5-5221d6c1375c_d3bb0b5b-6ec4-4c11-b081-d3d391e01d9d.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207932",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133184",
                              name: "Ghee Podi Uthappam",
                              category: "Uthappam Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/694e62b6-2f15-4b43-85e1-056f6b2847e2_84e43c9f-5096-4cfc-9911-45518ae34b99.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 26000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67438108",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133188",
                              name: "Onion Uthappam",
                              category: "Uthappam Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/e93fa90d-553c-4734-9aef-5db15637ba28_236bfba4-2b7d-4548-ae83-fb3dd5304785.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207968",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133187",
                              name: "Onion Tomato Uthappam",
                              category: "Uthappam Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/276a094a-19b1-49d6-a744-2e48f79982b6_0943963f-d117-41d8-9d38-dd33574f6d78.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207967",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133183",
                              name: "Egg Uthappam",
                              category: "Uthappam Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/c0de7995-998b-43ad-b28a-2ff34b75c877_6966933e-57b8-4532-923d-7437b2549e42.jpeg",
                              inStock: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207953",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133182",
                              name: "Coconut Uthappam",
                              category: "Uthappam Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/f17f8858-d762-4a8c-8248-41c23be2a244_1668bd58-fb6c-4eb7-b703-8d8aee16c037.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207949",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133186",
                              name: "Onion Garlic Uthappam",
                              category: "Uthappam Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/01a8ec99-fb7c-4082-a8f2-171e2c66739c_c89bbc38-4a95-407f-95a5-5ac5257bd9bf.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207966",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133191",
                              name: "Plain Uthappam",
                              category: "Uthappam Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/da9dea7c-4ea8-49b0-9c9b-7a8241ce622f_2dbaaec2-b4f4-4269-8365-b3e05784f519.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207974",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133192",
                              name: "Tomato Uthappam",
                              category: "Uthappam Varieties",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/ee70675c-4065-47ee-a32f-bbcd50aae34a_1806ed08-b92f-45df-b01c-bf9978cd1121.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207983",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/54904af3-e007-4204-9b56-4f423a5009ae_e6112771-72a6-45d8-8e36-179b8c73d7b7.jpeg",
                      categoryId: "56933284",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Southwala Combo",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133201",
                              name: "Briyani Combo",
                              category: "Southwala Combo",
                              description:
                                "Chicken Briyani + Chicken/ Mutton Chettinadu/ Chicken 65 + 1 Pcs Parota",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/25/c032e37b-7e43-47b8-b6b8-84322bd5d50f_22822f65-52c8-4328-b05d-b33eb14ff7cc.jpg",
                              inStock: 1,
                              price: 55000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388480",
                                  groupName: "Choice For Biryani Combo",
                                  choices: [
                                    {
                                      id: "131734927",
                                      name: "Chicken",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734920",
                                      name: "Mutton Chettinadu",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734923",
                                      name: "Chicken 65",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "105903734",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133203",
                              name: "South Combo 2",
                              category: "Southwala Combo",
                              description:
                                "Mutton Curry + Omelet + Rice / 3 pcs Parotta / Kal Dosa 3 Pcs /3 pcs Chapati",
                              inStock: 1,
                              price: 49000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388482",
                                  groupName: "Choice Of Rice/parotta/dosa",
                                  choices: [
                                    {
                                      id: "131734925",
                                      name: "Rice",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734919",
                                      name: "3 Pcs Parotta",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734921",
                                      name: "Kal Dosa 3 Pcs",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734924",
                                      name: "3 Pcs Chapati",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "112577195",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133202",
                              name: "South Combo 1",
                              category: "Southwala Combo",
                              description:
                                "Chicken Curry + Omelet + Rice / 3 pcs Parotta / Kal Dosa 3 Pcs /3 pcs Chapati",
                              inStock: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388481",
                                  groupName: "Choice Of Rice/parotta/dosa",
                                  choices: [
                                    {
                                      id: "131734925",
                                      name: "Rice",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734919",
                                      name: "3 Pcs Parotta",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734921",
                                      name: "Kal Dosa 3 Pcs",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734924",
                                      name: "3 Pcs Chapati",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "108975642",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133204",
                              name: "South Combo 3",
                              category: "Southwala Combo",
                              description:
                                "Fish Curry + Omelet + Rice / 3 pcs Parotta / Kal Dosa 3 Pcs /3 pcs Chapati",
                              inStock: 1,
                              price: 49000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388483",
                                  groupName: "Choice Of Rice/parotta/dosa",
                                  choices: [
                                    {
                                      id: "131734925",
                                      name: "Rice",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734919",
                                      name: "3 Pcs Parotta",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734921",
                                      name: "Kal Dosa 3 Pcs",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131734924",
                                      name: "3 Pcs Chapati",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "95207980",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2025/3/25/c032e37b-7e43-47b8-b6b8-84322bd5d50f_22822f65-52c8-4328-b05d-b33eb14ff7cc.jpg",
                      categoryId: "56933287",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Soup",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794382",
                              name: "Rasam With 2 Papad",
                              category: "Soup",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/0027b497-ffc9-43cb-bc73-3271b66def61_4b6727aa-bafa-45bd-9760-0d9de8db6d89.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 13000,
                              finalPrice: 8900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "fe754725-cb1b-426c-b6f8-2241ab2639aa",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "67336176",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464390",
                              name: "Mutton Soup",
                              category: "Soup",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/4e04d0d4-12fd-48a1-b92c-c3456dc8fb2c_84d8b753-59d0-4e46-a088-3cf4fcb8da05.jpeg",
                              inStock: 1,
                              price: 26000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "31 ratings",
                                  ratingCountV2: "31",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186774",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464392",
                              name: "Tomato Soup",
                              category: "Soup",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/929564de-7d2f-494b-bf86-2bc912e09e73_f00baadc-6b5b-46e2-bbcd-bf0029369a53.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 17000,
                              finalPrice: 10900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "8889b23d-71c8-474b-b8b5-95374202c16d",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "8186835",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464391",
                              name: "Chicken Soup",
                              category: "Soup",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/22641fa8-7bf5-4e1a-b2ea-19b577e362c1_99e18e37-a924-4215-bb55-02aa2a419c00.jpeg",
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.6",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#FFF0CD", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_low",
                                  ratingTextColor: "rating_low",
                                  ratingCountTextColor: "rating_low",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186697",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464393",
                              name: "Veg Clear Soup",
                              category: "Soup",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/6bc09d85-a903-47d4-8bde-f6d3afbe7ef9_07fcffc2-ca46-4a8f-bd6c-8cb103e9b0dc.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 16000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186842",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/0027b497-ffc9-43cb-bc73-3271b66def61_4b6727aa-bafa-45bd-9760-0d9de8db6d89.jpeg",
                      categoryId: "56933288",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chinese Combo",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794357",
                              name: "Special Combo",
                              category: "Chinese Combo",
                              description:
                                "Mix Fried Rice + Chicken Noodles + Chilli Chicken + Cold Drink (500 ml)",
                              inStock: 1,
                              price: 65000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336185",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794359",
                              name: "Chicken Combo",
                              category: "Chinese Combo",
                              description:
                                "Chicken Fried Rice / Noodles + Chilli Chicken + Cold Drink (500 ml)",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/eb00dac2-2d70-4c95-8cac-5d14f6255d60_1873832d-c302-4722-b856-e8ca755700ef.jpeg",
                              inStock: 1,
                              price: 50000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388491",
                                  groupName: "Choose Any One",
                                  choices: [
                                    {
                                      id: "92453968",
                                      name: "Fried Rice",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "92453969",
                                      name: "Noodles",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336149",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794099",
                              name: "Pav Bhaji",
                              category: "Chinese Combo",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336171",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794366",
                              name: "Paneer Combo",
                              category: "Chinese Combo",
                              description:
                                "Veg. Fried Rice / Veg. Noodles + Chilli Paneer + Cold Drink (500 ml)",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/d8cde164-929c-4d34-aa52-92a62ae7ff57_698c27c3-4568-4e3b-8ac7-e7c53ac7aa70.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 46000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388492",
                                  groupName: "Choose Any One",
                                  choices: [
                                    {
                                      id: "92453968",
                                      name: "Fried Rice",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "92453969",
                                      name: "Noodles",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336169",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "159133239",
                              name: "Veg. Combo",
                              category: "Chinese Combo",
                              description:
                                "Veg. Fried Rice / Veg. Noodles + Veg Manchurian + Cold Drink (500 ml)",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/d5085af6-0f3c-4f01-8458-93878c1c4ed2_d5321c96-83fc-4f14-a37d-e59a8f1da318.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "194388493",
                                  groupName: "Choose Any One",
                                  choices: [
                                    {
                                      id: "92453968",
                                      name: "Fried Rice",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "92453969",
                                      name: "Noodles",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336190",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/eb00dac2-2d70-4c95-8cac-5d14f6255d60_1873832d-c302-4722-b856-e8ca755700ef.jpeg",
                      categoryId: "35963205",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Salad & Raita",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794573",
                              name: "Pineapple Raita",
                              category: "Salad & Raita",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/25/ee158df3-53af-4944-93dc-e063276252f7_917019be-1abb-43f3-8217-52709fd2639d.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336172",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794583",
                              name: "Boondi Raita",
                              category: "Salad & Raita",
                              imageId: "amyndveu96nusfei6fjo",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336142",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117794565",
                              name: "Mix Raita",
                              category: "Salad & Raita",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/8/1/9a7d1965-4d96-4b06-8cd4-ae3468a2f33f_8c220781-9614-4f43-98d7-438d52b20009.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "67336164",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "97101322",
                              name: "Green Salad",
                              category: "Salad & Raita",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/29f124f6-728d-4567-8fcc-52172de1d685_5bfc1623-ffdf-47e1-8ade-8713bc660ea6.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 12000,
                              finalPrice: 8900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "13 ratings",
                                  ratingCountV2: "13",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "fe754725-cb1b-426c-b6f8-2241ab2639aa",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "54361301",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2025/3/25/ee158df3-53af-4944-93dc-e063276252f7_917019be-1abb-43f3-8217-52709fd2639d.jpg",
                      categoryId: "36062919",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Indian Breads",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464396",
                              name: "Garlic Naan",
                              category: "Indian Breads",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/ea5b25dc-cfec-47f5-a5e1-f8ffe19c8f4e_ae40a654-2a82-4caa-ae18-919710a9466c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 12000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186734",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464397",
                              name: "Stuff Naan",
                              category: "Indian Breads",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/0722cc73-97b0-46bb-ab65-e3f1e6af1631_797dd19e-4cf3-4662-a842-b54d582310ae.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 12000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186827",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464398",
                              name: "Butter Naan",
                              category: "Indian Breads",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/52d8d116-8a09-44e5-9ae3-1ab3502a0a48_4c9f2085-2ee2-4391-9a38-421c779b3c5c.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "26 ratings",
                                  ratingCountV2: "26",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186670",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464395",
                              name: "Lachha Parantha",
                              category: "Indian Breads",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/0ef32195-e3a9-4cdc-b2c2-62de58133d54_f0e1e2f5-def3-4dea-9be7-1ff802c93c61.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "23 ratings",
                                  ratingCountV2: "23",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186751",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464399",
                              name: "Plain Naan",
                              category: "Indian Breads",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/4256f20d-72b5-4e08-8206-7a7ea5ca8a9f_0d6f9a8b-3860-47de-8b5d-850f8241e815.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186798",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "40602309",
                              name: "Roti",
                              category: "Indian Breads",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/26/aceb569c-0bb9-4889-bf46-65b3d3121f81_b28bee37-f889-4022-ad91-fb1fd8f21ebf.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "169 ratings",
                                  ratingCountV2: "169",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186813",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464400",
                              name: "Butter Roti",
                              category: "Indian Breads",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/26/aceb569c-0bb9-4889-bf46-65b3d3121f81_b28bee37-f889-4022-ad91-fb1fd8f21ebf.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "27 ratings",
                                  ratingCountV2: "27",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186676",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/ea5b25dc-cfec-47f5-a5e1-f8ffe19c8f4e_ae40a654-2a82-4caa-ae18-919710a9466c.jpeg",
                      categoryId: "56933289",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg Indian Snacks",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65464379",
                              name: "Paneer Tikka",
                              category: "Veg Indian Snacks",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/bd5bd6f5-0ab7-4914-924a-ef86393a50bb_a723d135-8c8b-40ef-b64e-83a871664f88.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "8186789",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "97101333",
                              name: "Paneer Malai Tikka",
                              category: "Veg Indian Snacks",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/28/0c47a5a0-b470-4a70-92df-8431d0a0b051_0318e7f5-507d-4cbc-9dee-5e41d3a4fc18.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "54361303",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/12/28/bd5bd6f5-0ab7-4914-924a-ef86393a50bb_a723d135-8c8b-40ef-b64e-83a871664f88.jpeg",
                      categoryId: "56933292",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Flavour Of Southvala",
                      area: "Karol Bagh",
                      completeAddress:
                        "6/79 Padam Singh Road, Wea Block, Karolbagh New Delhi-110005",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "92c31f22-93a4-4bf4-8e38-2dffa433d9b7",
  sid: "nmgd8e86-3c3c-4ad7-bdf3-580f31fddfad",
  deviceId: "82252212-469e-8684-80c6-b541cc4e9656",
  csrfToken: "zARL9c1rgdrQ-5UBdHGgRJblSggoBKPNRNGZEMlo",
};
