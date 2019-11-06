import React from 'react';
import { text } from '@storybook/addon-knobs';

export default {
	title: 'Test'
};

export const CSS = () => <div>{text('children', 'hello')}</div>;
