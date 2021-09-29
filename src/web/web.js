import React, { Component } from 'react'
import './styles/index.sass';
import logo from './images/logo.png'
import art_img from './images/art-img.png';
import Auxillary from '../hoc/Auxillary'
class Web extends Component {


render() {
  return (
<Auxillary>
  <header id="header">
    <div className="container">
    <a className="logo d-flex" href="/"><img src={logo} alt="unlisted" /></a>
    <div className="web-navbar">
      <ul className="navbar-nav ml-auto d-flex flex-row align-items-center">
        <li>
          <a className="nav-link" href="#">Buy</a>
        </li>

        <li>
          <a className="nav-link" href="#">Sell</a>
        </li>

        <li>
          <a className="nav-link web-btn bg-yellow" href="#">Learn More</a>
        </li>
      </ul>
    </div>
    </div>
  </header>

    <div className="container-fluid" data-fs-scroll="null">
      <div className="sections">
        <section className="section section0">
          <div className="content center-content">
            <span className="hero-graphics"><img className="fluid-img" src={art_img} alt="" /></span>
            <h1 className="main-heading typo-clash-grotesk-h1 text-uppercase">Building <span className="color-yellow">Happier</span> Workplaces </h1>
            <p className="normal-text typo-general-sans-h4">
              We engage your employees, analyze your culture & grow your organization
              while you take your business to the next level
            </p>
            <a className="web-btn section-btn  btn-md bg-yellow" href="#">Learn More</a>
          </div>
        </section>

        <section className="section section1">
          <div className="content center-content">
            <h1 className="main-heading typo-clash-grotesk-h1 text-uppercase">Building <span className="color-yellow">Happier</span> Workplaces </h1>
            <p className="normal-text typo-general-sans-h4">
              We engage your employees, analyze your culture & grow your organization
              while you take your business to the next level
            </p>
            <a className="web-btn section-btn btn-md bg-yellow" href="#">Learn More</a>
          </div>
        </section>

        <section className="section section2">
          <div className="content center-content">
            <h1 className="main-heading typo-clash-grotesk-h1 text-uppercase">Building <span className="color-yellow">Happier</span> Workplaces </h1>
            <p className="normal-text typo-general-sans-h4">
              We engage your employees, analyze your culture & grow your organization
              while you take your business to the next level
            </p>
            <a className="web-btn section-btn btn-md bg-yellow" href="#">Learn More</a>
          </div>
        </section>

        <section className="section section3">
          <div className="content center-content">
            <h1 className="main-heading typo-clash-grotesk-h1 text-uppercase">Building <span className="color-yellow">Happier</span> Workplaces </h1>
            <p className="normal-text typo-general-sans-h4">
              We engage your employees, analyze your culture & grow your organization
              while you take your business to the next level
            </p>
            <a className="web-btn section-btn  btn-md bg-yellow" href="#">Learn More</a>
          </div>
        </section>

      </div>

    </div>


    <div className="bubbles_area" >
      <div className="bubble b1"></div>
      <div className="bubble b2"></div>
      <div className="bubble b3"></div>
      <div className="bubble b4"></div>
      <div className="bubble b5"></div>
      <div className="bubble b6"></div>
      <div className="bubble b7"></div>
      <div className="bubble b8"></div>
      <div className="bubble b9"></div>
      <div className="bubble b10"></div>
    </div>

  </Auxillary>

  )
}
}
export default Web