// import './Shop.css';

function Shop() {
	return (
		<section id="shop" className="contact">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>Shop</h2>
					<p>Dandy's Merchandise</p>
					<span>
						Dandy is pleased to offer a small offering of
						merchandise. Along with T-Shirts and hats, we are
						pleased to offer numbered silk screen prints, designed
						by Artists we are so pleased to call friends, and
						printed by the team at Burnt Toast Studios. We are also
						excited to announce a collaborative with North American
						Quality Purveyors on a line of T-shirts and baseball
						caps. We worked together to design custom cut shirts and
						hats, that fit a Dandy perfectly.{' '}
					</span>
				</div>
			</div>

			<div className="container" data-aos="fade-up">
				<div className="row mt-5">
					<div className="col-lg-3">
						<div className="shop-wrapper">
							<div className="shop-card">
								<img
									src="https://blog.printsome.com/wp-content/uploads/JakePaul-483x483.png"
									alt="Shop-1"
								/>
								<h4>Sweater</h4>
								<p>$75</p>
								<button className="btn btn-primary animated fadeInUp scrollto">
									ADD TO CART
								</button>
							</div>
						</div>
					</div>

					<div className="col-lg-3">
						<div className="shop-wrapper">
							<div className="shop-card">
								<img
									src="https://coyotetshirts.ca/wp-content/uploads/2021/04/cgm692_Model-300x300.jpg"
									alt="Shop-1"
								/>
								<h4>Polo Shirt</h4>
								<p>$115</p>
								<button className="btn btn-primary animated fadeInUp scrollto">
									ADD TO CART
								</button>
							</div>
						</div>
					</div>

					<div className="col-lg-3">
						<div className="shop-wrapper">
							<div className="shop-card">
								<img
									src="https://printify.com/wp-content/uploads/2021/08/Youtuber-Merch-Roman-Atwood-300x300.jpg"
									alt="Shop-1"
								/>
								<h4>Long T-Shirt</h4>
								<p>$54</p>
								<button className="btn btn-primary animated fadeInUp scrollto">
									ADD TO CART
								</button>
							</div>
						</div>
					</div>

					<div className="col-lg-3">
						<div className="shop-wrapper">
							<div className="shop-card">
								<img
									src="https://4x5i92wo8qu258zo818muocf-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/NYGH-Men-Short-Sleeve-Inline-1-300x300.jpg"
									alt="Shop-1"
								/>
								<h4>T-Shirt</h4>
								<p>$25</p>
								<button className="btn btn-primary animated fadeInUp scrollto">
									ADD TO CART
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
		</section>
	);
}

export default Shop;
