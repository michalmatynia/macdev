import { useEffect, useRef } from 'react'

// rellax
import Rellax from 'rellax'

// typed-js
import Typed from 'typed.js'

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKTypography'
import FacebookIcon from '@mui/icons-material/Facebook'

// About Us page sections
import Information from 'pages-sections/milkbar/ver2.0/pages/SingleArticle/sections/Information'
import Team from 'pages-sections/milkbar/ver2.0/pages/AboutUs/sections/Team'

import OurEfforts from 'pages-sections/milkbar/ver2.0/pages/SingleArticle/sections/OurEfforts'
import Information2 from 'pages-sections/milkbar/ver2.0/pages/LandingPages/Coworking/sections/Information'
import Testimonials from 'pages-sections/milkbar/ver2.0/pages/LandingPages/Coworking/sections/Testimonials'

// HelpCenter page sections
import SocialAnalytics from 'pages-sections/custom-material-kit-pro-react-v2.0.0/pages/Support/HelpCenter/sections/SocialAnalytics'
import Faq from 'pages-sections/custom-material-kit-pro-react-v2.0.0/pages/Support/HelpCenter/sections/Faq'

// Images
import bgImage from 'public/img/milkbar/ver2.0/parallax/ddla01korekta-nwsmall.jpg'

function AboutUs() {
  const headerRef = useRef(null)
  const typedJSRef = useRef(null)

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

  // Setting up typedJS
  useEffect(() => {
    if (typedJSRef.current) {
      const typedJS = new Typed(typedJSRef.current, {
        strings: ['3d graphics', 'designers', 'architects'],
        typeSpeed: 90,
        backSpeed: 90,
        backDelay: 200,
        startDelay: 500,
        loop: true,
      })

      return () => typedJS.destroy()
    }
  }, [])

  return (
    <>
      <MKBox
        ref={headerRef}
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
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
            alignItems="center"
            flexDirection="column"
            sx={{ mx: 'auto', textAlign: 'center' }}
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
              Work with amazing <span ref={typedJSRef} />
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              We&apos;re constantly trying to express ourselves and actualize
              our dreams. If you have the opportunity to play this game
            </MKTypography>

            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.facebook.com/Milkbardesigners"
                mr={3}
              >
                <FacebookIcon />
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
        <Team />

        <Information2 />
        <Testimonials />
        <SocialAnalytics />
        <OurEfforts />
        <Faq />
      </Card>
    </>
  )
}

export default AboutUs
