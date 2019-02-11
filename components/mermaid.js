import React, { Component } from 'react'
import PropTypes from 'prop-types'

let mermaid

class Mermaid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      svg: null,
    }
  }

  componentDidMount() {
    if (!mermaid) {
      mermaid = require('mermaid')
    }
    if (window !== undefined) {
      mermaid.mermaidAPI.initialize({
        startOnLoad: false,
        flowchart: {
          useMaxWidth: false
        }
      })
      mermaid.mermaidAPI.render(this.props.id, this.props.content, svg => {
        this.setState({ svg: svg.replace(/max-width: \w.*;/, '') })
      })
    }
  }

  render() {
    if (!this.state.svg) {
      return <div>Loading...</div>
    }

    return (
      <div style={{width: '60vw'}}>
        <div dangerouslySetInnerHTML={{ __html: this.state.svg }} />
      </div>
    )
  }
}

Mermaid.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Mermaid
