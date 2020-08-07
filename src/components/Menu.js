import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${props => props.theme.colors.background};
  width: 100%;
  padding: 0.75em 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  position: fixed;
  z-index: 100;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: inline-block;
    margin-left: 1em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .links {
    display: flex;
    align-items: center;
  }

  .logo {
    img {
      width: 100px;
    }
  }

  .services {
    padding: 20px 0;
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 120px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      z-index: 1000;
      text-align: center;
      margin: 10px 0 0 -25px;
      a {
        margin: 10px;
        color: black;
      }
    }
  }
  .services:hover .dropdown-content {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 800px) {
    .links,
    .call-now {
      display: none;
    }
  }

  .call-now {
    border: solid 3px ${props => props.theme.colors.accent};
    min-width: 160px;
    padding: 12px 15px;
    text-align: center;
    a {
      color: ${props => props.theme.colors.accent};
      &:hover {
        border-bottom: none;
      }
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    font-weight: bold;
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
  const { logo } = useSiteMetadata()
  const [buttonText, setButtonText] = useState(true);
  const text = buttonText ? 'Call now' : '416-488-2161';
  return (
    <Header>
      <Nav>
        <span className="logo">
          <Link to="/" activeStyle={activeLinkStyle}>
            <img src={logo} alt="Salon Afif logo" />
          </Link>
        </span>
        <div className="links">
          <span>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </span>
          <span>
            <Link to="/about" activeStyle={activeLinkStyle}>
              About
            </Link>
          </span>
          <span className="services">
            <Link to="/hair">
              Services
            </Link>
            <div className="dropdown-content">
              <Link to="/hair">Hair</Link>
              <Link to="/aesthetics">Aesthetics</Link>
            </div>
          </span>
          <span>
            <Link to="/products" activeStyle={activeLinkStyle}>
              Products
            </Link>
          </span>
          <span>
            <Link to="/contact" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </span>
        </div>
        <span className="call-now">
          <a
            onClick={() => setButtonText(!buttonText)}
            style={{ cursor: 'pointer' }}
          >
            {text}
          </a>
        </span>
      </Nav>
    </Header>
  )
}

export default Menu
