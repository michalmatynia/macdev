// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// react-router-dom components
// import { Link } from 'react-router-dom'
import Link from 'next/link'
// @mui material components
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

function DefaultNavbarDropdown({
  name = 'Dropdown',
  icon = 'apps',
  children = undefined,
  collapseStatus = false,
  light = false,
  href = '',
  route = '',
  collapse = false,
  ...rest
}) {
  const linkComponent = {
    component: 'a',
    href,
    target: '_blank',
    rel: 'noreferrer',
  }

  const routeComponent = {
    component: Link,
    href: route,
  }

  return (
    <>
      <MKBox
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={light ? 'white' : 'dark'}
        opacity={light ? 1 : 0.6}
        sx={{ cursor: 'pointer', userSelect: 'none' }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        <MKTypography
          variant="body2"
          lineHeight={1}
          color="inherit"
          sx={{ alignSelf: 'center', '& *': { verticalAlign: 'middle' } }}
        >
          {icon}
        </MKTypography>
        <MKTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={light ? 'white' : 'dark'}
          sx={{ fontWeight: '100%', ml: 1, mr: 0.25 }}
        >
          {name}
        </MKTypography>
        <MKTypography
          variant="body2"
          color={light ? 'white' : 'dark'}
          ml="auto"
        >
          {collapse && (
            <ExpandMoreIcon
              sx={{ fontWeight: 'normal', verticalAlign: 'middle' }}
            />
          )}
        </MKTypography>
      </MKBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  )
}

// Setting default values for the props of DefaultNavbarDropdown

// Typechecking props for the DefaultNavbarDropdown
DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
}

export default DefaultNavbarDropdown
