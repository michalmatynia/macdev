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

// Material Kit 2 PRO React examples
import DefaultBlogCard from 'components/blocks/material-kit-pro-react-v2.0.0/Cards/BlogCards/DefaultBlogCard'

// Images
import author1 from 'public/img/material-kit-pro-react-v2.0.0/team-2.jpg'
import author2 from 'public/img/material-kit-pro-react-v2.0.0/ivana-squares.jpg'
import author3 from 'public/img/material-kit-pro-react-v2.0.0/marie.jpg'

function BlogPostThree() {
  const post1 =
    'https://images.unsplash.com/photo-1592489637182-8c172d6d7826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2300&q=80'
  const post2 =
    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80'
  const post3 =
    'https://images.unsplash.com/photo-1444877466744-dc2f2af2b931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80'

  return (
    <MKBox component="section" py={7}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post1}
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
              image={post2}
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
              image={post3}
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

export default BlogPostThree
