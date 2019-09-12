import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import useTranslations from '@hooks/use-translations';
import Modal from './Modal';
import Cta, { enumTypes } from './Cta';
import Icon from './Icon';
import Flex, { FlexItem } from './Flex';
import Brand from './Brand';

import { Desktop } from '@media';
import { primary, secondary } from '@colors';

const menuOpen = keyframes({
  '0%': {
    opacity: 0,
    transform: `scale(0.98) translateY(-9.6px)`
  },
  '100%': {
    opacity: 1,
    transform: `scale(1) translateY(0)`
  }
});

const NavItemWrapper = styled.section`
  display: inline-block;
  position: relative;
  overflow: visible;
  & a {
    position: relative;
    padding: 0.75rem 2rem;
    font-weight: 600;
    color: ${primary};
    text-transform: uppercase;
    &:hover {
      color: ${secondary};
    }
  }
  &:hover {
    & section {
      display: block;
    }
    & nav {
      display: block;
    }
  }
`;

const getNavItemStyle = css`
  display: none;
  position: absolute;
  left: 0;
  top: 125%;
  margin: 0px auto;
  padding: 3px 0px;
  background: white;
  border-radius: 3px;
  animation: ${menuOpen} 0.4s cubic-bezier(0.73, 0.005, 0.22, 1);
  box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15), 0 0 1px rgba(27, 31, 35, 0.2);
  z-index: 750;
  & a {
    display: block;
    height: auto;
    color: #444;
    white-space: nowrap;
    text-align: left;
    z-index: 101;
  }
`;

const NavItem = ({ link }) => {
  const [t] = useTranslations();
  return (
    <NavItemWrapper>
      <Link name={link.label} title={`go to ${link.slug}`} to={link.slug}>
        {t[link.label]}
      </Link>
      <NavItems css={getNavItemStyle} links={link.items || []} />
    </NavItemWrapper>
  );
};

NavItem.propTypes = {
  link: PropTypes.shape({
    label: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  }).isRequired
};

const NavItems = ({ links, ...props }) => (
  <nav {...props}>
    {links.map(link => (
      <NavItem key={link.label} link={link} />
    ))}
  </nav>
);

NavItems.propTypes = {
  links: PropTypes.array.isRequired
};

const MenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  outline: none;
  ${Desktop} {
    display: none;
  }
`;

const NavWrapper = styled(Flex)`
  justify-content: space-between;
  margin: 0 !important;
  ${Desktop} {
    justify-content: center;
  }
`;

const LinkWrapper = styled(Flex)`
  display: none;
  max-width: 1450px;
  margin: 0 !important;
  ${Desktop} {
    display: flex;
  }
`;

const MobileNav = styled(Flex)`
  text-align: center;
  padding: 1.5rem;
`;

const Nav = ({ openNewsletter }) => {
  const {
    site: {
      siteMetadata: { menu }
    }
  } = useStaticQuery(graphql`
    query Navbar {
      site {
        siteMetadata {
          menu {
            label
            slug
            items {
              label
              slug
            }
          }
        }
      }
    }
  `);
  const [{ demo, ...t }] = useTranslations();
  const [open, toggle] = useState(false);
  const onClose = () => toggle(false);
  const getLinkProps = slug => ({
    onClick: onClose,
    activeStyle: {
      color: secondary,
      textDecoration: `underline`
    },
    to: slug
  });
  return (
    <>
      <Headroom pinStart={48}>
        <NavWrapper>
          <Link name="logo" title="Back to home" to="/">
            <Brand />
          </Link>
          <LinkWrapper justify="space-between" flexWrap={false}>
            <FlexItem width="auto">
              <NavItems links={menu} />
            </FlexItem>
            <FlexItem as="span" width="430px">
              <Flex justify="space-between">
                <Cta type={enumTypes.GRADIENT} onClick={openNewsletter}>
                  Newsletter
                </Cta>
                <Cta type={enumTypes.SECONDARY} link="/demo">
                  {demo}
                </Cta>
              </Flex>
            </FlexItem>
          </LinkWrapper>
          <MenuButton
            type="button"
            aria-label="open menu"
            onClick={() => toggle(true)}
          >
            <Icon type="menu" color={secondary} />
          </MenuButton>
        </NavWrapper>
      </Headroom>
      <Modal isOpen={open} onClose={onClose}>
        <MobileNav role="navigation">
          {menu.map(link => {
            if (link.items) {
              return link.items.map(item => (
                <FlexItem width="100%" key={item.label}>
                  <Link {...getLinkProps(item.slug)}>{t[item.label]}</Link>
                </FlexItem>
              ));
            }
            return (
              <FlexItem width="100%" key={link.label}>
                <Link {...getLinkProps(link.slug)}>{t[link.label]}</Link>
              </FlexItem>
            );
          })}
          <FlexItem width="100%">
            <Cta
              type={enumTypes.GRADIENT}
              onClick={() => {
                onClose();
                openNewsletter();
              }}
            >
              Newsletter
            </Cta>
          </FlexItem>
          <FlexItem width="100%">
            <Cta type={enumTypes.SECONDARY} link="/demo" onClick={onClose}>
              {demo}
            </Cta>
          </FlexItem>
        </MobileNav>
      </Modal>
    </>
  );
};

Nav.propTypes = {
  openNewsletter: PropTypes.func.isRequired
};

export default Nav;
