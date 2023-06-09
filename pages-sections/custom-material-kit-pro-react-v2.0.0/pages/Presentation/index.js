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
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'
import MKBadge from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBadge'
import MKTypography from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKTypography'
import MKSocialButton from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKSocialButton'

// Material Kit 2 PRO React examples
import DefaultNavbar from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'
import DefaultFooter from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Footers/DefaultFooter'
import FilledInfoCard from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Cards/InfoCards/FilledInfoCard'

// Presentation page sections
import Counters from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Presentation/sections/Counters'
import Information from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Presentation/sections/Information'
import DesignBlocks from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Presentation/sections/DesignBlocks'
import AuthPages from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Presentation/sections/AuthPages'
import Pages from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Presentation/sections/Pages'
import Testimonials from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Presentation/sections/Testimonials'
import Pricing from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Presentation/sections/Pricing'

// Presentation page components
import BuiltByDevelopers from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Presentation/components/BuiltByDevelopers'

// Routes
import routes from 'data/material-kit-pro-react-v2.0.0/rootsystem/routes'
import footerRoutes from 'data/material-kit-pro-react-v2.0.0/rootsystem/footer.routes'

// Images
import bgImage from 'public/img/material-kit-pro-react-v2.0.0/bg-presentation.jpg'

function Presentation() {
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
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl'],
                },
              })}
            >
              Material Kit 2 React{' '}
              <MKBadge
                badgeContent="pro"
                size="lg"
                variant="contained"
                color="white"
                container
                sx={{ mt: -4 }}
              />
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={6}
              mt={1}
            >
              Start the Development with a ReactJS & MUI Design System inspired
              by Material Design.
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
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        <AuthPages />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: 'external',
                  route:
                    'https://www.creative-tim.com/learning-lab/react/overview/material-kit/',
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: 'external',
                  route:
                    'https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/',
                  label: 'Read more',
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: 'external',
                  route:
                    'https://www.creative-tim.com/learning-lab/react/alerts/material-kit/',
                  label: 'Read more',
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Pricing />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                lg={5}
                ml="auto"
                sx={{ textAlign: { xs: 'center', lg: 'left' } }}
              >
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: 'auto' }}
                mr={{ xs: 0, lg: 'auto' }}
                sx={{ textAlign: { xs: 'center', lg: 'right' } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-design-system-pro"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-design-system-pro"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-design-system-pro"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default Presentation
