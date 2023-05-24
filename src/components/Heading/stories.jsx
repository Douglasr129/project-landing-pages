import { Heading } from '.';
import React from 'react';
export default {
	title: 'Heading',
	component: Heading,
	args: {
		children: 'O texto está escuro',
		light: false,
	},
	argsTypes: {
		children: { type: 'string' },
		light: { type: 'boolean' },
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} light={true} />;

Light.parameters = {
	backgrounds: {
		default: 'light',
	},
};

Dark.args = {
	children: 'O texto está claro',
	light: true,
};

Dark.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
