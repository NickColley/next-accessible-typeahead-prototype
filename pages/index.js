import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Typeahead from '../components/typeahead'

const OPTIONS = [
  'Afghanistan',
  'Akrotiri',
  'Albania'
]
const PLACEHOLDER = 'Blah'
// Should the typeahead allow value and labels like a select?

function source (query, syncResults) {
  var results = OPTIONS
  syncResults(query
    ? results.filter(function (result) {
        return result.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    : []
  )
}

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
        Welcome to next.js!
        <br/>
        {isClient ? (
          <Typeahead source={source} placeholder={PLACEHOLDER} />
        ) : (
          <select className='typeahead__input' style={{
            display: 'block'
          }}>
            <option value='-1' disabled selected hidden>{PLACEHOLDER}</option>
            {
              OPTIONS.map(optionItem => {
                return <option value={optionItem}>{optionItem}</option>
              })
            }
          </select>
        )}
        <br/>
        <Link href="/otherPage"><a>Other Page</a></Link>
    </div>
  }
}

// <h1>{isClient ? 'JavaScript Enabled' : 'JavaScript Disabled'}</h1>
