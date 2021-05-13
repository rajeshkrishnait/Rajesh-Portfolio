import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am an IT student from Trichy. Grounded and Solution-oriented Computer Scientist open to constructive criticism and new
domains. living by the ideal that Hardworking and perseverence propels you further than luck</p>
                    <p> Adept at motivating self and others. Passionate about problem solving and
educating the next generation. Team worker with the additional quality of leadership when the situation calls for it.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                        <i className="icon-bulb" />
                    </span>
                    <div className="desc">
                        <h3>Web Development </h3>
                        <p>I have experience building websites using JavaScript,React,HTML,CSS with the backend servers working with databases set up on MySql</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-3">
                    <span className="icon">
                        <i className="icon-phone3" />
                    </span>
                    <div className="desc">
                        <h3>Data Structures & Algorithms</h3>
                        <p>Good at DSA theories because of my Semester papers, have solved hundreds of problems in LeetCode to get me through the applications.</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                    <span className="icon">
                        <i className="icon-data" />
                    </span>
                    <div className="desc">
                        <h3>Machine Learning</h3>
                        <p>Invested a lot of time in reading and understanding ML algorithms. Have a look at my projects for a better understanding</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-2">
                    <span className="icon">
                        <i className="icon-data" />
                    </span>
                    <div className="desc">
                        <h3>Critical Thinking</h3>
                        <p>Stressful the situations, brighter the solutions that come out of my brain </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-4">
                    <span className="icon">
                        <i className="icon-layers2" />
                    </span>
                    <div className="desc">
                        <h3>d</h3>
                        <p></p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-6">
                    <span className="icon">
                        <i className="icon-phone3" />
                    </span>
                    <div className="desc">
                        <h3>d</h3>
                        <p> </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
