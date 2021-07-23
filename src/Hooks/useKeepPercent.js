import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


export default function useKeepPercent() {
  const [factor, setFactor] = useState(0);
  const elevatorCount = useSelector((state) => state.sources.spaceElevator)
  const launchFacilityCount = useSelector((state) => state.sources.launchFacility)

  const eq = (count) => {
    return -1 / (1 + count / 200) + 1
  }

  const launchFactor = 0.35;
  const elevatorFactor = 0.65;
  // return eq(launchFacilityCount) * launchFactor + eq(elevatorCount) * elevatorFactor;


  useEffect(() => {
    setFactor(eq(launchFacilityCount) * launchFactor + eq(elevatorCount) * elevatorFactor)
  }, [elevatorCount, launchFacilityCount])

  return factor;
}
