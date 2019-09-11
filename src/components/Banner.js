import styled from '@emotion/styled';

import { primary } from '@colors';
import { Tablet, Desktop } from '@media';

const stripes = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxIiB2aWV3Qm94PSIwIDAgMTM1IDI2NyI+ICA8ZGVmcz4gICAgPGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iLTgwJSIgeDI9IjEyMiUiIHkxPSIxNDQlIiB5Mj0iLTI3JSI+ICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwNjlCMCIvPiAgICAgIDxzdG9wIG9mZnNldD0iMjMlIiBzdG9wLWNvbG9yPSIjMDA3QUJFIi8+ICAgICAgPHN0b3Agb2Zmc2V0PSI0NSUiIHN0b3AtY29sb3I9IiM4RTU1OUYiLz4gICAgICA8c3RvcCBvZmZzZXQ9IjcyJSIgc3RvcC1jb2xvcj0iI0VFNUQ4NCIvPiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0YyODY4RiIvPiAgICA8L2xpbmVhckdyYWRpZW50PiAgICA8cGF0aCBpZD0iYSIgZD0iTTMzIDEzNEwyMzkgMHY2M0wzMyAyMDB2LTY2ek0wIDI3MGwyMDYtMTM0djYzTDAgMzM2di02NnoiLz4gICAgPGxpbmVhckdyYWRpZW50IGlkPSJkIiB4MT0iMCUiIHkxPSI1MCUiIHkyPSI1MCUiPiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDY5QjAiLz4gICAgICA8c3RvcCBvZmZzZXQ9IjE5JSIgc3RvcC1jb2xvcj0iIzAwN0FCRSIvPiAgICAgIDxzdG9wIG9mZnNldD0iNDklIiBzdG9wLWNvbG9yPSIjOEU1NTlGIi8+ICAgICAgPHN0b3Agb2Zmc2V0PSI4NCUiIHN0b3AtY29sb3I9IiNFRTVEODQiLz4gICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGMjg2OEYiLz4gICAgPC9saW5lYXJHcmFkaWVudD4gIDwvZGVmcz4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNCkiPiAgICA8bWFzayBpZD0iYyIgZmlsbD0iI2ZmZiI+ICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPiAgICA8L21hc2s+ICAgIDx1c2UgZmlsbD0idXJsKCNiKSIgeGxpbms6aHJlZj0iI2EiLz4gICAgPGcgZmlsbD0idXJsKCNkKSIgbWFzaz0idXJsKCNjKSI+ICAgICAgPHBhdGggZD0iTTIwIDYzbDIxNC03OCA5NyAyNjQtMjE1IDc4eiIvPiAgICA8L2c+ICA8L2c+PC9zdmc+`;

export const Section = styled.section`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 108px;
    right: auto;
    left: 0;
    top: -32px;
    background: url(${stripes}) no-repeat center/cover;
    ${Tablet} {
      width: 60px;
      height: 196px;
      top: -60px;
    }
    ${Desktop} {
      width: 135px;
      height: 273px;
      top: -64px;
    }
  }
`;

const Banner = styled(Section)`
  background-color: ${primary};
  color: white;
`;

export default Banner;
