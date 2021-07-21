import classes from "./communications.module.css";
import {useShallowEqualSelector} from "../../Hooks/useShallowEqualSelector";
import {listenCommunications} from "../../Redux/selectors";
import Typewriter from 'typewriter-effect';
import {Grid} from "@material-ui/core";


export default function CommunicationsPanel(){
  const messages = useShallowEqualSelector(listenCommunications);
  console.log(messages);
  return(
    <div className={classes.wrapper}>
      <Grid container direction={'column'} spacing={2}>
        {messages.map(msg => (
          <Grid item xs={12} key={msg.index}>
            <span style={{float: 'left'}}>{">"}&nbsp;&nbsp;</span><Typewriter options={{
              strings: msg.message,
              autoStart: true,
              loop: false,
              delay: 25,
              cursor: "",
            }}
          />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}