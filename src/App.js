
import './App.scss';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import React, { lazy } from 'react';
import ProtectLoginRoute from './Components/ProtectLoginRoute/ProtectLoginRoute';
import UseProtectLoginAuthHook from './Hooks/UseProtectLoginAuthHook';
const AccountInfoComponent = lazy(() => import('./Components/AccountInfoComponent/AccountInfoComponent'));
const OurArticleDetailsComponent = lazy(() => import('./Components/OurArticleDetailsComponent/OurArticleDetailsComponent'));
const Footercomponent = lazy(() => import('./Components/FooterComponent/Footercomponent'));
const FooterEndComponent = lazy(() => import('./Components/FooterEndComponent/FooterEndComponent'));
const WhatwedoComponentdetails = lazy(() => import('./Components/WhatwedoComponentdetails/WhatwedoComponentdetails'));
const LoginRegisterPageComponent = lazy(() => import('./Pages/loginRegiestPage/LoginRegisterPage'));
const HomePage = lazy(() => import('./Pages/HomePage/Homepage'));
const AboutPageComponent = lazy(() => import('./Pages/AboutPage/AboutPageComponent'));
const ContactPageComponent = lazy(() => import('./Pages/ContactPage/ContactPageComponent'));
const PagesPagecomponent = lazy(() => import('./Pages/PagesPage/PagesPageComponent'));
const PricepageComponent = lazy(() => import('./Pages/Pricepage/PricePageComponent'));
const ServicePageComponent = lazy(() => import('./Pages/ServicePage/ServicePageComponent'));
const WashingPointsPageComponent = lazy(() => import('./Pages/WashingPointPage/WashingPointPageComponent'));
const Page404Component = lazy(() => import('./Pages/404Page/404PageComponent'));
const DetailPageComponent = lazy(() => import('./Pages/DetailPagePage/DetailPageComponent'));
const BlogGridComponent = lazy(() => import('./Pages/BlogGridPage/BlogGridComponent'));
const TeamMemberComponent = lazy(() => import('./Pages/TeamMemberPage/TeamMemberComponent'));
const SchduleBookingComponent = lazy(() => import('./Pages/SchduleBookingPage/SchduleBookingComponent'));


function App() {

  const {IsAuth}  = UseProtectLoginAuthHook();


  return (
    <div >

      <BrowserRouter  >
        <Layout />
        <div className='MainAppcomponent' >
          <Routes>
            <Route exact path='/AutoWash' element={<HomePage />} />
            <Route path="/CarWashReq" element={<WashingPointsPageComponent />} />
            <Route path='/Contact' element={<ContactPageComponent />} />
            <Route path='/AboutUs' element={<AboutPageComponent />} />
            <Route path='/OurPrices' element={<PricepageComponent />} />
            <Route path='/Pages' element={<PagesPagecomponent />} />
            <Route path='/OurService' element={<ServicePageComponent />} />
            <Route path='/Service/id=:id&service=:Servicename' element={<WhatwedoComponentdetails />} />
            <Route path='/WashingPoints' element={<WashingPointsPageComponent />} />
            <Route path='/DetailPage' element={<DetailPageComponent />} />
            <Route path='/BlogGrid' element={<BlogGridComponent />} />
            <Route path='/BlogGrid/Blog_id=:id' element={<OurArticleDetailsComponent />} />
            <Route path="/TeamMember" element={<TeamMemberComponent />} />
            <Route path="/SchduleBooking" element={<SchduleBookingComponent />} />
            <Route path='/AccountInfo' element={<AccountInfoComponent />} />
            <Route path="/login/*" element={<ProtectLoginRoute IsAuth={IsAuth()} />} >
              <Route path="/login/*" element={<LoginRegisterPageComponent />} />
            </Route>
            <Route path='*' element={<Page404Component />} />
          </Routes>
        </div>
        <Footercomponent />
        <FooterEndComponent />
      </BrowserRouter>
    </div>

  )
}

export default App;
