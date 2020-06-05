// Pull in WebComponents polyfill for old, crappy browsers
import '@webcomponents/webcomponentsjs/webcomponents-loader';

// Import demo files:
import '../src/composited-card.component';
import './interactive-demo';
import './assets/styles/global.css';

// Include global styles for the duplicate dom rendered composite-card
import { getStyles } from '../src/styles';
const styles = document.createElement('style');
styles.innerHTML = getStyles().cssText.replace(':host', '.compositedCardDomRender');
document.head.appendChild(styles);
