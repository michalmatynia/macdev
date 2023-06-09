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

// Sections components
import BaseLayout from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/BaseLayout'
import View from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/View'

// Avatars page components
import AvatarGroup from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/avatars/components/AvatarGroup'
import AvatarSize from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/avatars/components/AvatarSize'

// Avatars page components code
import avatarGroupCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/avatars/components/AvatarGroup/code'
import avatarSizeCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/avatars/components/AvatarSize/code'

function Avatars() {
  return (
    <BaseLayout
      title="Avatars"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/avatars' },
        { label: 'Avatars' },
      ]}
    >
      <View title="Avatar Group" code={avatarGroupCode}>
        <AvatarGroup />
      </View>
      <View title="Avatar Size" code={avatarSizeCode}>
        <AvatarSize />
      </View>
    </BaseLayout>
  )
}

export default Avatars
