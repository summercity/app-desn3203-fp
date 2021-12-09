// import './WhyUs.css';

function WhyUs() {
	return (
		<section id="why-us" className="why-us">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>Why Us</h2>
					<p>Why Choose Our Restaurant</p>
				</div>

				<div className="row">
					<div className="col-lg-4">
						<div
							className="box"
							data-aos="zoom-in"
							data-aos-delay="100"
						>
							<span>01</span>
							<h4>Tasting Room</h4>
							<p>
								Offering a full lunch, dinner and brunch menu,
								the Tasting Room brings a unique drinking menu
								to the craft beer experience.
							</p>
						</div>
					</div>

					<div className="col-lg-4 mt-4 mt-lg-0">
						<div
							className="box"
							data-aos="zoom-in"
							data-aos-delay="200"
						>
							<span>02</span>
							<h4>For Friends and Lovers</h4>
							<p>
								With snacks, plates, desserts, and a fresh
								oyster bar, the menu is meant to be shared among
								friends and lovers.
							</p>
						</div>
					</div>

					<div className="col-lg-4 mt-4 mt-lg-0">
						<div
							className="box"
							data-aos="zoom-in"
							data-aos-delay="300"
						>
							<span>03</span>
							<h4>Vegetarian Option</h4>
							<p>
								Vegetarian and Vegan options available. Please
								ask your server. Open for Lunch, Dinner, and
								Brunch.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyUs;
