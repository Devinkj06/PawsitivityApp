import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Start from './pages/Start';
import Authentication from './pages/Authentication';
import Register from './pages/Register';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import ForgotPassword from './pages/ForgotPassword';
import MainMenu from './pages/MainMenu';
import TaskCreation from './pages/TaskCreation';
import Shop from './pages/Shop';
import Hats from './pages/Hats';
import Todo5 from './pages/Todo5';
import Todo10 from './pages/Todo10';
import Todo15 from './pages/Todo15';
import TaskCompletion5 from './pages/TaskCompletion5';
import TaskCompletion10 from './pages/TaskCompletion10';
import TaskCompletion15 from './pages/TaskCompletion15';
import UserAccount from './pages/UserAccount';
import UsernameEdit from './pages/UsernameEdit';
import EmailEdit from './pages/EmailEdit';
import PasswordEdit from './pages/PasswordEdit';
import TouchGrass from './pages/TouchGrass';
import TaskList from './pages/TaskList';
import { UserProvider } from './context/UserContext';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <UserProvider>
          <Route exact path="/">
            <Start />
          </Route>
          <Route component={Authentication} path="/Authentication" exact />
          <Route component={Register} path="/Register" exact />
          <Route component={Login} path="/Login" exact />
          <Route component={Welcome} path="/Welcome" exact />
          <Route component={ForgotPassword} path="/Forgot-Password" exact />
          <Route component={MainMenu} path="/Main-Menu" exact />
          <Route component={TaskCreation} path="/Task-Creation" exact />
          <Route component={Shop} path="/Shop" exact />
          <Route component={Hats} path="/Hats" exact />
          <Route component={Todo5} path="/Todo5" exact />
          <Route component={Todo10} path="/Todo10" exact />
          <Route component={Todo15} path="/Todo15" exact />
          <Route component={TaskCompletion5} path="/TaskCompletion5" exact />
          <Route component={TaskCompletion10} path="/TaskCompletion10" exact />
          <Route component={TaskCompletion15} path="/TaskCompletion15" exact />
          <Route component={UserAccount} path="/UserAccount" exact />
          <Route component={UsernameEdit} path="/UsernameEdit" exact />
          <Route component={EmailEdit} path="/EmailEdit" exact />
          <Route component={PasswordEdit} path="/PasswordEdit" exact />
          <Route component={TouchGrass} path="/TouchGrass" exact />
          <Route component={TaskList} path="/TaskList" exact />
          
          </UserProvider>
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
