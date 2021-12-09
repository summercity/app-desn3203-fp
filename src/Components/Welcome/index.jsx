// import './Welcome.css';

function Welcome() {
	return (
		<section id="welcome" className="d-flex align-items-center">
			<div
				className="container position-relative text-center text-lg-start"
				data-aos="zoom-in"
				data-aos-delay="100"
			>
				<div className="row">
					<div
						className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
						data-aos="zoom-in"
						data-aos-delay="200"
					>
						<a
							href="https://www.youtube.com/watch?v=SmKG60Yv--0"
							className="glightbox play-btn"
						>
							{null}
						</a>
					</div>
					<div className="col-lg-8">
						<h1>
							Welcome to <span>Dandy Brewing</span>
						</h1>
						<h2> Calgary's original small brewery!</h2>

						<div className="btns">
							<a
								href="#shop"
								className="btn-menu animated fadeInUp scrollto"
							>
								Shop Now
							</a>
							<a
								href="#book-a-table"
								className="btn-book animated fadeInUp scrollto"
							>
								Book a Table Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Welcome;
