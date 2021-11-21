import {StyleSheet, Dimensions} from 'react-native';
import {colors, size, metrics} from '../../theme';

const Styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight,
    backgroundColor: colors.primary,
  },
  scrollStyle: {height: metrics.screenHeight, backgroundColor: 'yellow'},
  viewHeader: {
    backgroundColor: colors.primary,
    height: metrics.screenHeight * 0.5,
    justifyContent: 'center',
  },
  viewForm: {
    height: metrics.screenHeight * 0.258,
    paddingHorizontal: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  imageLogin: {
    width: '75%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  fontTitle: {
    marginBottom: 5,
    fontSize: size.font30,
    fontFamily: 'NexaXBold',
    color: colors.fontMain,
  },
  fontLogin: {
    fontSize: size.font16,
    color: colors.primary,
    fontFamily: 'NexaXBold',
  },
  fontRegister: {
    fontSize: size.font16,
    fontFamily: 'NexaXBold',
    color: colors.yellowMain,
  },
  fontForgot: {
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'flex-end',
    fontFamily: 'NexaXBold',
    fontSize: size.font14,
    color: colors.fontMain,
  },
  fontRegister: {
    marginTop: 5,
    alignSelf: 'center',
    fontFamily: 'NexaLight',
    fontSize: size.font14,
    color: colors.fontMain,
  },
  fontRegister2: {
    marginTop: 5,
    alignSelf: 'center',
    fontFamily: 'NexaXBold',
    fontSize: size.font14,
    color: colors.fontMain,
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
  viewFooter: {
    height: metrics.screenHeight * 0.2,
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
  },
  buttonLogin: {
    marginBottom: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellowMain,
    height: metrics.screenHeight * 0.08,
  },
});

export default Styles;
