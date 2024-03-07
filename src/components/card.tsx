import { Link } from 'expo-router';
import React from 'react';

import type { Material } from '@/api';
import { setItem } from '@/core/storage';
import { Image, Pressable, Text, View } from '@/ui';

import { parseAndRenderTextWithEm } from './parsed-text';

type Props = Material;

export const Card = (props: Props) => {
  const { title, firstPreviewImage, author, price, id } = props;
  const handlePress = () => {
    setItem('card', props);
  };

  return (
    <Link href={`/item/${id}`} asChild>
      <Pressable
        className="m-2 overflow-hidden rounded-xl  border border-neutral-300 bg-slate-100  dark:bg-neutral-900"
        onPress={handlePress}
      >
        <Image
          className="h-56 w-full overflow-hidden rounded-t-xl"
          recyclingKey={String(id)}
          contentFit="cover"
          source={{
            uri: firstPreviewImage.watermarked,
          }}
        />

        <View className="p-2">
          <Text className="py-3 text-2xl ">
            {parseAndRenderTextWithEm(title)}
          </Text>
          <View className="flex-row justify-between">
            <Text className="leading-snug text-gray-600">
              {author.details.publicName}
            </Text>
            <Text className="text-xl font-bold leading-snug text-gray-800">{`${price} €`}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
