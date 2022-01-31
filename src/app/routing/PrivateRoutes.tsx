import React, {Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../components/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {VueWrapper} from '../pages/dashboard/VueWrapper'
export function PrivateRoutes() {

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/vue' component={VueWrapper} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
