// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types'

// react-countup component
import CountUp from 'react-countup'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKTypography'

function DefaultCounterCard({
  color = 'info',
  count,
  title = '',
  description = '',
  ...rest
}) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant="h1" color={color} textGradient>
        <CountUp end={count} duration={1} {...rest} />
      </MKTypography>
      {title && (
        <MKTypography variant="h5" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
  )
}

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
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
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default DefaultCounterCard
