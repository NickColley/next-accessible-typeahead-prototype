import React from 'react'
export default class Error extends React.Component {
  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  render () {
    return (
      <p>{
        !this.props.statusCode &&   <script dangerouslySetInnerHTML={{ __html: `
            // TODO: Could do this per component...?
            // Doesnt seem to execute if a component throws anyway...
            // Since we dont render the fallback when doing client only render,
            // we couldnt fall back then, unless we render the fallback on client too
            // or alternatively only render fallback only when the component errors
            document.documentElement.className = document.documentElement.className.replace('js', '')
          `}}></script>
      }</p>

    )
  }
}
