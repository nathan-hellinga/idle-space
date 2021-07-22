const eq = (count) => {
  return -1/(1+ count/200) + 1
}

export default function keepPercent(launchCount, elevatorCount){
  const launchFactor = 0.35;
  const elevatorFactor = 0.65;
  return eq(launchCount)*launchFactor + eq(elevatorCount)*elevatorFactor;
}