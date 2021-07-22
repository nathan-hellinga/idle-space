import classes from "./communications.module.css";
import {useShallowEqualSelector} from "../../Hooks/useShallowEqualSelector";
import {listenCommunications} from "../../Redux/selectors";
import Typist from 'react-typist';
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {receiveMessage} from "../../Redux/actions";


export default function CommunicationsPanel(){
  const dispatch = useDispatch();
  const messages = useShallowEqualSelector(listenCommunications);



  console.log(messages);
  return(
    <div className={classes.wrapper}>
      <Grid container direction={'column'} spacing={2}>
        {messages.map(msg => (
          <Grid item xs={12} key={msg.index}>
            {
              msg.received ?
                <span className={classes.message} dangerouslySetInnerHTML={{__html: msg.message}} />
                :
                <Typist
                  startDelay={1}
                  onTypingDone={() => dispatch(receiveMessage(msg.index))}
                  cursor={{
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true,
                    hideWhenDoneDelay: 250,
                  }}
                >
                  <span className={classes.message}>{msg.message}</span>
                </Typist>
            }
          </Grid>
        ))}
      </Grid>
    </div>
  )
}