import React, { useEffect, useState, useRef } from 'react';
import { Base } from '../Base';
import { mapData } from '../../api/map-data';
import { PageNotFoud } from '../PageNotFoud';
import { Loading } from '../Loading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { useLocation } from 'react-router-dom';
import config from '../../config';

function Home() {
	const [data, setData] = useState([]);
	const isMounted = useRef(true);
	const location = useLocation();

	useEffect(() => {
		const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
		const slugName = pathname ? pathname : config.defaultSlug;
		console.log(`${config.url}filters[slug][$eqi]=${slugName}&populate=deep`);
		const load = async () => {
			try {
				const data = await fetch(
					`${config.url}filters[slug][$eqi]=${slugName}&populate=deep`,
				);
				const json = await data.json();
				const { attributes } = json.data[0];
				const pageData = mapData([attributes]);
				setData(() => pageData[0]);
			} catch (e) {
				setData(undefined);
			}
		};

		if (isMounted.current === true) {
			load();
		}

		return () => {
			isMounted.current = false;
		};
	}, [location]);

	useEffect(() => {
		if (data === undefined) {
			document.title = `Página não encontrada | ${config.siteName}`;
		}

		if (data && !data.slug) {
			document.title = `Carregando... | ${config.siteName}`;
		}

		if (data && data.title) {
			document.title = `${data.title} | ${config.siteName}`;
		}
	}, [data]);

	if (data === undefined) {
		return <PageNotFoud />;
	}

	if (data && !data.slug) {
		return <Loading />;
	}
	const { menu, sections, footerHtml, slug } = data;
	const { links, text, link, srcImg } = menu;
	return (
		<Base
			links={links}
			footerHtml={footerHtml}
			logoData={{ text, link, srcImg }}
		>
			{sections.map((section, index) => {
				const { component } = section;
				const key = `${slug}-${index}`;
				if (component === 'section.section-two-columns') {
					return <GridTwoColumns key={key} {...section} />;
				}

				if (component === 'section.section-content') {
					return <GridContent key={key} {...section} />;
				}

				if (component === 'section.section-grid-text') {
					return <GridText key={key} {...section} />;
				}

				if (component === 'section.section-grid-image') {
					return <GridImage key={key} {...section} />;
				}
				return null;
			})}
		</Base>
	);
}

export default Home;
