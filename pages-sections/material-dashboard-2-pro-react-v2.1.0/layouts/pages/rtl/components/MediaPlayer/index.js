/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from '@mui/material/Card'
import Icon from '@mui/material/Icon'

// Material Dashboard 2 PRO React components
import MDBox from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDBox'
import MDTypography from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDTypography'
import MDButton from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDButton'

// Images
import bgImage from 'public/img/material-dashboard-2-pro-react-v2.1.0//bg-player.jpeg'

function MediaPlayer() {
  const mediaPlayerButtonStyles = ({ functions: { pxToRem } }) => ({
    width: pxToRem(46),
    height: pxToRem(46),
    minWidth: pxToRem(46),
    minHeight: pxToRem(46),
    mr: 1,
  })

  return (
    <Card
      sx={({
        functions: { linearGradient, rgba },
        palette: { gradients },
      }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients.dark.main, 0.85),
          rgba(gradients.dark.state, 0.85)
        )}, url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      })}
    >
      <MDBox p={3} position="relative" lineHeight={0}>
        <MDTypography variant="h5" color="white" fontWeight="medium">
          نوع من البلوز
        </MDTypography>
        <MDTypography variant="button" color="white">
          ديفتونز
        </MDTypography>
        <MDBox display="flex" mt={3} pt={1}>
          <MDBox display="flex" alignItems="center" justifyContent="center">
            <MDButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_previous</Icon>
            </MDButton>
            <MDButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>play_arrow</Icon>
            </MDButton>
            <MDButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_next</Icon>
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  )
}

export default MediaPlayer
