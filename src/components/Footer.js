import React from 'react'
import styled from '@emotion/styled'
import logo from '../../static/images/logo-nobg.png'
import instagramLogo from '../../static/images/instagram-logo.png'

const Footer = styled.div`
  width: 100%;
  color: DarkGray;
  text-align: center;
  background: #fff;
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
  align-items: center;
  img {
    height: 25px;
    width: auto;
  }
  @media only screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    div, img {
      margin: 10px 0;
    }
    .salon-afif-logo {
      width: 100px;
      height: auto;
    }
  }
  a {
    color: DarkGray;
    font-weight: bold;
    text-decoration: none;
  }
`

const Menu = () => {
  return (
    <Footer>
      <Content>
        <img src={logo} alt="Salon Afif logo" className="salon-afif-logo" />
        <div>
          <p>2485 Yonge St</p>
          <p>Toronto, ON, M4P 2H6</p>
          <p>
            <a href="tel:416-488-2161">416-488-2161</a>
          </p>
          <p>
            <a href="mail:salonafif@hotmail.com">salonafif@hotmail.com</a>
          </p>
        </div>
        <a
            href="https://instagram.com/salon_afif"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={instagramLogo} alt="Instagram logo" />
        </a>
      </Content>
    </Footer>
  )
}

export default Menu
