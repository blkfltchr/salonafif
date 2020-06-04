import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import FullContainer from '../components/FullContainer'
import Banner from '../components/Banner'
import SEO from '../components/SEO'
import Instagram from '../components/InstagramFeed'

const Index = data => {
  return (
    <Layout>
      <SEO title="Home" />
      <FullContainer>
        <Banner bannerData={data.data.allContentfulHeaderBanner.edges} />
      </FullContainer>
      <Instagram />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query HomeQuery {
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          image {
            fluid(maxWidth: 1800) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          buttonText
          buttonLink
        }
      }
    }
  }
`
