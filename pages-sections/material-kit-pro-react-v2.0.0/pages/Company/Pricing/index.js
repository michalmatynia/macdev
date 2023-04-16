/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'

// Material Kit 2 PRO React examples
import DefaultNavbar from 'components/blocks/material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'
import DefaultFooter from 'components/blocks/material-kit-pro-react-v2.0.0/Footers/DefaultFooter'

// Pricing page sections
import Header from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Company/Pricing/sections/Header'
import AboutUs from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Company/Pricing/sections/AboutUs'
import PricingSection from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Company/Pricing/sections/Pricing'
import LifetimeMembership from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Company/Pricing/sections/LifetimeMembership'
import Testimonials from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Company/Pricing/sections/Testimonials'
import Trust from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Company/Pricing/sections/Trust'
import Faq from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Company/Pricing/sections/Faq'

// Routes
import routes from 'data/material-kit-pro-react-v2.0.0/rootsystem/routes'
import footerRoutes from 'data/material-kit-pro-react-v2.0.0/rootsystem/footer.routes'

function Pricing() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-pro-react',
          label: 'buy now',
        }}
        transparent
        light
      />
      <Header />
      <MKBox p={3}>
        <AboutUs />
        <PricingSection />
        <LifetimeMembership />
        <Testimonials />
        <Trust />
        <Faq />
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default Pricing
