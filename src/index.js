import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Spinnerloadingcomponent from './Components/Spinnerloading/Spinnerloading';
import Store from './Redux/StoreConfiguration';
//here  and we call all the needed icone from font awesome 6
//here we call  fauser and famarker and facheck 
// here ew can use them any time 
import { library } from '@fortawesome/fontawesome-svg-core' //allows later to just use icon name to render-them
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faUsers, faMapMarker, faCheck, faBars, faCheckCircle, faChevronDown, faSpinner, faTimesCircle, faMapMarkerAlt, faCommentAlt, faUserAlt, faFolder, faChevronCircleRight, faPhoneAlt, faClock, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedinIn, faFacebook, faInstagram, faYoutube, faXing } from '@fortawesome/free-brands-svg-icons'
import { Provider } from 'react-redux';

library.add(fab, faTwitter, faLinkedinIn, faFacebook, faInstagram, faYoutube, faXing)
library.add(fas, faUser, faUsers, faMapMarker, faCheck, faBars, faCheckCircle, faChevronDown, faSpinner, faTimesCircle, faMapMarkerAlt, faCommentAlt, faClock, faUserAlt, faFolder, faChevronCircleRight, faPhoneAlt, faEnvelopeOpen)

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Suspense fallback={<Spinnerloadingcomponent />} >

        <App />
      </Suspense>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
