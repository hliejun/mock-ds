import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { TextLink } from './TextLink';

storiesOf('Elements|Text Link', module)
  .addDecorator(withKnobs)
  .add('default', (): JSX.Element => <TextLink>{text('Text', 'text to be used inline. (not a link yet)')}</TextLink>)
  .add('small', (): JSX.Element => <TextLink>{text('Text', 'text to be used inline. (not a link yet')}</TextLink>);
