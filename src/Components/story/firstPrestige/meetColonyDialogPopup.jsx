import React, {useState} from 'react';
import Modal from "../../controls/modal/modal";
import Typist from 'react-typist';
import {useDispatch, useSelector} from "react-redux";
import {closeStory} from "../../../Redux/actions";
import classes from "./meetColony.module.css";

function MeetColonyDialogPopup({open}) {
  const dispatch = useDispatch();
  const show = useSelector(state => state.game.storyShow.meetColony)
  const [doneTyping, setDoneTyping] = useState(false);


  if(!show) return null;
  return (
    <Modal open actions={[{
      label: "Give Resources",
      disabled: !doneTyping,
      onClick: () => dispatch(closeStory('meetColony'))
    }]}>
      <div className={classes.typistWrapper}>
        <Typist
          startDelay={1}
          onTypingDone={() => setDoneTyping(true)}
          cursor={{
            show: true,
            blink: true,
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 250,
          }}
        >
          <span style={{fontSize: '1.5em'}}>Incoming transmission...</span>
          <br/><br/>
          <Typist.Delay ms={1000}/>
          <span>Mayday Mayday SOS...</span>
          <br/><br/>
          <Typist.Delay ms={1000}/>
          <span>The earth has been destroyed!</span>
          <br/><br/>
          <Typist.Delay ms={1000}/>
          <span>We thought we were the only humans left in the universe</span>
          <br/><br/>
          <Typist.Delay ms={1000}/>
          <span>Around 3 years ago the world fell into a civil war that ended up destroying Earth and most of Mars.
            We are only 8 people surviving deep under the martian surface. We hae no resources to rebuild and our space port was destroyed.
            Without help we won't survive longer than a couple more miserable years.</span>
          <br/><br/>
          <Typist.Delay ms={1000}/>
          <span>Please...</span>
          <br/><br/>
          <Typist.Delay ms={2000}/>
          <span>help us...</span>
          <br/><br/>

        </Typist>
        <br/>

      </div>

    </Modal>
  );
}

export default MeetColonyDialogPopup;