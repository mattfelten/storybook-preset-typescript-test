import React from 'react';
import { SecondButton } from './SecondButton';
import { boolean, text } from '@storybook/addon-knobs';

export default {
	title: 'Class Button'
};

export const base = () => <SecondButton primary={boolean('primary', false)}>{text('children', 'hello')}</SecondButton>;
