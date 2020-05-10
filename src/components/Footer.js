import React from 'react'
import styled from '@emotion/styled'
import instagramLogo from '../../static/images/instagram-logo.png'

const Footer = styled.div`
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
  background: darkgray;
  padding: 1.5em 0;
`

const Content = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  line-height: 1.25;
  a {
    color: #0000EE;
  }
  img {
    height: 30px;
    width: auto;
    margin: auto;
  }
`

const Menu = () => {
  return (
    <Footer>
      <Content>
        <p>
          To make an appointment, please call us at <a href="tel:416-962-8888">416.962.8888</a>, email us at <a href="mailto:salonafif@hotmail.com">salonafif@hotmail.com</a> or <a href="https://salonafif.resurva.com/" target="_blank" rel="noopener noreferrer">book online</a>.
        </p>
        <br />
        <a href="https://www.instagram.com/salon_afif/" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="@salon_afif" /></a>
      </Content>
    </Footer>
  )
}

export default Menu
