/**
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
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'
import MKAvatar from 'components/ui/material-kit-pro-react-v2.0.0/MKAvatar'

// Images
import team1 from 'public/img/material-kit-pro-react-v2.0.0/team-1.jpg'
import team2 from 'public/img/material-kit-pro-react-v2.0.0/team-2.jpg'
import team3 from 'public/img/material-kit-pro-react-v2.0.0/team-3.jpg'
import team4 from 'public/img/material-kit-pro-react-v2.0.0/team-4.jpg'

function Messages() {
  const messagesAvatarStyles = {
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
    <Card>
      <MKBox
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={3}
      >
        <MKTypography variant="body2" color="text">
          Messages
        </MKTypography>
        <MKBox display="flex">
          <Tooltip title="2 New Messages" placement="top">
            <MKAvatar
              src={team1.src}
              alt="team-1"
              size="sm"
              sx={messagesAvatarStyles}
            />
          </Tooltip>
          <Tooltip title="1 New Messages" placement="top">
            <MKAvatar
              src={team2.src}
              alt="team-2"
              size="sm"
              sx={messagesAvatarStyles}
            />
          </Tooltip>
          <Tooltip title="13 New Messages" placement="top">
            <MKAvatar
              src={team3.src}
              alt="team-3"
              size="sm"
              sx={messagesAvatarStyles}
            />
          </Tooltip>
          <Tooltip title="7 New Messages" placement="top">
            <MKAvatar
              src={team4.src}
              alt="team-4"
              size="sm"
              sx={messagesAvatarStyles}
            />
          </Tooltip>
        </MKBox>
      </MKBox>
    </Card>
  )
}

export default Messages
