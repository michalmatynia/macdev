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

import React, { ReactNode } from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Material Dashboard 2 PRO React Context Provider
import { MaterialUIControllerProvider } from 'contexts/material-dashboard-2-pro-react-v2.1.0/context'
// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(
//   <React.StrictMode>
//     <MaterialUIControllerProvider>
//       <App />
//     </MaterialUIControllerProvider>
//   </React.StrictMode>
// )

export default function HomeDash(): ReactNode {
  return (
    <>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </>
  )
}
