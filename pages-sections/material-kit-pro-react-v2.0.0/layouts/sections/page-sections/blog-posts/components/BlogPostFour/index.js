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

// react-router-dom components
// import { Link } from 'react-router-dom'
import Link from 'next/link'
// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

// Material Kit 2 PRO React examples
import SimpleBackgroundCard from 'components/blocks/material-kit-pro-react-v2.0.0/Cards/BackgroundCards/SimpleBackgroundCard'

// Images
import post1 from 'public/img/material-kit-pro-react-v2.0.0/examples/blog1.jpg'
import post2 from 'public/img/material-kit-pro-react-v2.0.0/examples/blog2.jpg'
import post3 from 'public/img/material-kit-pro-react-v2.0.0/examples/blog3.jpg'

function BlogPostFour() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={6} flexDirection="column">
          <MKTypography variant="h3" mt={3} mb={1}>
            Build something great
          </MKTypography>
          <MKTypography variant="body2" color="text" pr={{ xs: 0, lg: 6 }}>
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game of life you
            need to appreciate every moment.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12} lg={4}>
            <Link href="/sections/page-sections/blog-posts">
              <SimpleBackgroundCard
                image={post1.src}
                title="Search and Discovery"
                description="Website visitors today demand a frictionless user expericence — especially when
                    using search. Because of the hight standards we tend to offer."
              />
            </Link>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Link href="/sections/page-sections/blog-posts">
              <SimpleBackgroundCard
                image={post2.src}
                title="Last visits in US"
                description="Wealth creation is an evolutionarily recent positive-sum game. Status is an old
                    zero-sum game. Those attacking wealth creation are often just seeking status."
              />
            </Link>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Link href="/sections/page-sections/blog-posts">
              <SimpleBackgroundCard
                image={post3.src}
                title="Grow in a beautiful area"
                description="Free people make free choices. Free choices mean you get unequal outcomes. You
                    can have freedom, or you can have equal outcomes. You can't have both."
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default BlogPostFour
