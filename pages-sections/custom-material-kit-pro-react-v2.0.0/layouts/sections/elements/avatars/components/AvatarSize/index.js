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
import Stack from '@mui/material/Stack'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKAvatar from 'components/ui/material-kit-pro-react-v2.0.0/MKAvatar'

// Images
import team4 from 'public/img/material-kit-pro-react-v2.0.0/team-4.jpg'

function AvatarSize() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKAvatar src={team4.src} alt="xs" size="xs" />
            <MKAvatar src={team4.src} alt="sm" size="sm" />
            <MKAvatar src={team4.src} alt="md" size="md" />
            <MKAvatar src={team4.src} alt="lg" size="lg" />
            <MKAvatar src={team4.src} alt="xl" size="xl" />
            <MKAvatar src={team4.src} alt="xxl" size="xxl" />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default AvatarSize
