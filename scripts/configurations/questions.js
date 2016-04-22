var IPHONE = {
	en: {
		premium_products: {
			scenarios: [
				{
					text: "Hello.  Some of our executives are travelling to Asia next month and specifically asked to travel on Air Canada. They need to hit the ground running once they arrive and want to be ready to work.  Our travel policy allows them to travel in Business Class.  Can you tell us about Air Canada International Business Class?",
					questions: [
						{
							question: "Air Canada’s International Business Class service features luxurious amenities and priority services and provides the ultimate in comfort and convenience with seats that recline:", 
							answers: [ 
								{ text: "130 degree"}, 
								{ text: "145 degree"}, 
								{ text: "170 degree"}, 
								{ text: "Into fully flat beds over 6 feet in length"}
							],
							valid: [3]
						},
						{ 
							question: "The new Executive Pods on Air Canada’s Boeing 787 aircraft are now also being installed on Air Canada’s fleet of:", 
							answers: [ 
								{ text: "Boeing 767"}, 
								{ text: "Boeing 777"}, 
								{ text: "Airbus A380"}, 
								{ text: "Airbus A321"}
							],
							valid: [1]
						},
						{ 
							question: "International Business Class passengers on Air Canada can expect access to the airport priority services such as Priority Check-in,  Priority Boarding and Priority Security Clearance, as well as: (select all that apply)", 
							answers: [ 
								{ text: "Preferred seating at airport gates"}, 
								{ text: "Priority Baggage Handling"}, 
								{ text: "Complimentary Maple Leaf Lounge access"}, 
								{ text: "Assistance from Air Canada’s Concierge agents"}
							],
							valid: [1,2,3]
						}
					]					
				}		
			]
		},
		leisure_group: {
			scenarios: [
				{
					text: "Hello.  I’m hoping you can help me.  It's my 15th wedding anniversary this year and I want to make our anniversary trip a very special one. We're willing to spend a little more for this trip on Air Canada rouge and wondered what options we might have to indulge ourselves a little?",
					questions: [
						{
							question: "You do deserve a little indulgence after 15 years.  Travelling in Premium rouge would get your holiday off to a perfect start.  Premium rouge seats are wider and offer more personal space and generous leg room.  Each seat offers roughly 7 more inches.  The premium rouge cabin on Boeing 767 aircraft contains:", 
							answers: [ 
								{ text: "14 Premium rouge seats"}, 
								{ text: "20 Premium rouge seats"}, 
								{ text: "24 Premium rouge seats"}, 
								{ text: "36 Premium rouge seats"}
							],
							valid: [2]
						},
						{ 
							question: "Premium rouge also includes all of the perks you would expect from a premium travel experience, including complimentary premium meals, wine & spirits, 2 free checked bags as well as Priority check in and boarding.  For travel within Canada, to the US and Sun routes, Maple Leaf Lounge access is complimentary.  For flights to Europe, Asia, Africa & South America, the Maple Leaf Lounge access fee is:", 
							answers: [ 
								{ text: "Complimentary"}, 
								{ text: "$25"}, 
								{ text: "$35"}, 
								{ text: "$45"}
							],
							valid: [1]
						},
						{ 
							question: "The other option is rouge plus seating.  While Premium rouge offers a larger seat with more personal space, leg room, premium meals and priority services, rouge Plus seats are located in the Economy cabin of the aircraft and provide more leg room for travellers than regular rouge economy seats.  In fact the rouge plus seats, mostly found at the front of the rouge economy cabin offer: ", 
							answers: [ 
								{ text: "4 more inches of leg room than rouge economy seats"}, 
								{ text: "6 more inches of leg room than rouge economy seats"}, 
								{ text: "7 more inches of leg room than rouge economy seats"}, 
								{ text: "8 more inches of leg room than rouge economy seats"}
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
					text: "Hello.  I have a question about my flight next week.  Can you brief me on Preferred Seats on Air Canada and let me know if I am eligible for travel in these?",
					questions: [
						{
							question: "Air Canada’s Preferred Seats offer travellers looking for a little extra comfort with (select all that apply) ", 
							answers: [ 
								{ text: "Extra leg room"}, 
								{ text: "Hot towel service"}, 
								{ text: "Seat location at the front of the aircraft"}, 
								{ text: "Priority boarding"}
							],
							valid: [0, 2]
						},
						{ 
							question: "Compared to a standard seat pitch of 31” – 33” in economy, Preferred Seats offer 4 more inches of legroom.", 
							answers: [ 
								{ text: "TRUE"}, 
								{ text: "FALSE"}
							],
							valid: [0]
						},
						{ 
							question: "Preferred seat selection is complimentary for passengers travelling on a Latitude fare.  These seats are also available to Altitude members with the fee, if applicable, depending on the Altitude Status and fare paid.  Other travellers:", 
							answers: [ 
								{ text: "do not have access to Preferred Seats"}, 
								{ text: "can purchase a Preferred Seat for a fee"}
							],
							valid: [1]
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
					text: "Can you please call me back at your convenience?  I need to know more about the Maple Leaf Lounges, and also need to know about Business Class travel within North America.  Look forward to hearing from you. Thanks.",
					questions: [
						{
							question: "Air Canada’s Maple Leaf Lounges provide a private, serene escape from the bustle of airport activity, and are located at all major airports across Canada and at key international locations.  The lounges are equipped with: (select all that apply)", 
							answers: [ 
								{ text: "Complimentary Food and Beverages"}, 
								{ text: "News & Entertainment options"}, 
								{ text: "Business Centres"}, 
								{ text: "Health Spa services"}
							],
							valid: [0, 1, 2]
						},
						{ 
							question: "Business Class on North America and Caribbean routes offers added comfort, personal entertainment & premium cuisine.  Business Class travellers can enjoy: (select all that apply)", 
							answers: [ 
								{ text: "Concierge service "}, 
								{ text: "Seats equipped with Personal touch-screen TVs "},
								{ text: "In-seat power for laptops"},
								{ text: "Guaranteed window or aisle seating"}
							],
							valid: [1, 2, 3]
						},
						{ 
							question: "Some flights operated within North America by Boeing 787, Boeing 767, Boeing 777 or Airbus A330 aircraft, on routes such as Toronto to Calgary, Los Angeles, San Francisco and Vancouver, or Montreal to Vancouver, offer this service that includes fully lie flat beds. This special Business Class product is called: ", 
							answers: [ 
								{ text: "Business First"}, 
								{ text: "Business North America Plus"},
								{ text: "Business Plus"},
								{ text: "Business Class Transcontinental"}
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
					text: "Hi. Great news!  Word of our trip has leaked out, and we have many of our friends and family who want to join in.  Are there any Group Travel benefits that I should know about?",
					questions: [
						{
							question: "Travellers can fly individually from cities across Canada and meet at a connecting airport to fly to a destination together.  The minimum number for group travel (including children) is only", 
							answers: [ 
								{ text: "5"}, 
								{ text: "8"}, 
								{ text: "10"}, 
								{ text: "12"}
							],
							valid: [2]
						},
						{ 
							question: "Travelling as a group does offer special perks.  Select resorts and destinations may extend special fly, stay, eat for free offers.  Additionally Air Canada Vacations offers 2 FREE flight upgrades & Maple Leaf lounge access on select flights for groups of at least: ", 
							answers: [ 
								{ text: "15"}, 
								{ text: "20"},
								{ text: "25"},
								{ text: "30"}
							],
							valid: [1]
						},
						{ 
							question: "There is also the option to pre-purchase meals and headsets on your flight for groups of at least:", 
							answers: [ 
								{ text: "40"}, 
								{ text: "60"},
								{ text: "80"},
								{ text: "100"}
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
					text: "Hi. I had to call.  Everyone is taking about Air Canada’s Boeing 787 Dreamliner.  What can you tell me about this aircraft?  I’m told to make sure I try and book it if possible. I just don’t know why?",
					questions: [
						{
							question: "The Boeing 787 aircraft offers travellers many new comforts including: (select all that apply)", 
							answers: [ 
								{ text: "A quieter, smoother flight"}, 
								{ text: "Windows that are 30 per cent larger"}, 
								{ text: "Skylights throughout the cabin for star gazing"}, 
								{ text: "A more spacious interior cabin"}
							],
							valid: [0, 1, 3]
						},
						{ 
							question: "Air Canada’s new International Business Class cabin on Boeing 787 aircraft, are now also being installed progressively on Boeing 777 aircraft.  Executive pods on these aircraft feature the largest entertainment screen available in business class of any North American carrier and seats that can be extended into a fully lie flat bed that measures :", 
							answers: [ 
								{ text: "4 feet 6 inches"}, 
								{ text: "5 feet 6 inches"},
								{ text: "6 feet 6 inches"},
								{ text: "7 feet 6 inches"}
							],
							valid: [2]
						},
						{ 
							question: "Air Canada’s focus on traveller experience has been recognized by travellers worldwide and again most recently by Skytrax who awarded Air Canada a prestigious designation, making Air Canada the only International Network Carrier in North America to achieve this exceptional milestone.", 
							answers: [ 
								{ text: "Three star airline "}, 
								{ text: "Four star airline"},
								{ text: "Canadian airline of the year"},
								{ text: "Business airline of the year."}
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
					text: "Hello, this is Alexi from the Air Canada concierge office.  We wanted to let you know that we were able to assist Mr. & Mrs. Jones in making their connection. We were happy to help.",
					questions: [
						{
							question: "A reminder that we are a dedicated team responsible to provide service exclusively to (select all that apply).", 
							answers: [ 
								{ text: "Altitude Super Elite 100K passengers"}, 
								{ text: "North America Business Class Passengers"}, 
								{ text: "International Business Class passengers"}, 
								{ text: "Premium Economy Passengers"}
							],
							valid: [0, 2]
						},
						{ 
							question: "Should it be of any help, here is a reminder of what the Air Canada concierge program offers: (select all that apply)", 
							answers: [ 
								{ text: "Dedicated service in airports around the world"}, 
								{ text: "Assistance with travel and airport related matters"}, 
								{ text: "Assistance with special requests, such as hotel, theatre or restaurant reservations"}, 
								{ text: "Dedicated Drop off and Pick up lanes at select airports."}
							],
							valid: [0, 1, 2]
						},
						{ 
							question: "Customer can find us conveniently stationed around Business Class check-in areas, departure gates and Maple Leaf Lounges.  We are easily recognizable in our distinctive black uniform and Concierge identification tags.  Air Canada Concierge are available:", 
							answers: [ 
								{ text: "Only at Canadian airports that have Air Canada Maple Leaf Lounges"}, 
								{ text: "Only at North American airports that have Air Canada Maple Leaf Lounges"}, 
								{ text: "Only at airports that have Air Canada Maple Leaf Lounges"}, 
								{ text: "at select airports worldwide with our without Air Canada Maple Leaf Lounges"}
							],
							valid: [1,2,3]
						}
					]					
				},
				{
					text: "Hi.  Thanks for issuing my Latitude fare ticket to Vancouver.  I have a few questions I hope you can answer.  I wasn’t sure what complimentary Priority services I’m entitled to. Can you remind me please? Also, we have employees that will be travelling on regular basis for the next several months.  Are there any Business Class bulk ticket purchase options we should know about?  Lastly, what is the criterion to make Super Elite 100K this year?",
					questions: [
						{
							question: "With Latitude fare you can make use of the following Priority services on a complimentary basis: (select all that apply)", 
							answers: [ 
								{ text: "Priority Check-in"}, 
								{ text: "Priority security Clearance"}, 
								{ text: "Priority Boarding"}, 
								{ text: "Priority Baggage Handling"}
							],
							valid: [0, 2, 3]
						},
						{ 
							question: "Air Canada’s Flight Passes can be purchased at Business Class fare levels.  They offer exceptional savings and cost predictability for frequent flyers.  Just so you are clear, the flight passes work in the following way: (select all that apply)", 
							answers: [ 
								{ text: "They are prepaid"}, 
								{ text: "Each credit is valid for a one-way trip"}, 
								{ text: "Travel is restricted to the geographic travel zone purchased"}, 
								{ text: "They are available for purchase as fixed credits or unlimited credits"}
							],
							valid: [0, 1, 2, 3]
						},
						{ 
							question: "Altitude Members can qualify for status based on the number of Altitude Qualifying Miles (AQM) or Altitude Qualifying Segments (AQS) earned on eligible flights operated between 01 January and 31 December.  Members must all meet Altitude Qualifying Dollars (AQD) requirements.  In addition to $20,000 in Altitude Qualifying Dollars, the requirement for Super Elite 100K is:", 
							answers: [ 
								{ text: "95,000 miles or 95 segments"}, 
								{ text: "100,000 miles or 95 segments"}, 
								{ text: "95,000 miles or 100 segments"}, 
								{ text: "100,000 miles or 100 segments"}
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
					text: "Hello. I wanted to send you a quick note to thank you for organizing our great trip on Air Canada rouge.  We are looking forward to it.  My husband is a bit of airplane buff, and I know he will ask me what types of aircraft Air Canada rouge fly. Can you tell me about that?",
					questions: [
						{
							question: "I'm happy to hear you are looking forward to your trip on Air Canada rouge.  It was my pleasure to help.  The Air Canada rouge story is incredible. The company started out with just four aircraft in 2013 and now operates more than:", 
							answers: [ 
								{ text: "10 aircraft"}, 
								{ text: "15 aircraft"}, 
								{ text: "25 aircraft"}, 
								{ text: "30 aircraft"}
							],
							valid: [3]
						},
						{ 
							question: "Air Canada rouge operate Boeing 767 aircraft that they fly mostly on longer routes between Canada and Europe, Asia, Africa and South America.  They also operate Airbus A319 aircraft on shorter flights within Canada and between Canada and the United States and the Caribbean.  The have recently added new:", 
							answers: [ 
								{ text: "Boeing 878 aircraft to their fleet"}, 
								{ text: "Boeing 777 aircraft to their fleet"},
								{ text: "Airbus A380 aircraft to their fleet"},
								{ text: "Airbus A321 aircraft to their fleet"}
							],
							valid: [3]
						},
						{ 
							question: "I know that you are going to be impressed with the customer service you’ll receive from the rouge crew on board.  The rouge crews went through special Customer Service Excellence training with ", 
							answers: [ 
								{ text: "Cirque du Soleil"}, 
								{ text: "Disney"},
								{ text: "Amazon"},
								{ text: "Starbucks"}
							],
							valid: [1]
						}
					]					
				},
				{
					text: "I need your help in deciding on some vacation plans. I’ve been considering a cruise.  Can I book both my flight and cruise with Air Canada Vacations? If I choose to do a resort instead, can you tell me how I could easily compare the quality and value of the different hotels and resort options?",
					questions: [
						{
							question: "Air Canada Vacations’ CruiseAir options make it easy to add the flights you need to your cruise.  With CruiseAir all flights are 100% refundable up to 30 days prior to travel and a $100 refundable deposit is all it takes to hold flights. Their Flight Guarantee means they will take care of you when the unexpected happens.  In addition:", 
							answers: [ 
								{ text: "One name change is permitted up to 45 days prior to travel"}, 
								{ text: "One name change is permitted up to 30 days prior to travel"}, 
								{ text: "One name change is permitted up to 15 days prior to travel"}, 
								{ text: "One name change is permitted up to 10 days prior to travel"}
							],
							valid: [1]
						},
						{ 
							question: "Air Canada Vacations has carefully selected Resorts, hotels, condominiums, bed and breakfasts, and villas to suit every taste and budget.  Since many establishments offer a range of accommodations, Air Canada Vacations provides:", 
							answers: [ 
								{ text: "Hotel Classifications (Deluxe, Superior, Very Good value, Comfortable)"}, 
								{ text: "Description guides for properties"},
								{ text: "Both A & B"}
							],
							valid: { answers: [0, 1], aggregate: [2] }
						},
						{ 
							question: "To compliment vacation packages, Flights and Cruises, Air Canada Vacation can also offer (select all that apply)", 
							answers: [ 
								{ text: "Coach & Self-drive tours"}, 
								{ text: "multi-city rail tours"},
								{ text: "car rentals"},
								{ text: "attraction tickets"}
							],
							valid: [0, 1, 2, 3]
						}
					]					
				}		
			]
		},
		network_fleet: {
			scenarios: [
				{
					text: "Hi. I hope this email finds you well.  I saw some pretty amazing pricing for Air Canada’s business class, and I’m considering it for my next trip.  Can you give me some details on what I should expect?  Thanks.",
					questions: [
						{
							question: "Air Canada’s International Business Class features luxurious amenities and priority services such as Priority Check-in, Priority boarding and Priority Security clearance.  In addition to Premium wines, spirits and cuisine, a large pillow and plush duvet, travellers enjoy: (select all that apply)", 
							answers: [ 
								{ text: "Concierge service"}, 
								{ text: "Maple Leaf Lounge access"}, 
								{ text: "Extra baggage allowance"}, 
								{ text: "Priority Parking "}
							],
							valid: [0, 1, 2]
						},
						{ 
							question: "Air Canada’s Leisure airline, Air Canada rouge offers Premium rouge with seats located at the front of the cabin that are larger and offer more legroom and more recline.  Premium rouge is available on:", 
							answers: [ 
								{ text: "Select Air Canada rouge flights "}, 
								{ text: "All Air Canada rouge flights "}
							],
							valid: [1]
						},
						{ 
							question: "On Airbus A319 and A321 aircraft, Premium rouge seats are in a 2 x 2 configuration featuring a seat pitch of 36”.  On Boeing 767 aircraft, Premium rouge seats offer a seat pitch of 37” inches providing passengers with 7 more inches of leg room.  The 767s are configured in a: ", 
							answers: [ 
								{ text: "2 X 2 X 2 configuration"}, 
								{ text: "2 X 3 X 2 configuration"},
								{ text: "1 X 2 X 2 configuration"},
								{ text: "3 X 3 configuration"}
							],
							valid: [0]
						}
					]					
				}	
			]
		}
	}
}