/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {AsideMenuItem} from './AsideMenuItem'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      {/* <AsideMenuItem
        to='/vue'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.VUE'})}
        fontIcon='bi-app-indicator'
      />
       <AsideMenuItemWithSub
        to='/react'
        title='Another React App'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/react/home' title='Home' hasBullet={true} />
        <AsideMenuItem to='/react/pricing' title='Pricing' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to='/nextjs'
        icon='/media/icons/duotune/art/art002.svg'
        title='Next.js App'
        fontIcon='bi-app-indicator'
      /> */}
    </>
  )
}
