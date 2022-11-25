import React from 'react'
import {SidebarContainer, Icon,CloseIcon, SidebarWrapper,SidebarMenu,SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
    <SidebarWrapper>
<SidebarMenu>
<SidebarLink to="home">A Propos</SidebarLink>
<SidebarLink to="Essai">Essai</SidebarLink>
</SidebarMenu>
    </SidebarWrapper>
    </SidebarContainer>
)
}

export default Sidebar
