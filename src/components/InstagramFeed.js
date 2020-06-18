import React from 'react'
import styled from '@emotion/styled'
import InstagramPosts from '@luchoster/react-ig'

const FeedWrapper = styled.div`
   p {
     text-align: center;
     font-size: 1.5em;
     max-width: 880px;
     margin: 0 auto 60px auto;
     a {
       color: white;
       font-weight: bold;
       margin-left: 10px;
     }
   }
 `

const Instagram = () => {
  return (
    <FeedWrapper>
      <InstagramPosts username="salon_afif" />
    </FeedWrapper>
  );
}

export default Instagram;


