import { Base } from '.';

import mock from './Base.mock';

export default {
	title: 'Templates/Base',
	component: Base,
	args: {
		...mock,
	},
};

export const Template = (args) => {
	return (
		<div>
			<Base {...args} />
		</div>
	);
};
