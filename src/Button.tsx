import React, { FC } from 'react';

interface ButtonProps {
	/** Content of Button */
	children: any;

	/** Button styles */
	fill?: 'solid' | 'outline';

	/** Make Button primary */
	primary?: boolean;
}

export const Button: FC<ButtonProps> = ({
	fill = 'solid',
	primary,
	...props
}) => {
	var classes = 'Button';
	if (primary) classes += ' Button--primary';

	return <div className={classes} {...props} />;
}

Button.displayName = "Button";
