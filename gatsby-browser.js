import CustomLayout from './wrapPageElement';
import 'typeface-montserrat';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};

export const wrapPageElement = CustomLayout;
