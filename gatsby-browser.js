import CustomLayout from './wrapPageElement';
import 'typeface-montserrat';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export const onClientEntry = () => {
  if (typeof window.IntersectionObserver === `undefined`) {
    // eslint-disable-next-line no-unused-expressions
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};

export const wrapPageElement = CustomLayout;
