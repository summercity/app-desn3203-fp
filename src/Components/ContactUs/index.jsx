// import './ContactUs.css';

function ContactUs() {
	return (
		<section id="contact" className="contact">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>Contact</h2>
					<p>Contact Us</p>
					<span>Questions. Comments. Concerns.</span>
				</div>
			</div>

			<div className="container" data-aos="fade-up">
				<div className="row mt-5">
					<div className="col-lg-4">
						<div className="info">
							<div className="address">
								<i className="bi bi-geo-alt"></i>
								<h4>Location:</h4>
								<p>2003 11th Street SE, Calgary, AB.</p>
							</div>

							<div className="open-hours">
								<i className="bi bi-clock"></i>
								<h4>Office Hours:</h4>
								<p>
									Monday:
									<br />
									Monday: Closed
									<br />
									<br />
									Tuesday - Friday:
									<br />
									11:30 am - 10:00 pm
									<br />
									<br />
									Saturday - Sunday
									<br />
									Closed
								</p>
							</div>

							<div className="email">
								<i className="bi bi-envelope"></i>
								<h4>Email:</h4>
								<p>info@DandyBrewing .com</p>
							</div>

							<div className="phone">
								<i className="bi bi-phone"></i>
								<h4>Call:</h4>
								<p>+1 403 123321</p>
							</div>
						</div>
					</div>

					<div className="col-lg-8 mt-5 mt-lg-0">
						<form className="php-email-form">
							<div className="row">
								<div className="col-md-6 form-group">
									<input
										type="text"
										name="name"
										className="form-control"
										id="name"
										placeholder="Your Name"
										required
									/>
								</div>
								<div className="col-md-6 form-group mt-3 mt-md-0">
									<input
										type="email"
										className="form-control"
										name="email"
										id="email"
										placeholder="Your Email"
										required
									/>
								</div>
							</div>
							<div className="form-group mt-3">
								<input
									type="text"
									className="form-control"
									name="subject"
									id="subject"
									placeholder="Subject"
									required
								/>
							</div>
							<div className="form-group mt-3">
								<textarea
									className="form-control"
									name="message"
									rows="8"
									placeholder="Message"
									required
								/>
							</div>
							<div className="my-3">
								<div className="loading">Loading</div>
								<div className="error-message"></div>
								<div className="sent-message">
									Your message has been sent. Thank you!
								</div>
							</div>
							<div className="text-center">
								<button type="submit">Send Message</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<hr />
		</section>
	);
}

export default ContactUs;
