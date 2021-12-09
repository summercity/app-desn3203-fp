// import './WhatWeDo.css';

function WhatWeDo() {
	return (
		<section id="events" className="events">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>What We Do</h2>
					<p>Organize Your Events in our Restaurant</p>
					<span>
						Offering a full lunch, dinner and brunch menu, the
						Tasting Room brings a unique drinking menu to the craft
						beer experience. With snacks, plates, desserts, and a
						fresh oyster bar, the menu is meant to be shared among
						friends and lovers. Always evolving, the menu is
						perfectly paired with all things Dandy. Vegetarian and
						Vegan options available. Please ask your server. Open
						for Lunch, Dinner, and Brunch.
					</span>
				</div>

				<div
					className="events-slider swiper"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="row event-item">
								<div className="col-lg-6">
									<img
										src="assets/img/what-we-do-1.jpeg"
										className="img-fluid"
										alt=""
									/>
								</div>
								<div className="col-lg-6 pt-4 pt-lg-0 content">
									<h3>Lunch</h3>
									<div className="price">
										<p>
											<span>$289</span>
										</p>
									</div>
									<p className="fst-italic">
										With snacks, plates, desserts, and a
										fresh oyster bar, the menu is meant to
										be shared among friends and lovers.
										Always evolving, the menu is perfectly
										paired with all things Dandy.
									</p>
									<ul>
										<li>
											<i className="bi bi-check-circled"></i>{' '}
											Vegetarian and Vegan options
											available. Please ask your server.
										</li>
										<li>
											<i className="bi bi-check-circled"></i>{' '}
											Duis aute irure dolor in
											reprehenderit in voluptate velit.
										</li>
										<li>
											<i className="bi bi-check-circled"></i>{' '}
											Ullamco laboris nisi ut aliquip ex
											ea commodo consequat.
										</li>
									</ul>
									<p>
										Ullamco laboris nisi ut aliquip ex ea
										commodo consequat. Duis aute irure dolor
										in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur
									</p>
								</div>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="row event-item">
								<div className="col-lg-6">
									<img
										src="assets/img/what-we-do-2.jpeg"
										className="img-fluid"
										alt=""
									/>
								</div>
								<div className="col-lg-6 pt-4 pt-lg-0 content">
									<h3>Dinner</h3>
									<div className="price">
										<p>
											<span>$360</span>
										</p>
									</div>
									<p className="fst-italic">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua.
									</p>
									<ul>
										<li>
											<i className="bi bi-check-circled"></i>{' '}
											Ullamco laboris nisi ut aliquip ex
											ea commodo consequat.
										</li>
										<li>
											<i className="bi bi-check-circled"></i>{' '}
											Duis aute irure dolor in
											reprehenderit in voluptate velit.
										</li>
										<li>
											<i className="bi bi-check-circled"></i>{' '}
											Ullamco laboris nisi ut aliquip ex
											ea commodo consequat.
										</li>
									</ul>
									<p>
										Ullamco laboris nisi ut aliquip ex ea
										commodo consequat. Duis aute irure dolor
										in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur
									</p>
								</div>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="row event-item">
								<div className="col-lg-6">
									<img
										src="assets/img/what-we-do-3.jpeg"
										className="img-fluid"
										alt=""
									/>
								</div>
								<div className="col-lg-6 pt-4 pt-lg-0 content">
									<h3>Brunch</h3>
									<div className="price">
										<p>
											<span>$340</span>
										</p>
									</div>
									<p className="fst-italic">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua.
									</p>
									<ul>
										<li>
											<i className="bi bi-check-circled"></i>{' '}
											Ullamco laboris nisi ut aliquip ex
											ea commodo consequat.
										</li>
										<li>
											<i className="bi bi-check-circled"></i>{' '}
											Duis aute irure dolor in
											reprehenderit in voluptate velit.
										</li>
										<li>
											<i className="bi bi-check-circled"></i>{' '}
											Ullamco laboris nisi ut aliquip ex
											ea commodo consequat.
										</li>
									</ul>
									<p>
										Ullamco laboris nisi ut aliquip ex ea
										commodo consequat. Duis aute irure dolor
										in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		</section>
	);
}

export default WhatWeDo;
