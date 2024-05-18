import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics.ts';
import ArrowLeft from '../../assets/icons/arrowLeft.svg';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
  onBack?: () => void;
}
const Header: React.FC<HeaderProps> = ({
  children,
  customStyles = {},
  onBack,
}) => {
  const navigation = useNavigation();
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigation.goBack();
    }
  };
  return (
    <View style={[styles.container, customStyles]}>
      <TouchableOpacity onPress={handleBack}>
        <ArrowLeft />
      </TouchableOpacity>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: horizontalScale(20),
  },
});

export default Header;
