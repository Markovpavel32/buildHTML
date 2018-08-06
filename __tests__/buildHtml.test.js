import { html } from 'js-beautify';
import buildHtml from '../buildHtml';

test('htmlBuilder', () => {
  expect(html(buildHtml())).toMatchSnapshot();
});
