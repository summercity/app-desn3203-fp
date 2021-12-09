import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';

import TopBar from './Components/TopBar';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import ContentWrapper from './Components/ContentWrapper';
import About from './Components/About';
import WhyUs from './Components/WhyUs';
import Beer from './Components/Beer';
import TheTastingRoom from './Components/TheTastingRoom';
import WhatWeDo from './Components/WhatWeDo';
import BookATable from './Components/BookATable';
import Shop from './Components/Shop';
import Program from './Components/Program';
import Story from './Components/Story';
import Gallery from './Components/Gallery';
import TastingRoomHour from './Components/TastingRoomHour';
import WhereToFindUs from './Components/WhereToFindUs';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

import './App.css';

const App = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleOk = () => {
		sessionStorage.setItem('age-auth', true);
		window.location.reload();
	};

	useEffect(() => {
		var ageAuth = sessionStorage.getItem('age-auth');
		if (!ageAuth) {
			setIsModalVisible(true);
		} else {
			setIsModalVisible(false);
		}
	}, []);

	return (
		<>
			<Modal
				className="age-checker"
				closable={false}
				visible={isModalVisible}
				title="You must be at least 18 years old to enter this website."
				onOk={handleOk}
				// onCancel={handleCancel}
				footer={[
					<Button
						key="submit"
						type="primary"
						// loading={loading}
						onClick={handleOk}
					>
						I am 18 or older - Enter
					</Button>,
					<Button
						key="link"
						href="https://google.com"
						type="danger"
						// loading={loading}
						// onClick={handleOk}
					>
						EXIT
					</Button>,
				]}
			>
				<p>This website contains age-restricted content.</p>
				<p>You must be 18 years old or over to enter.</p>
			</Modal>
			{!isModalVisible ? (
				<ContentWrapper>
					<TopBar />
					<Header />
					<Welcome />
					<About />
					<WhyUs />
					<Beer />
					<TheTastingRoom />
					<WhatWeDo />
					<TastingRoomHour />
					<BookATable />
					<Program />
					<Story />
					<Gallery />
					<Shop />
					<WhereToFindUs />
					<ContactUs />
					<Footer />
				</ContentWrapper>
			) : (
				''
			)}
		</>
	);
};

export default App;
