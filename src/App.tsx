import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

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

// Import custom css
import './main.css';

// Import components
import AboutPage from './pages/about_page/about_page';
import ContactPage from './pages/contact_page/contact_page';
import ChattingPage from './pages/chatting_page/chatting_page';
import ProfilePage from './pages/profile_page/profile_page';
import NotesPage from './pages/notes_page/notes_page';
import NoteEditor from './components/note__notesEditor/Note_editors';
import DashboardPage from './pages/dashboard_page/dashboard_page';
import MapPage from './pages/map_page/map_page';
import LoginPage from './pages/login_page/login_page';
import RegisterPage from './pages/register_page/register_page';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/chatting" component={ChattingPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/todo" component={NotesPage} />
        <Route exact path="/todo-edit" component={NoteEditor} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
