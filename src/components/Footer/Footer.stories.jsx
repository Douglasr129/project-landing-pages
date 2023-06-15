import { Footer } from '.';

export default {
	title: 'Footer',
	component: Footer,
	args: {
		footerHtml: `<p>
							<a href="https://github.com/Douglasr129">Feito por Douglas Rodrigues</a>
					</p>`,
	},
};

export const Template = (args) => {
	return (
		<div>
			<Footer {...args} />
		</div>
	);
};
