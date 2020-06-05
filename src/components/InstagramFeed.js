import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import InstagramPosts from '@luchoster/react-ig'

const FeedWrapper = styled.div`
 /* .insta {
   margin-top: 60px;

   .insta-posts {
     list-style-type: none;
     margin: 30px 0 90px;
     display: grid;
     justify-content: center;
     gap: 20px;
     @media screen and (min-width: 630px) {
       grid-template-columns: repeat(2, 280px);
       grid-template-rows: auto;
     }
     @media screen and (min-width: 1024px) {
       grid-template-columns: repeat(3, 280px);
       grid-template-rows: repeat(2, 280px);
     }

     li:nth-child(4) {
       display: none;
       @media screen and (min-width: 630px) {
         display: block;
       }
     }

     li:nth-child(5) {
       display: none;
       @media screen and (min-width: 1024px) {
         display: block;
       }
     }

     li:nth-child(6) {
       display: none;
       @media screen and (min-width: 1024px) {
         display: block;
       }
     }

     .insta-post {
       position: relative;
       height: 280px;
       width: 280px;
       margin: 0;
     }
   } */

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
//   const data = useStaticQuery(graphql`
//   query {
//     allInstaNode(
//       limit: 6,
//       sort: {
//         fields: [timestamp]
//         order: [DESC]
//       }
//     ) {
//       edges {
//         node {
//           id
//           likes
//           comments
//           mediaType
//           preview
//           original
//           timestamp
//         }
//       }
//     }
//   }
//   `)
//   const instaPosts = data.allInstaNode.edges;
  return (
    <FeedWrapper>
      <InstagramPosts username="salon_afif" />
{/*        <div className="insta">
         <ul className="insta-posts">
             {instaPosts.map(({ node }) => {
               return (
                 <li key={node.id} className="insta-post">
                   <img src={node.original} />
                 </li>
               )
             })}
         </ul> */}
        <p>To see more of what we’ve been up to, follow us on
          <a
            href="https://instagram.com/salon_afif"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>.
        </p>
{/*        </div> */}
    </FeedWrapper>
  );
}

export default Instagram;


