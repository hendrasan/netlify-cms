import React, { Component } from 'react'
import content from '../content/about.md'

export default class About extends Component {
  render() {
    let { html, attributes: { title, teams } } = content
    return (
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <h2>Our Team</h2>
        <ul>
          { teams.map((person, k) => (
            <li key={k}>
              <h3>{person.name}</h3>
              <img src={person.photo} />
              <p>{person.description}</p>
            </li>
          ))}
        </ul>
      </article>
    )
  }
}