import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select, radios } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';

import App from '../App';
import { Button as ButtonType } from '../features/common/button/models';
import Button from '../features/common/button/Button';
import { Logo } from '../features/common/logo';
import { DropDown } from '../features/common/toggle';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('empty button with children', () => (
    <Button type={ButtonType.Empty} onClick={action('clicked')}>
      😀 😎 👍 💯
    </Button>
  ));

storiesOf('Logo', module)
  .addDecorator(withKnobs)
  .add('Logo', () => <Logo />);

storiesOf('DropDown', module)
  .addDecorator(withKnobs)
  .add('DropDown', () => <DropDown options={[]} option="" onClickHandler={action('clicked')} />)
  .add('DropDown with options', () => (
    <DropDown options={['one', 'two']} option="one" onClickHandler={action('clicked')} />
  ));
