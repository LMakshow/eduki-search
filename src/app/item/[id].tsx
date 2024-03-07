import { Stack } from 'expo-router';
import * as React from 'react';

import type { Material } from '@/api';
import { parseAndRenderTextWithEm } from '@/components/parsed-text';
import { getItem } from '@/core/storage';
import { FocusAwareStatusBar, Image, ScrollView, Text, View } from '@/ui';

export default function Item() {
  const card = getItem('card') as Material;
  const { title, firstPreviewImage, author, price, description } = card;

  return (
    <View className="flex-1 gap-4 p-3 landscape:flex-row">
      <Stack.Screen options={{ title: 'Details', headerBackTitle: 'Main' }} />
      <FocusAwareStatusBar />
      <View className="flex-col gap-4 landscape:w-[50vw]">
        <Text className="m-2 text-center text-2xl">
          {parseAndRenderTextWithEm(title)}
        </Text>
        <Image
          className="h-[50vh] w-full overflow-hidden rounded-t-xl landscape:flex-1"
          contentFit="contain"
          source={{
            uri: firstPreviewImage.watermarked,
          }}
        />
        <View className="flex-row justify-between">
          <Text className="leading-snug text-gray-600">
            {author.details.publicName}
          </Text>
          <Text className="text-xl font-bold leading-snug text-gray-800">{`${price} €`}</Text>
        </View>
      </View>
      <ScrollView>
        <Text>{parseAndRenderTextWithEm(description, 'sm')}</Text>
      </ScrollView>
    </View>
  );
}
