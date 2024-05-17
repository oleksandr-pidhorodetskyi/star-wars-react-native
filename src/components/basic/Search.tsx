import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics.ts';
import SearchIcon from '../../assets/icons/search.svg';

interface SearchProps extends TextInputProps {
  children?: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}

const Search: React.FC<SearchProps> = ({
  children,
  customStyles = {},
  ...rest
}) => {
  return (
    <View style={[styles.container, customStyles]}>
      <SearchIcon width={horizontalScale(20)} height={verticalScale(20)} />
      <TextInput style={styles.input} placeholder="Search" {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: horizontalScale(5),
  },
  input: {
    paddingVertical: verticalScale(5),
    fontSize: moderateScale(14),
  },
});

export default Search;
