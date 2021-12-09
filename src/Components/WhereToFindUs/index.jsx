// import './WhereToFindUs.css';

function WhereToFindUs() {
	return (
		<>
			<section id="where-to-find-us" className="contact">
				<div className="container" data-aos="fade-up">
					<div className="section-title">
						<h2>Where To Find Us</h2>
						<p>Stores</p>
						<span>
							Looking to pick up a bottle or pint? Below you will
							find a list of Calgary establishments carrying Dandy
							beers. You can check out www.liquorconnect.com to
							find all retail accounts carrying our beers across
							the province.{' '}
						</span>
					</div>
				</div>

				<div data-aos="fade-up">
					<iframe
						title="Location"
						style={{ border: 0, width: '100%', height: '350px' }}
						height="350px"
						src="https://maps.google.com/maps?q=Canada%20Calgary&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameBorder="0"
						allowFullScreen
					></iframe>
				</div>
				<hr />
				<div className="container" data-aos="fade-up">
					<div className="row mt-5">
						<div className="col-lg-3">
							<div className="info">
								<div className="address">
									<i className="bi bi-geo-alt"></i>
									<h4>NW</h4>
									<p>
										Kensington Wine Market
										<br />
										Oak and Vine
										<br />
										Brentwood Liquor Depot
										<br />
										Vine Styles: Kensington
										<br />
										Silver Springs Liquor
										<br />
										Highlander Liquor North Hill
										<br />
										Kensington Liquor Cellar
										<br />
										Point McKay Winestore (Growler bar)
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="info">
								<div className="address">
									<i className="bi bi-geo-alt"></i>
									<h4>NE</h4>
									<p>
										Craft Cellars
										<br />
										BK liquor Bridgeland
										<br />
										Forest Lawn Co-op
										<br />
										The Beer Vault
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="info">
								<div className="address">
									<i className="bi bi-geo-alt"></i>
									<h4>SW</h4>
									<p>
										Vine Arts
										<br />
										Dominion Bottle shop
										<br />
										5Vines
										<br />
										Willow Park Wine and Spirits
										<br />
										All Calgary Co-op Locations
										<br />
										Crowfoot Wine and Spirits Altadore
										<br />
										The Cellar Wine Store
										<br />
										Vine Styles: Design District
										<br />
										Highlander Liquor Seton
										<br />
										Oak and Vine Inglewood
										<br />
										Heritage Wine and Spirits
										<br />
										Britannia Wine Merchants
										<br />
										Bin 905
										<br />
										J Webb (17th ave)
										<br />
										J Webb (Glenmore Landing)
										<br />
										Altadore Liquor Depot
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="info">
								<div className="address">
									<i className="bi bi-geo-alt"></i>
									<h4>SE</h4>
									<p>
										Zyn Inglewood
										<br />
										Sundance Wine Market
										<br />
										Oak and Vine Inglewood
										<br />
										Cork Fine Wines
										<br />
										J Webb (Calgary Farmer’s Market)
										<br />
										BK Liquor
										<br />
										Liquor Depot Midlake
										<br />
										The Brewer's Apprentice
										<br />
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container" data-aos="fade-up">
					<div className="section-title">
						{/* <h2>Restaurants/Bars with bottles</h2> */}
						<p>Rodney’s Oyster Bar</p>
						<span>Looking to pick up a bottle or pint?</span>
					</div>
				</div>

				<div className="container" data-aos="fade-up">
					<div className="row mt-5">
						<div className="col-lg-3">
							<div className="info">
								<div className="address">
									<i className="bi bi-geo-alt"></i>
									<h4>Restaurants/Bars with bottles</h4>
									<p>
										Cannibale
										<br />
										Pizza Bobs (Kensington)
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="info">
								<div className="address">
									<i className="bi bi-geo-alt"></i>
									<h4>Restaurants/Bars with bottles</h4>
									<p>
										Shiki Menya (Bridgeland)
										<br />
										Smuggler’s Inn
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="info">
								<div className="address">
									<i className="bi bi-geo-alt"></i>
									<h4>Restaurants/Bars with bottles</h4>
									<p>
										Charcut Roast House
										<br />
										Proof Cocktail Bar
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="info">
								<div className="address">
									<i className="bi bi-geo-alt"></i>
									<h4>Restaurants/Bars with bottles</h4>
									<p>
										Bo's (Red Deer)
										<br />
										Cilantro and Chive (Lacombe)
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<hr />
		</>
	);
}

export default WhereToFindUs;
