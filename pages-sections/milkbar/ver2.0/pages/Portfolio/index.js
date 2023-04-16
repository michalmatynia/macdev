import { useEffect, useRef } from 'react'

// rellax
import Rellax from 'rellax'

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'

import Places from 'pages-sections/milkbar/ver2.0/pages/LandingPages/Coworking/sections/Places'

// Images
import bgImage from 'public/img/milkbar/ver2.0/parallax/ddla01korekta-nwsmall.jpg'

function Portfolio() {
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
          ></Grid>
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
        <Places />
      </Card>
    </>
  )
}

export default Portfolio
