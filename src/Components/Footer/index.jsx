// import './Footer.css';

function Footer() {
	return (
		<footer id="footer">
			<div className="container">
				<div className="copyright">
					&copy; Copyright{' '}
					<strong>
						<span>Restaurantly</span>
					</strong>
					. All Rights Reserved
				</div>
				<div className="credits">
					Designed by{' '}
					<a href="https://bootstrapmade.com/">BootstrapMade</a>
				</div>
				<div className="social-links mt-3">
					<a
						href="https://twitter.com/DandyAlesYYC"
						className="twitter"
					>
						<i className="bx bxl-twitter"></i>
					</a>
					<a
						href="https://www.facebook.com/dandyalesyyc/"
						className="facebook"
					>
						<i className="bx bxl-facebook"></i>
					</a>
					<a
						href="https://www.instagram.com/dandyalesyyc"
						className="instagram"
					>
						<i className="bx bxl-instagram"></i>
					</a>
					<a
						href="https://www.skype.com/dandyalesyyc"
						className="google-plus"
					>
						<i className="bx bxl-skype"></i>
					</a>
					<a
						href="https://www.linkedin.com/dandyalesyyc"
						className="linkedin"
					>
						<i className="bx bxl-linkedin"></i>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
