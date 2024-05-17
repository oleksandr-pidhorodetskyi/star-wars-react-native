import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics.ts';

interface CustomButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  customStyles = {},
  ...rest
}) => {
  return (
    <TouchableOpacity style={[styles.btn, customStyles]} {...rest}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(4),
    borderColor: 'rgba(255, 42, 36, 0.78)',
    borderStyle: 'solid',
    borderWidth: moderateScale(1),
  },
  btnText: {
    color: 'rgba(255, 42, 36, 0.78)',
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
});

export default CustomButton;
