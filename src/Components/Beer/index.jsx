// import './Beer.css';

function Beer() {
	return (
		<section id="beers" className="beers">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>Beers</h2>
					<p>The Dandy Line Up</p>
					<span>
						The full Dandy line up of beers. Made in small batches,
						available province-wide.
					</span>
				</div>

				<div className="row" data-aos="fade-up" data-aos-delay="100">
					<div className="col-lg-3">
						<ul className="nav nav-tabs flex-column">
							<li className="nav-item">
								<a
									className="nav-link active show"
									data-bs-toggle="tab"
									href="#tab-1"
								>
									Dandy in the Underworld
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									data-bs-toggle="tab"
									href="#tab-2"
								>
									Une Vieille Maitresse
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									data-bs-toggle="tab"
									href="#tab-3"
								>
									The Dandy Wild Sour Ale
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									data-bs-toggle="tab"
									href="#tab-4"
								>
									The Golden Brown Dandy
								</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-9 mt-4 mt-lg-0">
						<div className="tab-content">
							<div className="tab-pane active show" id="tab-1">
								<div className="row">
									<div className="col-lg-8 details order-2 order-lg-1">
										<h3>Dandy in the Underworld</h3>
										<p className="fst-italic">5.5% ABV</p>
										<p>
											The main Dandy. This beer is our
											most popular offering and available
											everywhere, all the time. A light
											body with notes of coffee,
											chocolate, and light roast, this
											traditional Oyster Stout is sure to
											be a favourite.
										</p>
										<p>
											Pairs well with oysters, fish, and
											other salty snacks!
										</p>
									</div>
									<div className="col-lg-4 text-center order-1 order-lg-2">
										<img
											src="assets/img/beers-1.jpeg"
											alt=""
											className="img-fluid"
										/>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="tab-2">
								<div className="row">
									<div className="col-lg-8 details order-2 order-lg-1">
										<h3>Une Vieille Maitresse</h3>
										<p className="fst-italic">4.5% ABV</p>
										<p>
											This farmhouse ale is available year
											round in the bottle and draught. A
											table strength beer brewed with rye
											and french saison yeast. It is
											light, refreshing, with a touch of
											spice and saison character. Brewed
											once as a limited edition, we can't
											seem to shake this old mistress.
										</p>
									</div>
									<div className="col-lg-4 text-center order-1 order-lg-2">
										<img
											src="assets/img/beers-2.jpeg"
											alt=""
											className="img-fluid"
										/>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="tab-3">
								<div className="row">
									<div className="col-lg-8 details order-2 order-lg-1">
										<h3>The Dandy Wild Sour Ale</h3>
										<p className="fst-italic">7.3%</p>
										<p>
											A bold, malty sour ale soured with
											lactobacillus and fermented with a
											wild yeast strain. An upfront
											sourness is balanced with wild yeast
											character for a rich sour
											experience.
										</p>
									</div>
									<div className="col-lg-4 text-center order-1 order-lg-2">
										<img
											src="assets/img/beers-3.jpeg"
											alt=""
											className="img-fluid"
										/>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="tab-4">
								<div className="row">
									<div className="col-lg-8 details order-2 order-lg-1">
										<h3>The Golden Brown Dandy</h3>
										<p className="fst-italic">6% ABV</p>
										<p>
											Our English Pale ale. This beer is a
											low-carbonation ode to real-ale. A
											smooth malt body is balanced with a
											highly intensive hops schedule to
											bring forward a great tasting beer
											to reward all ale lovers! Available
											only in bottles and casks.
										</p>
										<p>
											Pairs well with meats, rich sauces
											and hard, aged cheeses
										</p>
									</div>
									<div className="col-lg-4 text-center order-1 order-lg-2">
										<img
											src="assets/img/beers-4.jpeg"
											alt=""
											className="img-fluid"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section-title">
					<h2>Beers</h2>
					<p>Seasonal Releases</p>
					<span>
						Four exciting beers a year with wide release. Look for
						them when the weather begins to turn.
					</span>
				</div>

				<div className="row" data-aos="fade-up" data-aos-delay="100">
					<div className="col-lg-3">
						<ul className="nav nav-tabs flex-column">
							<li className="nav-item">
								<a
									className="nav-link active show"
									data-bs-toggle="tab"
									href="#tab-5"
								>
									Baltus van Tassel: Cherry Sour
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									data-bs-toggle="tab"
									href="#tab-6"
								>
									In the Bleak Midwinter: Black IPA
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									data-bs-toggle="tab"
									href="#tab-7"
								>
									The Jungle Bird: Tropical Dark Sour
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									data-bs-toggle="tab"
									href="#tab-8"
								>
									Bright Young Things: Hopped Wheat Ale
								</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-9 mt-4 mt-lg-0">
						<div className="tab-content">
							<div className="tab-pane active show" id="tab-5">
								<div className="row">
									<div className="col-lg-8 details order-2 order-lg-1">
										<h3>Baltus van Tassel: Cherry Sour</h3>
										<p className="fst-italic">7% ABV</p>
										<p>Fall</p>
										<p>
											An American Style Cherry Sour. A
											rich brown American Brown sour
											brewed with Sweet and Tart cherries
											for the perfect accompaniment to
											shorter days and colder weather.
										</p>
									</div>
									<div className="col-lg-4 text-center order-1 order-lg-2">
										<img
											src="assets/img/beers-1-a.jpeg"
											alt=""
											className="img-fluid"
										/>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="tab-6">
								<div className="row">
									<div className="col-lg-8 details order-2 order-lg-1">
										<h3>
											In the Bleak Midwinter: Black IPA
										</h3>
										<p className="fst-italic">6.5% ABV</p>
										<p>Winter</p>
										<p>
											A fruity Black IPA. With only a kiss
											of roast, this black IPA is fresh
											and juicy but dark as the coldest
											days of winter. Citra and Mosaic are
											late hop additions to avoid the
											bitterness and focus on aroma.
										</p>
									</div>
									<div className="col-lg-4 text-center order-1 order-lg-2">
										<img
											src="assets/img/beers-2-a.jpeg"
											alt=""
											className="img-fluid"
										/>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="tab-7">
								<div className="row">
									<div className="col-lg-8 details order-2 order-lg-1">
										<h3>
											The Jungle Bird: Tropical Dark Sour
										</h3>
										<p className="fst-italic">5% ABV</p>
										<p>Spring</p>
										<p>
											An homage to the classic Tiki
											cocktail. This beer has notes of
											demerara sugar, bitter lime,
											tropical pineapple coming together
											for a refreshing sour that is like
											no other.
										</p>
									</div>
									<div className="col-lg-4 text-center order-1 order-lg-2">
										<img
											src="assets/img/beers-3-a.jpeg"
											alt=""
											className="img-fluid"
										/>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="tab-8">
								<div className="row">
									<div className="col-lg-8 details order-2 order-lg-1">
										<h3>
											Bright Young Things: Hopped Wheat
											Ale
										</h3>
										<p className="fst-italic">5.5% ABV</p>
										<p>Summer</p>
										<p>
											English Summer Ale. A style
											developed during a late 70’s heat
											wave in England, this beer is
											designed to refresh in the hot
											summer sun. Dry, with a touch of
											wheat and toasted Victory malt, it
											is balanced with a touch of
											bitterness and a sweet citrus aroma.
											Patios, BBQ’s, and friends all pair
											perfectly with this beer!
										</p>
									</div>
									<div className="col-lg-4 text-center order-1 order-lg-2">
										<img
											src="assets/img/beers-4-a.jpeg"
											alt=""
											className="img-fluid"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Beer;
