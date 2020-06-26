import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { push as MobileNav } from 'react-burger-menu'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { globalStyles } from '../styles/globalStyles.js'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};

  .bm-menu-wrap,
  .bm-overlay,
  .bm-burger-button {
    @media only screen and (min-width: 769px) {
      display: none;
    }
  }
  .bm-menu-wrap {
    width: 100% !important;
  }
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 15px;
  }
  .bm-burger-bars {
    background: DarkGray;
  }
  .bm-burger-bars-hover {
    background: ${props => props.theme.colors.primary};
  }
  .bm-cross-button {
    height: 36px;
    width: 36px;
  }
  .bm-cross {
    background: ${props => props.theme.colors.primary};
  }
  .bm-item {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    margin-top: 30px;
    text-align: center;
    text-transform: uppercase;
    &:hover {
      color: black;
    }
    &:last-of-type {
      border: solid 3px ${props => props.theme.colors.accent};
      max-width: 180px;
      padding: 12px 15px;
      text-align: center;
      margin: 20px auto;
      color: ${props => props.theme.colors.accent};
      a {
        &:hover {
          border-bottom: none;
        }
      }
    }
  }
  .bm-overlay {
    background: ${props => props.theme.colors.background} !important;
    z-index: 1001 !important;
  }
`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])
  const { menuLinks } = useSiteMetadata()

  return (
    <Root className="siteRoot">
      <div className="siteContent">
        <MobileNav right>
          <Link to="/">
            Home
          </Link>
          {menuLinks.map(link => (
            <Link key={link.name} to={link.slug}>
              {link.name}
            </Link>
          ))}
          <a
            href="tel:416-488-2161"
          >
            Call now
          </a>
        </MobileNav>
        <Skip href="#main" id="skip-navigation">
          Skip to content
        </Skip>
        <Menu />
        <div id="main" style={{ marginTop: '70px' }}>{props.children}</div>
        <Footer />
      </div>
      <Global styles={globalStyles} />
    </Root>
  )
}

export default Layout
