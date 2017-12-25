import React from 'react'

const HomePage = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-lg-8">
        <div className="card my-3 my-lg-5">
          <img
            className="card-img-top"
            src="/statics/img/full-stack-developer1.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-title">เส้นทางสู่ Full Stack Web Developer</h4>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer. This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
            <p className="card-text" className="text-right">
              <button className="btn btn-primary">อ่านต่อ</button>
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4">b</div>
    </div>
  </div>
)

export default HomePage
