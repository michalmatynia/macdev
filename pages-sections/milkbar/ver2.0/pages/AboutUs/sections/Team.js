// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKTypography'

// Material Kit 2 PRO React examples
import HorizontalTeamCard from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Cards/TeamCards/HorizontalTeamCard'

// Images
import team1 from 'public/img/milkbar/ver2.0/team/Mosaic_CV_photo_businesswoman_94918aff-5c48-4ad6-b948-8604ae09b8c5.png'
import team4 from 'public/img/milkbar/ver2.0/team/Mosaic_portrait_photo_javascript_developer_f06538e7-6727-43d2-94fd-3e85f724c56c.png'

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I
              wasn&apos;t able to get good at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1.src}
                name="Emma Roberts"
                position={{ color: 'info', label: 'UI Designer' }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4.src}
                name="Marquez Garcia"
                position={{ color: 'info', label: 'JS Developer' }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Team
