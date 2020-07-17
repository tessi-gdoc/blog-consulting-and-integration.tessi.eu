import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Tablet } from '@media';

export const FlexItem = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0.85rem 0;
  ${Tablet} {
    padding: 0.85rem;
    flex: 0 0 ${(props) => props.width};
    max-width: ${(props) => props.width};
  }
`;

FlexItem.defaultProps = {
  width: `auto`
};

FlexItem.propTypes = {
  width: PropTypes.string
};

const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around'
};

const alignMap = {
  start: 'flex-start',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
  stretch: 'stretch'
};

const Flex = styled.div`
  display: flex;
  margin: 0.85rem 0;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => justifyMap[props.justify] || `center`};
  align-items: ${(props) => alignMap[props.align] || `center`};
  flex-wrap: ${(props) => (props.flexWrap ? `wrap` : `nowrap`)};
  flex-grow: ${(props) => (props.flexGrow ? 1 : 0)};
  ${Tablet} {
    margin: -0.85rem;
  }
`;

Flex.defaultProps = {
  direction: `row`,
  flexWrap: true,
  flexGrow: true
};

Flex.propTypes = {
  direction: PropTypes.string,
  align: PropTypes.oneOf([
    'start',
    'end',
    'space-between',
    'space-around',
    'stretch'
  ]),
  justify: PropTypes.oneOf(['start', 'end', 'space-between', 'space-around']),
  flexGrow: PropTypes.bool,
  flexWrap: PropTypes.bool
};

export default Flex;
