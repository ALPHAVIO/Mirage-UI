import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarBtnWrap,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleIsOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
      <Icon onClick={toggleIsOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleIsOpen}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggleIsOpen}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggleIsOpen}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggleIsOpen}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin" onClick={toggleIsOpen}>
            Sign In
          </SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
