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
  medic: {
    title: "Medical Center",
    subtitle: "Modern medicine will be a huge benefit for us",
    basePrice: 30000,
    costMultiFactor: 2,
    workers: 1,
    inputs : [
      {
        name: 'tech',
        numerator: 5,
        denominator: 60
      },
      {
        name: 'biomass',
        numerator: 2,
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
  engineer:{
    title: "Engineers Workshop",
    subtitle: "Our systems are in dire need of maintenance, proper engineering training and tools would let us " +
      "better maintain our life support and other systems",
    basePrice: 100000,
    costMultiFactor: 2,
    workers: 1,
    inputs: [],
    outputs: [
      {
        name: 'steel',
        numerator: 1,
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
    basePrice: 200000,
    costMultiFactor: 2,
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
        numerator: 2,
        denominator: 60
      }
    ]
  },
}


export const colonyMessages = [
  "We are having a celebration"
]