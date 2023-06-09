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

import { useEffect, useRef } from 'react'

// rellax
import Rellax from 'rellax'

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

// About Us page sections
import Information from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/Information'
import Steps from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/Steps'
import OurEfforts from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/OurEfforts'
import Features from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/Features'
import Posts from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/Posts'
import Support from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/Support'

// Routes
import routes from 'data/material-kit-pro-react-v2.0.0/rootsystem/routes'
import footerRoutes from 'data/material-kit-pro-react-v2.0.0/rootsystem/footer.routes'

// Images
import bgImage from 'public/img/material-kit-pro-react-v2.0.0/bg5.jpg'

function SingleArticle() {
  const headerRef = useRef(null)

  // Setting up rellax
  useEffect(() => {
    if (headerRef.current) {
      const parallax = new Rellax(headerRef.current, {
        speed: -6,
      })

      return () => {
        parallax.destroy()
      }
    }
  }, [])

  return (
    <>
      <MKBox bgColor="white" py={0.25}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: 'external',
            route:
              'https://www.creative-tim.com/product/material-kit-pro-react',
            label: 'buy now',
            color: 'success',
          }}
          transparent
          relative
        />
      </MKBox>
      <MKBox
        ref={headerRef}
        minHeight="85vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
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
            lg={7}
            justifyContent="center"
            flexDirection="column"
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
              Material Design - News
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mb={2}
              mr={{ xs: 0, sm: 6 }}
              pr={{ xs: 0, sm: 6 }}
            >
              The time is now for it be okay to be great. People in this world
              shun people for being nice.
            </MKTypography>
            <MKTypography variant="h5" color="white" mt={2} mb={1}>
              Connect with us on
            </MKTypography>
            <MKBox display="flex" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
              >
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Steps />
        <OurEfforts />
        <Features />
        <Posts />
        <Support />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default SingleArticle
