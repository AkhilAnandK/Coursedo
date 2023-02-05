import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading}></Heading>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              “We share knowledge with the world”.<br></br> In this modern
              world, with new technologies rising every day, Course-do is an
              ecommerce application that provides all the required courses on
              these latest technologies.
            </p>
            {/* <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}
