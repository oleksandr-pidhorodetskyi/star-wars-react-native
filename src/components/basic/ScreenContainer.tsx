import React from 'react';
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics.ts';

interface ScreenContainerProps {
  children: React.ReactNode;
  safeAreaStyles?: StyleProp<ViewStyle>;
  contentContainerStyles?: StyleProp<ViewStyle>;
}
const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  safeAreaStyles = {},
  contentContainerStyles = {},
}) => {
  return (
    <SafeAreaView style={[styles.mainContainer, safeAreaStyles]}>
      <View style={[styles.contentContainer, contentContainerStyles]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f6f5f3',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    minHeight: '100%',
  },
  contentContainer: {
    width: '90%',
    marginTop: horizontalScale(10),
    marginHorizontal: 'auto',
    rowGap: verticalScale(10),
  },
});

export default ScreenContainer;
