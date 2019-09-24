import React from 'react';
import styled from '@emotion/styled';

import Container from '@components/Container';
import HTML from '@components/HTML';
import Cta, { enumTypes } from '@components/Cta';
import ConsultingLogo from '@components/Icon/ConsultingLogo';
import useTranslations from '@hooks/use-translations';
import { secondary, primary } from '@colors';

const Subtitle = styled.h2`
  color: ${secondary};
`;
const ThankYou = () => {
  const [
    {
      thankYouPage: { title, subtitle, content, cta }
    }
  ] = useTranslations();
  return (
    <>
      <Container css={{ textAlign: `center` }}>
        <ConsultingLogo widthPx={100} color={primary} />
        <h1>{title}</h1>
        <Subtitle>{subtitle}</Subtitle>
        <HTML css={{ fontSize: `18px` }} markdown={content} />
        <Cta
          type={enumTypes.SECONDARY}
          size="x-large"
          link="/whitepapers"
          css={{ marginTop: 16 }}
        >
          {cta}
        </Cta>
      </Container>
    </>
  );
};

export default ThankYou;
