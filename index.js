import { wrap } from 'panels-ui'
import { PageIndex } from './pages/pages'
import React, { Component } from 'react'


class Form extends Component {
  submit = () => {
    fetch('/submit', {
      method: 'POST',
      body: JSON.stringify({
        name: this.$name.value,
        email: this.$email.value,
        jobId: 52384,
        cv: this.$cv.value,
        website: this.$website.value
      })
    })
  }

  render() {
    return <PageIndex fields={[{
      "name": "Name",
      "type": "text",
      "ref": $e => { this.$name = $e }
    }, {
      "name": "Website / Portfolio",
      "type": "text",
      "ref":  $e => { this.$website = $e }
    }, {
      "name": "CV Link (Dropbox / LinkedIn)",
      "type": "text",
      "ref": $e => { this.$cv = $e }
    }, {
      "name": "Email",
      "type": "email",
      "ref": $e => { this.$email = $e }
    }]} submit={this.submit} />
  }
}

export const panels = {
  '/': {
    type: 'Form'
  }
}

export const types = {
  Form: wrap(Form)
}
