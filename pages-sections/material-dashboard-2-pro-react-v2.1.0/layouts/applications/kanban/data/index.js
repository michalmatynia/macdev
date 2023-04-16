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

// uuid is a library for generating unique id
import { v4 as uuidv4 } from 'uuid'

// Kanban application components
import Card from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/applications/kanban/components/Card'

// Images
import officeDark from 'public/img/material-dashboard-2-pro-react-v2.1.0/office-dark.jpg'
import meeting from 'public/img/material-dashboard-2-pro-react-v2.1.0/meeting.jpg'
import homeDecore from 'public/img/material-dashboard-2-pro-react-v2.1.0/home-decor-1.jpg'
import team1 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-1.jpg'
import team2 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-2.jpg'
import team3 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-3.jpg'
import team4 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-4.jpg'
import team5 from 'public/img/material-dashboard-2-pro-react-v2.1.0/team-5.jpg'

const boards = {
  columns: [
    {
      id: uuidv4(),
      title: 'Backlog',
      cards: [
        {
          id: uuidv4(),
          template: 'Change me to change title',
        },
        {
          id: uuidv4(),
          template: "Drag me to 'In progress' section",
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={officeDark.src}
              badge={{ color: 'dark', label: 'pending' }}
              content="Website Design: New cards for blog section and profile details"
              attachedFiles={3}
              members={[team1.src, team2.src, team3.src]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'In progress',
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: 'error', label: 'errors' }}
              content="Fix firefox errors"
              attachedFiles={9}
              members={[team2, team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: 'info', label: 'updates' }}
              content="Argon Dashboard PRO - React"
              attachedFiles={3}
              members={[team5.src, team4.src]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={meeting.src}
              badge={{ color: 'info', label: 'updates' }}
              content="ReactJS v17 Updates"
              attachedFiles={3}
              members={[team1.src, team2.src, team3.src]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'In review',
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: 'warning', label: 'in testing' }}
              content="Responsive Changes"
              attachedFiles={11}
              members={[team3.src, team2.src]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: 'success', label: 'in review' }}
              content="Change images dimension"
              progress={80}
              members={[team3.src]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: 'info', label: 'in review' }}
              content="Update links"
              progress={60}
              attachedFiles={6}
              members={[team5.src, team1.src]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Done',
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              image={homeDecore.src}
              badge={{ color: 'success', label: 'done' }}
              content="Redesign for the home page"
              attachedFiles={8}
              members={[team5.src, team1.src, team4.src]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: 'success', label: 'done' }}
              content="Schedule winter campaign"
              attachedFiles={2}
              members={[team1.src, team4.src]}
            />
          ),
        },
      ],
    },
  ],
}

export default boards
