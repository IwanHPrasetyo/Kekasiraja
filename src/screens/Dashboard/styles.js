import {StyleSheet} from 'react-native';
import {colors, metrics, size} from '../../theme';

const Styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.primary},
  viewHeader: {
    zIndex: 1,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#ffa502',
  },
  subHeader: {flex: 1, flexDirection: 'row'},
  subCardHeaderA: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
  },
  subCardHeaderB: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
  },
  subCardHeaderC: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
  },
  subCardHeaderD: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 20,
  },
  cardIncome: {
    zIndex: 2,
    flex: 1,
    top: '50%',
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    position: 'relative',
    backgroundColor: colors.primary,
  },
  fontTitle: {
    marginBottom: 5,
    marginHorizontal: 10,
    fontSize: size.font12,
    fontFamily: 'NexaXBold',
    color: colors.fontMain,
  },
  fontTitle2: {
    marginBottom: 5,
    marginHorizontal: 10,
    fontSize: size.font12,
    fontFamily: 'NexaXBold',
    color: colors.yellowMain,
  },
  fontCount: {
    marginBottom: 5,
    fontSize: size.font20,
    fontFamily: 'NexaXBold',
    color: colors.fontMain,
  },
  viewFooter: {flex: 1.6, paddingTop: 10, backgroundColor: colors.primary},
});

export default Styles;
