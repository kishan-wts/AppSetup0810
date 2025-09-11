import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const fullScreenHeight = Dimensions.get('screen').height;
const fullScreenWidth = Dimensions.get('screen').width;

export {screenWidth, screenHeight, fullScreenHeight, fullScreenWidth};
