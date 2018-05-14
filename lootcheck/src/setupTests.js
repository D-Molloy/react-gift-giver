import requestAnimationFrame from './tempPolyfills';
 
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
 
// configure({ adapter: new Adapter() })

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
configure({ disableLifecycleMethods: true });