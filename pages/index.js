import Typeahead from '../components/typeahead'

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
    Welcome to next.js!
    <br/>
    <Typeahead
      source={source}
    />
  </div>
)
