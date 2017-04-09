import Typeahead from '../components/typeahead'
import Head from 'next/head'

function source (query, syncResults) {
  var results = [
    'Afghanistan',
    'Akrotiri',
    'Albania'
  ]
  syncResults(query
    ? results.filter(function (result) {
        return result.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    : []
  )
}

export default () => (
  <div>
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
    Welcome to next.js!
    <br/>
    <Typeahead
      source={source}
    />
  </div>
)
