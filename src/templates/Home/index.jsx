/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Base } from '../Base';
import Mock from '../Base/Base.mock';
import { mapData } from '../../api/map-data';

function Home() {
	useEffect(() => {
		const load = async () => {
			const data = await fetch('http://localhost:1337/api/pages?populate=deep');
			const json = await data.json();
			const pageData = mapData(json.data);
			console.log(pageData);
		};
		load();
	}, []);
	return <Base {...Mock} />;
}

export default Home;
