import React from 'react'
import styled from '@emotion/styled'

const Footer = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  background: darkgray;
  padding: 0.5em 0;
`

const Content = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  line-height: 1.25;
  a {
    color: white;
    font-weight: bold;
  }
`

const Menu = () => {
  return (
    <Footer>
      <Content>
        <p>
          To make an appointment, please call us at <a href="tel:416-488-2161">416-488-2161</a> or <a href="https://salonafif.resurva.com/" target="_blank" rel="noopener noreferrer">book online</a>.
        </p>
      </Content>
    </Footer>
  )
}

export default Menu
