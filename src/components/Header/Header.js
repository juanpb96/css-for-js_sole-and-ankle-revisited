import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <IconsWrapper>
          <Icon id="shopping-bag" />
          <Icon id="search" />
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
          </UnstyledButton>
        </IconsWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side hideOnTablet />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  --grow-rate: 1rem, 4.5vw - 1.75rem;

  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  padding-right: clamp(var(--grow-rate), 2rem);
  min-height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  @media ${QUERIES.tabletAndDown} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
  }

  @media ${QUERIES.phoneAndDown} {
    padding-inline: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(var(--grow-rate), 3rem);
  margin: 0px 48px;
  margin-right: clamp(var(--grow-rate), 3rem);

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: revert;
    display: ${({hideOnTablet}) => hideOnTablet ? 'none' : ''};
  }
`;

const IconsWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
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

export default Header;
