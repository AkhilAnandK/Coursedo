import React from "react"

export default function Teamphotosection() {
  return (
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto">
        <p className="offices">Our Offices</p>
        <div class="card-group">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Dubai</h5>
              {/* <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p> */}
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">New York</h5>
              {/* <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p> */}
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Texas</h5>
              {/* <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p> */}
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}
