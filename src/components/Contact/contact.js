import React from "react"
import Heading from "../Reuseable/Heading"

export default function Contact() {
  return (
    <section className="py-3">
      <Heading title=""></Heading>
      <div className="div col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/f/moqpzjop" method="POST">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Your Mobile Number"
            ></input>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              type="text"
              name="description"
              id="description"
              placeholder="Your Message"
            ></textarea>
          </div>
          <butto type="submit" className="btn btn-outline-info btn-block">
            SUBMIT
          </butto>
        </form>
      </div>
    </section>
  )
}
