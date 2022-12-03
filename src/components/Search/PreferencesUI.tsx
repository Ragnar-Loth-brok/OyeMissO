import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import CheckboxUI from '../UI/CheckboxUI';

export default function PreferencesUI(props: {
  title: string;
  text: string | null;
  defaultId: number | null;
}) {
  const [check, setCheck] = React.useState(1);
  const selectOption = (id: number) => {
    setCheck(id);
  };

  useEffect(() => {
    selectOption(props.defaultId || 1);
  }, [props.defaultId]);

  return (
    <View>
      <Text style={styles.maintext}>{props.title}</Text>
      {props.text && <Text style={styles.noticetext}>{props.text}</Text>}
      <View style={styles.checkboxview}>
        <CheckboxUI
          title="Yes"
          id={1}
          selectOption={selectOption}
          checkId={check}
        />
        <CheckboxUI
          title="No"
          id={2}
          selectOption={selectOption}
          checkId={check}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maintext: {
    fontSize: wp('4'),
    marginVertical: wp('1'),
    color: colors.black,
    // fontFamily: constants.fontMedium,
  },
  noticetext: {
    color: colors.iconDefaultColor,
    fontSize: wp('3.8'),
  },
  checkboxview: {
    flexDirection: 'row',
  },
});
