import {StyleSheet} from 'react-native';
import {colors, size} from '../../theme';

const Styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  fontTitle: {
    marginBottom: 5,
    fontSize: size.font12,
    fontFamily: 'NexaXBold',
    color: colors.fontMain,
  },
  fontCount: {
    marginBottom: 5,
    fontSize: size.font20,
    fontFamily: 'NexaXBold',
    color: colors.fontMain,
  },
});

export default Styles;
