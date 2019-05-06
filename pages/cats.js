import React, { Component } from 'react'

import content from '../content/cats/maru.md'

export default class About extends Component {
  render() {
    let { html, attributes: { name, image, profile } } = content
    return (
      <article>
        <h1>This is {name}</h1>
        <img src={image} />
        <div>{profile}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    )
  }
}