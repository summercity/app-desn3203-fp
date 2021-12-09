// import './TastingRoomHour.css';

function TastingRoomHour() {
	return (
		<section id="tasting-hour" className="contact">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>Tasting Room Hour</h2>
					<p>Hour</p>
				</div>
			</div>

			<div className="container" data-aos="fade-up">
				<div className="row mt-5">
					<div className="col-lg-3">
						<div className="info">
							<div className="address">
								<i className="bi bi-clock"></i>
								<h4>Monday</h4>
								<p>Closed</p>
							</div>

							<div className="open-hours">
								<i className="bi bi-clock"></i>
								<h4>Tuesday</h4>
								<p>11:30 am - 10 pm</p>
							</div>
						</div>
					</div>

					<div className="col-lg-3">
						<div className="info">
							<div className="address">
								<i className="bi bi bi-clock"></i>
								<h4>Wednesday</h4>
								<p>11:30 am - 10 pm</p>
							</div>

							<div className="open-hours">
								<i className="bi bi-clock"></i>
								<h4>Thursday</h4>
								<p>11:30 am - 10 pm</p>
							</div>
						</div>
					</div>

					<div className="col-lg-3">
						<div className="info">
							<div className="address">
								<i className="bi bi bi-clock"></i>
								<h4>Friday</h4>
								<p>11:30 am - Midnight</p>
							</div>

							<div className="open-hours">
								<i className="bi bi-clock"></i>
								<h4>Saturday</h4>
								<p>11:30 am - Midnight</p>
							</div>
						</div>
					</div>

					<div className="col-lg-3">
						<div className="info">
							<div className="email">
								<i className="bi bi bi-clock"></i>
								<h4>Sunday</h4>
								<p>10 am - 8 pm</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TastingRoomHour;
