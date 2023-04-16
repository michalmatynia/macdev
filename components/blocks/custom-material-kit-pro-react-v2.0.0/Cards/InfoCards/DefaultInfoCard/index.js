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

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// @mui material components
import Icon from '@mui/material/Icon'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

function DefaultInfoCard({
  color = 'info',
  icon = 'info',
  title = 'Title',
  description = 'Description',
  direction = 'left',
  small = false,
}) {
  return (
    <MKBox
      lineHeight={1}
      fontSize={small ? '0.875rem' : '1.5rem'}
      p={direction === 'center' ? 2 : 0}
      textAlign={direction}
    >
      {typeof icon === 'string' ? (
        <MKTypography
          display="block"
          variant={direction === 'center' ? 'h2' : 'h3'}
          color={color}
          textGradient
        >
          {' '}
          <Icon>{icon}</Icon>{' '}
        </MKTypography>
      ) : (
        icon
      )}
      <MKTypography
        display="block"
        variant="5"
        fontWeight="bold"
        mt={direction === 'center' ? 1 : 2}
        mb={1.5}
      >
        {title}
      </MKTypography>
      <MKTypography
        display="block"
        variant={small ? 'button' : 'body2'}
        color="text"
        pr={direction === 'left' ? 6 : 0}
        pl={direction === 'right' ? 6 : 0}
      >
        {description}
      </MKTypography>
    </MKBox>
  )
}

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right', 'center']),
  small: PropTypes.bool,
}

export default DefaultInfoCard
