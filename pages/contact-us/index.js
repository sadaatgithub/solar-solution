import ContactForm from '@/components/Contact/ContactForm'
import ContactFormDetails from '@/components/Contact/ContactFormDetails'
import Container from '@/components/Container'
import AnimateComponent from '@/components/animate/AnimateComponent'
import PagePathBanner from '@/components/common/PagePathBanner'
import React from 'react'

const Contact = () => {
  return (
    <>
    <PagePathBanner/>
    <Container className="flex gap-20 flex-col md:flex-row w-full">
        <AnimateComponent className="w-full" type="right">
        <ContactFormDetails title="Dont Hesitate to contact us"/>
        </AnimateComponent>
        <AnimateComponent className="w-full" type="left">
        <ContactForm title="Send Message" className="w-full"/>
        </AnimateComponent>
      </Container>
    </>
  )
}

export default Contact