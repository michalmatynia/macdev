/* eslint-disable react/jsx-no-duplicate-props */
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
import MKInput from 'components/ui/material-kit-pro-react-v2.0.0/MKInput'
import MKButton from 'components/ui/material-kit-pro-react-v2.0.0/MKButton'

// Images
import macbook from 'public/img/material-kit-pro-react-v2.0.0/macbook.png'

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}
          >
            <MKTypography variant="h4">
              Be the first to see the news
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Your company may not be in the software business, but eventually,
              a software company will be in your business.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <MKButton
                  variant="gradient"
                  color="info"
                  sx={{ height: '100%' }}
                >
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: 'auto' }}>
            <MKBox position="relative">
              <MKBox
                component="img"
                src={macbook.src}
                alt="macbook"
                width="100%"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Newsletter
