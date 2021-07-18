

export const ResearchObjects = [
  // SPACE NET
  {
    id: "sn1",
    title: 'Improved Space Nets',
    subtitle: "Bigger nets = more space junk. This one is pretty self-explanatory",
    multiplier: 1.5,
    fabType: 'spaceNet',
    basePrice: 2000,
    dependencies: []
  },
  {
    id: 'sn2',
    title: 'Improved Space Nets II',
    subtitle: "Have you have tried eating soup off a plate? Yeah well we made the nets more like bowls now",
    multiplier: 1.5,
    fabType: 'spaceNet',
    basePrice: 5000,
    dependencies: ['sn1']
  },
  {
    id: 'sn3',
    title: 'Improved Space Nets III',
    subtitle: "We added titanium threads to the net to catch more volatile space junk like meteorites or knives",
    multiplier: 1.5,
    fabType: 'spaceNet',
    basePrice: 8000,
    dependencies: ['sn2']
  },
  // DRONES
  {
    id: 'dr1',
    title: 'Improved Drones I',
    subtitle: "Improved drone batteries and auto pilot software lets us more efficiently control more drones without crashing them into each other",
    multiplier: 1.5,
    fabType: 'drone',
    basePrice: 15000,
    dependencies: []
  },
  {
    id: 'dr2',
    title: 'Improved Drones II',
    subtitle: "Improved aerial reconnaissance lets the drones find more mineral rich deposits to improve their efficiency",
    multiplier: 1.5,
    fabType: 'drone',
    basePrice: 15000,
    dependencies: ['dr1']
  },
  // PROBE
  {
    id: 'pr1',
    title: 'Improved Probes I',
    subtitle: "Improve the probes with a bigger drilling bit. We also gave them emotions, but only sadness so they feel bad when they keep getting stuck in holes",
    multiplier: 1.5,
    fabType: 'probe',
    basePrice: 15000,
    dependencies: []
  },
  {
    id: 'dr2',
    title: 'Improved Probes II',
    subtitle: "These guys are so cute, we gave them little backpacks to so they could... cary more stuff?",
    multiplier: 1.5,
    fabType: 'probe',
    basePrice: 15000,
    dependencies: ['dr1']
  },



]