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
								{valid: false, text: "130 degree"}, 
								{valid: false, text: "145 degree"}, 
								{valid: false, text: "170 degree"}, 
								{valid: true, text: "Into fully flat beds over 6 feet in length"}
							]
						},
						{ 
							question: "The new Executive Pods on Air Canada’s Boeing 787 aircraft are now also being installed on Air Canada’s fleet of:", 
							answers: [ 
								{valid: false, text: "Boeing 767"}, 
								{valid: true, text: "Boeing 777"}, 
								{valid: false, text: "Airbus A380"}, 
								{valid: false, text: "Airbus A321"}
							]
						},
						{ 
							question: "International Business Class passengers on Air Canada can expect access to the airport priority services such as Priority Check-in,  Priority Boarding and Priority Security Clearance, as well as: (select all that apply)", 
							answers: [ 
								{valid: false, text: "Preferred seating at airport gates"}, 
								{valid: true, text: "Priority Baggage Handling"}, 
								{valid: true, text: "Complimentary Maple Leaf Lounge access"}, 
								{valid: true, text: "Assistance from Air Canada’s Concierge agents"}
							]
						}
					]					
				}				
			]
		}
	}
}