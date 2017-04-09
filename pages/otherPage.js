import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return {
      isServerRendered: !!req
    }
  }
  render () {
    var isClient = typeof global.process === 'undefined'
    return <div>
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/accessible-typeahead@0.3.5/examples/styled.css" />
          <style>{`
            html {
              font-family: sans-serif;
              font-size: 16px;
              line-height: 1.5;
            }
          `}</style>
        </Head>
        <h1>{this.props.isServerRendered ? 'Server' : 'Client'}</h1>
        <h1>{isClient ? 'JavaScript Enabled' : 'JavaScript Disabled'}</h1>
        <Link href="/"><a>Back</a></Link>
    </div>
  }
}
