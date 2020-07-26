import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import PageBody from '../components/PageBody'

const ContactPage = styled.div`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
`
const ContactForm = () => {
  const { contentfulContactInfo } = useStaticQuery(
    graphql`
      query ContactQuery {
        contentfulContactInfo(id: {eq: "db75b2a8-9609-5863-b23e-29095d41d6e3"}) {
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
        }
      }
    `
  )
  const { body } = contentfulContactInfo
  return (
    <ContactPage>
      <PageBody body={body} />
    </ContactPage>
  )
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
