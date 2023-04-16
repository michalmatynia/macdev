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
import Stack from '@mui/material/Stack'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'
import MKButton from 'components/ui/material-kit-pro-react-v2.0.0/MKButton'

// Material Kit 2 PRO React examples
import DefaultNavbar from 'components/blocks/material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'
import DefaultFooter from 'components/blocks/material-kit-pro-react-v2.0.0/Footers/DefaultFooter'

// Coworking page sections
import Information from 'pages-sections/material-kit-pro-react-v2.0.0/pages/LandingPages/Coworking/sections/Information'
import Testimonials from 'pages-sections/material-kit-pro-react-v2.0.0/pages/LandingPages/Coworking/sections/Testimonials'
import AboutUs from 'pages-sections/material-kit-pro-react-v2.0.0/pages/LandingPages/Coworking/sections/AboutUs'
import Places from 'pages-sections/material-kit-pro-react-v2.0.0/pages/LandingPages/Coworking/sections/Places'

// Routes
import routes from 'data/material-kit-pro-react-v2.0.0/rootsystem/routes'
import footerRoutes from 'data/material-kit-pro-react-v2.0.0/rootsystem/footer.routes'

// Images
import bgImage from 'public/img/material-kit-pro-react-v2.0.0/bg-coworking.jpeg'

function Coworking() {
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
        sticky
      />
      <MKBox
        minHeight="75vh"
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
            md={7}
            justifyContent={{ xs: 'center', md: 'start' }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl'],
                },
              })}
            >
              Your Perfect Place for Work
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              mt={1}
              pr={{ md: 12, lg: 24, xl: 32 }}
              opacity={0.8}
            >
              The time is now for it be okay to be great. People in this world
              shun people for being nice.
            </MKTypography>
            <Stack direction="row" spacing={1} mt={6} mb={3}>
              <MKButton variant="gradient" color="info">
                get started
              </MKButton>
              <MKButton variant="text" color="white">
                read more
              </MKButton>
            </Stack>
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
        }}
      >
        <Information />
        <Testimonials />
        <AboutUs />
        <Places />
        {/*  <Container>
          <MKBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="xl"
            my={24}
            p={6}
            sx={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)',
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8} lg={5}>
                <MKTypography variant="h5" color="white" fontWeight="bold">
                  For being a bright color. For standing out. But the time is
                  now to be okay to be the greatest you.
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={6} sx={{ ml: 'auto' }}>
                <MKBox width="12rem" ml="auto">
                  <MKButton
                    variant="gradient"
                    color="warning"
                    fullWidth
                    sx={{ boxShadow: 'none' }}
                  >
                    start now
                  </MKButton>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Container> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default Coworking
