var usa_states = ['Alabama','Alaska','AmericanSamoa','Arizona','Arkansas','California',
	'Colorado','Connecticut','Delaware','DistrictofColumbia','FederatedStatesofMicronesia',
	'Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
	'Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota',
	'Mississippi','Missouri','Montana','Nebraska','Nevada','NewHampshire','NewJersey','NewMexico',
	'NewYork','NorthCarolina','NorthDakota','NorthernMarianaIslands','Ohio','Oklahoma','Oregon',
	'Palau','Pennsylvania','PuertoRico','RhodeIsland','SouthCarolina','SouthDakota','Tennessee',
	'Texas','Utah','Vermont','VirginIsland','Virginia','Washington','WestVirginia',
	'Wisconsin','Wyoming'];

export function check_usa_states(a){
	var x = a.toLowerCase();

	for(let i=0; i<usa_states.length; i++)
	{
		if(usa_states[i] === null)
			continue;
		var y = usa_states[i].toLowerCase();
		if(x === y)
		{
			usa_states[i] = null;
			return 1;
		}
	}
	return 0;
}