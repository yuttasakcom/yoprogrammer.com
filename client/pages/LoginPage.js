import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
const LoginPage = () => (
  <div id="login-page" className="background">
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-4 mt-sm-10 mt-md-10 mt-lg-21">
          <div className="loginContainer">
            <form>
              <h2 className="mb-4 text-center">
                <i className="fa fa-lock" aria-hidden="true" />{' '}
                ล็อกอินเข้าสู่ระบบ
              </h2>
              <p>
                <label htmlFor="username">Username</label>
                <input
                  className="transparent border-left-0 border-top-0 border-right-0"
                  type="text"
                  placeholder="e.g. example"
                  required
                />
              </p>
              <p>
                <label htmlFor="password">Password</label>
                <input
                  className="transparent border-left-0 border-top-0 border-right-0"
                  type="password"
                  placeholder="your password"
                  required
                />
              </p>
              <button
                type="submit"
                className="btn btn-lg btn-block btn-outline-light mt-5"
              >
                <i className="fa fa-key" aria-hidden="true" /> Login
              </button>
              <small className="form-text text-muted text-center mt-3">
                <span className="mr-2 text-light">Login with Facebook : </span>
                <Link to="">
                  <i
                    className="fa fa-facebook-official fs-20"
                    aria-hidden="true"
                  />
                </Link>
              </small>
            </form>
          </div>
        </div>

        <div className="col-md-12 col-lg-8 mt-5 mt-md-10 mt-lg-20 pl-lg-20">
          <div className="d-flex justify-content-between">
            <div className="border login-line" />
            <div className="loginText">
              <h1>POS</h1>
              <h2>ระบบบริหารจัดการร้านค้า</h2>
              <ul>
                <li>สะดวก รวดเร็ว สวยงาม ใช้งานง่าย</li>
                <li>มี Feature รองรับการใช้งานที่หลากหลาย และ ฟรี!</li>
                <li>ปลอดภัย (OWASP Top 10 - 2017) </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default LoginPage
