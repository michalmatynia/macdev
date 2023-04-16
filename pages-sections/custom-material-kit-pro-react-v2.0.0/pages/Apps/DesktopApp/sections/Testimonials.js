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
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKTypography'

// Material Kit 2 PRO React components
import MiniReviewCard from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Cards/ReviewCards/MiniReviewCard'

// Images
import review1 from 'public/img/material-kit-pro-react-v2.0.0/team-3.jpg'
import review2 from 'public/img/material-kit-pro-react-v2.0.0/marie.jpg'
import review3 from 'public/img/material-kit-pro-react-v2.0.0/team-2.jpg'
import apple from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-apple.svg'
import facebook from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-facebook.svg'
import behance from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-behance.svg'
import spotify from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-spotify.svg'
import coinbase from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-coinbase.svg'
import pinterest from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-pinterest.svg'

function Testimonials() {
  return (
    <MKBox py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          justifyContent="center"
          mx="auto"
          sx={{ textAlign: 'center' }}
        >
          <MKTypography variant="h2" color="warning" textGradient>
            What random people
          </MKTypography>
          <MKTypography variant="h2" mb={2}>
            Think about us
          </MKTypography>
          <MKTypography variant="body2" color="text">
            That&apos;s the main thing people are controlled by! Thoughts- their
            perception of themselves!{' '}
          </MKTypography>
        </Grid>
        <Grid container spacing={3} mt={8}>
          <Grid item xs={12} md={8} lg={4}>
            <MiniReviewCard
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              author={{
                image: review1.src,
                name: 'Mathew Glock',
                date: 'Posted on 28 February',
              }}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <MiniReviewCard
              color="warning"
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              author={{
                image: review2.src,
                name: 'Mathew Glock',
                date: 'Posted on 28 February',
              }}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <MiniReviewCard
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              author={{
                image: review3.src,
                name: 'Mathew Glock',
                date: 'Posted on 28 February',
              }}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={apple.src}
              alt="apple"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={facebook.src}
              alt="facebook"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={behance.src}
              alt="behance"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={spotify.src}
              alt="spotify"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={coinbase.src}
              alt="coinbase"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={pinterest.src}
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

export default Testimonials
