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
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

// Material Kit 2 PRO React examples
import DefaultNavbar from 'components/blocks/material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'
import DefaultFooter from 'components/blocks/material-kit-pro-react-v2.0.0/Footers/DefaultFooter'

// Rental page sections
import Search from 'pages-sections/material-kit-pro-react-v2.0.0/pages/LandingPages/Rental/sections/Search'
import Places from 'pages-sections/material-kit-pro-react-v2.0.0/pages/LandingPages/Rental/sections/Places'
import Testimonials from 'pages-sections/material-kit-pro-react-v2.0.0/pages/LandingPages/Rental/sections/Testimonials'
import Faq from 'pages-sections/material-kit-pro-react-v2.0.0/pages/LandingPages/Rental/sections/Faq'
import Contact from 'pages-sections/material-kit-pro-react-v2.0.0/pages/LandingPages/Rental/sections/Contact'

// Routes
import routes from 'data/material-kit-pro-react-v2.0.0/rootsystem/routes'
import footerRoutes from 'data/material-kit-pro-react-v2.0.0/rootsystem/footer.routes'

// Images
import bgImage from 'public/img/material-kit-pro-react-v2.0.0/bg-rental.jpeg'

function Rental() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-pro-react',
          label: 'buy now',
          color: 'info',
        }}
        transparent
        light
      />
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            sx={{ mx: 'auto', textAlign: 'center' }}
          >
            <MKTypography
              variant="h2"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl'],
                },
              })}
            >
              Book your next trip
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={1}>
              The time is now for it be okay to be great. People in this world
              shun people for being nice.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: 'hidden',
        }}
      >
        <Search />
        <Places />
        <Testimonials />
        <Faq />
        <Contact />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default Rental
