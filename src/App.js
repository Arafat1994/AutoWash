
import './App.scss';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy } from 'react';
const HomePage =lazy(()=>import ('./Pages/HomePage/Homepage'));
const AboutPageComponent =lazy(()=>import('./Pages/AboutPage/AboutPageComponent') )  ;
const ContactPageComponent = lazy(()=> import('./Pages/ContactPage/ContactPageComponent')) ;
const PagesPagecomponent = lazy(()=> import ('./Pages/PagesPage/PagesPageComponent') );
const PricepageComponent = lazy(()=>import('./Pages/Pricepage/PricePageComponent'));
const ServicePageComponent = lazy(()=>import ('./Pages/ServicePage/ServicePageComponent'));
const WashingPointsPageComponent =lazy(()=>import('./Pages/WashingPointPage/WashingPointPageComponent')) ;
const Page404Component = lazy(()=>import('./Pages/404Page/404PageComponent'));
const DetailPageComponent = lazy(()=>import ('./Pages/DetailPagePage/DetailPageComponent')) ;
const BlogGridComponent =lazy(()=>import('./Pages/BlogGridPage/BlogGridComponent')) ;
const TeamMemberComponent = lazy(()=>import('./Pages/TeamMemberPage/TeamMemberComponent')) ;
const SchduleBookingComponent =lazy(()=>import ('./Pages/SchduleBookingPage/SchduleBookingComponent')) ;


function App() {
  return (
    <div>

      <BrowserRouter>
        <Layout />
        <div className='MainAppcomponent' >
          <Routes>
            <Route exact path='/AutoWash' element={<HomePage />} />
            <Route path='/Contact' element={<ContactPageComponent />} />
            <Route path='/AboutUs' element={<AboutPageComponent />} />
            <Route path='/OurPrices' element={<PricepageComponent />} />
            <Route path='/Pages' element={<PagesPagecomponent />} />
            <Route path='/OurService' element={<ServicePageComponent />} />
            <Route path='/WashingPoints' element={<WashingPointsPageComponent />} />
            <Route path='/DetailPage' element={<DetailPageComponent />} />
            <Route path='/BlogGrid' element={<BlogGridComponent />} />
            <Route path="/TeamMember" element={<TeamMemberComponent />} />
            <Route path="/SchduleBooking" element={<SchduleBookingComponent />} />
            <Route path='*' element={<Page404Component />} />            
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  )
}

export default App;
