// import './Gallery.css';

function Gallery() {
	return (
		<section id="gallery" className="gallery">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>Restaurant</h2>
					<p>Our Restaurant</p>
					<span>
						Offering a full lunch, dinner and brunch menu, the
						Tasting Room brings a unique drinking menu to the craft
						beer experience.{' '}
					</span>
					<span>
						With snacks, plates, desserts, and a fresh oyster bar,
						the menu is meant to be shared among friends and lovers.
						Always evolving, the menu is perfectly paired with all
						things Dandy. Vegetarian and Vegan options available.
						Please ask your server. Open for Lunch, Dinner, and
						Brunch.
					</span>
				</div>
			</div>

			<div
				className="container-fluid"
				data-aos="fade-up"
				data-aos-delay="100"
			>
				<div className="row g-0">
					<div className="col-lg-3 col-md-4">
						<div className="gallery-item">
							<a
								href="assets/img/gallery/gallery-1.jpg"
								className="gallery-lightbox"
								data-gall="gallery-item"
							>
								<img
									src="assets/img/gallery/gallery-1.jpg"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="gallery-item">
							<a
								href="assets/img/gallery/gallery-2.jpg"
								className="gallery-lightbox"
								data-gall="gallery-item"
							>
								<img
									src="assets/img/gallery/gallery-2.jpg"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="gallery-item">
							<a
								href="assets/img/gallery/gallery-3.jpg"
								className="gallery-lightbox"
								data-gall="gallery-item"
							>
								<img
									src="assets/img/gallery/gallery-3.jpg"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="gallery-item">
							<a
								href="assets/img/gallery/gallery-4.jpg"
								className="gallery-lightbox"
								data-gall="gallery-item"
							>
								<img
									src="assets/img/gallery/gallery-4.jpg"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="gallery-item">
							<a
								href="assets/img/gallery/gallery-5.jpg"
								className="gallery-lightbox"
								data-gall="gallery-item"
							>
								<img
									src="assets/img/gallery/gallery-5.jpg"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="gallery-item">
							<a
								href="assets/img/gallery/gallery-6.jpg"
								className="gallery-lightbox"
								data-gall="gallery-item"
							>
								<img
									src="assets/img/gallery/gallery-6.jpg"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="gallery-item">
							<a
								href="assets/img/gallery/gallery-7.jpg"
								className="gallery-lightbox"
								data-gall="gallery-item"
							>
								<img
									src="assets/img/gallery/gallery-7.jpg"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="gallery-item">
							<a
								href="assets/img/gallery/gallery-8.jpg"
								className="gallery-lightbox"
								data-gall="gallery-item"
							>
								<img
									src="assets/img/gallery/gallery-8.jpg"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
