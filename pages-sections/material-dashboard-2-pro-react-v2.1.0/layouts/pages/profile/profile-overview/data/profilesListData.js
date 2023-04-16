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

// Images
import kal from 'public/img/material-dashboard-2-pro-react-v2.1.0/kal-visuals-square.jpg'
import marie from 'public/img/material-dashboard-2-pro-react-v2.1.0/marie.jpg'
import ivana from 'public/img/material-dashboard-2-pro-react-v2.1.0/ivana-square.jpg'
import team3 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-3.jpg'
import team4 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-4.jpg'

const profilesListData = [
  {
    image: kal.src,
    name: 'Sophie B.',
    description: 'Hi! I need more information..',
    action: {
      type: 'internal',
      route: '/pages/profile/profile-overview',
      color: 'info',
      label: 'reply',
    },
  },
  {
    image: marie.src,
    name: 'Anne Marie',
    description: 'Awesome work, can you..',
    action: {
      type: 'internal',
      route: '/pages/profile/profile-overview',
      color: 'info',
      label: 'reply',
    },
  },
  {
    image: ivana.src,
    name: 'Ivanna',
    description: 'About files I can..',
    action: {
      type: 'internal',
      route: '/pages/profile/profile-overview',
      color: 'info',
      label: 'reply',
    },
  },
  {
    image: team4.src,
    name: 'Peterson',
    description: 'Have a great afternoon..',
    action: {
      type: 'internal',
      route: '/pages/profile/profile-overview',
      color: 'info',
      label: 'reply',
    },
  },
  {
    image: team3.src,
    name: 'Nick Daniel',
    description: 'Hi! I need more information..',
    action: {
      type: 'internal',
      route: '/pages/profile/profile-overview',
      color: 'info',
      label: 'reply',
    },
  },
]

export default profilesListData
