export default {

	Ian: {
		name: "Ian",
		icon: require("@/assets/art/combat/enemies/Ian.png"),
		stats: {
			maxHealth: 60,
			attackSpeed: 2.1,
			precision: 10,
			power: 21,
			evasion: 23,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: "foodMeatA",
						weight: 98
					},
					{
						id: "companionDog",
						weight: 2
					},
				]
			}
		]
	},
	paperworkhop: {
		name: "Head Of Personnel",
		icon: require("@/assets/art/combat/enemies/goodhop.png"),
		stats: {
			maxHealth: 70,
			attackSpeed: 1.9,
			precision: 20,
			power: 24,
			evasion: 22,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'armorBrute1',
						weight: 1
					},
					{
						id: 'meleeToolbox2',
						weight: 1
					},
					{
						id: 'ticket1',
						count: [1, 2],
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	hopcurity: {
		name: "Self Declared Head of GUNS",
		icon: require("@/assets/art/combat/enemies/hoGUN.png"),
		stats: {
			maxHealth: 80,
			attackSpeed: 1.7,
			precision: 29,
			power: 19,
			evasion: 36,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'ammoBallistic1',
						weight: 1
					},
					{
						id: 'gunBallistic2',
						weight: 1
					},
					{
						id: 'ammoBallistic2',
						weight: 1
					}
				]
			}, {
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
}