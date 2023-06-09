
import PagePathBanner from '@/components/common/PagePathBanner'
import Projects from '@/components/projects/Projects'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
    <Head>
        <title>Projects-Solar Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/solar_logo.png" />
      </Head>
    <PagePathBanner/>
    <Projects/>
    </>
  )
}

export default index