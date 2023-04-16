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
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
// import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from 'components/blocks/material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'
import DefaultFooter from 'components/blocks/material-kit-pro-react-v2.0.0/Footers/DefaultFooter'

// DesktopApp page sections
import Banner from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Apps/DesktopApp/sections/Banner'
import Information from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Apps/DesktopApp/sections/Information'
import Features from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Apps/DesktopApp/sections/Features'
import Testimonials from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Apps/DesktopApp/sections/Testimonials'
import Pricing from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Apps/DesktopApp/sections/Pricing'

// Routes
import routes from 'data/material-kit-pro-react-v2.0.0/rootsystem/routes'
import footerRoutes from 'data/material-kit-pro-react-v2.0.0/rootsystem/footer.routes'

function DesktopApp() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-pro-react',
          label: 'buy now',
          color: 'warning',
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="50vh"
          width="100%"
          sx={{
            backgroundImage: ({
              functions: { linearGradient },
              palette: { gradients },
            }) => linearGradient(gradients.dark.main, gradients.dark.state),
          }}
        />
        <Banner />
        <Information />
        <Features />
        <Testimonials />
        <Pricing />
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  )
}

export default DesktopApp
