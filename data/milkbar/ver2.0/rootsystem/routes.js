import DashboardIcon from '@mui/icons-material/Dashboard'
import EmailIcon from '@mui/icons-material/Email'
import CollectionsIcon from '@mui/icons-material/Collections'
import Face5Icon from '@mui/icons-material/Face5'

const routes = [
  {
    name: 'About Us',
    icon: <DashboardIcon />,
    route: '/front',
  },
  {
    name: 'Portfolio',
    icon: <CollectionsIcon />,
    route: '/front/portfolio',
  },

  {
    name: 'Contact',
    icon: <EmailIcon />,
    route: '/front/contact',
  },
  {
    name: 'Profile',
    icon: <Face5Icon />,
    route: '/front/login',
  },
]

export default routes
