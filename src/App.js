import './App.css';
import Main from "./Pages/main/main";
import GameManager from "./Components/gameManager";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Colony from "./Pages/colony/Colony";
import PageSwitcher from "./Components/controls/pageSwitcher/pageSwitcher";
import {useSelector} from "react-redux";

function App() {
  const prestige = useSelector(state => state.game.prestige);

  return (
    <div style={{padding: '8px'}}>
      <Router>
        <GameManager/>
        {
          prestige > 0 &&
          <PageSwitcher/>
        }

        <Switch>
          {
            prestige > 0 &&
            <Route path={'/colony'}>
              <Colony/>
            </Route>
          }

          <Route>
            <Main/>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
