import React from 'react';

interface ButtonProps {
	/** Make Button primary */
	primary?: boolean;

	/** Content of Button */
	children: any;
}

export const Button: React.FC<ButtonProps> = ({
	primary,
	...props
}) => {
	var classes = 'Button';
	if (primary) classes += ' Button--primary';

	return <div className={classes} {...props} />;
}

Button.displayName = "Button";
