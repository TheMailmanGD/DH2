export const Abilities: {[abilityid: string]: AbilityData} = {
	// IM SO GOOD AT PROGRAMMING
	lastingimpression: {
		onSwitchOut(pokemon) {
			this.damage(pokemon.baseMaxhp / 5, pokemon, target);
		},
		name: "Lasting Impression",
		rating: 3,
		num: 10000,
		//btd6 tier 5 ahh
		shortDesc: "What does it do? It lasts the impression.",
	},
};