var IPHONE = {
	en: {
		premium_products: {
			scenarios: [
				{
					text: "Bonjour. Certains de nos dirigeants se rendront en Asie le mois prochain et ont demandé expressément à voyager avec Air Canada. Ils doivent être à pied d'œuvre dès leur arrivée et veulent être prêts à travailler. Notre politique relative aux voyages leur permet de voyager en Classe affaires. Pouvez-vous nous parler de la Classe affaires internationale d'Air Canada?",
					sound: 'premium_products_iphone',
					questions: [
						{
							question: "La Classe affaires internationale d'Air Canada comprend des prestations de luxe et des services prioritaires, puis offre une commodité et un confort absolus grâce à des fauteuils qui: ",
							answers: [
								{ text: "s'inclinent à 130 degrés"},
								{ text: "s'inclinent à 145 degrés"},
								{ text: "s'inclinent à 170 degrés"},
								{ text: "se transforment en un lit parfaitement horizontal mesurant plus de 1,80 m (6 pi)"}
							],
							valid: [3],
							index: 0
						},
						{
							question: "Les nouvelles loges distinction des 787 de Boeing d'Air Canada sont également proposées à bord des appareils:",
							answers: [
								{ text: "767 de Boeing"},
								{ text: "777 de Boeing"},
								{ text: "A380 d'Airbus"},
								{ text: "A321 d’Airbus"}
							],
							valid: [1],
							index: 1
						},
						{
							question: "Les passagers de la Classe affaires internationale d'Air Canada peuvent s'attendre à accéder aux services prioritaires à l'aéroport, comme l'enregistrement, l'embarquement et le contrôle de sécurité prioritaires, ainsi que : (sélectionner toutes les réponses qui s’appliquent):",
							answers: [
								{ text: "l'attribution de places Préférence aux portes d'embarquement à l'aéroport"},
								{ text: "le traitement prioritaire des bagages"},
								{ text: "l'accès gratuit aux salons Feuille d'érable"},
								{ text: "l'assistance des agents du Service Concierge d'Air Canada"}
							],
							valid: [1,2,3],
							index: 2
						}
					],
					alternate_questions: [
						{
							question: "Air Canada’s International Business Class service features luxurious amenities and priority services and provides the ultimate in comfort and convenience with seats that recline into fully flat beds over 6 feet in length.  Made for comfort and a good night’s sleep, the seat width on these International Business Class seats is:",
							answers: [
								{ text: '18.5 inches' },
								{ text: '19.5 inches' },
								{ text: '21 inches' },
								{ text: '21.5 inches' }
							],
							valid: [2]
						},
						{
							question: "The seating configuration in Air Canada's International Business Class Cabin on Boeing 787 and Boeing 777 aircraft is:",
							answers: [
								{ text: '1 X 2 X 1' },
								{ text: '1 X 1 X 1' },
								{ text: '2 X 2 X 2' },
								{ text: '2 X 1 X 2' }
							],
							valid: [0]
						},
						{
							question: "International Business Class passengers on Air Canada can expect access to airport priority services such as Priority Check-in,  Priority Boarding, Priority Security Clearance, Complimentary Maple Leaf Lounge access, Assistance from Air Canada Concierge agents as well as Priority Baggage handling.  True or False, International Business Class passengers will also enjoy an Extra baggage allowance?",
							answers: [
								{ text: 'TRUE' },
								{ text: 'FALSE' }
							],
							valid: [0]
						}
					]
				}
			]
		},
		leisure_group: {
			scenarios: [
				{
					text: "Bonjour. J'espère que vous serez en mesure de m'aider. Nous célébrons notre 15e anniversaire de mariage cette année, et je tiens à ce que notre voyage pour l'occasion soit très spécial. Nous sommes prêts à dépenser un peu plus pour ce voyage avec Air Canada Rouge. Si nous souhaitons nous faire plaisir un peu, quelles options nous sont offertes?",
					sound: 'leisure_group_iphone',
					questions: [
						{
							question: "Après 15 ans, vous méritez effectivement de vous faire plaisir. Un voyage dans la cabine Premium rouge serait la manière idéale d'amorcer vos vacances. Les fauteuils Premium Rouge sont plus larges et offrent davantage d’espace personnel et beaucoup d’espace pour les jambes. Chaque fauteuil donne environ 18 cm (7 po) d'espace de plus pour les jambes. La cabine Premium rouge à bord du 767 de Boeing comprend ce qui suit:",
							answers: [
								{ text: "14 fauteuils Premium Rouge"},
								{ text: "20 fauteuils Premium Rouge"},
								{ text: "24 fauteuils Premium Rouge"},
								{ text: "36 fauteuils Premium Rouge"}
							],
							valid: [2]
						},
						{
							question: "La cabine Premium rouge offre également tous les avantages que vous attendez d'une expérience de voyage haut de gamme, y compris des vins, des spiritueux et des repas haut de gamme gratuits, l'enregistrement gratuit de deux bagages, ainsi que l'enregistrement et l'embarquement prioritaires. Pour un voyage au Canada, à destination des États-Unis ou pour des destinations soleil, l'accès aux salons Feuille d'érable est gratuit. Pour les vols à destination de l'Europe, de l'Asie, de l'Afrique et de l'Amérique du Sud, l'accès aux salons Feuille d'érable est:",
							answers: [
								{ text: "Gratuit"},
								{ text: "$25"},
								{ text: "$35"},
								{ text: "$45"}
							],
							valid: [1]
						},
						{
							question: "Les places rouge Plus représentent l'autre option. Alors que la cabine Premium rouge offre des sièges plus larges avec plus d'espace personnel et de place pour les jambes, des repas haut de gamme ainsi que des services prioritaires, les places rouge Plus, situées dans la classe économique de l'appareil, donnent aux voyageurs plus d'espace pour les jambes que les places ordinaires de la classe économique d'Air Canada Rouge. En fait, les places rouge Plus, dont la plupart se trouvent à l'avant de la cabine économique d'Air Canada Rouge, offrent: ",
							answers: [
								{ text: "10 cm (4 po) d'espace pour les jambes de plus que les sièges de la classe économique d'Air Canada Rouge"},
								{ text: "15 cm (6 po) d'espace pour les jambes de plus que les sièges de la classe économique d'Air Canada Rouge"},
								{ text: "18 cm (7 po) d'espace pour les jambes de plus que les sièges de la classe économique d'Air Canada Rouge"},
								{ text: "20 cm (8 po) d'espace pour les jambes de plus que les sièges de la classe économique d'Air Canada Rouge"}
							],
							valid: [2]
						}
					],
					alternate_questions: [
						{
							question: "You do deserve a little indulgence after 15 years.  Travelling in Premium rouge would get your holiday off to a perfect start. The premium rouge cabin on Boeing 767 aircraft contains 24 Premium rouge seats that are (select all that apply)",
							answers: [
								{ text: 'Wider and offer more personal space and leg room' },
								{ text: 'Laid out in a 2 X 2 X 2 configuration' },
								{ text: 'Equipped with 110-volt power plug and High-powered USB port at every seat' },
								{ text: 'Equipped with Lumbar support and massage function.' }
							],
							valid: [0,1,2]
						},
						{
							question: "Premium rouge also includes all of the perks you would expect from a premium travel experience, including complimentary premium meals, wine & spirits, 2 free checked bags as well as Priority check in and boarding.  For flights to Europe, Asia, Africa & South America, the Maple Leaf Lounge access fee is $25.  For flights within Canada, to the USA and to Sun destinations, Maple Leaf Lounge access is",
							answers: [
								{ text: 'Complimentary' },
								{ text: '$25' },
								{ text: '$35' },
								{ text: '$45' }
							],
							valid: [0]
						},
						{
							question: "The other option is rouge plus seating.  While Premium rouge offers a larger seat with more personal space, premium meals and priority services, rouge Plus seats are located in the Economy cabin of the aircraft and offers (select all that apply):",
							answers: [
								{ text: 'Guaranteed aisle or window seating' },
								{ text: '7 more inches of leg room than regular rouge economy seats' },
								{ text: 'Premium meals, wine & spirits. ' }
							],
							valid: [1]
						}
					]
				}
			]
		},
		network_fleet: {
			scenarios: [
				{
					text: "Bonjour. J'ai une question concernant mon vol de la semaine prochaine. Pouvez-vous me renseigner sur les places Préférence à bord des appareils d'Air Canada et me dire si j'y suis admissible?",
					sound: 'network_fleet_iphone',
					questions: [
						{
							question: "Les places Préférence d'Air Canada offrent ce qui suit aux voyageurs qui recherchent un peu plus de confort : (sélectionner toutes les réponses qui s’appliquent):",
							answers: [
								{ text: "Plus d'espace pour les jambes"},
								{ text: "Service de serviettes chaudes"},
								{ text: "Emplacement à l'avant de l'appareil"},
								{ text: "Embarquement prioritaire"}
							],
							valid: [0, 2]
						},
						{
							question: "Comparativement à un pas entre les sièges standard allant de 77,5 cm (31 po) à 82,5 cm (33 po) en classe économique, les places Préférence donnent 10 cm (4 po) d'espace de plus pour les jambes.",
							answers: [
								{ text: "Vrai"},
								{ text: "Faux"}
							],
							valid: [0]
						},
						{
							question: "La présélection de places Préférence est gratuite pour les passagers qui voyagent au tarif Latitude. Ces places sont également proposées aux membres Air Canada Altitude, et les frais, le cas échéant, sont facturés selon le statut Altitude et le tarif payé. Les autres voyageurs:",
							answers: [
								{ text: "n'ont pas accès aux places Préférence"},
								{ text: "peuvent acheter une place Préférence moyennant l'acquittement de frais"}
							],
							valid: [1]
						}
					],
					alternate_questions: [
						{
							question: "QUESTION MISSING",
							answers: [
								{ text: 'missing question' },
								{ text: 'missing question' },
								{ text: 'missing question' },
								{ text: 'missing question.' }
							],
							valid: [0,1,2]
						},
						{
							question: "Compared to a standard seat pitch of 31” – 33” in economy, Preferred Seats offer",
							answers: [
								{ text: '3 more inches of legroom.' },
								{ text: '4 more inches of legroom' },
								{ text: '5 more inches of legroom.' }
							],
							valid: [1]
						},
						{
							question: "Preferred seats are available to Altitude members with the fee, if applicable, depending on their Altitude Status and fare paid.  Preferred seat selection is complimentary for passengers travelling on a Latitude fare.  True or false, all travellers can purchase Preferred Seats for a fee.",
							answers: [
								{ text: 'TRUE' },
								{ text: 'FALSE' }
							],
							valid: [0]
						}
					]
				}
			]
		}
	}
}

var PHONE = {
	en: {
		premium_products: {
			scenarios: [
				{
					text: "Pouvez-vous me rappeler au moment qui vous conviendra? J'ai besoin d'en savoir plus sur les salons Feuille d'érable et sur les voyages en Classe affaires en Amérique du Nord. Au plaisir d’avoir de vos nouvelles! Merci.",
					sound: 'premium_products_phone',
					questions: [
						{
							question: "Les salons Feuille d'érable d'Air Canada permettent de se soustraire à l'agitation aéroportuaire dans un lieu calme et privé, puis sont situés dans tous les grands aéroports du Canada et aux destinations internationales clés. Les salons proposent ce qui suit : (sélectionner toutes les réponses qui s’appliquent):",
							answers: [
								{ text: "Boissons et repas gratuits"},
								{ text: "Options de nouvelles et de divertissements"},
								{ text: "Centres d'affaires "},
								{ text: "Services de santé"}
							],
							valid: [0, 1, 2]
						},
						{
							question: "Sur les liaisons nord-américaines et antillaises, la Classe affaires offre un grand confort, un système de divertissements individuel et une cuisine haut de gamme. Les voyageurs de la Classe affaires peuvent profiter de ce qui suit : (sélectionner toutes les réponses qui s’appliquent):",
							answers: [
								{ text: "Service Concierge"},
								{ text: "Fauteuils équipés d'écrans individuels à commande tactile"},
								{ text: "Prise électrique à même le siège pour ordinateur portatif"},
								{ text: "Place côté hublot ou côté couloir garantie"}
							],
							valid: [1, 2, 3]
						},
						{
							question: "Certains vols assurés en Amérique du Nord par 787, 767 et 777 de Boeing ou par A330 d'Airbus, sur des liaisons comme celles entre Toronto et Calgary, Los Angeles, San Francisco et Vancouver, ou entre Montréal et Vancouver, offrent ce service, qui comprend des fauteuils-lits. Ce produit spécial de la Classe affaires porte le nom suivant: ",
							answers: [
								{ text: "Premières affaires"},
								{ text: "Affaires Plus Amérique du Nord"},
								{ text: "Business Plus"},
								{ text: "Classe affaires transcontinentale"}
							],
							valid: [3]
						}
					],
					alternate_questions: [
						{
							question: "Air Canada’s Maple Leaf Lounges provide a private, serene escape from the bustle of airport activity.  The lounges are equipped with complimentary food and beverages, News & Entertainment options and Business Centres.  The lounges are located at all major airports across Canada and at key international locations including: ",
							answers: [
								{ text: 'Chicago, New York, Frankfurt, London, Tokyo.' },
								{ text: 'Los Angeles,  New York, Frankfurt, London, Tokyo.' },
								{ text: 'Chicago, New York,  Frankfurt, Paris, London.' },
								{ text: ' Los Angeles,  New York,  Frankfurt, Paris, London.' }
							],
							valid: [3]
						},
						{
							question: "Business Class on North America & Caribbean routes offers added comfort, personal entertainment & premium cuisine.  Which of the following is not available to North America & Caribbean Business Class travellers?",
							answers: [
								{ text: 'Concierge service' },
								{ text: 'Business Class seats equipped with Personal touch-screen TVs' },
								{ text: 'Priority Boarding' },
								{ text: 'Complimentary Maple Leaf Lounge access' }
							],
							valid: [0]
						},
						{
							question: "Air Canada’s Business Class Transcontinental is offered on select flights operated within North America by Boeing 787, Boeing 767, Boeing 777 and Airbus A330 aircraft.  On these flights, Business Class Transcontinental passengers will enjoy:",
							answers: [
								{ text: 'Seats with four more inches of legroom than economy' },
								{ text: 'Seats with a 140 degree angle recline' },
								{ text: 'Seats with a 120 degree angle recline' },
								{ text: 'Fully lie flat beds' }
							],
							valid: [3]
						}
					]
				}
			]
		},
		leisure_group: {
			scenarios: [
				{
					text: "Bonjour! Bonne nouvelle! Notre projet de voyage a transpiré, et bon nombre de nos amis et de membres de notre famille souhaitent se joindre à nous. Y a-t-il des avantages de voyage en groupe que je devrais connaître?",
					sound: 'leisure_group_phone',
					questions: [
						{
							question: "Les membres du groupe peuvent voyager individuellement au départ de villes canadiennes et se rencontrer à un aéroport de correspondance pour se rendre à une destination ensemble. Le nombre minimal de personnes dans un groupe (y compris les enfants) est de seulement:",
							answers: [
								{ text: "5"},
								{ text: "8"},
								{ text: "10"},
								{ text: "12"}
							],
							valid: [2]
						},
						{
							question: "Les voyages de groupe donnent droit à des avantages spéciaux. Dans le cas de destinations et de centres de villégiature sélectionnés, des offres spéciales concernant l'avion, l'hôtel et les repas gratuits peuvent être prolongées. De plus, Vacances Air Canada offre, pour certains vols, deux surclassements GRATUITS et l'accès aux salons Feuille d'érable pour les groupes d'au moins: ",
							answers: [
								{ text: "15"},
								{ text: "20"},
								{ text: "25"},
								{ text: "30"}
							],
							valid: [1]
						},
						{
							question: "Il est également possible d'acheter à l'avance des repas et des écouteurs pour le vol pour les groupes d'au moins: ",
							answers: [
								{ text: "40"},
								{ text: "60"},
								{ text: "80"},
								{ text: "100"}
							],
							valid: [0]
						}
					],
					alternate_questions: [
						{
							question: "Air Canada Vacations offers lots of group vacation package options and deals to choose from when you fly or cruise as a group.  The Group must however travel all segments of the itinerary together.  True False",
							answers: [
								{ text: 'TRUE' },
								{ text: 'FALSE' }
							],
							valid: [1]
						},
						{
							question: "Travelling as a group does offer special perks.  Air Canada Vacations offers 2 FREE flight upgrades & Maple Leaf lounge access on select flights for groups of 20 or more. Other special groups perks include (select all that apply).",
							answers: [
								{ text: 'Guaranteed window or aisle seating' },
								{ text: 'Special fly, stay, eat for free offers from select resorts and destinations' },
								{ text: 'Flexibility for guests to leave from different cities, on different days of the week' },
								{ text: 'Option to pre-purchase meals and headsets on your flight for groups of 40+.' }
							],
							valid: [1,2,3]
						},
						{
							question: "Wedding & Incentive Group bookings will also be offered:",
							answers: [
								{ text: 'Free seat selection' },
								{ text: 'Complimentary meals' }
							],
							valid: [0]
						}
					]
				}
			]
		},
		network_fleet: {
			scenarios: [
				{
					text: "Bonjour! Je ne pouvais m'empêcher d'appeler. Tout le monde parle de l'appareil 787 Dreamliner de Boeing d’Air Canada. Que pouvez-vous me dire au sujet de cet appareil? On m'a dit de tenter de réserver une place à bord de cet appareil, dans la mesure du possible. Je ne comprends pas pourquoi.",
					sound: 'network_fleet_phone',
					questions: [
						{
							question: "L'appareil 787 de Boeing offre aux voyageurs de nombreuses nouvelles caractéristiques de confort, notamment : (sélectionner toutes les réponses qui s’appliquent):",
							answers: [
								{ text: "Un vol plus silencieux et plus paisible"},
								{ text: "Des hublots 30 pour cent plus grands"},
								{ text: "Des puits de lumière à divers endroits dans la cabine pour l'observation d'étoiles"},
								{ text: "Un aménagement cabine plus spacieux"}
							],
							valid: [0, 1, 3]
						},
						{
							question: "La nouvelle Classe affaires internationale d'Air Canada est proposée à bord des appareils 787 et 777 de Boeing. Les loges distinction à bord de ces appareils proposent le plus grand écran de divertissements offert en classe affaires par un transporteur d’Amérique du Nord, et des sièges pouvant être inclinés complètement pour former un fauteuil-lit qui mesure: ",
							answers: [
								{ text: "1,35 m (4 pi 6 po)"},
								{ text: "1,65 m (5 pi 6 po)"},
								{ text: "1,95 m (6 pi 6 po)"},
								{ text: "2,25 m (7 pi 6 po)"}
							],
							valid: [2]
						},
						{
							question: "L'accent que met Air Canada sur l'expérience des voyageurs a été reconnu par les voyageurs à l'échelle mondiale, et tout récemment par Skytrax, qui a accordé à Air Canada un statut prestigieux, ce qui fait d'Air Canada le seul transporteur exploitant un réseau international en Amérique du Nord à avoir atteint ce résultat exceptionnel.",
							answers: [
								{ text: "Transporteur trois étoiles"},
								{ text: "Transporteur quatre étoiles "},
								{ text: "Transporteur canadien de l'année"},
								{ text: "Transporteur d’affaires de l'année"}
							],
							valid: [1]
						}
					],
					alternate_questions: [
						{
							question: "The Boeing 787 aircraft offers travellers many new comforts including a quieter, smoother flight, a more spacious interior cabin, higher humidity levels that contribute to a more rested feeling upon arrival and windows that are:",
							answers: [
								{ text: '10 per cent larger' },
								{ text: '15 per cent larger' },
								{ text: '30 per cent larger' },
								{ text: '40 per cent larger' }
							],
							valid: [2]
						},
						{
							question: "Air Canada’s new International Business Class Executive Pods on Boeing 787 aircraft can be extended into a fully lie flat bed that measures 6 feet 6 inches in length.  Which other of Air Canada's aircraft is also equipped with the new International Business Class Pods ?",
							answers: [
								{ text: 'Boeing 767' },
								{ text: 'Boeing 777' },
								{ text: 'Airbus 330' },
								{ text: 'Airbus 380' }
							],
							valid: [1]
						},
						{
							question: "Air Canada’s focus on traveler experience has been recognized by travellers worldwide and again most recently by Skytrax who awarded Air Canada its prestigious Four Star ranking.  Quite a feat!  Air Canada is",
							answers: [
								{ text: 'The only International Network Carrier in Canada to achieve this milestone' },
								{ text: 'The only International Network Carrier in North America to achieve this milestone' },
								{ text: 'One of four International Network Carrier in North America to achieve this milestone.' }
							],
							valid: [1]
						}
					]
				}
			]
		}
	}
}

var MOUSE = {
	en: {
		premium_products: {
			scenarios: [
				{
					from: "Air Canada",
					topic: "Une question pour vous?",
					text: "Bonjour, ici Alexi du bureau du Service Concierge d'Air Canada. Nous voulions vous informer que nous avons été en mesure d'aider M. et Mme Jones à prendre leur vol de correspondance. Ce fut un plaisir de les aider.",
					sound: 'premium_products_mouse_1',
					questions: [
						{
							question: "Nous vous rappelons que nous formons une équipe dévouée qui a la responsabilité de fournir un service exclusivement aux : (sélectionner toutes les réponses qui s'appliquent):",
							answers: [
								{ text: "Membres Altitude Super Élite 100"},
								{ text: "Passagers de la Classe affaires – Amérique du Nord"},
								{ text: "Passagers de la Classe affaires internationale"},
								{ text: "Passagers de la cabine Économique Privilège"}
							],
							valid: [0, 2]
						},
						{
							question: "Si cela peut aider, voici un rappel de ce que le Service Concierge d'Air Canada propose (sélectionner toutes les réponses qui s’appliquent):",
							answers: [
								{ text: "Un service spécialisé dans des aéroports du monde entier"},
								{ text: "Une aide concernant les questions liées au voyage et à l'aéroport"},
								{ text: "Une aide en cas de demande spéciale, notamment les réservations d'hôtel, de théâtre ou de restaurant"},
								{ text: "Des files réservées pour le dépôt et la récupération à certains aéroports."}
							],
							valid: [0, 1, 2]
						},
						{
							question: "Les clients peuvent nous trouver facilement dans les aires d’enregistrement de la Classe affaires, près des portes d’embarquement et près des salons Feuille d’érable. Nous sommes facilement reconnaissables à notre uniforme distinctif noir et à notre porte-nom de concierge. Les agents du Service Concierge d'Air Canada proposent leur aide:",
							answers: [
								{ text: "Seulement dans les aéroports canadiens où se trouvent des salons Feuille d'érable d'Air Canada"},
								{ text: "Seulement dans les aéroports nord-américains où se trouvent des salons Feuille d'érable d'Air Canada"},
								{ text: "Seulement dans les aéroports où se trouvent des salons Feuille d'érable d'Air Canada"},
								{ text: "Dans certains aéroports à l'échelle mondiale, qu'on y trouve ou non des salons Feuille d'érable d'Air Canada"}
							],
							valid: [3]
						}
					],
					alternate_questions: [
						{
							question: "A reminder that we are a dedicated team responsible to provide service exclusively to Altitude Super Elite 100K passengers and  International Business Class Passengers.  True or False?  In addition to being able to assist passengers with Travel and airport related matters, Concierge agents as also able to assist with special requests such as hotel, theatre or restaurant reservations?",
							answers: [
								{ text: 'TRUE' },
								{ text: 'FALSE' }
							],
							valid: [0]
						},
						{
							question: "Dedicated to Altitude Super Elite 100K members and International Business Class Passengers, Air Canada Concierge Agents are located  at: ",
							answers: [
								{ text: 'Key Canadian Airports only' },
								{ text: 'Key American Airports only. ' },
								{ text: 'Key International Airports only.' },
								{ text: 'Key airports worldwide' }
							],
							valid: [3]
						},
						{
							question: "Air Canada's Concierge Agents are easily recognizable in their distinctive black uniform and Concierge identification tags.  The Air Canada concierge Agents are conveniently stationed around International Business Class check-in areas, departure gates and Maple Leaf Lounges.  True or False, Air Canada concierge are located only in airports that have a Maple Leaf Lounge.",
							answers: [
								{ text: 'TRUE' },
								{ text: 'FALSE' }
							],
							valid: [1]
						}
					]
				},
				{
					from: "Air Canada",
					topic: "Une question pour vous?",
					text: "Bonjour! Merci d'avoir délivré mon billet au tarif Latitude pour un vol à destination de Vancouver. J'ai quelques questions et j'espère que vous pourrez y répondre. Je n'étais pas certain de savoir de quels services prioritaires je peux profiter gratuitement. Pouvez-vous me les rappeler, s'il vous plaît? De plus, nous avons des employés qui voyageront régulièrement au cours des prochains mois. Y a-t-il des options intéressantes pour l'achat de billets au tarif en vrac en Classe affaires? Enfin, quel est le critère à respecter pour obtenir le statut Altitude Super Élite 100 cette année?",
					sound: 'premium_products_mouse_2',
					questions: [
						{
							question: "Le tarif Latitude vous permet de profiter gratuitement des services prioritaires suivants : (sélectionner toutes les réponses qui s’appliquent)",
							answers: [
								{ text: "Enregistrement prioritaire"},
								{ text: "Contrôle de sécurité prioritaire"},
								{ text: "Embarquement prioritaire"},
								{ text: "Traitement prioritaire des bagages"}
							],
							valid: [0, 2, 3]
						},
						{
							question: "Les Passes de vols d'Air Canada peuvent être achetées à des tarifs Classe affaires. Les voyageurs assidus bénéficient ainsi d'économies exceptionnelles et de la prévisibilité des coûts. Par souci de clarté, les conditions des Passes de vols sont les suivantes : (sélectionner toutes les réponses qui s’appliquent)",
							answers: [
								{ text: "Elles sont prépayées."},
								{ text: "Chaque crédit est valable pour un aller simple."},
								{ text: "Les voyages sont autorisés uniquement dans la zone géographique de la passe achetée."},
								{ text: "Elles sont offertes à la vente selon un nombre fixe ou illimité de crédits."}
							],
							valid: [0, 1, 2, 3]
						},
						{
							question: "Les membres Air Canada Altitude peuvent obtenir un statut selon le nombre de milles de qualification Altitude (MQA) ou de segments de qualification Altitude (SQA) accumulés en voyageant à bord de vols admissibles exploités entre le 1er janvier et le 31 décembre. Les membres doivent satisfaire à l'ensemble des exigences en matière de dollars de qualification Altitude (DQA). En plus de 20 000 dollars de qualification Altitude, l'exigence pour le statut Altitude Super Élite 100 est: ",
							answers: [
								{ text: "95 000 milles ou 95 segments"},
								{ text: "100 000 milles ou 95 segments"},
								{ text: "95 000 milles ou 100 segments"},
								{ text: "100 000 milles ou 100 segments"}
							],
							valid: [1]
						}
					],
					alternate_questions: [
						{
							question: "Priority check-in offers personalized full check-in services for eligible customers.  Air Canada offers dedicated counters that are available across the Air Canada network.  True of False, Passengers on a Latitude fare are eligible to use Priority Check in counters?",
							answers: [
								{ text: 'TRUE' },
								{ text: 'FALSE' }
							],
							valid: [0]
						},
						{
							question: "Flight Passes are a prepaid package of electronic one-way flight credits used for travel within a selected geographic zone during a specific period. A Flight Pass is comprised of a fixed or unlimited number of flight credits which can be managed online with ease.  Flight passes",
							answers: [
								{ text: 'Can be purchased for travel in Business Class' },
								{ text: 'Can be purchased for travel in Economy class' },
								{ text: 'Can be purchased for travel in both Business Class and Economy Class' }
							],
							valid: [2]
						},
						{
							question: "Members reach Air Canada Altitude status based on the number of Altitude Qualifying Miles (AQM) or Altitude Qualifying Segments (AQS) earned on eligible flights operated by Air Canada and the Star Alliance member airlines.  Members also need to complete the",
							answers: [
								{ text: 'Altitude Qualifying Dollars (AQD) requirement' },
								{ text: 'Altitude Qualifying International Segments (AQIS) requirement' },
								{ text: 'Altitude Qualifying Business Class Segments (AQBCS) requirement.' }
							],
							valid: [0]
						}
					]
				}
			]
		},
		leisure_group: {
			scenarios: [
				{
					from: "Air Canada",
					topic: "Une question pour vous?",
					text: "Bonjour. Je tenais à vous faire parvenir un petit mot pour vous remercier d'avoir organisé notre formidable voyage avec Air Canada Rouge. Nous sommes impatients de partir. Mon mari est un passionné d'avion, et je sais qu'il me demandera quels types d'appareils sont exploités par Air Canada Rouge. Pouvez-vous me renseigner à ce sujet?",
					sound: 'leisure_group_mouse_1',
					questions: [
						{
							question: "Je suis heureux d'apprendre que vous êtes impatients de voyager avec Air Canada Rouge. Ce fut un plaisir de vous aider. L'histoire d'Air Canada Rouge est incroyable. La société, dont le parc comptait à peine quatre appareils initialement en 2013, exploite aujourd'hui plus de:",
							answers: [
								{ text: "10 appareils"},
								{ text: "15 appareils"},
								{ text: "25 appareils"},
								{ text: "30 appareils"}
							],
							valid: [3]
						},
						{
							question: "Air Canada Rouge exploite des appareils 767 de Boeing qu'elle utilise principalement sur de longues liaisons entre le Canada et l'Europe, l'Asie, l'Afrique et l'Amérique du Sud. Elle exploite également des appareils A319 d'Airbus pour assurer des vols de courte durée au Canada et entre le Canada et les États-Unis et les Antilles. Elle a également ajouté:",
							answers: [
								{ text: "L'appareil 787 de Boeing à son parc aérien"},
								{ text: "L'appareil 777 de Boeing à son parc aérien"},
								{ text: "L'appareil A380 d'Airbus à son parc aérien"},
								{ text: "L'appareil A321 d'Airbus à son parc aérien"}
							],
							valid: [3]
						},
						{
							question: "Je sais que vous serez impressionné par le service à la clientèle que vous offrira l'équipage d’Air Canada Rouge à bord. Les membres d'équipage d’Air Canada Rouge ont suivi une formation spéciale sur l'excellence du service clientèle avec la société suivante: ",
							answers: [
								{ text: "Cirque du Soleil"},
								{ text: "Disney"},
								{ text: "Amazon"},
								{ text: "Starbucks"}
							],
							valid: [1]
						}
					],
					alternate_questions: [
						{
							question: "I'm happy to hear you are looking forward to your trip on Air Canada rouge.  It was my pleasure to help.  The Air Canada rouge story is incredible. The company started out with just four aircraft in 2013 and now operates more than 40 aircraft.  Flights to Europe, Asia, Africa and South America are all operated by:",
							answers: [
								{ text: 'Boeing 737' },
								{ text: 'Airbus A319' },
								{ text: 'Boeing 767' },
								{ text: 'Airbus 321' }
							],
							valid: [2]
						},
						{
							question: "This Air Canada rouge double-aisled aircraft has 280 seats and feature a two-cabin configuration with three customer comfort options.  The front cabin features 24 Premium rouge seats.  The rear cabin features  256 seats: 39 rouge plus seats and 217 rouge seats.",
							answers: [
								{ text: 'Boeing 737' },
								{ text: 'Airbus A319' },
								{ text: 'Boeing 767' },
								{ text: 'Airbus 321' }
							],
							valid: [2]
						},
						{
							question: "I know that you are going to be impressed with the customer service you’ll receive from the rouge crew on board.  You and your husband should have a great flight.  A reminder to bring a laptop or mobile Apple or Android device, loaded with the Air Canada App in order to watch Air Canada Rouge's streaming in-flight entertainment system.  The access fee is:",
							answers: [
								{ text: 'Complimentary' },
								{ text: '$7 for each flight leg' },
								{ text: '$14 for each flight leg' },
								{ text: '$21 for each flight leg' }
							],
							valid: [0]
						}
					]
				},
				{
					from: "Air Canada",
					topic: "Une question pour vous?",
					text: "J'ai besoin de votre aide pour décider de projets de vacances. J'envisage de faire une croisière. Puis-je faire une réservation pour mon vol et ma croisière avec Vacances Air Canada? Si j'opte plutôt pour un centre de villégiature, pouvez-vous m'expliquer la façon de comparer facilement la qualité et la valeur des différentes options d'hôtels et de centres de villégiature?",
					sound: 'leisure_group_mouse_2',
					questions: [
						{
							question: "Les options VolCroisière de Vacances Air Canada permettent d'ajouter facilement les vols nécessaires à votre croisière. Grâce aux options VolCroisière, tous les vols sont remboursables à 100 % jusqu'à 30 jours avant le voyage, et il suffit d'un dépôt remboursable de 100 $ pour bloquer les vols. Le Vol garanti vous permet de rejoindre votre croisière malgré les imprévus. En outre :",
							answers: [
								{ text: "Un changement de nom est permis jusqu'à 45 jours avant le voyage"},
								{ text: "Un changement de nom est permis jusqu'à 30 jours avant le voyage"},
								{ text: "Un changement de nom est permis jusqu'à 15 jours avant le voyage"},
								{ text: "Un changement de nom est permis jusqu'à 10 jours avant le voyage"}
							],
							valid: [1]
						},
						{
							question: "Vacances Air Canada a soigneusement sélectionné des centres de villégiature, des hôtels, des condominiums, des gîtes touristiques et des villas qui conviennent à tous les goûts et à tous les budgets. Comme de nombreux établissements proposent un éventail d'hébergements, Vacances Air Canada fournit ce qui suit : ",
							answers: [
								{ text: "Une classification des hôtels (de luxe, supérieur, de très bonne valeur, confortable)"},
								{ text: "Un guide décrivant les propriétés"},
								{ text: "A et B"}
							],
							valid: [2]
						},
						{
							question: "En plus des forfaits vacances, des vols et des croisières, Vacances Air Canada peut également proposer ce qui suit : (sélectionner toutes les réponses qui s’appliquent) ",
							answers: [
								{ text: "Excursions en autocar et en automobile sans guide"},
								{ text: "Circuits ferroviaires multi-destinations"},
								{ text: "Location de voitures"},
								{ text: "Billets pour des attractions touristiques"}
							],
							valid: [0, 1, 2, 3]
						}
					],
					alternate_questions: [
						{
							question: "With Air Canada Vacations, in the unlikely event that a delayed flight causes travellers to miss their cruise departure, they will be rebooked on the next available flight to catch up with the cruise at no extra cost.  Air Canada Vacations’ CruiseAir options offer lots more flexibility including (select all that apply):",
							answers: [
								{ text: 'All flights are 100% refundable up to 30 days prior to travel' },
								{ text: '$100 refundable deposit is all it takes to hold flights' },
								{ text: 'One name change is permitted up to 30 days prior to travel' }
							],
							valid: [0,1,2]
						},
						{
							question: "Air Canada Vacations provides Hotel Classifications and description guides for the properties they sell.  The Classifications and descriptions are available for",
							answers: [
								{ text: 'Resorts & hotels' },
								{ text: 'Condominiums, Bed and breakfasts, and villas' },
								{ text: 'Resorts, Hotels, Condominiums, Bed and Breakfasts and Villas.' }
							],
							valid: [2]
						},
						{
							question: "To compliment vacation packages, Flights and Cruises, Air Canada Vacation can offer coach tours, self-drive tours, multi-city rail tours and attraction tickets.  True or False, Air Canada Vacations can also offer car rentals.",
							answers: [
								{ text: 'TRUE' },
								{ text: 'FALSE' }
							],
							valid: [0]
						}
					]
				}
			]
		},
		network_fleet: {
			scenarios: [
				{
					from: "Air Canada",
					topic: "Une question pour vous?",
					text: "Bonjour! J'espère que vous allez bien. J'ai vu des tarifs exceptionnels pour la Classe affaires d'Air Canada et j'envisage d'y réserver une place pour mon prochain voyage. Pouvez-vous me donner quelques renseignements sur ce à quoi je devrais m'attendre? Merci.",
					sound: 'network_fleet_mouse_1',
					questions: [
						{
							question: "La Classe affaires internationale d'Air Canada donne droit à des prestations de luxe et à des services prioritaires, comme l'enregistrement, l'embarquement et le contrôle de sécurité prioritaires. En plus de vins, de spiritueux et de repas gastronomiques haut de gamme, ainsi que d'un grand oreiller et d'une couette moelleuse, les voyageurs peuvent profiter de ce qui suit : (sélectionner toutes les réponses qui s’appliquent):",
							answers: [
								{ text: "Service Concierge"},
								{ text: "Accès aux salons Feuille d'érable"},
								{ text: "Franchise de bagages supplémentaire"},
								{ text: "Stationnement prioritaire"}
							],
							valid: [0, 1, 2]
						},
						{
							question: "Air Canada Rouge, le transporteur loisirs d'Air Canada, propose les places Premium Rouge, situées à l’avant de la cabine, qui sont plus larges et offrent plus d'espace pour les jambes et une plus grande inclinaison. Les places Premium Rouge sont proposées à bord des vols suivants:",
							answers: [
								{ text: "Certains vols d'Air Canada Rouge"},
								{ text: "Tous les vols d'Air Canada Rouge"}
							],
							valid: [1]
						},
						{
							question: "À bord des appareils A319 et A321 d'Airbus, les places Premium Rouge ont une configuration 2 par 2 et un pas de 90 cm (36 po). À bord du 767 de Boeing, les places Premium Rouge ont un pas de 92,5 cm (37 po) et donnent aux passagers 18 cm (7 po) d'espace de plus pour les jambes. Les 767 ont la configuration suivante: ",
							answers: [
								{ text: "Configuration 2-2-2"},
								{ text: "Configuration 2-3-2 "},
								{ text: "Configuration 1-2-2"},
								{ text: "Configuration 3-3"}
							],
							valid: [0]
						}
					],
					alternate_questions: [
						{
							question: "Air Canada’s International Business Class seats are designed to provide travellers with their own personal space that's ideal for a good night's sleep.  Each seat reclines into a fully flat bed at the touch of a button.  In addition to Concierge service and Maple Leaf Lounge access, travellers can enjoy other luxurious amenities and priority services. Which of the following features is not available to International Business Class passengers?",
							answers: [
								{ text: 'Premium wines, spirits and cuisine and a large pillow and plush duvet' },
								{ text: 'Extra baggage allowance' },
								{ text: 'Priority Check-in and Priority Boarding' },
								{ text: 'Dedicated gate seating area' }
							],
							valid: [3]
						},
						{
							question: "Air Canada’s leisure airline, Air Canada rouge offers three customer comfort options on all of its flights.  Premium rouge with seats located at the front of the cabin are larger and offer more legroom and more recline.  If you are looking for a middle ground between Premium rouge and rouge class, you may want to consider this Air Canada rouge option that provides travellers with more legroom.",
							answers: [
								{ text: 'Burgundy' },
								{ text: 'Priority Plus' },
								{ text: 'Rouge plus.' }
							],
							valid: [2]
						},
						{
							question: "On Air Canada Rouge Boeing 767 aircraft, Premium rouge seats are configured in a 2 X 2 X 2 configuration.  These wider seats, with a seat pitch of 37” inches provide passengers with ",
							answers: [
								{ text: '4 more inches of leg room' },
								{ text: '6 more inches of leg room ' },
								{ text: '7 more inches of leg room' },
								{ text: '8 more inches of leg room' }
							],
							valid: [2]
						}
					]
				}
			]
		}
	}
}

var POSTER1 = {
	en: {
		premium_products: {
			scenarios: [
				{
					img: "img/exam_room/premium_poster_1.jpg",
					width: 400,
					icon: "img/exam_room/premium_poster_1_icon.png",
					text: "Offrez-vous la cabine Économique Privilège, une nouvelle classe de service, afin de profiter d'un confort supérieur dans une cabine exclusive, de prestations améliorées et de services prioritaires à l'aéroport. Cette classe est proposée sur certaines liaisons internationales.",
					sound: 'premium_products_poster_1',
					questions: [
						{
							question: "Les passagers voyageant dans la cabine Économique Privilège peuvent profiter d'avantages, notamment ce qui suit : (sélectionner toutes les réponses qui s'appliquent):",
							answers: [
								{ text: "Des fauteuils plus larges, davantage inclinables"},
								{ text: "Des fauteuils qui donnent 18 cm d'espace pour les jambes de plus qu'en classe économique"},
								{ text: "Des fauteuils qui se transforment en lit parfaitement horizontal"},
								{ text: "Un service de repas haut de gamme et un service de consommations gratuit"}
							],
							valid: [0, 1, 3]
						},
						{
							question: "À l'aéroport, les passagers de la cabine Économique Privilège peuvent profiter de certains des services prioritaires, notamment ce qui suit : (sélectionner toutes les réponses qui s’appliquent):",
							answers: [
								{ text: "Enregistrement prioritaire"},
								{ text: "Service de bagage prioritaire"},
								{ text: "Embarquement prioritaire"},
								{ text: "Accès gratuit aux salons Feuille d'érable"}
							],
							valid: [0, 1, 2]
						},
						{
							question: "La cabine Premium rouge est proposée pour tous les vols des passagers qui voyagent avec Air Canada Rouge. La cabine Premium rouge propose ce qui suit aux voyageurs : (sélectionner toutes les réponses qui s’appliquent)",
							answers: [
								{ text: "Plus d'espace dans le confort d’une cabine distincte"},
								{ text: "Vins, spiritueux et repas haut de gamme gratuits"},
								{ text: "Pas entre les sièges de 81 cm (32 po) "},
								{ text: "Sièges plus larges"}
							],
							valid: [0, 1, 3]
						}
					],
					alternate_questions: [
						{
							question: "Travelling in Premium Economy provides travellers with benefits including a dedicated cabin with larger seats that are wider and offer more recline, Premium meals and bar service as well as a seat pitch of 38” that offers:",
							answers: [
								{ text: 'Four more inches of legroom' },
								{ text: 'Five more inches of legroom' },
								{ text: 'Six more inches of legroom' },
								{ text: 'Seven more inches of legroom.' }
							],
							valid: [3]
						},
						{
							question: "At the airport, Premium Economy travellers can benefit from priority airport services including priority check-in, Priority baggage service and Priority Boarding.  Maple Leaf Lounge access is available",
							answers: [
								{ text: 'On a complimentary basis' },
								{ text: 'For a fee.' }
							],
							valid: [1]
						},
						{
							question: "For passengers who may be travelling on Air Canada rouge, Premium rouge provides travellers with more space with wider seats in the comfort of a separate cabin.  Travellers can enjoy complimentary premium meals, wine & spirits.  Premium rouge is available on: a. International flights only, b. Flights operated by Boeing 767 aircraft only, c. All flights.",
							answers: [
								{ text: 'MISSING ANSWER' },
								{ text: 'MISSING ANSWER' },
								{ text: 'MISSING ANSWER' },
								{ text: 'MISSING ANSWER' },
							],
							valid: [1]
						}
					]
				}
			]
		},
		leisure_group: {
			scenarios: [
				{
					img: "img/exam_room/leisure_poster_photo.jpg",
					text: "Nouvelle de dernière heure! Nous avons entendu dire que les clients réclament des vols d'Air Canada et Air Canada Rouge pour de nouvelles destinations. Par le lancement de nouveaux vols, Air Canada (avec Air Canada Rouge) devient l'une des quelque 12 sociétés à desservir 6 continents.",
					sound: 'leisure_group_poster_1',
					questions: [
						{
							question: "Air Canada Rouge, le transporteur loisirs d'Air Canada, propose des voyages à prix compétitifs pour des destinations vacances. Comme elle fait partie de la famille Air Canada, vous pouvez toujours compter sur ce qui suit : (sélectionner toutes les réponses qui s’appliquent)",
							answers: [
								{ text: "Réputation mondiale de sécurité et de fiabilité"},
								{ text: "Correspondances pratiques et faciles pour toutes les destinations d'Air Canada"},
								{ text: "Options d'enregistrement pratiques"},
								{ text: "Option de Classe affaires avec fauteuils-lits"}
							],
							valid: [0, 1, 2]
						},
						{
							question: "Le réseau d'Air Canada Rouge s'est considérablement agrandi au cours des dernières années. Pour 2016, le réseau d'Air Canada Rouge comprend les vols au Canada, les vols pour des destinations loisirs aux États-Unis, les vols pour les Antilles et le Mexique, les vols pour l'Europe, ainsi que les vols pour les destinations suivantes : (sélectionner toutes les réponses qui s’appliquent)",
							answers: [
								{ text: "Moyen-Orient"},
								{ text: "Amérique du Sud"},
								{ text: "Asie"},
								{ text: "Afrique"}
							],
							valid: [1, 2, 3]
						},
						{
							question: "Il y a beaucoup de nouveaux vols transatlantiques avec Air Canada Rouge cette année. En plus des vols européens pour Édimbourg, Dublin, Manchester, Venise, Lisbonne, Barcelone et Athènes, et de son nouveau service sur l'Afrique avec des vols sans escale entre Montréal et Casablanca, Air Canada Rouge propose un nouveau service au départ de Toronto et à destination de Londres Gatwick, de Glasgow, de Prague et de : (sélectionner toutes les réponses qui s'appliquent)",
							answers: [
								{ text: "Valence"},
								{ text: "Budapest"},
								{ text: "Varsovie"},
								{ text: "Minsk"}
							],
							valid: [1, 2]
						}
					],
					alternate_questions: [
						{
							question: "Air Canada rouge is Air Canada’s leisure airline offering competitively-priced travel to leisure destinations.  It is part of the Air Canada family so you can still depend on a global reputation for safety and reliability,  as well as connections from anywhere Air Canada flies.  Which of the following statements is false?",
							answers: [
								{ text: 'Air Canada Rouge offers a generous baggage (same as Air Canada)' },
								{ text: 'Aeroplan members can earn and redeem Aeroplan Miles on Air Canada Rouge' },
								{ text: 'Air Canada Rouge offers complimentary Maple Leaf Lounge access for all Premium rouge passengers.' }
							],
							valid: [2]
						},
						{
							question: "The Air Canada rouge network has grown significantly in the last couple of years.  For 2016 the Air Canada rouge network grew to include service to this new destination in Africa.  ",
							answers: [
								{ text: 'Cairo' },
								{ text: 'Algiers' },
								{ text: 'Casablanca' },
								{ text: 'Timbuktu' }
							],
							valid: [2]
						},
						{
							question: "There is lots of choice when flying with Air Canada and Air Canada Rouge to Europe.  In fact Air Canada's and Air Canada Rouge's summer schedule included service to two different airports in this European City?",
							answers: [
								{ text: 'Paris' },
								{ text: 'Frankfurt' },
								{ text: 'Zurich' },
								{ text: 'London' }
							],
							valid: [3]
						}
					]
				}
			]
		},
		network_fleet: {
			scenarios: [
				{
					img: "img/exam_room/network_poster_1.jpg",
					width: 300,
					icon: "img/exam_room/network_poster_1_icon.png",
					text: "Air Canada, premier transporteur aérien du Canada, dessert plus de 200 destinations sur 6 continents et compte parmi les 20 plus importantes sociétés aériennes à l'échelle mondiale.",
					sound: 'network_fleet_poster_1',
					questions: [
						{
							question: "Air Canada, Air Canada Rouge et Air Canada Express exploitent un parc aérien combiné de plus de :",
							answers: [
								{ text: "150 appareils"},
								{ text: "275 appareils"},
								{ text: "350 appareils"},
								{ text: "375 appareils "}
							],
							valid: [2]
						},
						{
							question: "Le parc aérien de l'exploitation principale d'Air Canada en Amérique du Nord est composé principalement de ces types d'appareils : (sélectionner toutes les réponses qui s’appliquent)",
							answers: [
								{ text: "Airbus"},
								{ text: "Embraer"},
								{ text: "Cessna"},
								{ text: "Learjet"}
							],
							valid: [0, 1]
						},
						{
							question: "Les appareils de l'exploitation principale d'Air Canada déployés dans le réseau nord-américain présentent pour la plupart la configuration de cabine suivante :",
							answers: [
								{ text: "Une classe"},
								{ text: "Deux classes"},
								{ text: "Trois classes"},
								{ text: "Quatre classes"}
							],
							valid: [1]
						}
					],
					alternate_questions: [
						{
							question: "Air Canada is Canada's largest airline and serves more than 200 airports on six continents, and is among the 20 largest airlines in the world.  True or False, Air Canada, Air Canada rouge and Air Canada Express have a fleet of just under 250 aircraft combined",
							answers: [
								{ text: 'TRUE' },
								{ text: 'FALSE' }
							],
							valid: [1]
						},
						{
							question: "Air Canada’s fleet of narrow body single aisle Airbus aircraft offers Business Class seats in a 2x2 configuration. Economy class seats are in a",
							answers: [
								{ text: '2 x 2 configuration' },
								{ text: '2 x 3 configuration' },
								{ text: '3 x 3 configuration' }
							],
							valid: [2]
						},
						{
							question: "Air Canada’s mainline fleet of narrow body single aisle aircraft now offers Premium Economy service on all flights.  ",
							answers: [
								{ text: 'TRUE' },
								{ text: 'FALSE' }
							],
							valid: [1]
						}
					]
				}
			]
		}
	}
}

var POSTER2 = {
	en: {
		premium_products: {
			scenarios: [
				{
					img: "img/exam_room/premium_poster_2.jpg",
					width: 400,
					icon: "img/exam_room/premium_poster_2_icon.png",
					text: "Les salons Feuille d'érable primés d'Air Canada sont situés dans tous les grands aéroports du Canada et aux principales escales internationales.",
					sound: 'premium_products_poster_2',
					questions: [
						{
							question: "L'accès aux salons Feuille d'érable est offert gratuitement aux passagers de la Classe affaires d'Air Canada ainsi qu'aux passagers de la cabine Premium rouge d'Air Canada sur les liaisons canadiennes, soleil et nord-américaines. Les passagers qui voyagent au tarif Latitude, ainsi qu'aux tarifs ci-dessous, peuvent acheter un accès unique aux salons moyennant l'acquittement de frais : (sélectionner toutes les réponses qui s'appliquent)",
							answers: [
								{ text: "Premium rouge pour les vols internationaux"},
								{ text: "Économique Privilège"},
								{ text: "Flex"},
								{ text: "Tango"}
							],
							valid: [0, 1, 2]
						},
						{
							question: "À l'extérieur de l'Amérique du Nord, les salons Feuille d'érable se trouvent à Londres (LHR) et à : (sélectionner toutes les réponses qui s’appliquent)",
							answers: [
								{ text: "Genève"},
								{ text: "Francfort"},
								{ text: "Paris"},
								{ text: "Tokyo"}
							],
							valid: [1, 2]
						},
						{
							question: "Les clients peuvent acheter des adhésions annuelles au Club Feuille d'érable. Les options d'adhésion comprennent ce qui suit : (sélectionner toutes les réponses qui s’appliquent)",
							answers: [
								{ text: "Accès aux salons Feuille d'érable d'Air Canada au Canada seulement"},
								{ text: "Accès aux salons Feuille d'érable d'Air Canada au Canada et aux salons de United en Amérique du Nord "},
								{ text: "Accès aux salons Feuille d'érable d'Air Canada et accès aux salons des partenaires commerciaux de la coentreprise"},
								{ text: "Salons Star Alliance à l'échelle mondiale"}
							],
							valid: [0, 1, 3]
						}
					],
					alternate_questions: [
						{
							question: "International Premium rouge, Premium Economy, Latitude and Flex fare passengers can pre-purchase one-time lounge access for a fee.  Complimentary Lounge access is available to eligible Altitude members, Star Alliance Gold members, Select American Express AeroplanPlus card holders as well as (select all that apply)",
							answers: [
								{ text: 'Air Canada Business Class passengers' },
								{ text: 'North America & Sun Premium rouge passengers' },
								{ text: 'Travellers with Preferred Seats' },
								{ text: 'Travellers with rouge plus seats. ' }
							],
							valid: [0,1]
						},
						{
							question: "At select locations, Maple Leaf Lounges also offer (select all that apply):",
							answers: [
								{ text: 'Showers' },
								{ text: 'Conference Rooms' },
								{ text: 'Day beds.' }
							],
							valid: [0,1]
						},
						{
							question: "Annual memberships to the Air Canada Maple Leaf Lounges can be purchased.  Annual membership for access to Air Canada's Maple Leaf lounges in Canada can be purchased for as little as: ",
							answers: [
								{ text: '$375' },
								{ text: '$475' },
								{ text: '$575' },
								{ text: '$675' }
							],
							valid: [0]
						}
					]
				}
			]
		},
		leisure_group: {
			scenarios: [
				{
					img: "img/exam_room/leisure_poster_2.jpg",
					width: 200,
					icon: "img/exam_room/leisure_poster_2_icon.png",
					text: "Vous cherchez des idées pour votre prochaine escapade hivernale? Les voyageurs apprécient la sécurité que leur offre Air Canada et les avantages de la réservation d'une escapade hivernale auprès de Vacances Air Canada.",
					sound: 'leisure_group_poster_2',
					questions: [
						{
							question: "Les clients aiment Vacances Air Canada en raison de la fiabilité, du vaste réseau de vols d'Air Canada et d'Air Canada Rouge, et de la possibilité d'accumuler ce qui suit:",
							answers: [
								{ text: "Milles Aéroplan "},
								{ text: "Air miles"},
								{ text: "Points Marriott Rewards"},
								{ text: "Points TravelClub Plus"}
							],
							valid: [0]
						},
						{
							question: "Le service que propose Vacances Air Canada est particulièrement pratique pour les voyageurs qui vivent dans de petites collectivités desservies par des aéroports régionaux. Le réseau d'Air Canada et d'Air Canada Express en Amérique du Nord permet aux passagers de profiter de correspondances faciles et pratiques pour le réseau international d'Air Canada et d'Air Canada Rouge au départ de plus de :",
							answers: [
								{ text: "30 villes canadiennes"},
								{ text: "40 villes canadiennes"},
								{ text: "50 villes canadiennes"},
								{ text: "60 villes canadiennes"}
							],
							valid: [3]
						},
						{
							question: "Il est également avantageux de faire une réservation auprès de Vacances Air Canada en raison de la souplesse et du choix qu'elle peut proposer grâce à la densité de son horaire. Dans le cas des destinations qu'Air Canada et Air Canada Rouge desservent quotidiennement, les voyageurs peuvent faire une réservation pour ce qui suit :",
							answers: [
								{ text: "Séjours de trois nuitées"},
								{ text: "Séjours de sept nuitées"},
								{ text: "Séjours de 14 nuitées"},
								{ text: "Séjours de la durée de leur choix"}
							],
							valid: [3]
						}
					],
					alternate_questions: [
						{
							question: "Customers like Air Canada Vacations because of the reliability and extensive network of flights aboard Air Canada & Air Canada rouge.  Air Canada Vacations offers service in the Caribbean to more than",
							answers: [
								{ text: '25 destinations' },
								{ text: '30 destinations' },
								{ text: '35 destinations' },
								{ text: '40 destinations' }
							],
							valid: [3]
						},
						{
							question: "Air Canada Vacations is especially practical for travellers who live in smaller communities served by regional airports because of the convenient connecting flights from over 63 Canadian cities.",
							answers: [
								{ text: 'TRUE' },
								{ text: 'FALSE' }
							],
							valid: [0]
						},
						{
							question: "Another good reason to book with Air Canada Vacations is the flexibility and choices they can provide because of their robust schedule. Travellers can book stays for the duration of their choice when",
							answers: [
								{ text: 'Staying at Deluxe accommodations' },
								{ text: 'at least two excursions are purchased' },
								{ text: 'Air Canada or Air Canada rouge offer daily service to that destination' },
								{ text: 'A “flexibility and choice” surcharge is paid.' }
							],
							valid: [2]
						}
					]
				}
			]
		},
		network_fleet: {
			scenarios: [
				{
					img: "img/exam_room/network_poster_2.jpg",
					width: 300,
					icon: "img/exam_room/network_poster_2_icon.png",
					text: "Comment Air Canada fait-elle pour transporter plus de 41 millions de voyageurs chaque année? Découvrons les coulisses du seul transporteur exploitant un réseau international quatre étoiles en Amérique du Nord. ",
					sound: 'network_fleet_poster_2',
					questions: [
						{
							question: "Ensemble, Air Canada, Air Canada Rouge et Air Canada Express assurent des services pour plus de :",
							answers: [
								{ text: "90 destinations dans le monde"},
								{ text: "130 destinations dans le monde"},
								{ text: "200 destinations dans le monde"},
								{ text: "240 destinations dans le monde"}
							],
							valid: [2]
						},
						{
							question: "Les quatre plaques tournantes d'Air Canada offrent aux clients de la Société une expérience uniforme et conviviale grâce à des installations de transit spécialisées permettant des contrôles de sécurité simplifiés et des correspondances faciles. Les plaques tournantes canadiennes d'Air Canada sont situées à Toronto, à Vancouver et à : (sélectionner deux villes) ",
							answers: [
								{ text: "Ottawa"},
								{ text: "Montréal"},
								{ text: "Halifax"},
								{ text: "Calgary"}
							],
							valid: [1, 3]
						},
						{
							question: "Air Canada relie le Canada à un vaste réseau de destinations aux États-Unis, en Europe, en Afrique, au Moyen-Orient, en Asie, en Australie, dans les Antilles, au Mexique, en Amérique centrale et en Amérique du Sud. Air Canada propose des services au départ et à destination de plus de :",
							answers: [
								{ text: "30  villes au Canada"},
								{ text: "40  villes au Canada"},
								{ text: "50  villes au Canada"},
								{ text: "60  villes au Canada"}
							],
							valid: [3]
						}
					],
					alternate_questions: [
						{
							question: "Combined, Air Canada, Air Canada rouge and Air Canada Express offer service to over 200 airports worldwide. Air Canada is (select all that apply):",
							answers: [
								{ text: 'Canada’s largest airline' },
								{ text: 'North America’s largest airline' },
								{ text: 'The largest provider of scheduled passenger services between Canada and the U.S.A.' },
								{ text: 'The largest provider of scheduled passenger services in the International market to and from Canada.' }
							],
							valid: [0,1,3]
						},
						{
							question: "Air Canada’s main hub is at Toronto's Lester B. Pearson International Airport.  Which of the following statements is false.",
							answers: [
								{ text: 'Air Canada Passengers travelling through Toronto Pearson Airport will enjoy Domestic, Transborder and International operations centralized under one roof' },
								{ text: 'Air Canada Passengers travelling through Toronto Pearson Airport will enjoy 24 hour concierge service available to all passengers' },
								{ text: 'Air Canada Passengers travelling through Toronto Pearson Airport will enjoy a simplified baggage process for customers travelling in-transit between the U.S., Europe, Asia and South America via Canada' },
								{ text: 'Air Canada Passengers travelling through Toronto Pearson Airport will enjoy US Customs and Immigration pre-clearance.' }
							],
							valid: [1]
						},
						{
							question: "Air Canada’s network continues to expand with the addition of new international destinations.  The Air Canada, Air Canada rouge and Air Canada Express network provide service to North & South America, Europe, Asia and:( select all that apply)",
							answers: [
								{ text: 'Africa' },
								{ text: 'Australia' },
								{ text: 'Antarctica' }
							],
							valid: [0,1]
						}
					]
				}
			]
		}
	}
}

var TV = {
	en: {
		premium_products: {
			scenarios: [
				{
					videoId: "Yue5CT1KApA",
					text: ""
					// questions: [
					// 	{
					// 		question: "Travelling in Premium Economy will provide travellers with benefits including (select all that apply):",
					// 		answers: [
					// 			{ text: "Larger seats that are wider, with more recline"},
					// 			{ text: "Seats that offer seven more inches of legroom than Economy"},
					// 			{ text: "Seats that recline into a fully flat bed"},
					// 			{ text: "Premium meals and Complimentary bar service"}
					// 		],
					// 		valid: [0, 1, 3]
					// 	},
					// 	{
					// 		question: "At the airport, Premium Economy travellers can benefit from some of the priority airport services including (select all that apply)",
					// 		answers: [
					// 			{ text: "Priority check-in"},
					// 			{ text: "Priority baggage service"},
					// 			{ text: "Priority Boarding"},
					// 			{ text: "Complimentary Maple Leaf Lounge access"}
					// 		],
					// 		valid: [0, 1, 2]
					// 	},
					// 	{
					// 		question: "For passengers travelling with Air Canada rouge, Premium rouge is available on all of their flights.  Premium rouge provides travellers with (select all that apply)",
					// 		answers: [
					// 			{ text: "More space in the comfort of a separate cabin"},
					// 			{ text: "Complimentary premium meals, wine & spirits"},
					// 			{ text: "A vseat pitch of 32 inches "},
					// 			{ text: "Wider seats"}
					// 		],
					// 		valid: [0, 1, 3]
					// 	}
					// ]
				}
			]
		},
		leisure_group: {
			scenarios: [
				{
					videoId: "Yue5CT1KApA",
					text: ""
					// questions: [
					// 	{
					// 		question: "Air Canada rouge is Air Canada’s leisure airline offering competitively-priced travel to leisure destinations.  It is part of the Air Canada family so you can still count on (select all that apply)",
					// 		answers: [
					// 			{ text: "A global reputation for safety and reliability"},
					// 			{ text: "Smooth and easy connections from anywhere Air Canada flies"},
					// 			{ text: "Convenient check in options"},
					// 			{ text: "a business class option with lie flat seat"}
					// 		],
					// 		valid: [0, 1, 2]
					// 	},
					// 	{
					// 		question: "The Air Canada rouge network has grown significantly in the last couple of years.  For 2016 the Air Canada rouge network includes flights within Canada, flights to US leisure destinations, flights to the Caribbean & Mexico, flights to Europe as well as flights to (select all that apply)",
					// 		answers: [
					// 			{ text: "the Middle East"},
					// 			{ text: "South America"},
					// 			{ text: "Asia"},
					// 			{ text: "Africa"}
					// 		],
					// 		valid: [1, 2, 3]
					// 	},
					// 	{
					// 		question: "There is lots of new flying over the Atlantic with Air Canada rouge this year.  In addition to existing European flights to Edinburgh, Dublin, Manchester, Venice, Lisbon, Barcelona and Athens, and its new service to Africa with Montreal Casablanca nonstop flights, Air Canada rouge is offering new service from Toronto to London Gatwick, Glasgow, Prague and (select all that apply):",
					// 		answers: [
					// 			{ text: "Valencia"},
					// 			{ text: "Budapest"},
					// 			{ text: "Warsaw"},
					// 			{ text: "Minsk"}
					// 		],
					// 		valid: [1, 2]
					// 	}
					// ]
				}
			]
		},
		network_fleet: {
			scenarios: [
				{
					videoId: "Yue5CT1KApA",
					text: ""
					// questions: [
					// 	{
					// 		question: "Combined, Air Canada, Air Canada rouge and Air Canada Express have a fleet of more than:",
					// 		answers: [
					// 			{ text: "150 aircraft"},
					// 			{ text: "275 aircraft"},
					// 			{ text: "350 aircraft"},
					// 			{ text: "375 aircraft "}
					// 		],
					// 		valid: [2]
					// 	},
					// 	{
					// 		question: "Air Canada’s North America mainline fleet is made up primarily of these types of aircraft (select all that apply)",
					// 		answers: [
					// 			{ text: "Airbus"},
					// 			{ text: "Embraer"},
					// 			{ text: "Cessna"},
					// 			{ text: "Learjet"}
					// 		],
					// 		valid: [0, 1]
					// 	},
					// 	{
					// 		question: "The Air Canada mainline aircraft deployed on the North America network are mostly configured in this cabin configuration:",
					// 		answers: [
					// 			{ text: "1 class"},
					// 			{ text: "2 classes"},
					// 			{ text: "3 classes"},
					// 			{ text: "4 classes"}
					// 		],
					// 		valid: [1]
					// 	}
					// ]
				}
			]
		}
	}
}