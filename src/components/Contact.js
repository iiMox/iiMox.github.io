import React from "react"
import { useState } from "react"

import "../styles/Contact.css"

const Contact = () => {
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendMail = mail => {
    fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
      method: "post",
      body: mail,
    }).then(response => {
      return response.json()
    })
  }

  return (
    <div className="contact">
      <div className="container">
        <h2>CONTACT</h2>
        <p>For all your questions. Don't hesitate</p>
        <form>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
          <button
            onClick={e => {
              e.preventDefault()
              const mail = { subject, email, message }
              /* sendMail(mail) */
            }}
          >
            CONTACT US
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
