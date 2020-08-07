import React from 'react'
import styled from '@emotion/styled'
import InstagramPosts from '@luchoster/react-ig'

const FeedWrapper = styled.div`
  h1 {
    text-align: center;
    font-size: 2.5em;
    max-width: 880px;
    margin: 40px auto;
    @media screen and (max-width: 768px) {
      font-size: 1.75em;
    }
  }
  .ig-posts {
    padding: 0;
  }
 `

const Instagram = () => {
  return (
    <FeedWrapper>
      <h1>OUR INSTAGRAM</h1>
      <InstagramPosts username="salon_afif" />
    </FeedWrapper>
  );
}

export default Instagram;


