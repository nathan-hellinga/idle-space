export const colonyObjects = {
  hydroponics: {
    title: "Hydroponics Lab",
    subtitle: "A hydroponics lab will allow us to start growing our own plant matter. Its not tasty but at least we wont starve.",
    basePrice: 5000,
    costMultiFactor: 2,
    workers: 3,
    inputs : [],
    outputs: [
      {
        name: 'biomass',
        numerator: 3,
        denominator: 60
      }
    ]
  },
  engineer:{
    title: "Engineers Workshop",
    subtitle: "Our systems are in dire need of maintenance, proper engineering training and tools would let us " +
      "better maintain our life support and other systems",
    basePrice: 30000,
    costMultiFactor: 1.5,
    workers: 1,
    inputs: [],
    outputs: [
      {
        name: 'steel',
        numerator: 3,
        denominator: 60
      },
      {
        name: 'tech',
        numerator: 1,
        denominator: 60
      },
    ]
  },
  cook: {
    title: "Kitchen",
    subtitle: "Cooking facilities will let us turn the biomass into proper food. Eating biomass sucks.",
    basePrice: 100000,
    costMultiFactor: 1.5,
    workers: 2,
    inputs : [
      {
        name: 'biomass',
        numerator: 4,
        denominator: 60
      }
    ],
    outputs: [
      {
        name: 'food',
        numerator: 4,
        denominator: 60
      }
    ]
  },
  medic: {
    title: "Medical Center",
    subtitle: "Modern medicine will be a huge benefit for us",
    basePrice: 200000,
    costMultiFactor: 1.5,
    workers: 1,
    inputs : [
      {
        name: 'biomass',
        numerator: 5,
        denominator: 60
      }
    ],
    outputs: [
      {
        name: 'meds',
        numerator: 1,
        denominator: 60
      }
    ]
  },
  scout: {
    title: "Reclamation Squads",
    subtitle: "Searching through the remains of society could reward us with lost technology, we may even find other survivors",
    basePrice: 500000,
    costMultiFactor: 1.5,
    workers: 2,
    inputs : [
      {
        name: 'food',
        numerator: 5,
        denominator: 60
      },
    ],
    outputs: [
      {
        name: 'tech',
        numerator: 5,
        denominator: 60
      },
      {
        name: 'meds',
        numerator: 1,
        denominator: 60
      },
      {
        name: 'bio-lattice',
        numerator: 1,
        denominator: 60
      },
    ]
  },
}


export const colonyMessages = [
  "We are having a celebration"
]