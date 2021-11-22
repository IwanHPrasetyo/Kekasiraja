import {StyleSheet} from 'react-native';
import {colors, size} from '../../theme';

const Styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.primary},
  viewHeader: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.yellowMain,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  viewMenu: {
    flex: 1.6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  buttonFood: {
    height: '60%',
    width: '100%',
    borderRadius: 10,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellowMain,
  },
  fontTitle: {
    fontSize: size.font12,
    fontFamily: 'NexaXBold',
    color: colors.primary,
  },
  fontTotal: {
    fontSize: size.font12,
    fontFamily: 'NexaXBold',
    color: colors.fontMain,
  },
  fontHeader: {
    fontSize: size.font18,
    fontFamily: 'NexaXBold',
    color: colors.primary,
  },
});

export default Styles;
