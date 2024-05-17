import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../basic/CustomButton.tsx';
import {horizontalScale, moderateScale} from '../../../utils/metrics.ts';
import FansContainer from './FansContainer.tsx';

const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Fans</Text>
        <CustomButton>Clear fans</CustomButton>
      </View>
      <FansContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: horizontalScale(20),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '300',
  },
});

export default Header;
