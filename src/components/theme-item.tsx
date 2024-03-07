import React from 'react';

import type { ColorSchemeType } from '@/core';
import { translate, useSelectedTheme } from '@/core';
import type { Option } from '@/ui';
import { Options, Pressable, Text, useModal, View } from '@/ui';

export const ThemeItem = () => {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const modal = useModal();

  const onSelect = React.useCallback(
    (option: Option) => {
      setSelectedTheme(option.value as ColorSchemeType);
      modal.dismiss();
    },
    [setSelectedTheme, modal]
  );

  const themes = React.useMemo(
    () => [
      { label: `${translate('settings.theme.dark')} 🌙`, value: 'dark' },
      { label: `${translate('settings.theme.light')} 🌞`, value: 'light' },
      { label: `${translate('settings.theme.system')} ⚙️`, value: 'system' },
    ],
    []
  );

  const theme = React.useMemo(
    () => themes.find((t) => t.value === selectedTheme),
    [selectedTheme, themes]
  );

  return (
    <>
      <Pressable onPress={modal.present} className="">
        <View className="flex-row items-center gap-2">
          <Text className="text-neutral-600 dark:text-white">
            Change Theme:
          </Text>
          <Text className="text-neutral-600 dark:text-white">
            {theme?.label}
          </Text>
        </View>
      </Pressable>
      <Options
        ref={modal.ref}
        options={themes}
        onSelect={onSelect}
        value={theme?.value}
      />
    </>
  );
};
