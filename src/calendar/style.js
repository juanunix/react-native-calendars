import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      flex: 1,
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      marginTop: 0,
      marginBottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}

