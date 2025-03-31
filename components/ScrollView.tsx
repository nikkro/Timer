import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {useAnimatedRef,} from 'react-native-reanimated';

import {ThemedView} from '@/components/ThemedView';
import {useBottomTabOverflow} from '@/components/ui/TabBarBackground';

const HEADER_HEIGHT = 250;

export default function ScrollView({
  children
}: PropsWithChildren) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const bottom = useBottomTabOverflow();

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  content: {
    width: '100%',
    flex: 1,
    // padding: 32,
    // gap: 16,
    overflow: 'hidden',
  },
});
