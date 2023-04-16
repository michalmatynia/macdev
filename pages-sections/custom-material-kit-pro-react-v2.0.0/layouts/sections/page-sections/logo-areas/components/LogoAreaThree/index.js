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

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

// Images
import coinbase from 'public/img/material-kit-pro-react-v2.0.0/logos/medium-logos/logo-coinbase.svg'
import nasa from 'public/img/material-kit-pro-react-v2.0.0/logos/medium-logos/logo-nasa.svg'
import netflix from 'public/img/material-kit-pro-react-v2.0.0/logos/medium-logos/logo-netflix.svg'
import pinterest from 'public/img/material-kit-pro-react-v2.0.0/logos/medium-logos/logo-pinterest.svg'
import spotify from 'public/img/material-kit-pro-react-v2.0.0/logos/medium-logos/logo-spotify.svg'
import vodafone from 'public/img/material-kit-pro-react-v2.0.0/logos/medium-logos/logo-vodafone.svg'

function LogoAreaThree() {
  return (
    <MKBox py={6}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={8}
          sx={{ mx: 'auto', textAlign: 'center' }}
        >
          <MKTypography variant="h3" mb={1}>
            More than 50+ brands trust Material
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={coinbase.src}
              alt="coinbase"
              width="100%"
              opacity={0.9}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={nasa.src}
              alt="nasa"
              width="100%"
              opacity={0.9}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={netflix.src}
              alt="netflix"
              width="100%"
              opacity={0.9}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={pinterest.src}
              alt="pinterest"
              width="100%"
              opacity={0.9}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={spotify.src}
              alt="spotify"
              width="100%"
              opacity={0.9}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={vodafone.src}
              alt="vodafone"
              width="100%"
              opacity={0.9}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default LogoAreaThree
