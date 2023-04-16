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
import Divider from '@mui/material/Divider'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

// Material Kit 2 PRO React examples
import DefaultReviewCard from 'components/blocks/material-kit-pro-react-v2.0.0/Cards/ReviewCards/DefaultReviewCard'

// Images
import team1 from 'public/img/material-kit-pro-react-v2.0.0/team-3.jpg'
import team2 from 'public/img/material-kit-pro-react-v2.0.0/marie.jpg'
import team3 from 'public/img/material-kit-pro-react-v2.0.0/team-2.jpg'
import appleLogo from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-apple.svg'
import facebookLogo from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-facebook.svg'
import behanceLogo from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-behance.svg'
import spotifyLogo from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-spotify.svg'
import coinbaseLogo from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-coinbase.svg'
import pinterestLogo from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-pinterest.svg'

function TestimonialsOne() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          mx="auto"
          textAlign="center"
        >
          <MKTypography variant="h2" mb={2}>
            Think about us
          </MKTypography>
          <MKTypography variant="body2" color="text" mb={2}>
            That&apos;s the main thing people are controlled by! Thoughts -
            their perception of themselves!{' '}
          </MKTypography>
        </Grid>
        <Grid container spacing={3} mt={8}>
          <Grid item xs={12} md={8} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultReviewCard
              image={team1.src}
              name="Mathew Glock"
              date="1 day ago"
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              rating={4}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultReviewCard
              color="info"
              image={team2.src}
              name="Mathew Glock"
              date="28 February"
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              rating={3}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultReviewCard
              image={team3.src}
              name="Mathew Glock"
              date="3 days ago"
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} lg={2}>
            <MKBox
              component="img"
              src={appleLogo.src}
              alt="apple"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} lg={2}>
            <MKBox
              component="img"
              src={facebookLogo.src}
              alt="facebook"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} lg={2}>
            <MKBox
              component="img"
              src={behanceLogo.src}
              alt="behance"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} lg={2}>
            <MKBox
              component="img"
              src={spotifyLogo.src}
              alt="spotify"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} lg={2}>
            <MKBox
              component="img"
              src={coinbaseLogo.src}
              alt="coinbase"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} lg={2}>
            <MKBox
              component="img"
              src={pinterestLogo.src}
              alt="pinterest"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default TestimonialsOne
