

export const ResearchObjects = [
  // SPACE NET
  {
    id: "sn1",
    title: 'Improved Space Nets',
    subtitle: "Bigger nets = more space junk. This one is pretty self-explanatory",
    message: "Double the size of the nets, if you make these nets any bigger we might actually catch some space fish.",
    multiplier: 2,
    fabType: 'spaceNet',
    basePrice: 10000,
    dependencies: []
  },
  {
    id: 'sn2',
    title: 'Improved Space Nets II',
    subtitle: "Have you have tried eating soup off a plate? We made the nets more like bowls now",
    message: "Did that make sense? Bowls?... the nets are deeper now so we can catch bigger stuff, kind of like a baseball glove.",
    multiplier: 2,
    fabType: 'spaceNet',
    basePrice: 30000,
    dependencies: ['sn1']
  },
  {
    id: 'sn3',
    title: 'Improved Space Nets III',
    subtitle: "We added titanium threads to the net to catch more volatile space junk like meteorites or knives",
    message: "We doubled the efficiency of the nets again, I think that makes it 3^6 or !(2^3) times better. They are " +
      "stronger now so we can catch pretty much anything.",
    multiplier: 3,
    fabType: 'spaceNet',
    basePrice: 550000,
    dependencies: ['sn2']
  },
  // DRONES
  {
    id: 'dr1',
    title: 'Improved Drones I',
    subtitle: "Improved drone batteries and auto pilot software lets us more efficiently control more drones without crashing them into each other",
    message: "We didnt actually improve anything, we just put extra batteries on them its not astrophysics.",
    multiplier: 1.65,
    fabType: 'drone',
    basePrice: 125000,
    dependencies: []
  },
  {
    id: 'dr2',
    title: 'Improved Drones II',
    subtitle: "Improved aerial reconnaissance lets the drones find more mineral rich deposits to improve their efficiency",
    message: "Would you believe it if I told you before this upgrade I was controlling every single one of these drones?",
    multiplier: 2,
    fabType: 'drone',
    basePrice: 225000,
    dependencies: ['dr1']
  },
  // PROBE
  {
    id: 'pr1',
    title: 'Improved Probes I',
    subtitle: "More powerful onboard generators allow us to probe deeper",
    message: "Each probe is now equipped with a thermo-radio isotope generator capable of up to 500W. Dont ask where we got the radioactive material, " +
      "also... check yourself regularly.",
    multiplier: 1.3,
    fabType: 'probe',
    basePrice: 1375000,
    dependencies: []
  },
  {
    id: 'pr2',
    title: 'Improved Probes II',
    subtitle: "Liquid cooling vents let the probes drill harder and for longer",
    message: "The probes can now scan for sub-surface liquids, drill for said liquids, and re-circulate the liquid through " +
      "its drilling mantle. Pretty clever.",
    multiplier: 1.55,
    fabType: 'probe',
    basePrice: 6875000,
    dependencies: ['pr1']
  },
  // PROBE
  {
    id: 'ld1',
    title: 'Improved Landers I',
    subtitle: "Improve the lander with a bigger drilling bit and a tiny shovel. We also gave them emotions, but only sadness so they feel bad when they keep getting stuck in holes",
    message: "Each land rover now feels an overwhelming sadness when it gets stuck on rocks and in holes. My research " +
      "seems to indicate this will make them try harder to not get stuck in holes but somehow " +
      "I think we might just end up with depressed probes.",
    multiplier: 1.25,
    fabType: 'lander',
    basePrice: 21250000,
    dependencies: []
  },
  {
    id: 'ld2',
    title: 'Improved Landers II',
    subtitle: "These guys are so cute, we gave them little backpacks too so they could... cary more stuff?",
    message: "Depressed little surface trucks... but with accessories!",
    multiplier: 1.25,
    fabType: 'lander',
    basePrice: 106250000,
    dependencies: ['ld1']
  },
  {
    id: 'mr1',
    title: 'Improved Mining Rigs I',
    subtitle: "Improve the mining capabilities of the rig with ancient alien technology",
    message: "The ancient alien technology is... diesel... Yes technically the aliens have been dead for a while. " +
      "We did say ancient.",
    multiplier: 1.25,
    fabType: 'miningRig',
    basePrice: 300000000,
    dependencies: []
  },
  {
    id: 'mr2',
    title: 'Improved Mining Rigs II',
    subtitle: "Improve the mining capabilities of the rig with ancient alien technology",
    message: "",
    multiplier: 1.25,
    fabType: 'miningRig',
    basePrice: 1500000000,
    dependencies: ["mr1"]
  },
  {
    id: 'df1',
    title: 'Improved Drone Factory I',
    subtitle: "We make more drones that make more drones that make more drones...",
    message: "",
    multiplier: 1.25,
    fabType: 'droneFactory',
    basePrice: 187500000,
    dependencies: []
  },
  {
    id: 'df2',
    title: 'Improved Drone Factory II',
    subtitle: "We make more drones that make more drones that make more drones...",
    message: "",
    multiplier: 1.25,
    fabType: 'droneFactory',
    basePrice: 937500000,
    dependencies: ["df1"]
  },
  {
    id: 'lf1',
    title: 'Improved Launch Facility I',
    subtitle: "A second launch pad will let us launch twice as many rockets",
    message: "",
    multiplier: 1.25,
    fabType: 'launchFacility',
    basePrice: 2200000000,
    dependencies: []
  },
  {
    id: 'lf2',
    title: 'Improved Launch Facility II',
    subtitle: "A third launch pad will let us launch three times as many rockets",
    message: "",
    multiplier: 1.15,
    fabType: 'launchFacility',
    basePrice: 7600000000,
    dependencies: ["lf1"]
  },
  {
    id: 'se1',
    title: 'Improved Space Elevator I',
    subtitle: "They said I could be anything so I became a space rope",
    message: "",
    multiplier: 1.15,
    fabType: 'spaceElevator',
    basePrice: 20000000000,
    dependencies: []
  },
  {
    id: 'se2',
    title: 'Improved Space Elevator II',
    subtitle: "Rope thicker rope stronger = bigger loads",
    message: "",
    multiplier: 1.15,
    fabType: 'spaceElevator',
    basePrice: 40000000000,
    dependencies: ['se1']
  },
]