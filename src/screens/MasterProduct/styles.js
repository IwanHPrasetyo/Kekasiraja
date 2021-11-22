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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  buttonFood: {
    flex: 1,
    height: '60%',
    borderRadius: 10,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.yellowMain,
    borderWidth: 1,
  },
  buttonDrink: {
    flex: 1,
    height: '60%',
    borderRadius: 10,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.yellowMain,
    borderWidth: 1,
  },
  fontTitle: {
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
