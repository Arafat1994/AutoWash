
import './App.scss';
import Layout from './Layout/Layout';
import AboutPageComponent from './Pages/AboutPage/AboutPageComponent';
import ContactPageComponent from './Pages/ContactPage/ContactPageComponent';
import HomePage from './Pages/HomePage/Homepage';
import PagesPagecomponent from './Pages/PagesPage/PagesPageComponent';
import PricepageComponent from './Pages/Pricepage/PricePageComponent';
import ServicePageComponent from './Pages/ServicePage/ServicePageComponent';
import WashingPointsPageComponent from './Pages/WashingPointPage/WashingPointPageComponent';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Page404Component from './Pages/404Page/404PageComponent';
import DetailPageComponent from './Pages/DetailPagePage/DetailPageComponent';
import BlogGridComponent from './Pages/BlogGridPage/BlogGridComponent';
import TeamMemberComponent from './Pages/TeamMemberPage/TeamMemberComponent';
import SchduleBookingComponent from './Pages/SchduleBookingPage/SchduleBookingComponent';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Layout />
        <Routes>
          <Route exact path='/AutoWash' element={<HomePage />} />
          <Route path='/Contact' element={<ContactPageComponent />} />
          <Route path='/About' element={<AboutPageComponent />} />
          <Route path='/Price' element={<PricepageComponent />} />
          <Route path='/Pages' element={<PagesPagecomponent/> } /> 
          <Route path='/Service' element={<ServicePageComponent />} />
          <Route path='/WashingPoints' element={<WashingPointsPageComponent />} />
          <Route path='/DetailPage' element={<DetailPageComponent />} />
          <Route path='/BlogGrid' element={<BlogGridComponent />} />
          <Route path="/TeamMember" element={<TeamMemberComponent />} />
          <Route path="/SchduleBooking" element={<SchduleBookingComponent />} />
          <Route path='*' element={<Page404Component />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
