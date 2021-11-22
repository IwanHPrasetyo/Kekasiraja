import {StyleSheet} from 'react-native';
import {colors, size, metrics} from '../../theme';

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
  iconHeader: {fontSize: 20, color: colors.primary},
  viewFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.primary,
  },
  closeButton: {
    top: -10,
    right: -5,
    position: 'absolute',
    backgroundColor: colors.grey,
    padding: 16,
    borderRadius: 50,
  },
  viewOrder: {flex: 4, padding: 10, justifyContent: 'center'},
  daftar: {
    height: '80%',
    width: '90%',
    borderRadius: 10,
    backgroundColor: colors.yellowMain,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.input,
    height: metrics.screenHeight * 0.07,
  },
});

export default Styles;
