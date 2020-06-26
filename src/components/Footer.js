import React from 'react'
import styled from '@emotion/styled'
import logo from '../../static/images/logo-nobg.png'
import instagramLogo from '../../static/images/instagram-logo.png'

const Footer = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  background: darkgray;
  padding: 1em 0;
`

const Content = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  line-height: 1.25;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  img {
    height: 25px;
    width: auto;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    p {
      padding: 10px 0;
    }
  }
  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
`

const Menu = () => {
  return (
    <Footer>
      <Content>
        <img src={logo} alt="Salon Afif logo" />
        <a
            href="https://instagram.com/salon_afif"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={instagramLogo} alt="Instagram logo" />
        </a>
        <p>
          <a href="tel:416-488-2161">416-488-2161</a>
        </p>
      </Content>
    </Footer>
  )
}

export default Menu
