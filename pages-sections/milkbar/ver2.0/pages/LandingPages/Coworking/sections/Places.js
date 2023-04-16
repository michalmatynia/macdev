// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'
import MKBadge from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBadge'
import MKTypography from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKTypography'

// Material Kit 2 PRO React components
import SimpleBlogCard from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Cards/BlogCards/SimpleBlogCard'
import portfolio from 'data/milkbar/ver2.0/places/portfolio.js'
import actionProps from 'data/milkbar/ver2.0/places/action'

const loopPortfolio = portfolio.map((each, index) => {
  return (
    <Grid key={index} item xs={12} md={6} lg={4}>
      <MKBox mt={3}>
        <SimpleBlogCard
          image={each.image.src}
          title={each.title}
          description={each.description}
          action={actionProps}
        />
      </MKBox>
    </Grid>
  )
})

function Places() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          alignItems="center"
          xs={12}
          lg={6}
          sx={{ textAlign: 'center', mx: 'auto' }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Co-working"
            container
            circular
            sx={{ mb: 1 }}
          />
          <MKTypography variant="h2" mb={1}>
            Explore our places in London{' '}
          </MKTypography>
          <MKTypography variant="body2" color="text">
            If you can&apos;t decide, the answer is no. If two equally difficult
            paths, choose the one more painful in the short term (pain avoidance
            is creating an illusion of equality).
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {loopPortfolio}
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Places
