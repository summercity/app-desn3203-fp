// import './TopBar.css';

function TopBar() {
	return (
		<div id="topbar" className="d-flex align-items-center fixed-top">
			<div className="container d-flex justify-content-center justify-content-md-between">
				<div className="contact-info d-flex align-items-center">
					<i className="bi bi-phone d-flex align-items-center">
						<span>+1 403 123321</span>
					</i>
					<i className="bi bi-clock d-flex align-items-center ms-4">
						<span> Tuesday - Sunday</span>
					</i>
				</div>

				<div className="languages d-none d-md-flex align-items-center">
					<ul>
						<li>English</li>
						<li>
							<a href="#/">French</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TopBar;
