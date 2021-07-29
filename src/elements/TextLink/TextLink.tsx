import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';

import { TTextLinkProps } from './TextLink.types';
import { TextLinkWrapperStyle } from './TextLink.styles';

const TextLink: FunctionComponent<TTextLinkProps> = ({ children, containerStyle }) => {
  return (
    <View style={[TextLinkWrapperStyle, containerStyle]}>
      <Text
        variant={'regular'}
        textProps={{ style: [{ color: 'blue' }] }}
      >
        {children}
      </Text>
    </View>
  );
};

export { TextLink, TTextLinkProps };
