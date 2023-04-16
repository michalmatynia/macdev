import { forwardRef } from 'react'

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// Custom styles for MKTypography
import MKTypographyRoot from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography/MKTypographyRoot'

// eslint-disable-next-line react/display-name
const MKTypography = forwardRef(
  (
    {
      color = 'dark',
      fontWeight = false,
      textTransform = 'none',
      verticalAlign = 'unset',
      textGradient = false,
      opacity = 1,
      children,
      ...rest
    },
    ref
  ) => (
    <MKTypographyRoot
      {...rest}
      ref={ref}
      ownerState={{
        color,
        textTransform,
        verticalAlign,
        fontWeight,
        opacity,
        textGradient,
      }}
    >
      {children}
    </MKTypographyRoot>
  )
)

// Typechecking props for the MKTypography
MKTypography.propTypes = {
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
    'text',
    'white',
  ]),
  fontWeight: PropTypes.oneOf([false, 'light', 'regular', 'medium', 'bold']),
  textTransform: PropTypes.oneOf([
    'none',
    'capitalize',
    'uppercase',
    'lowercase',
  ]),
  verticalAlign: PropTypes.oneOf([
    'unset',
    'baseline',
    'sub',
    'super',
    'text-top',
    'text-bottom',
    'middle',
    'top',
    'bottom',
  ]),
  textGradient: PropTypes.bool,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
}

export default MKTypography
