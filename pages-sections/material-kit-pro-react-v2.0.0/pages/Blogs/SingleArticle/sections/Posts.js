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

// Material Kit 2 PRO React examples
import DefaultBlogCard from 'components/blocks/material-kit-pro-react-v2.0.0/Cards/BlogCards/DefaultBlogCard'

// Images
import post1 from 'public/img/material-kit-pro-react-v2.0.0/examples/color2.jpg'
import post2 from 'public/img/material-kit-pro-react-v2.0.0/examples/color3.jpg'
import post3 from 'public/img/material-kit-pro-react-v2.0.0/examples/color1.jpg'
import author1 from 'public/img/material-kit-pro-react-v2.0.0/team-2.jpg'
import author2 from 'public/img/material-kit-pro-react-v2.0.0/ivana-squares.jpg'
import author3 from 'public/img/material-kit-pro-react-v2.0.0/marie.jpg'

function Posts() {
  return (
    <MKBox component="section" py={7}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={9} textAlign="center" mx="auto">
            <MKTypography variant="h3" mb={0.5}>
              See other articles
            </MKTypography>
            <MKTypography
              variant="body2"
              color="text"
              px={{ xs: 0, md: 6 }}
              mb={4}
            >
              Create a unique and beautiful blog posts. You can also connect
              your blog directly to Google Analytics to have a more detailed
              look.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post1.src}
              category={{ color: 'primary', label: 'house' }}
              title="Shared Coworking"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author1.src,
                name: 'Mathew Glock',
                date: 'Posted on 28 February',
              }}
              action={{
                type: 'internal',
                route: '/pages/blogs/single-article',
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post2.src}
              category={{ color: 'info', label: 'house' }}
              title="Really Housekeeping"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author2.src,
                name: 'Mathew Glock',
                date: 'Posted on 28 February',
              }}
              action={{
                type: 'internal',
                route: '/pages/blogs/single-article',
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post3.src}
              category={{ color: 'warning', label: 'house' }}
              title="Shared Coworking"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author3.src,
                name: 'Mathew Glock',
                date: 'Posted on 28 February',
              }}
              action={{
                type: 'internal',
                route: '/pages/blogs/single-article',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Posts
