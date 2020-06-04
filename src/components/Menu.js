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
    text-transform: uppercase;
    letter-spacing: 1.5px;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
      img {
        width: 100px;
      }
    }
    :nth-of-type(3) {
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 120px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        z-index: 1;
        text-align: center;
        a {
          margin: 10px;
          color: black;
        }
      }
    }
    :nth-of-type(3):hover .dropdown-content {
      display: flex;
      flex-direction: column;
    }
    &:last-of-type {
      border: solid 3px ${props => props.theme.colors.accent};
      min-width: 180px;
      padding: 12px 15px;
      text-align: center;
      a {
        color: ${props => props.theme.colors.accent};
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
  const { logo } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              <img src={logo} alt="Salon Afif logo" />
            </Link>
          </li>
          <li>
            <Link to="/about" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/hair" activeStyle={activeLinkStyle}>
              Hair
            </Link>
            <div className="dropdown-content">
              <Link to="/hair#cut">Cut</Link>
              <Link to="/hair#colour">Colour</Link>
              <Link to="/hair#technical">Technical</Link>
              <Link to="/hair#treatments">Treatments</Link>
              <Link to="/hair#styling">Styling</Link>
            </div>
          </li>
          <li>
            <Link to="/aesthetics" activeStyle={activeLinkStyle}>
              Aesthetics
            </Link>
          </li>
          <li>
            <Link to="/products" activeStyle={activeLinkStyle}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
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
