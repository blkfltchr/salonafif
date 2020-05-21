import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageBanner from '../components/PageBanner'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'

const PageTemplate = ({ data }) => {
  const { title, metaDescription, body, image } = data.contentfulPage
  return (
    <Layout>
      <SEO
        title={title}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
      />
      <PageBanner banner={image} title={title} />
      <Container>
        <PageBody body={body} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
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
    }
  }
`

export default PageTemplate
