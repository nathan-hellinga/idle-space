export const fabObjects = {
  drone: {
    title: 'Drone',
    subtitle: "Orbits the target and automatically mines using lasers",
    basePrice: 25,
    baseIncome: 1
  },
  probe: {
    title: 'Probe',
    subtitle: "Launch a probe to drill core samples from the surface",
    basePrice: 375,
    baseIncome: 15
  },
  lander: {
    title: 'Lander',
    subtitle: "Send a lander to the surface to do mobile excavation",
    basePrice: 5500,
    baseIncome: 225
  },
  miningRig: {
    title: 'Mining Rig',
    subtitle: "Establish a semi-permanent mining structure on the surface",
    basePrice: 85000,
    baseIncome: 3250
  },
}

export const initialState = {
  drone: 0,
  probe: 0,
  lander: 0,
  miningRig: 0
}