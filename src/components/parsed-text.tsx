import React from 'react';

import { Text } from '@/ui';

export const parseAndRenderTextWithEm = (input: string, size = 'lg') => {
  const parts = input.split('<em>');

  return parts.map((part, index) => {
    const subParts = part.split('</em>');
    if (subParts.length === 2) {
      return (
        <Text
          className={`${size === 'lg' && 'text-2xl'} font-bold`}
          key={index}
        >
          {subParts[0]}
          <Text className={`${size === 'lg' && 'text-2xl'}`}>
            {subParts[1]}
          </Text>
        </Text>
      );
    }

    return part;
  });
};
