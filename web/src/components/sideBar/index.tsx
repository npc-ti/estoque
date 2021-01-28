import React, { useState, useCallback, useEffect } from 'react'

import {
  Container,
  SideBarTitle,
  SideBarBrandIcon,
  SideBarBrandText,
  SideBarLink
} from './styles'

import {
  faGrinWink,
  faTachometerAlt,
  faPlus,
  faEdit,
  faBoxes,
  faChartLine,
  faChartPie,
  faWrench,
  faDollarSign,
  faSearchDollar

} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideBarLinkComponent from './components/Link';

const SideBar = () => {

  const [on,setOn] = useState('/');

  return (
    <Container>

      <SideBarTitle>

        <SideBarBrandIcon>
          <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faGrinWink} />
        </SideBarBrandIcon>

        <SideBarBrandText>
                npc admin
          <sup>1</sup>
        </SideBarBrandText>

      </SideBarTitle>
      <hr className={'sliceDivider'}/>
      <SideBarLinkComponent 
        to={'/'}
        key={'Dash'}
        onClick={ () => setOn('/') }
        on={on} title={'Dashboard'} icon={ faTachometerAlt } />

      <hr className={'sliceDivider'}/>
      <i className="sectionTitle">Produtos</i>
      <SideBarLinkComponent key={'AddProduct'} 
      onClick={() => setOn('/AddProduct')}
       to={'/AddProduct'} on={on} title={'Novo produto'} icon={ faPlus } />
    </Container>
  )
}

export default SideBar