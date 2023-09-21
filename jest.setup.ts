import '@testing-library/jest-dom';

import { configure } from '@testing-library/dom';

require('jest-axe/extend-expect');

configure({ testIdAttribute: 'data-automationid' });

window.scrollTo = jest.fn();
global.open = jest.fn();
global.fetch = jest.fn();