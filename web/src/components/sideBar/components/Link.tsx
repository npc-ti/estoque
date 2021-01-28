import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SideBarLink } from '../styles';
import { Link, LinkProps } from 'react-router-dom';


export interface SideBarLinkInterface extends LinkProps {
    title:string;
    on?:string;
    icon:any;
    key?:string;
}

const LinkComponent:React.FC<SideBarLinkInterface> = ({ title, on,icon, ...rest}) => {

  const [OptionOn, setOptionOn] = useState(false);

  useEffect(() => {
        return setOptionOn(() => on == rest.to); 
  },[on])

  return (<>
    <SideBarLink>

      <Link 
      {...rest}
        className =  {OptionOn?'on':undefined}>

        <FontAwesomeIcon icon={ icon} />

        <span className={'navLink'} >{title}</span>

      </Link>
    </SideBarLink>
  </>
  )
}

export default LinkComponent