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
				},
				{
					text: "SCENARIO 2Hello.  Some of our executives are travelling to Asia next month and specifically asked to travel on Air Canada. They need to hit the ground running once they arrive and want to be ready to work.  Our travel policy allows them to travel in Business Class.  Can you tell us about Air Canada International Business Class?",
					questions: [
						{
							question: "SCENARIO 2Air Canada’s International Business Class service features luxurious amenities and priority services and provides the ultimate in comfort and convenience with seats that recline:", 
							answers: [ 
								{ text: "130 degree"}, 
								{ text: "145 degree"}, 
								{ text: "170 degree"}, 
								{ text: "Into fully flat beds over 6 feet in length"}
							],
							valid: [3]
						},
						{ 
							question: "SCENARIO 2The new Executive Pods on Air Canada’s Boeing 787 aircraft are now also being installed on Air Canada’s fleet of:", 
							answers: [ 
								{ text: "Boeing 767"}, 
								{ text: "Boeing 777"}, 
								{ text: "Airbus A380"}, 
								{ text: "Airbus A321"}
							],
							valid: [1]
						},
						{ 
							question: "SCENARIO 2International Business Class passengers on Air Canada can expect access to the airport priority services such as Priority Check-in,  Priority Boarding and Priority Security Clearance, as well as: (select all that apply)", 
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
		}
	}
}