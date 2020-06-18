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
    margin-left: 5px;
  }
`

const Menu = () => {
  return (
    <Footer>
      <Content>
        <p>To see more of what we’ve been up to, follow us on
          <a
            href="https://instagram.com/salon_afif"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>.
        </p>
      </Content>
    </Footer>
  )
}

export default Menu
