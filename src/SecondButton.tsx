import React from 'react';

interface ButtonProps {
	/** Content of Button */
	children: any;

	/** Button styles */
	fill?: 'solid' | 'outline';

	/** Make Button primary */
	primary?: boolean;
}

export class SecondButton extends React.Component<ButtonProps> {
	static defaultProps = {
		fill: 'solid',
	};

	render() {
		const {
			fill,
			primary,
			...props
		} = this.props;

		var classes = 'Button';
		if (primary) classes += ' Button--primary';

		return <div className={classes} {...props} />;
	}
}
