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
// import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKTypography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import image from 'public/img/milkbar/ver2.0/testimonials/Mosaic_designing_buildings_using_virtual_reality_in_the_future_432310e1-64f2-4f86-974b-59b945e89c41.png'

function Testimonials() {
  return (
    <MKBox component="section" position="relative" py={6}>
      <Container sx={{ maxWidth: '100% !important' }}>
        <Grid container item xs={10} sx={{ mx: 'auto' }}>
          <MKBox
            variant="gradient"
            bgColor="dark"
            borderRadius="lg"
            width="100%"
            py={6}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                xl={4}
                sx={{ position: 'relative', px: 6 }}
              >
                <MKBox
                  component="img"
                  src={image.src}
                  alt="image"
                  borderRadius="md"
                  maxWidth="300px"
                  width="100%"
                  position="relative"
                  mt={-12}
                  height={{ xs: 'auto', md: '100%', xl: '500px' }}
                  sx={{ objectFit: 'cover' }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                xl={4}
                sx={{
                  position: 'relative',
                  px: { xs: 6, md: 2 },
                  mt: { xs: 3, md: 0 },
                  my: { xs: 0, md: 'auto' },
                  color: ({ palette: { white } }) => white.main,
                }}
              >
                <FormatQuoteIcon fontSize="large" sx={{ size: 'lg' }} />
                <MKTypography
                  variant="body2"
                  color="white"
                  fontWeight="light"
                  mb={2}
                  sx={{ fontSize: '1.125rem' }}
                >
                  Decisions: If you can&apos;t decide, the answer is no. If two
                  equally difficult paths, choose the one more painful in the
                  short term (pain avoidance is creating an illusion of
                  equality). Choose the path that leaves you more equanimous in
                  the long term.
                </MKTypography>
                <MKTypography variant="button" fontWeight="bold" color="white">
                  Michael -{' '}
                  <MKTypography variant="caption" color="white">
                    Writter
                  </MKTypography>
                </MKTypography>
              </Grid>
              <Grid item xs={1} />
              <Grid
                item
                xs={12}
                xl={2}
                sx={{
                  px: { xs: 6, xl: 0 },
                  my: { xs: 0, xl: 'auto' },
                  lineHeight: 1,
                }}
              >
                <MKTypography
                  variant="h3"
                  color="white"
                  mt={{ xs: 6, xl: 0 }}
                  mb={1}
                >
                  1,679,700 +
                </MKTypography>
                <MKTypography
                  component="p"
                  variant="button"
                  color="white"
                  opacity={0.8}
                  mb={2}
                >
                  Developers and Companies around the world using our products.
                </MKTypography>
                <MKTypography
                  component="a"
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  sx={{
                    width: 'max-content',
                    display: 'flex',
                    alignItems: 'center',

                    fontSize: '1.125rem',
                    transform: `translateX(3px)`,
                    transition:
                      'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',

                    '&:hover, &:focus ': {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  See Portfolio
                  <ArrowForwardIcon
                    sx={{
                      marginLeft: '0.3rem',
                    }}
                  />
                </MKTypography>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Testimonials
