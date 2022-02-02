import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../components/partials'


import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'

// import {VueWrapper} from '../pages/dashboard/VueWrapper'
// import {ReactWrapper} from '../pages/dashboard/ReactWrapper'
// const test = import('mfe1/MfefeatureModule').then((m) => {
//   return m.MfefeatureModule;
// })
// import GatsbyApp from 'gatsbyapp/GatsbyApp'

//uncomment for testing
// import {NextJSWrapper} from '../pages/dashboard/NextJSWrapper'
// const VueWrapperLazy = lazy(() => import('../microapps/Sample'))
// const AnotherReactWrapperLazy = lazy(() => import('../microapps/AnotherReact'))

export function PrivateRoutes() {
  // console.log(GatsbyApp)
  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        {/* <Route path='/vue' component={VueWrapperLazy} />
        <Route path='/react/home' component={AnotherReactWrapperLazy} />
        <Route path='/react/pricing' component={AnotherReactWrapperLazy} />
        <Route path='/nextjs' component={NextJSWrapper}/> */}
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
