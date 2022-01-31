/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../components/layout/core'
import {
  ListsWidget5,
} from '../../../components/partials/widgets'
import Sample from '../../microapps/Sample'
const VuePage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      
      <div className='col-xxl-12'>
        {/* <ListsWidget5 className='card-xxl-stretch' /> */}
        <Sample/>
      </div>
      
    </div>
    {/* end::Row */}
  </>
)

const VueWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.VUE'})}</PageTitle>
      <VuePage />
    </>
  )
}

export {VueWrapper}
