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
import Grid from '@mui/material/Grid'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'

// Material Kit 2 PRO React examples
import DefaultBlogCard from 'components/blocks/material-kit-pro-react-v2.0.0/Cards/BlogCards/DefaultBlogCard'

// Images
import image from 'public/img/material-kit-pro-react-v2.0.0/annie-spratt.jpg'
import author from 'public/img/material-kit-pro-react-v2.0.0/marie.jpg'

function CardImageInside() {
  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid
        container
        item
        xs={12}
        lg={6}
        sx={{ mx: 'auto', px: { xs: 0, lg: 6 } }}
      >
        <DefaultBlogCard
          image={image.src}
          category={{ color: 'warning', label: 'hub' }}
          title="Shared Coworking"
          description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
          author={{
            image: author.src,
            name: 'Mathew Glock',
            date: 'Posted on 28 February',
          }}
          action={{
            type: 'internal',
            route: '/sections/page-sections/general-cards',
          }}
          raised={false}
        />
      </Grid>
    </MKBox>
  )
}

export default CardImageInside
