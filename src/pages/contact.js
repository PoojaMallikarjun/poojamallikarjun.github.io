import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  const id = `https://formspree.io/${process.env.MY_ID}`
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contact Me</h3>
          <h4>
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, fill up the awesome form below
          </h4>
          <form action={id} method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
