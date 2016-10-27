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
							question: "La Classe affaires internationale d'Air Canada comprend des prestations de luxe et des services prioritaires, puis offre une commodité et un confort absolus grâce à des fauteuils qui se transforment en un lit parfaitement horizontal mesurant plus de 1,80 m (6 pi).  La largeur de ces fauteuils de la Classe affaires internationale, conçus pour procurer aux passagers du confort et une bonne nuit de sommeil, est de:",
							answers: [
								{ text: '46 cm (18,5 po)' },
								{ text: '49 cm (19,5 po)' },
								{ text: '53 cm (21 po)' },
								{ text: '55 cm (21,5 po)' }
							],
							valid: [2]
						},
						{
							question: "La configuration de cabine dans la Classe affaires internationale des 787 et des 777 de Boeing d'Air Canada est:",
							answers: [
								{ text: '1-2-1' },
								{ text: '1-1-1' },
								{ text: '2-2-2' },
								{ text: '2-1-2' }
							],
							valid: [0]
						},
						{
							question: "Les passagers de la Classe affaires internationale d'Air Canada peuvent s'attendre à avoir droit aux services prioritaires à l'aéroport, comme l'enregistrement, l'embarquement, le contrôle de sécurité et le traitement des bagages prioritaires, ainsi qu'à l'accès gratuit aux salons Feuille d'érable et à l'assistance des agents du Service Concierge d'Air Canada.  Les passagers de la Classe affaires internationale bénéficient aussi d'une franchise de bagages supplémentaire. Vrai ou faux?",
							answers: [
								{ text: 'Vrai' },
								{ text: 'Faux' }
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
							question: "Après 15 ans, vous méritez effectivement de vous faire plaisir.  Un voyage dans la cabine Premium Rouge serait la manière idéale d'amorcer vos vacances. Dans les 767 de Boeing, elle contient 24 places Premium Rouge qui sont : (sélectionner toutes les réponses qui s'appliquent)",
							answers: [
								{ text: "Plus larges et offrent davantage d'espace personnel et d'espace pour les jambes" },
								{ text: ' Disposées dans une configuration 2-2-2' },
								{ text: "Équipées d'une prise électrique 110 V et d'un port USB" },
								{ text: "Équipées d'un support lombaire et d'un dispositif de massage" }
							],
							valid: [0,1,2]
						},
						{
							question: "La cabine Premium Rouge offre également tous les avantages que vous attendez d'une expérience de voyage haut de gamme, y compris des vins, des spiritueux et des repas haut de gamme gratuits, l'enregistrement gratuit de deux bagages, ainsi que l'enregistrement et l'embarquement prioritaires.  Pour les vols à destination de l'Europe, de l'Asie, de l'Afrique et de l'Amérique du Sud, l'accès aux salons Feuille d'érable coûte 25 $.  Pour les vols au Canada, à destination des États-Unis ou pour des destinations soleil, l'accès aux salons Feuille d'érable coûte :",
							answers: [
								{ text: '0 $' },
								{ text: '$25' },
								{ text: '$35' },
								{ text: '$45' }
							],
							valid: [0]
						},
						{
							question: "Les places Rouge Plus représentent l'autre option.  Alors que la cabine Premium Rouge offre des sièges plus larges avec plus d'espace pour les jambes, des repas haut de gamme ainsi que des services prioritaires, les places Rouge Plus, situées dans la classe économique de l'appareil, donnent droit à : (sélectionner toutes les réponses qui s'appliquent)",
							answers: [
								{ text: "Une place côté hublot ou côté couloir garantie" },
								{ text: "18 cm (7 po) d'espace pour les jambes de plus que les sièges ordinaires de la classe économique d'Air Canada Rouge" },
								{ text: "Des vins, des spiritueux et des repas haut de gamme" }
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
							question: "Comparativement à un pas entre les sièges standard allant de 77,5 cm (31 po) à 82,5 cm (33 po) en classe économique, les places Préférence donnent:",
							answers: [
								{ text: "7,5 cm (3 po) d'espace de plus pour les jambes " },
								{ text: "10 cm (4 po) d'espace de plus pour les jambes" },
								{ text: "12,5 cm (5 po) d'espace de plus pour les jambes" }
							],
							valid: [1]
						},
						{
							question: "Les places Préférence sont proposées aux membres Air Canada Altitude, et les frais, le cas échéant, sont facturés selon le statut Altitude et le tarif payé.  La présélection de places Préférence est gratuite pour les passagers qui voyagent au tarif Latitude.  Vrai ou faux? Tous les voyageurs peuvent acheter des places Préférence.",
							answers: [
								{ text: 'Vrai' },
								{ text: 'Faux' }
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
							question: "Les salons Feuille d'érable d'Air Canada permettent de se soustraire à l'agitation aéroportuaire dans un lieu calme et privé.  Les salons offrent des boissons et repas gratuits, de l'information et des divertissements et des centres d’affaires.  Les salons sont situés dans tous les grands aéroports du Canada et aux principales escales internationales, soit : ",
							answers: [
								{ text: 'Chicago, New York, Francfort, Londres, Tokyo' },
								{ text: 'Los Angeles, New York, Francfort, Londres, Tokyo' },
								{ text: 'Chicago, New York, Francfort, Paris, Londres' },
								{ text: 'Los Angeles, New York, Francfort, Paris, Londres' }
							],
							valid: [3]
						},
						{
							question: "Sur les liaisons nord-américaines et antillaises, la Classe affaires offre un grand confort, un système de divertissements individuel et une cuisine haut de gamme.  Parmi les avantages suivants, lequel n'est pas offert aux passagers de la Classe affaires sur les liaisons nord-américaines et antillaises?",
							answers: [
								{ text: 'Service Concierge' },
								{ text: "Fauteuils de Classe affaires équipés d'écrans individuels à commande tactile" },
								{ text: 'Embarquement prioritaire' },
								{ text: "Accès gratuit aux salons Feuille d'érable" }
							],
							valid: [0]
						},
						{
							question: "La Classe affaires transcontinentale d'Air Canada est proposée pour certains vols en Amérique du Nord assurés par 787, 767 ou 777 de Boeing ou par A330 d'Airbus.  À bord de ces vols, les passagers de la Classe affaires transcontinentale profitent de :",
							answers: [
								{ text: "Fauteuils qui donnent 10 cm d'espace pour les jambes de plus qu'en classe économique" },
								{ text: "Fauteuils qui s'inclinent à 140 degrés" },
								{ text: "Fauteuils qui s'inclinent à 120 degrés" },
								{ text: "Fauteuils-lits entièrement inclinables" }
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
							question: "Vacances Air Canada propose un vaste éventail d'options de forfait vacances et d'offres (vols ou croisières) pour les groupes.  Le groupe doit cependant voyager ensemble sur tous les segments de son itinéraire.  Vrai Faux",
							answers: [
								{ text: 'Vrai' },
								{ text: 'Faux' }
							],
							valid: [1]
						},
						{
							question: "Les voyages de groupe donnent droit à des avantages spéciaux.  Vacances Air Canada offre, pour certains vols, deux surclassements GRATUITS et l'accès aux salons Feuille d'érable pour les groupes d'au moins 20 personnes. Les autres avantages spéciaux pour les groupes comprennent : (sélectionner toutes les réponses qui s'appliquent)",
							answers: [
								{ text: "Place côté hublot ou côté couloir garantie" },
								{ text: "Primes (avion, hôtel et repas gratuits), dans le cas de destinations et de centres de villégiature sélectionnés" },
								{ text: "Possibilité, pour les invités, de partir de différentes villes, différents jours de la semaine" },
								{ text: "Possibilité d'acheter à l'avance des repas et des écouteurs pour le vol (groupes d'au moins 40 personnes)" }
							],
							valid: [1,2,3]
						},
						{
							question: "Les réservations de groupe pour un mariage ou un voyage-motivation donnent également droit à :",
							answers: [
								{ text: 'Sélection des places sans frais' },
								{ text: 'Repas gratuits' }
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
							question: "Dans les 787 de Boeing, les voyageurs profitent de nombreux nouveaux éléments de confort, dont un vol plus silencieux et plus paisible, un aménagement cabine plus spacieux, un degré d'humidité supérieur permettant de se sentir plus reposés à l'arrivée et des hublots :",
							answers: [
								{ text: '10 pour cent plus grands' },
								{ text: '15 pour cent plus grands' },
								{ text: '30 pour cent plus grands' },
								{ text: '40 pour cent plus grands' }
							],
							valid: [2]
						},
						{
							question: "Les fauteuils des nouvelles loges distinction dans la Classe affaires internationale des 787 de Boeing d'Air Canada peuvent être inclinés complètement pour former un lit d'une longueur de 190 cm (78 po) de longueur.  Quel autre appareil d'Air Canada est équipé des nouvelles loges en Classe affaires internationale?",
							answers: [
								{ text: '767 de Boeing' },
								{ text: '777 de Boeing' },
								{ text: 'A330 d’Airbus' },
								{ text: "A380 d'Airbus" }
							],
							valid: [1]
						},
						{
							question: "L'accent que met Air Canada sur l'expérience des voyageurs a été reconnu par les voyageurs à l'échelle mondiale, et plus récemment par Skytrax qui a accordé à Air Canada sa prestigieuse cote quatre étoiles.  Quel exploit!  Air Canada est :",
							answers: [
								{ text: "Le seul transporteur d’envergure internationale offrant une gamme complète de services au Canada à avoir obtenu cette cote" },
								{ text: "Le seul transporteur d’envergure internationale offrant une gamme complète de services en Amérique du Nord à avoir obtenu cette cote" },
								{ text: "L'un des quatre transporteurs d’envergure internationale offrant une gamme complète de services en Amérique du Nord à avoir obtenu cette cote" }
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
							question: "Nous vous rappelons que nous sommes une équipe spéciale responsable de fournir des services exclusifs aux membres Altitude Super Élite 100 et aux passagers de la Classe affaires internationale.  Vrai ou faux?  En plus de devoir aider les passagers à satisfaire leurs besoins en matière de voyage et d'aéroport, les agents du Service Concierge sont tenus de répondre aux demandes spéciales telles que les réservations d'hôtel, de théâtre et de restaurant.",
							answers: [
								{ text: 'Vrai' },
								{ text: 'Faux' }
							],
							valid: [0]
						},
						{
							question: "Les agents du Service Concierge, qui se consacrent exclusivement aux membres Altitude Super Élite 100 et aux passagers de la Classe affaires internationale, sont en poste :",
							answers: [
								{ text: "Aux aéroports canadiens clés seulement" },
								{ text: "Aux aéroports américains clés seulement" },
								{ text: "Aux aéroports internationaux clés seulement" },
								{ text: "Aux aéroports clés partout dans le monde" }
							],
							valid: [3]
						},
						{
							question: "Les agents du Service Concierge d'Air Canada sont facilement reconnaissables à leur uniforme distinctif noir et à leur insigne nominatif.  Ils sont postés dans les aires d’enregistrement de la Classe affaires internationale ainsi que près des portes d’embarquement et des salons Feuille d’érable.  Vrai ou faux? Le Service Concierge d'Air Canada n'est offert que dans les aéroports dotés d'un salon Feuille d’érable.",
							answers: [
								{ text: 'Vrai' },
								{ text: 'Faux' }
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
							question: "L'enregistrement prioritaire est un service d'enregistrement complet personnalisé offert aux clients admissibles.  Des comptoirs exclusifs sont installés dans tout le réseau d'Air Canada.  Vrai ou faux? Les passagers qui voyagent au tarif Latitude peuvent utiliser les comptoirs d'enregistrement prioritaire.",
							answers: [
								{ text: 'Vrai' },
								{ text: 'Faux' }
							],
							valid: [0]
						},
						{
							question: "Une Passe de vols est un forfait prépayé comportant des crédits de vol électroniques utilisables pour effectuer des allers simples et permettant de voyager à l’intérieur d’une zone géographique déterminée, durant une période donnée. Une Passe de vols comporte un nombre fixe ou illimité de crédits de vol, qui peuvent facilement être gérés en ligne.  Les Passes de vols :",
							answers: [
								{ text: "Peuvent être achetées pour voyager en Classe affaires" },
								{ text: "Peuvent être achetées pour voyager en classe économique" },
								{ text: "Peuvent être achetées pour voyager en Classe affaires et en classe économique " }
							],
							valid: [2]
						},
						{
							question: "L'admissibilité à un statut Air Canada Altitude est déterminée en fonction du nombre de milles de qualification Altitude (MQA) et de segments de qualification Altitude (SQA) accumulés en voyageant à bord de vols admissibles exploités par Air Canada et les transporteurs Star Alliance.  Les membres doivent également remplir :",
							answers: [
								{ text: "L'exigence de dollars de qualification Altitude (DQA)" },
								{ text: "L'exigence de segments de qualification Altitude (SQA) pour des vols internationaux" },
								{ text: "L'exigence de segments de qualification Altitude (SQA) pour la Classe affaires" }
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
							question: "Je suis heureux d'apprendre que vous êtes impatients de voyager avec Air Canada Rouge.  Ce fut un plaisir de vous aider.  L'histoire d'Air Canada Rouge est incroyable. La société, dont le parc comptait à peine 4 appareils initialement en 2013, en exploite aujourd'hui plus de 40.  Les vols sur l'Europe, l'Asie, l'Afrique et l'Amérique du Sud sont tous assurés par :",
							answers: [
								{ text: '737 de Boeing' },
								{ text: 'A319 d’Airbus' },
								{ text: '767 de Boeing' },
								{ text: "A321 d'Airbus" }
							],
							valid: [2]
						},
						{
							question: "Ces appareils à deux couloirs d'Air Canada Rouge comportent 280 places et deux cabines, et les passagers peuvent choisir parmi trois options de confort.  La cabine avant comprend 24 sièges Premium Rouge.  La cabine arrière comprend 256 places : 39 places Rouge Plus et 217 places Rouge.",
							answers: [
								{ text: '737 de Boeing' },
								{ text: "A319 d’Airbus" },
								{ text: '767 de Boeing' },
								{ text: "A321 d'Airbus" }
							],
							valid: [2]
						},
						{
							question: "Je sais que vous serez impressionné par le service à la clientèle que vous offrira l'équipage d’Air Canada Rouge à bord.  Vous et votre mari devriez passer un bon vol.  Nous vous rappelons d'apporter un ordinateur portatif ou un appareil mobile Apple ou Android doté de l'application Air Canada pour accéder au système de divertissements à bord avec diffusion de contenu en continu d'Air Canada Rouge.  Les frais d'accès sont de :",
							answers: [
								{ text: '0 $' },
								{ text: "7 $ par segment de vol" },
								{ text: '14 $ par segment de vol' },
								{ text: '21 $ par segment de vol' }
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
							question: "Avec Vacances Air Canada, dans le cas peu probable où un retard de vol lui fait rater le départ de sa croisière, le client est réacheminé gratuitement par le prochain vol disponible pour rattraper la croisière.  Les options VolCroisière de Vacances Air Canada offrent beaucoup plus de flexibilité, notamment : (sélectionner toutes les réponses qui s'appliquent)",
							answers: [
								{ text: "Tous les vols sont remboursables à 100 % jusqu'à 30 jours avant le voyage" },
								{ text: "Un dépôt remboursable de 100 $ est tout ce qu'il vous faut pour bloquer les vols" },
								{ text: "Un changement de nom est permis jusqu'à 30 jours avant le voyage" }
							],
							valid: [0,1,2]
						},
						{
							question: "Vacances Air Canada fournit une classification des hôtels et un guide décrivant les propriétés où ses clients peuvent séjourner.  Cette classification et ces descriptions sont disponibles pour :",
							answers: [
								{ text: "Les centres de villégiature et les hôtels" },
								{ text: "Les condominiums, les gîtes touristiques et les villas" },
								{ text: "Les centres de villégiature, les hôtels, les condominiums, les gîtes touristiques et les villas" }
							],
							valid: [2]
						},
						{
							question: "En plus des forfaits vacances, des vols et des croisières, Vacances Air Canada propose des circuits en autocar, des excursions en automobile sans guide, des circuits ferroviaires multi-destinations et des billets pour des attractions touristiques.  Vrai ou faux? Vacances Air Canada propose aussi la location de voitures.",
							answers: [
								{ text: 'Vrai' },
								{ text: 'Faux' }
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
							question: "Tous les fauteuils de la Classe affaires internationale d'Air Canada sont conçus de manière à ce que les passagers disposent de l'espace personnel nécessaire pour passer une bonne nuit de sommeil.  Chaque fauteuil s'incline entièrement sur simple pression d'un bouton.  En plus du Service Concierge et de l'accès aux salons Feuille d'érable, les passagers profitent de prestations luxueuses et de services prioritaires. Parmi les éléments suivants, lequel n'est pas offert aux passagers de la Classe affaires internationale?",
							answers: [
								{ text: "Vins, spiritueux et repas gastronomiques haut de gamme, ainsi qu'un grand oreiller et une couette moelleuse" },
								{ text: 'Franchise de bagages supplémentaire' },
								{ text: 'Enregistrement et embarquement prioritaires' },
								{ text: "Aire de places assises distincte à la porte d'embarquement" }
							],
							valid: [3]
						},
						{
							question: "Air Canada Rouge, le transporteur loisirs d'Air Canada, propose trois options de confort pour tous ses vols.  Les places Premium Rouge, situées à l’avant de la cabine, sont plus larges et offrent plus d'espace pour les jambes et une plus grande inclinaison.  Les clients d'Air Canada Rouge à la recherche d'un compromis entre la cabine Premium Rouge et la cabine Rouge peuvent envisager cette option qui donnent plus d'espace pour les jambes :",
							answers: [
								{ text: 'Bourgogne' },
								{ text: 'Priorité Plus' },
								{ text: 'Rouge Plus' }
							],
							valid: [2]
						},
						{
							question: "Dans les 767 de Boeing d'Air Canada Rouge, les places Premium Rouge ont une configuration 2-2-2.  Ces places plus larges ont un pas de 92,5 cm (37 po) et donnent aux passagers : ",
							answers: [
								{ text: "10 cm (4 po) d'espace de plus pour les jambes" },
								{ text: "15 cm (6 po) d'espace de plus pour les jambes" },
								{ text: "17,5 cm (7 po) d'espace de plus pour les jambes" },
								{ text: "20 cm (8 po) d'espace de plus pour les jambes" }
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
							question: "La cabine Économique Privilège procure à ses passagers des avantages tels que des sièges plus larges et davantage inclinables, des repas et un service de consommations haut de gamme ainsi qu'un pas entre les sièges de 97 cm (38 po) qui correspond à :",
							answers: [
								{ text: "10 cm (4 po) d'espace de plus pour les jambes" },
								{ text: "12,5 cm (5 po) d'espace de plus pour les jambes" },
								{ text: "15 cm (6 po) d'espace de plus pour les jambes" },
								{ text: "17,5 cm (7 po) d'espace de plus pour les jambes" }
							],
							valid: [3]
						},
						{
							question: "À l'aéroport, les passagers de la cabine Économique Privilège ont droit à des services prioritaires comme l'enregistrement, le traitement des bagages et l'embarquement prioritaires.  L'accès au salon Feuille d'érable est proposé :",
							answers: [
								{ text: 'Gratuitement' },
								{ text: "Moyennant l'acquittement de frais" }
							],
							valid: [1]
						},
						{
							question: "La cabine Premium Rouge d'Air Canada Rouge procure à ses passagers plus d'espace avec des sièges plus larges dans le confort d'une cabine distincte.  Les passagers peuvent également profiter de repas, de vins et de spiritueux haut de gamme gratuits.  La cabine Premium Rouge est disponible:",
							answers: [
								{ text: "À bord des vols internationaux seulement" },
								{ text: "À bord des vols assurés par 767 de Boeing" },
								{ text: "À bord de tous les vols" }
							],
							valid: [2]
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
							question: "Air Canada Rouge, le transporteur loisirs d'Air Canada, propose des voyages à prix compétitifs pour des destinations vacances.  Comme elle fait partie du groupe d'Air Canada, vous pouvez compter sur une réputation mondiale en matière de sécurité et de fiabilité et sur des correspondances avec toutes les liaisons d'Air Canada.  Parmi les énoncés suivants, lequel est faux?",
							answers: [
								{ text: "Air Canada Rouge offre une généreuse franchise de bagages (la même qu'Air Canada). " },
								{ text: "Les membres Aéroplan peuvent accumuler et échanger des milles Aéroplan avec d'Air Canada Rouge. " },
								{ text: "Air Canada Rouge offre l'accès gratuit aux salons Feuille d'érable à tous les passagers de la cabine Premium Rouge." }
							],
							valid: [2]
						},
						{
							question: "Le réseau d'Air Canada Rouge s'est considérablement agrandi au cours des dernières années.  En 2016, on y a ajouté cette nouvelle destination africaine :",
							answers: [
								{ text: 'Le Caire' },
								{ text: 'Alger' },
								{ text: 'Casablanca' },
								{ text: 'Tombouctou' }
							],
							valid: [2]
						},
						{
							question: "Les voyageurs qui se rendent en Europe avec Air Canada ou Air Canada Rouge ont un vaste choix.  L'horaire d'été de ces deux transporteurs comprend des services sur deux aéroports de laquelle de ces villes européennes?",
							answers: [
								{ text: 'Paris' },
								{ text: 'Francfort' },
								{ text: 'Zurich' },
								{ text: 'Londres' }
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
							question: "Air Canada, premier transporteur aérien du Canada, dessert plus de 200 aéroports sur 6 continents et compte parmi les 20 plus importantes sociétés aériennes à l'échelle mondiale.  Vrai ou faux? Air Canada, Air Canada Rouge et Air Canada Express exploitent un parc aérien combiné de presque 250 appareils.",
							answers: [
								{ text: 'Vrai' },
								{ text: 'Faux' }
							],
							valid: [1]
						},
						{
							question: "Dans les appareils à fuselage étroit d'Airbus d'Air Canada, les fauteuils en Classe affaires sont disposés dans une configuration 2-2. Les sièges en classe économique sont disposés dans une configuration :",
							answers: [
								{ text: '2-2' },
								{ text: '2-3' },
								{ text: '3-3' }
							],
							valid: [2]
						},
						{
							question: "Dans les appareils à fuselage étroit de l'exploitation principale d'Air Canada, la cabine Économique Privilège est proposée pour tous les vols.",
							answers: [
								{ text: 'Vrai' },
								{ text: 'Faux' }
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
							question: "Les passagers voyageant aux tarifs Flex, Latitude et Économique Privilège et les titulaires de billets pour la cabine Premium Rouge de vols internationaux peuvent acheter à l'avance, moyennant l'acquittement de frais, un accès unique aux salons.  L'accès gratuit aux salons est offert aux membres Altitude admissibles, aux membres Star Alliance Gold, à certains titulaires de la carte AéroplanPlus American Express ainsi qu'aux : (sélectionner toutes les réponses qui s'appliquent)",
							answers: [
								{ text: "Passagers de la Classe affaires d'Air Canada" },
								{ text: "Passagers de la cabine Premium Rouge sur les liaisons soleil et nord-américaines" },
								{ text: "Passagers détenant une place Préférence" },
								{ text: "Passagers détenant une place Rouge Plus" }
							],
							valid: [0,1]
						},
						{
							question: "Dans certains aéroports, les salons Feuilles d'érable comprennent aussi : (sélectionner toutes les réponses qui s'appliquent)",
							answers: [
								{ text: 'Des douches' },
								{ text: 'Des salles de conférence' },
								{ text: 'Des lits' }
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
							question: "Les clients aiment Vacances Air Canada en raison de la fiabilité et du vaste réseau de vols d'Air Canada et d'Air Canada Rouge.  Vacances Air Canada assure un service dans les Antilles pour plus de :",
							answers: [
								{ text: '25 destinations' },
								{ text: '30 destinations' },
								{ text: '35 destinations' },
								{ text: '40 destinations' }
							],
							valid: [3]
						},
						{
							question: "Le service que propose Vacances Air Canada est particulièrement pratique pour les voyageurs qui vivent dans de petites collectivités desservies par des aéroports régionaux, en raison des vols de correspondance pour plus de 63 villes canadiennes.  Vrai Faux",
							answers: [
								{ text: 'Vrai' },
								{ text: 'Faux' }
							],
							valid: [0]
						},
						{
							question: "Il est également avantageux de faire une réservation auprès de Vacances Air Canada en raison de la souplesse et du choix qu'elle peut proposer grâce à la densité de son horaire. Les voyageurs peuvent réserver des séjours de la durée de leur choix si :",
							answers: [
								{ text: 'Ils sélectionnent des hôtels luxueux.' },
								{ text: 'Ils achètent au moins deux excursions.' },
								{ text: 'Air Canada ou Air Canada Rouge assure un service quotidien pour leur destination.' },
								{ text: 'Ils paient un supplément pour « flexibilité et choix ».' }
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
							question: "Ensemble, Air Canada, Air Canada Rouge et Air Canada Express assurent des services pour plus de 200 aéroports dans le monde. Air Canada est : (sélectionner toutes les réponses qui s'appliquent)",
							answers: [
								{ text: 'Le plus grand transporteur au Canada' },
								{ text: 'Le plus grand transporteur en Amérique du Nord' },
								{ text: 'Le plus grand fournisseur de services passagers réguliers entre le Canada et les États-Unis ' },
								{ text: 'Le plus grand fournisseur de services passagers réguliers sur le marché international au départ et à destination du Canada' }
							],
							valid: [0,1,3]
						},
						{
							question: "La principale plaque tournante d'Air Canada est l'aéroport international Lester B. Pearson de Toronto.  Parmi les énoncés suivants, lequel est faux?  ",
							answers: [
								{ text: "Les passagers d'Air Canada qui passent par l'aéroport Toronto-Pearson profitent du fait que les vols intérieurs, transfrontaliers et internationaux sont regroupés sous un même toit. " },
								{ text: "Les passagers d'Air Canada qui passent par l'aéroport Toronto-Pearson profitent du Service Concierge 24 heures sur 24 offert à tous les passagers." },
								{ text: "Les passagers d'Air Canada qui passent par l'aéroport Toronto-Pearson profitent du traitement des bagages simplifié pour les clients qui voyagent entre les États-Unis, l'Europe, l'Asie et l'Amérique du Sud via le Canada." },
								{ text: "Les passagers d'Air Canada qui passent par l'aéroport Toronto-Pearson profitent du prédédouanement pour les États-Unis." }
							],
							valid: [1]
						},
						{
							question: "La Société continue d’étendre son réseau en offrant de nouvelles destinations internationales.  Le réseau d'Air Canada, d'Air Canada Rouge et d'Air Canada Express comprend des destinations en Amérique du Nord, en Amérique du Sud, en Europe, en Asie et en : (sélectionner toutes les réponses qui s'appliquent)",
							answers: [
								{ text: 'Afrique' },
								{ text: 'Australie' },
								{ text: 'Antarctique' }
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