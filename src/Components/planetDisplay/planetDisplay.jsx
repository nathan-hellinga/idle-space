import classes from "./planetDisplay.module.css";

export default function PlanetDisplay(){


  return(
    <div className={classes.planetDisplay}>
      <h3 style={{opacity: 0.5, float: 'left', width: '49%'}}>Asteroid: AX62</h3>
      <h3 style={{opacity: 0.5, textAlign: 'right', float: 'right', width: '49%'}}>000001.01.15</h3>
      <h3 style={{opacity: 0.5, clear: 'both'}}>Resource Density: Low</h3>
      <h3 style={{opacity: 0.5, clear: 'both'}}>Life: None</h3>
    </div>
  )
}