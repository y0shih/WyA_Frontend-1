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

// Import components
import AboutPage from './pages/about_page/about_page';
import ContactPage from './pages/contact_page/contact_page';
import ChattingPage from './pages/chatting_page/chatting_page';
import ProfilePage from './pages/profile_page/profile_page';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/dashboard" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/chatting" component={ChattingPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
