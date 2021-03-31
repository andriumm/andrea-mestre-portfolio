import React, { useState } from "react";

export default function Experience() {
	const [showMore, setShowMore] = useState(false);

	const handleShowMore = (e) => {
		e.preventDefault();
		setShowMore(true);
	};
	const handleShowLess = (e) => {
		e.preventDefault();
		setShowMore(false);
	};

	return (
		<div>
			<div className="">
				<div className="row">
					<div className="col-3 mx-4 my-4 text-center">
						<img
							src="./images/profile_draw.jpg"
							className="mb-4  text-center"
							id="profile_pic"
							alt="profilePicture"
						/>
						<h3 className="font-monospace text-center">About me</h3>
						<p className="ms-4 my-4 fw-light lh-lg">
							Now, FullStack developer! After being focused on tech recruitment
							for the last 4 years in international environments, currently
							willing to work on the "other side" of a software company. Working
							both in Backend and Frontend to improve my skills in JavaScript,
							React.js, Node.js and Express.js. Always open to learn different
							technologies of course. ... And yes! I love cats!{" "}
						</p>
						<div className="mx-4 my-4">
							<h3 className="font-monospace">Articles</h3>
							<h6 className="mx-4 my-4 fw-light lh-lg text-dark">
								If you have some time left...
							</h6>
							<div>
								<a
									href="https://newwork-es.medium.com/be-yourself-e05c48bf1629"
									target="_blank"
									className="btn btn-outline-dark mb-4 mx-4"
									rel="article1"
								>
									Be Yourself
								</a>
								<a
									href="https://newwork-es.medium.com/hard-conversations-hard-interviews-89ef8237d34"
									target="_blank"
									className="btn btn-outline-dark"
									rel="article2"
								>
									Hard conversations, hard interviews
								</a>
							</div>
						</div>
						<div className="text-center my-4">
							<a
								href="https://www.linkedin.com/in/andreamestremedina/"
								target="_blank"
								className="mx-4"
								rel="linkedin"
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
								rel="github"
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
									rel="email"
								/>
							</a>
						</div>
					</div>

					<div className="col mx-4 my-4 border-start fw-light lh-lg">
						<div className="mx-4 my-4 border-bottom">
							<h3 className="font-monospace mb-4">Stack</h3>
							<div className="mx-4 mb-4">
								<p className="badge bg-dark text-wrap me-4 fs-6">JavaScript</p>
								<p className="badge bg-dark text-wrap me-4 fs-6">React.js</p>
								<p className="badge bg-dark text-wrap me-4 fs-6">Node.js</p>
								<p className="badge bg-dark text-wrap me-4 fs-6">Express.js</p>
								<p className="badge bg-dark text-wrap me-4 fs-6">MySQL</p>
								<p className="badge bg-dark text-wrap me-4 fs-6">HTML</p>
								<p className="badge bg-dark text-wrap me-4 fs-6">CSS</p>
								<h5 className="font-monospace my-4">Coming</h5>
								<p className="btn btn-dark btn-sm disabled me-4">Testing</p>
								<p className="btn btn-dark btn-sm disabled  me-4">...</p>
							</div>
						</div>
						<div className="mx-4 border-bottom">
							<h3 className="font-monospace">Experience</h3>
							<div>
								<h6 className="d-inline-flex mx-4 my-4">FULLSTACK DEVELOPER</h6>
								<p className="d-inline-flex">(jan'21 - mar'21)</p>
								<a
									href="https://codeop.tech/"
									target="_blank"
									className="mx-4"
									rel="CodeOp"
								>
									<img
										className="logo"
										src="./images/CodeOp.png"
										alt="CodeOp"
										rel="CodeOp"
									/>
								</a>
								<p className="mx-4">
									Intensive 11-week Bootcamp in which I developed three
									full-stack apps during the course using the follwoing
									technologies: <br />
									React, React Router, Node, Express, Sequelize, MySQL, Axios,
									JWT, Bcrypt, and deployed with Heroku. <br />
									<br />
									<span className="fw-bold">- BodyCultureBcn: </span>
									MVP built in 1 week. WebApp for a personal trainer to organize
									customers' information in order to prepare customized
									trainings and follow the clients' progress. <br />
									<br />
									<span className="fw-bold">- DogRent: </span> Feature extension
									project : 1 week working on inherited legacy code and added
									user authentication with JWT.
									<br />
									<br />
									<span className="fw-bold">- GroupIt!: </span> Group project
									built together within an international team remotely in 2
									weeks and a half. An app that allows users to organize their
									online resources classified by their own interests, with the
									possibility to set up different characteristics (if it is
									completed or not, priority, reminders or deletion).
								</p>
							</div>
						</div>
						<div className="mx-4 border-bottom">
							<h3 className="font-monospace my-4">Background</h3>
							<div>
								<h6 className="d-inline-flex mx-4 my-4">TECH RECRUITER</h6>
								<p className="d-inline-flex">(mar'19 - dec'20)</p>
								<a
									href="https://www.new-work.se/en/career/barcelona"
									target="_blank"
									className="mx-4"
									rel="newWork"
								>
									<img
										className="logo"
										src="./images/newWork.png"
										alt="New Work"
										rel="newWork"
									/>
								</a>
								<p className="mx-4">
									Helped the Barcelona office to keep growing having in mind
									diversity and equity in our recruitment processes.
									<br /> To achieve this purpose, we also implemented a training
									process in which our software engineers were prepared to drive
									interviews with the best practices in order to reduce biases
									as much as possible. <br />
									<br />I also was part of the international recruitment team
									responsible for developing a standard recruitment process that
									works cross-location taking into account the local needs for
									each office (Hamburg, Porto, Valencia, and Barcelona). <br />
									<br />
									The best of this role was working in a cross-functional and
									collaborative HR team, supporting each other in areas like
									Employer Branding and Office Management while I was having
									fun.
								</p>
							</div>

							<div>
								<div>
									{!showMore && (
										<div className="text-center my-4 ">
											<button
												onClick={handleShowMore}
												type="button"
												className="btn btn-outline-dark"
											>
												Show more &#8595;
											</button>
										</div>
									)}

									{showMore && (
										<div>
											<div>
												<h6 className="d-inline-flex mx-4 my-4">
													IT RECRUITER CONSULTANT
												</h6>
												<p className="d-inline-flex">(sep'17 - feb'19)</p>
												<a
													href="https://akuaro.com/"
													target="_blank"
													className="mx-4"
													rel="akuaro"
												>
													<img
														className="logo"
														src="./images/Akuaro.png"
														alt="Akuaro"
														rel="akuaro"
													/>
												</a>
												<p className="mx-4">
													As a tech recruiter consultant, I was managing the
													active sourcing and the screening of several hiring
													processes of a bunch of companies reporting directly
													to them. <br />
													<br />
													The main profiles I worked on were: Frontend, Backend,
													and Full Stack developers, DevOps, Project Managers,
													Product Managers, Product Owners, Data Scientist, Data
													Engineers. <br />
													<br />
													Thanks to all the networking I did, I learnt how tech
													market in Spain and Europe works.
												</p>
											</div>
											<div>
												<h6 className="d-inline-flex mx-4 my-4">
													RECRUITER CONSUTLANT
												</h6>
												<p className="d-inline-flex">(nov'16 - sep'17)</p>
												<a
													href="https://www.mur-partners.com/en/"
													target="_blank"
													className="mx-4"
													rel="murandmarti"
												>
													<img
														className="logo"
														src="./images/murandpartners.png"
														alt="murandmarti"
														rel="murandmarti"
													/>
												</a>
												<p className="mx-4">
													Recruitment consultant for engineering companies
													(automotive, chemical, IT, etc).
												</p>
											</div>
											<div>
												<h6 className="d-inline-flex mx-4 my-4">RECRUITER</h6>
												<p className="d-inline-flex">(oct'15 - oct'16)</p>
												<a
													href="https://www.gdhumancapital.com/"
													target="_blank"
													className="mx-4"
													rel="GDHumanCapital"
												>
													<img
														className="logo"
														src="./images/GDHumanCapital.png"
														alt="GDHumanCapital"
														rel="GDHumanCapitalmarti"
													/>
												</a>
												<p className="mx-4">
													Recruitment of payroll specialists, tax advisors,
													layers, interns and some recruitment consultancy for
													clients.
												</p>
											</div>
											<div>
												<h6 className="d-inline-flex mx-4 my-4">
													CUSTOMER SERVICE AGENT
												</h6>
												<p className="d-inline-flex">(oct'13 - apr'16)</p>
												<a
													href="https://webhelp.com//"
													target="_blank"
													className="mx-4"
													rel="Sellbytel"
												>
													<img
														className="logo"
														src="./images/Sellbytel.png"
														alt="Sellbytel"
														rel="Sellbytel"
													/>
												</a>
												<ul>
													<p>Working for the English and Spanish market:</p>
													<li>
														Take incoming customer calls (via telephone, email,
														voicemail, or other automated alerts) and solve
														users' demands related to orders (complaints,
														refunds, recommendations, etc.).
													</li>
													<li>
														Maintain service and product knowledge and expertise
														associated with applications specific to individual
														customers.
													</li>
													<li>
														In the last 6 months, I assumed some coordinator
														tasks for the weekend team.
													</li>
												</ul>
											</div>
											<div>
												<h6 className="d-inline-flex mx-4 my-4">
													PSYCHOLOGY Internships
												</h6>
												<p className="d-inline-flex">
													(various Internships between sep'11 - jun'14)
												</p>
											</div>
											<div className="text-center my-4 ">
												<button
													onClick={handleShowLess}
													type="button"
													className="btn btn-outline-dark"
												>
													Show less &#8593;
												</button>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="mx-4 my-4 border-bottom">
							<h3 className="font-monospace">Education</h3>
							<div>
								<h6 className="d-inline-flex mx-4 mt-4 mb-2">
									Fullstack Development Bootcamp
									<span>
										<p className="ms-2 text-dark fw-light">( 2021 )</p>
									</span>
								</h6>

								<a
									href="https://codeop.tech/"
									target="_blank"
									className="mx-4"
									rel="CodeOp"
								>
									<img
										className="logo"
										src="./images/CodeOp.png"
										alt="CodeOp"
										rel="CodeOp"
									/>
								</a>
							</div>
							<div>
								<h6 className="d-inline-flex mx-4 my-2">
									Master about Family violence prevention and management
									<span>
										<p className="ms-2 text-dark fw-light"> ( 2007-2011 )</p>
									</span>
								</h6>
								<a
									href="https://www.il3.ub.edu/ca/estudiants"
									target="_blank"
									className="mx-4"
									rel="IL3"
								>
									<img
										className="logo"
										src="./images/IL3.png"
										alt="IL3"
										rel="IL3"
									/>
								</a>
							</div>
							<div>
								<h6 className="d-inline-flex mx-4 mt-2 mb-4">
									Psychology
									<span>
										<p className="ms-2 text-dark fw-light">( 2007-2011 )</p>
									</span>
								</h6>
								<a
									href="https://www.il3.ub.edu/ca/estudiants"
									target="_blank"
									className="mx-4"
									rel="UB"
								>
									<img
										className="logo"
										src="./images/UB.png"
										alt="UB"
										rel="UB"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
