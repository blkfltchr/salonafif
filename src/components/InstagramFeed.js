import React from 'react'
import styled from '@emotion/styled'
import InstagramPosts from '@luchoster/react-ig'

const FeedWrapper = styled.div`
   p {
     text-align: center;
     font-size: 1.5em;
     max-width: 880px;
     margin: 40px auto;
   }
   .ig-posts {
     padding: 0;
   }
 `

const Instagram = () => {
  return (
    <FeedWrapper>
      <p>Toronto's premium full service hair boutique since 1971.</p>
      <InstagramPosts username="salon_afif" />
    </FeedWrapper>
  );
}

export default Instagram;


