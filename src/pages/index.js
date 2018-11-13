import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Figuring out what to place here</h1>
    <p>Welcome to Folded!</p>
    <p>Now go and be great!</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to the next great page.</Link>
  </Layout>
)

export default IndexPage
