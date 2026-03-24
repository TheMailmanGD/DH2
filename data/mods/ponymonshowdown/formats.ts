import { FormatData } from '../../../sim/dex-formats';

export const Formats: FormatData[] = [
	{
		name: "[Gen 9] Ponymon",
		mod: 'ponymonshowdown',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Data Mod'],
		banlist: ['Darkrai', 'ND Uber', 'ND AG'],
<<<<<<< HEAD
		unbanlist: ['Gholdengo', 'Kingambit', 'Melmetal', 'Regieleki', 'Roaring Moon', 'Shedinja', 'Terapagos', 'Walking Wake'],
=======
		unbanlist: ['Gholdengo', 'Kingambit', 'Melmetal', 'Regieleki', 'Roaring Moon', 'Shedinja', 'Terapagos', 'Walking Wake', 'Zamazenta'],
>>>>>>> parent of 3c7fcd2719 (merge fix)
		teambuilderFormat: 'National Dex',
	},
	{
		name: "[Gen 9] Ponymon Ubers",
		mod: 'ponymonshowdown',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Ubers Terastal Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Rayquaza Clause'],
		banlist: ['Calyrex-Shadow', 'Gengarite'],
		teambuilderFormat: 'National Dex Ubers',
	},
	{
		name: "[Gen 9] Ponymon UU",
		mod: 'ponymonshowdown',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Data Mod'],
		banlist: ['NDOU', 'UUBL', 'ND Uber', 'ND AG'],
<<<<<<< HEAD
		unbanlist: ['Regieleki', 'Shedinja', 'Banette-Mega', 'Ceruledge', 'Clodsire', 'Corviknight', 'Dondozo', 'Garganacl', 'Glimmora', 'Gyarados', 'Iron Crown', 'Iron Hands', 'Latios', 'Pinsir-Mega', 'Tapu Lele', 'Thundurus-Therian', 'Zapdos-Galar'],
		teambuilderFormat: 'National Dex UU',
	}
=======
		unbanlist: ['Regieleki', 'Shedinja', 'Banette-Mega', 'Ceruledge', 'Clodsire', 'Corviknight', 'Dondozo', 'Garganacl', 'Glimmora', 'Gyarados', 'Iron Crown', 'Iron Hands', 'Latios', 'Pinsir-Mega', 'Tapu Lele', 'Ting-Lu', 'Thundurus-Therian', 'Zapdos-Galar'],
		teambuilderFormat: 'National Dex UU',
	},
>>>>>>> parent of 3c7fcd2719 (merge fix)
];