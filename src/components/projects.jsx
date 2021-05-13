import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage:'url("http://tejasghetia.com/wp-content/uploads/2016/01/6195941_orig.jpg")'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Book's Catalogue with Api and Recommendations using Machine Learning</a></h3>
											<span>Website</span>
											<p className="icon">
												<span><a href="#s"><i className="icon-share3" /></a></span>
												<span><a href="#s"><i className="icon-eye" /> 100</a></span>
												<span><a href="#s"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url("https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/603823eca4b46344229b30f8_portfolio_course.png")'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">My Portfolio</a></h3>
											<span>Animation</span>
											<p className="icon">
												<span><a href="#s"><i className="icon-share3" /></a></span>
												<span><a href="#s"><i className="icon-eye" /> 100</a></span>
												<span><a href="#s"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg")'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Catering Services Integration System</a></h3>
											<span>Illustration</span>
											<p className="icon">
												<span><a href="#s"><i className="icon-share3" /></a></span>
												<span><a href="#s"><i className="icon-eye" /> 100</a></span>
												<span><a href="#s"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#s" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
