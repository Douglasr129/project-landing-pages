import linksMock from '../../components/NavLinks/NavLinks.mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/GridText.mock';

export default {
	children: (
		<>
			<GridText {...gridMock} background />
			<GridText {...gridMock} />
			<GridText {...gridMock} background />
			<GridText {...gridMock} />
			<GridText {...gridMock} background />
			<GridText {...gridMock} />
		</>
	),
	links: linksMock,
	logoData: {
		text: 'Logo',
		link: '#',
	},
	footerHtml: '<p>Teste de footer</p>',
};
