import { FlashList } from '@shopify/flash-list';
import { SplashScreen } from 'expo-router';
import React, { useCallback, useEffect, useMemo } from 'react';
import { showMessage } from 'react-native-flash-message';

import type { Material } from '@/api';
import { useGetItems } from '@/api';
import { Card } from '@/components/card';
import { ThemeItem } from '@/components/theme-item';
import {
  EmptyList,
  FocusAwareStatusBar,
  Image,
  Input,
  SafeAreaView,
  Text,
  View,
} from '@/ui';

const ListFooterComponent = ({
  isFetchingNextPage,
  hasNextPage,
}: {
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
}) => (
  <View className="my-4">
    {isFetchingNextPage ? (
      <Text className="text-center">Loading next page...</Text>
    ) : hasNextPage ? null : (
      <Text className="text-center">No more posts</Text>
    )}
  </View>
);

export default function Feed() {
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      hideSplash();
    }, 1000);
  }, [hideSplash]);

  const [query, setQuery] = React.useState('');

  const {
    data,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isError,
  } = useGetItems({
    variables: {
      world: 'de',
      q: query,
    },
  });

  const flatData = useMemo(() => data?.pages.flatMap((page) => page), [data]);

  const renderItem = useCallback(
    ({ item }: { item: Material }) => <Card {...item} />,
    []
  );

  if (isError) {
    showMessage({ message: 'Error fetching data', type: 'danger' });
  }

  return (
    <SafeAreaView className="flex-1 px-2 pt-2">
      <FocusAwareStatusBar />
      <View className="m-2 flex-row items-center justify-between">
        <Image
          className="h-8 w-32"
          contentFit="contain"
          source={require('@assets/eduki-logo.png')}
        />
        <ThemeItem />
      </View>
      <View className="m-2">
        <Input
          label="Search here the Eduki materials"
          onChangeText={setQuery}
          value={query}
        />
      </View>
      <FlashList
        data={flatData}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={<EmptyList isLoading={isFetching} />}
        estimatedItemSize={300}
        onEndReached={hasNextPage ? fetchNextPage : undefined}
        onEndReachedThreshold={0.2}
        ListFooterComponent={
          <ListFooterComponent
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetching || isFetchingNextPage}
          />
        }
      />
    </SafeAreaView>
  );
}
