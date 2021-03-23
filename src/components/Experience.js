import React, { useState } from "react";

export default function Experience() {
	const [showMore, setShowMore] = useState(false);

	const handleShowMore = (e) => {
		e.preventDefault();
		setShowMore(true);
	};

	return (
		<div>
			<div class="container" className="">
				<div className="row">
					<div className="col-3 mx-4 my-4">
						<img
							src="./images/profile_draw.jpg"
							className="mb-4 ms-5"
							id="profile_pic"
						/>
						<h3 className="font-monospace text-center">About me</h3>
						<p className="mx-4 my-4 fw-light lh-lg">
							Now, FullStack developer! With a tech recruitment background for
							the last 4 years in international environments, currently willing
							to work on the "other side" of a software company. I'd like to
							keep working both in Backend and Frontend to improve my skills in
							JavaScript, React.js, Node.js and Express.js.{" "}
						</p>
						<div className="text-center my-4">
							<a
								href="https://www.linkedin.com/in/andreamestremedina/"
								target="_blank"
								className="mx-4"
							>
								<img
									className="logo"
									src="./images/linkedin.png"
									alt="linkedin icon"
								/>
							</a>
							<a
								href="https://github.com/andriumm"
								target="_blank"
								className="mx-4"
							>
								<img
									className="logo"
									src="./images/github.png"
									alt="github icon"
								/>
							</a>
							<a href="mailto:amestre89@gmail.com" className="mx-4">
								<img
									className="logo"
									src="./images/email.png"
									alt="email icon"
								/>
							</a>
						</div>
					</div>

					<div className="col mx-4 my-4 border-start">
						<div className="mx-4 border-bottom">
							<h3 className="font-monospace">Background</h3>
							<div>
								<h6 className="d-inline-flex mx-4 my-4">TECH RECRUITER</h6>
								<p className="d-inline-flex">(mar'19 - dec'20)</p>
								<ul>
									<li>Tech recruitment for Barcelona office.</li>
									<li>Job posts, Active sourcing, Screening, HR interviews.</li>
									<li>
										Interview Trainer encouraging our teams to manage technical
										interviews with high-quality standards (good practices in
										terms of recruitment).
									</li>
									<li>
										Part of the international recruitment team responsible to
										develop a standard recruitment process that works
										cross-location (Hamburg, Porto, Valencia and Barcelona).
									</li>
								</ul>
							</div>
							<div>
								<h6 className="d-inline-flex mx-4 my-4">
									IT RECRUITER CONSULTANT
								</h6>
								<p className="d-inline-flex">(sep'17 - feb'19)</p>
								<ul>
									<li>
										Working on several recruitment processes for different
										clients having direct communication with them.
									</li>
									<li>
										Profiles I worked on: Frontend, Backend and Full stack
										developers, DevOps, Project Managers, Product Mangers,
										Product Owners, Data Scientist, Data Engineers.
									</li>
								</ul>
							</div>
							<div>
								<h6 className="d-inline-flex mx-4 my-4">
									RECRUITER CONSUTLANT
								</h6>
								<p className="d-inline-flex">(nov'16 - sep'17)</p>
								<ul>
									<li>
										Recruitment consultant for engineering companies
										(automotive, chemical, IT, etc).
									</li>
								</ul>
							</div>
							<div>
								<h6 className="d-inline-flex mx-4 my-4">RECRUITER</h6>
								<p className="d-inline-flex">(oct'15 - oct'16)</p>
							</div>
							<button>See more</button>
							{showMore && <div></div>}
						</div>
						<div className="mx-4 my-4 border-bottom">
							<h3 className="font-monospace">Education</h3>
							<div>
								<p className="d-inline-flex mx-4 my-4">
									2021 &emsp;&ensp;&ensp;&ensp;{" "}
								</p>
								<h6 className="d-inline-flex mx-4 my-4">
									Fullstack Development Bootcamp
								</h6>

								<p className="d-inline-flex mx-3"> CodeOp</p>
							</div>
							<div>
								<p className="d-inline-flex mx-4 my-4">2007-2011</p>
								<h6 className="d-inline-flex mx-4 my-4">
									Master about Family violence prevention and management
								</h6>

								<p className="d-inline-flex mx-3">
									IL3 - Universitat de Barcelona
								</p>
							</div>
							<div>
								<p className="d-inline-flex mx-4 my-4">2007-2011</p>
								<h6 className="d-inline-flex mx-4 my-4">Psychology</h6>
								<p className="d-inline-flex mx-3">Universitat de Barcelona</p>
							</div>
						</div>
						<div className="mx-4 my-4 border-bottom">
							<h3 className="font-monospace">Stack</h3>
							<p className="btn btn-dark me-4">JavaScript</p>
							<p className="btn btn-dark me-4">React.js</p>
							<p className="btn btn-dark me-4">Node.js</p>
							<p className="btn btn-dark me-4">Express.js</p>
							<h5 className="font-monospace">Coming</h5>
							<p className="btn btn-dark disabled me-4">Testing</p>
							<p className="btn btn-dark disabled me-4">Docker</p>
							<p className="btn btn-dark disabled me-4">GraphQL</p>
							<p className="btn btn-dark disabled me-4">Redux</p>
						</div>
						<div className="mx-4 my-4">
							<h3 className="font-monospace">
								A glimpse of my culture company values
							</h3>
							<h6 className="mx-4 my-4 fw-light lh-lg">
								If you have some time left and you want to know more about the
								values I persuit in my working environment you can take a look
								to a couple of short articles I wrote while I was a tech
								recruiter.
							</h6>
							<div className="mx-4">
								<a
									href="https://newwork-es.medium.com/be-yourself-e05c48bf1629"
									target="_blank"
									className="btn btn-outline-dark mx-4"
								>
									Be Yourself
								</a>
								<a
									href="https://newwork-es.medium.com/hard-conversations-hard-interviews-89ef8237d34"
									target="_blank"
									className="btn btn-outline-dark"
								>
									Hard conversations, hard interviews
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
