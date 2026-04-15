export const Moves: {[k: string]: ModdedMoveData} = {
	psyblast: {
		num: 10000,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Psyblast",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Psychic",
	},
};