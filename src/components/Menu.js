import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${props => props.theme.colors.background};
  width: 100%;
  padding: 0.75em 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
      img {
        width: 100px;
      }
    }
    &:last-of-type {
      background-color: ${props => props.theme.colors.accent};
      min-width: 140px;
      padding: 12px 25px;
      text-align: center;
      border-radius: 10px;
      a {
        color: ${props => props.theme.colors.primary};
        &:hover {
          border-bottom: none;
        }
      }
    }
    &:not(:first-of-type) {
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      border-bottom: 2px solid ${props => props.theme.colors.primary};
      color: black;
    }
    @media only screen and (max-width: 360px) {
      font-size: 14px;
    }
  }
`

const activeLinkStyle = {
  color: 'black',
  borderBottom: '2px solid black',
}

const Menu = () => {
  const { menuLinks, logo } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              <img src={logo} alt="Salon Afif logo" />
            </Link>
          </li>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://salonafif.resurva.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book online
            </a>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
