import {StyleSheet} from 'react-native';
import {colors, size} from '../../theme';

const Styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.primary},
  viewHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.yellowMain,
  },
  viewHeader2: {
    flex: 1,
    backgroundColor: colors.yellowMain,
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center',
  },
  fontTitle: {
    marginBottom: 5,
    fontSize: size.font20,
    fontFamily: 'NexaXBold',
    color: colors.primary,
  },
});

export default Styles;
