import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Spinnerloadingcomponent from './Components/Spinnerloading/Spinnerloading';
//here  and we call all the needed icone from font awesome 6
//here we call  fauser and famarker and facheck 
// here ew can use them any time 
import { library } from '@fortawesome/fontawesome-svg-core' //allows later to just use icon name to render-them
import { fas } from '@fortawesome/free-solid-svg-icons' ; 
import { fab} from '@fortawesome/free-brands-svg-icons' ; 
import { faUser , faUsers , faMapMarker , faCheck , faBars , faCheckCircle ,faChevronDown , faSpinner , faTimesCircle, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons'
import {faTwitter,faLinkedinIn , faFacebook , faInstagram    } from '@fortawesome/free-brands-svg-icons'
library.add(fab , faTwitter , faLinkedinIn , faFacebook , faInstagram  ) 
library.add(fas  ,faUser , faUsers , faMapMarker , faCheck , faBars ,faCheckCircle ,faChevronDown , faSpinner , faTimesCircle , faMapMarkerAlt )

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinnerloadingcomponent/>} >

      <App  />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
