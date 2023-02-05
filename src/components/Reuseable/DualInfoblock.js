import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoblock({ heading, src }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5 pad">
              This is a fully-fledged e-commerce website, the competency in
              front end <br />
              <span className="pad1" />
              development modules such as React, Gatsby, HTML, CSS, JavaScript,
              Nodejs <br />
              <span className="pad2" />
              and back-end technologies such as GraphQL, Contentful is
              obligatory.
            </p>
          </div>
          {/* <div className="col-4"> */}
          {/* <div className="card bg-dark"> */}
          {/* <img src={src} /> */}
          {/* <div className="card-body"> */}
          {/* <h5 className="card-title text-white ">Just Click Photos</h5> */}
          {/* <p className="card-text text-white">
                  To build a fully-fledged e-commerce website, the competency in
                  front end development modules such as React, Gatsby, HTML,
                  CSS, JavaScript, Nodejs and back-end technologies such as
                  GraphQL, Contentful is obligatory.
                </p> */}
          {/* <Link to="#" className="btn btn-warning btn-block">
                  {heading}
                </Link> */}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </section>
  )
}
