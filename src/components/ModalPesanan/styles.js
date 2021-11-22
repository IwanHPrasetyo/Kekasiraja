import {StyleSheet} from 'react-native';
import {colors, size} from '../../theme';

const Styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    height: '60%',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  viewHeader: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.yellowMain,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  fontTitle: {
    marginHorizontal: 10,
    fontSize: size.font18,
    fontFamily: 'NexaXBold',
    color: colors.primary,
  },
  fontPesanan: {
    marginHorizontal: 10,
    fontSize: size.font12,
    fontFamily: 'NexaXBold',
    marginBottom: 5,
    color: colors.fontMain,
  },
  iconHeader: {fontSize: 20, color: colors.primary},
  viewFooter: {
    flex: 1,
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.yellowMain,
  },
  viewSubFooter1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSubFooter2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    top: -10,
    right: -5,
    position: 'absolute',
    backgroundColor: colors.grey,
    padding: 16,
    borderRadius: 50,
  },
  viewOrder: {flex: 4, padding: 10},
});

export default Styles;
