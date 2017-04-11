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
      isServerRender: !!req
    }
  }
  render () {
    var hasJavaScriptEnabled = global.hasJavaScriptEnabled
    var { isServerRender } = this.props
    return <div>
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/accessible-typeahead@0.3.5/examples/styled.css" />
          <style>{`
            html {
              font-family: sans-serif;
              font-size: 16px;
              line-height: 1.5;
            }
            html.js .hidden-if-js,
            html:not(.js) .hidden-if-no-js {
              display: none !important;
            }
          `}</style>
          <script dangerouslySetInnerHTML={{ __html: `
            var hasJavaScriptEnabled = typeof window.process === 'undefined'
            if (hasJavaScriptEnabled) {
              document.documentElement.className += ' js'
            }
          `}}></script>
        </Head>
        <h1>{isServerRender ? 'Server' : 'Client'}</h1>
        Welcome to next.js!
        <br/>
        <div className="hidden-if-no-js">
          <Typeahead source={source} placeholder={PLACEHOLDER} />
        </div>
        {`
          We are falling back to a select here but for other uses cases
          like where the typeahead will submit to another page you'd want to fallback to a
          normal input, be good to flesh those patterns out.
        `}
        {isServerRender &&
          <select defaultValue='-1' className='typeahead__input hidden-if-js' style={{
            display: 'block'
          }}>
            <option disabled>{PLACEHOLDER}</option>
            {
              OPTIONS.map((optionItem, index) => {
                return <option key={index} value={optionItem}>{optionItem}</option>
              })
            }
          </select>
        }
        <br/>
        <Link href="/otherPage"><a>Other Page</a></Link>
    </div>
  }
}

// <h1>{isClient ? 'JavaScript Enabled' : 'JavaScript Disabled'}</h1>
