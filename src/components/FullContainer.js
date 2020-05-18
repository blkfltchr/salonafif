import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  flex-grow: 1;
`

const FullContainer = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default FullContainer
