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
import Divider from '@mui/material/Divider'
import Icon from '@mui/material/Icon'

// Material Dashboard 2 PRO React components
import MDBox from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDBox'
import MDTypography from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDTypography'
import MDAvatar from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDAvatar'
import MDButton from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDButton'

// Image
import team1 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-1.jpg'
import team2 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-2.jpg'
import team3 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-3.jpg'
import team4 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-4.jpg'
import team5 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-5.jpg'

function Header() {
  const avatarStyles = {
    border: ({ borders: { borderWidth }, palette: { white } }) =>
      `${borderWidth[2]} solid ${white.main}`,
    cursor: 'pointer',
    position: 'relative',
    ml: -1.5,

    '&:hover, &:focus': {
      zIndex: '10',
    },
  }

  return (
    <MDBox display="flex" alignItems="center">
      <MDBox mt={0.5} pr={1}>
        <MDBox mb={1} ml={-1.25} lineHeight={0}>
          <MDTypography variant="caption" color="secondary">
            Team members:
          </MDTypography>
        </MDBox>
        <MDBox display="flex">
          <MDAvatar src={team1.src} alt="team-1" size="sm" sx={avatarStyles} />
          <MDAvatar src={team2.src} alt="team-1" size="sm" sx={avatarStyles} />
          <MDAvatar src={team3.src} alt="team-1" size="sm" sx={avatarStyles} />
          <MDAvatar src={team4.src} alt="team-1" size="sm" sx={avatarStyles} />
          <MDAvatar src={team5.src} alt="team-1" size="sm" sx={avatarStyles} />
        </MDBox>
      </MDBox>
      <MDBox height="75%" alignSelf="flex-end">
        <Divider orientation="vertical" />
      </MDBox>
      <MDBox pl={1}>
        <MDButton variant="gradient" color="info" iconOnly>
          <Icon sx={{ fontWeight: 'bold' }}>add</Icon>
        </MDButton>
      </MDBox>
    </MDBox>
  )
}

export default Header
