import React from 'react';
import { Button } from './Button';
import { boolean, text } from '@storybook/addon-knobs';

export default {
	title: 'Button'
};

export const base = () => <Button primary={boolean('primary', false)}>{text('children', 'hello')}</Button>;
