import styled from '@emotion/styled';
import { Tablet } from '@media';

const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin: 0px auto;
  padding: 2.5rem 0.75rem;
  ${Tablet} {
    padding: 6rem 0.75rem;
  }
`;

export default Container;
