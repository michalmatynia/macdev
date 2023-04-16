// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKTypography'
import bgImage from 'public/img/milkbar/ver2.0/ourefforts/Mosaic_the_process_of_making_architectural_visualisations_1a41a774-2542-4b7c-a5fb-5f1e7275531b.png'

function OurEfforts() {
  return (
    <MKBox component="section">
      <MKBox
        mx={-2}
        minHeight="18.75rem"
        sx={{
          backgroundImage: ({
            palette: { gradients },
            functions: { linearGradient, rgba },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage.src})`,
          backgroundSize: 'cover',
        }}
      />
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          xs={12}
          lg={8}
          mt={12}
          mx="auto"
        >
          <MKTypography
            component="h6"
            variant="button"
            textTransform="uppercase"
            fontWeight="bold"
            opacity={0.7}
            mb={1}
          >
            Our effort
          </MKTypography>
          <MKTypography variant="h3" mb={3}>
            The powerfull design system
          </MKTypography>
          <MKTypography variant="body2">
            The way to survive in modern society is to be an ascetic. It is to
            retreat from society. There&apos;s too much society everywhere you
            go…The only solution is turn it off.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default OurEfforts
