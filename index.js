/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from "./App"
import {name as appName} from './app.json';
// import App from './chapter4/App';
// import {  styles,buttons} from "./chapter4/styles";
// console.log( new App(45))
AppRegistry.registerComponent(appName, () => App);
