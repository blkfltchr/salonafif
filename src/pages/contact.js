import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import Map from '../components/Map'


const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <Map />
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
