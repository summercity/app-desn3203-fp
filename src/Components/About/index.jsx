// import './About.css';

function About() {
	return (
		<section id="about" className="about">
			<div className="container" data-aos="fade-up">
				<div className="row">
					<div
						className="col-lg-6 order-1 order-lg-2"
						data-aos="zoom-in"
						data-aos-delay="100"
					>
						<div className="about-img">
							<img src="assets/img/about.jpg" alt="" />
						</div>
					</div>
					<div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
						<h3>
							The Dandy Brewing Company is Calgary's original
							small brewery. Although it has grown a little, it's
							still small at heart. We produce inspired ales, with
							lots of care, in small batches.
						</h3>
						<p className="fst-italic">
							Our unique approach to brewing and keen eye to every
							detail and fosters creativity in both our recipes
							and beer styles.
						</p>
						<p className="fst-italic">
							On site, we are pleased to offer a
						</p>
						<ul>
							<li>
								<i className="bi bi-check-circle"></i>
								unique brewery experience
							</li>
							<li>
								<i className="bi bi-check-circle"></i>
								featuring a full service tasting room with an
								exquisite menu of fine dining drinking food
							</li>
							<li>
								<i className="bi bi-check-circle"></i> a curated
								selection of cocktails, glass pours of selected
								wines, and 20 taps of Dandy beers.
							</li>
						</ul>
						<p>
							We share a passion for not only brewing, but the
							people, process, experiences, and personal touches
							that make the real ale experience so special.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
