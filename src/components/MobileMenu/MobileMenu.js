/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import * as Dialog from '@radix-ui/react-dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, QUERIES, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <DialogContent>
          <DialogClose asChild>
            <UnstyledButton className="IconButton" onClick={onDismiss}>
              <VisuallyHidden>Close</VisuallyHidden>
              <Icon id="close" />
            </UnstyledButton>
          </DialogClose>
          <Spacer/>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>


  );
};

const DialogContent = styled(Dialog.Content)`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 32px;
  width: min(80%, ${300 / 16}rem);
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  &:focus { 
    outline: none;
  }

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

const DialogClose = styled(Dialog.Close)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
  text-decoration: none;
`

export default MobileMenu;
