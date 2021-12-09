// import './Header.css';

function Header() {
	return (
		<header id="header" className="fixed-top d-flex align-items-cente">
			<div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
				<a href="/" className="logo me-auto me-lg-0">
					<img
						src="assets/img/db-logo.png"
						alt=""
						className="img-fluid"
					/>
				</a>

				<nav id="navbar" className="navbar order-last order-lg-0">
					<ul>
						<li>
							<a
								className="nav-link scrollto active"
								href="#welcome"
							>
								Home
							</a>
						</li>
						<li>
							<a className="nav-link scrollto" href="#about">
								About
							</a>
						</li>
						<li>
							<a className="nav-link scrollto" href="#beers">
								Beers
							</a>
						</li>
						<li className="dropdown">
							<a className="nav-link scrollto" href="#menu">
								<span>The Tasting Room</span>
								<i className="bi bi-chevron-down"></i>
							</a>
							<ul>
								<li>
									<a
										className="nav-link scrollto"
										href="#events"
									>
										What We Do
									</a>
								</li>
								<li className="dropdown">
									<a href="#/">
										<span>More Information</span>
										<i className="bi bi-chevron-right"></i>
									</a>
									<ul>
										<li>
											<a
												className="nav-link scrollto"
												href="#tasting-hour"
											>
												Tasting Room Hours
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a
										className="nav-link scrollto"
										href="#gallery"
									>
										Restaurant
									</a>
								</li>
								<li>
									<a href="#shop">Shop</a>
								</li>
							</ul>
						</li>
						<li>
							<a className="nav-link scrollto" href="#artists">
								Artist in Residence
							</a>
						</li>
						<li>
							<a className="nav-link scrollto" href="#gallery">
								Restaurant
							</a>
						</li>
						<li>
							<a className="nav-link scrollto" href="#contact">
								Contact
							</a>
						</li>
					</ul>
					<i className="bi bi-list mobile-nav-toggle"></i>
				</nav>
				<a
					href="#book-a-table"
					className="book-a-table-btn scrollto d-none d-lg-flex nav-link scrollto"
				>
					Book a table
				</a>
			</div>
		</header>
	);
}

export default Header;
