/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../components/layout/core'
import {
  ListsWidget5,
} from '../../../components/partials/widgets'
import NextJSApp from 'host/DogImage'
import Sample from 'gatsbyhost/BlogIndexPage'
const VuePage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      
      <div className='col-xxl-12'>
        {/* <ListsWidget5 className='card-xxl-stretch' /> */}
        <NextJSApp/>
        <Sample/>
      </div>
      
    </div>
    {/* end::Row */}
  </>
)

const NextJSWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.REACT'})}</PageTitle>
      <VuePage />
    </>
  )
}

export {NextJSWrapper}
