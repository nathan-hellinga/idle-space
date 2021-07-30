export const colonyUpgrades = {
  'mining 1': {
    title: "Improved Mining I",
    subtitle: "We can improve your ship with a few scraps, technology advanced quite a bit since the last time that things has seen the arc of a welder",
    dependencies: [],
    building: '',
    price: {
      steel: 10,
      tech: 10
    },
  },
  'mining 2': {
    title: "Improved Mining II",
    subtitle: "We have improved our machining capabilities and can now make proper upgrades to your ship.",
    dependencies: ['mining 1'],
    building: '',
    price: {
      steel: 2000,
      tech: 2000
    },
  },
  'mining 3': {
    title: "Improved Mining III",
    subtitle: "Improvements come easy now, we have invented a new pulsar laser that might be able to improve mining speeds by 3 times.",
    dependencies: ['mining 2'],
    building: '',
    price: {
      steel: 10000,
      tech: 10000
    },
  },
  'mining 4': {
    title: "Improved Mining IV",
    subtitle: "Divine power has been gifted to our machines, they are more powerful than we could ever be.",
    dependencies: ['mining 3'],
    building: '',
    price: {
      steel: 50000,
      tech: 50000,
      blood: 20,
    },
  },
  'mining 5': {
    title: "Improved Mining V",
    subtitle: "We are the chosen among the gods, blessed be our holy mission.",
    dependencies: ['mining 4'],
    building: '',
    price: {
      steel: 1000000,
      tech: 1000000,
      favour: 200,
    },
  },
  'biomass efficiency 1': {
    title: "Fortified Biomass",
    subtitle: "Chemically altering the biomass slurry means we can produce it at twice the rate. It still doesnt make it taste good though.",
    dependencies: [],
    building: '',
    price: {
      biomass: 20,
      tech: 40
    },
  },
  'biomass efficiency 2': {
    title: "Improved Water Recyclers",
    subtitle: "We have improved the efficiency of the water recyclers and the benefits look promising.",
    dependencies: ['biomass efficiency 1'],
    building: '',
    price: {
      biomass: 200,
      tech: 250
    },
  },
  'lost manuals': {
    title: "Forgotten Library",
    subtitle: "We found manuscripts details how the lost technology works, our engineers will be able to make good use of this.",
    dependencies: [],
    building: 'engineer',
    price: {
      steel: 1337,
      tech: 1337
    },
  },
  'robotics': {
    title: "Robotics",
    subtitle: "We can enhance our advanced manufacturing research by using some reclaimed robotcs.",
    dependencies: ['lost manuals'],
    building: 'engineer',
    price: {
      steel: 5000,
      tech: 5500,
    },
  },
  'night vision goggles': {
    title: "Night Vision Goggles",
    subtitle: "We found a stash of night vision goggles, with a bit of repair we could give these to the scouts to help them look for loot at night.",
    dependencies: [],
    building: 'scout',
    price: {
      steel: 500,
      tech: 1000
    },
  },
  'antibiotics': {
    title: "Antibiotics",
    subtitle: "Improved antibiotics means it takes half as many resources to keep people healthy.",
    dependencies: [],
    building: 'medic',
    price: {
      food: 7500,
      tech: 7500
    },
  },
  'prayer beads': {
    title: "Prayer Beads",
    subtitle: "A holy relic that promises to bring the wearer closer to those who made him.",
    dependencies: [],
    building: 'medic',
    price: {
      steel: 30000,
      tech: 30000
    },
  },
  'genetics': {
    title: "Genome Sequencing",
    subtitle: "We can now birth healthier and stronger colonists at a faster rate.",
    dependencies: [],
    building: 'breeder',
    price: {
      steel: 100000,
      tech: 100000
    },
  },
  'hell': {
    title: "The Ultimate Sacrifice",
    subtitle: "Sacrifice all to the Old Ones",
    dependencies: ['genetics', 'prayer beads', 'antibiotics', 'night vision goggles'],
    building: 'sacrifice',
    price: {
      blood: 666666666,
      favour: 666666666,
    },
  },
}