import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, TextStyle} from 'react-native';

export type IconSymbolProps = {
  name: string;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
};

export function IconSymbol({
                             name,
                             size = 24,
                             color,
                             style,
                           }: IconSymbolProps) {
    return (
        <MaterialIcons
            name={name as React.ComponentProps<typeof MaterialIcons>['name']}
            size={size}
            color={color}
            style={style}
        />
    );
}
