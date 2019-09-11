import React from 'react';
import { graphql } from 'gatsby';
import { toUpper, equals } from 'ramda';
import Img from 'gatsby-image';
import * as Yup from 'yup';
import { css } from '@emotion/core';

import useTranslations from '@hooks/use-translations';
import Flex, { FlexItem } from '@components/Flex';
import Container from '@components/Container';
import Checkbox from '@components/Checkbox';
import Cta, { enumTypes } from '@components/Cta';
import HTML from '@components/HTML';
import FormikContainer, {
  FormField,
  SelectField
} from '@components/FormikContainer';
import createContact from '@plezi';
import { Tablet } from '@media';

const ValidationSchema = Yup.object().shape({
  company: Yup.string().required('required'),
  last_name: Yup.string().required('required'),
  first_name: Yup.string().required('required'),
  email: Yup.string()
    .email('invalidMail')
    .required('required'),
  phone: Yup.string()
    .matches(/([(+]*[0-9]+[()+. -]*)/, 'invalidPhone')
    .required('required'),
  where_are_you_based: Yup.string().required('required'),
  what_is_the_time_frame_you_have_for_planning_your_project: Yup.string().required(
    'required'
  ),
  which_of_our_expertises_are_you_interested_in: Yup.array(Yup.string()).min(
    1,
    'required'
  ),
  details_on_your_project: Yup.string().required('required'),
  gdpr: Yup.boolean()
    .test('gdpr-checked', 'uncheckedGDPR', equals(true))
    .required('required')
});

const Demo = ({
  data: {
    file,
    partners: { edges }
  },
  pageContext: { locale }
}) => {
  const [t, , countries] = useTranslations();
  const {
    partners,
    demoPage: { title, content, form, submit, moreGdpr, gdprNotice }
  } = t;
  const initialValues = {
    company: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    where_are_you_based: toUpper(locale),
    what_is_the_time_frame_you_have_for_planning_your_project:
      form.timeFrame[0],
    which_of_our_expertises_are_you_interested_in: [],
    details_on_your_project: '',
    gdpr: false
  };
  return (
    <Container>
      <h2
        css={css`
          text-transform: uppercase;
        `}
      >
        {title}
      </h2>
      <Flex align="start">
        <FlexItem width="40%">
          <HTML markdown={content[0]} />
          <Img fluid={file.childImageSharp.fluid} alt="newsletter" />
          <HTML markdown={content[1]} />
        </FlexItem>
        <FlexItem width="60%">
          <FormikContainer
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={values =>
              createContact({
                data: { type: 'contacts', attributes: values }
              })
            }
          >
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <Flex>
                  <FlexItem width="50%">
                    <FormField required name="company" label={form.company} />
                  </FlexItem>
                  <FlexItem width="50%">
                    <FormField
                      required
                      name="first_name"
                      label={form.first_name}
                    />
                  </FlexItem>
                </Flex>
                <Flex>
                  <FlexItem width="50%">
                    <FormField
                      required
                      name="last_name"
                      label={form.last_name}
                    />
                  </FlexItem>
                  <FlexItem width="50%">
                    <FormField required name="email" label={form.email} />
                  </FlexItem>
                </Flex>
                <Flex>
                  <FlexItem width="50%">
                    <FormField required name="phone" label={form.phone} />
                  </FlexItem>
                  <FlexItem width="50%">
                    <SelectField
                      required
                      name="where_are_you_based"
                      label={form.where_are_you_based}
                    >
                      {Object.keys(countries).map(key => (
                        <option key={key} value={key}>
                          {countries[key]}
                        </option>
                      ))}
                    </SelectField>
                  </FlexItem>
                </Flex>

                <SelectField
                  name="what_is_the_time_frame_you_have_for_planning_your_project"
                  label={
                    form.what_is_the_time_frame_you_have_for_planning_your_project
                  }
                >
                  {form.timeFrame.map(value => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </SelectField>
                <fieldset>
                  <legend>
                    {form.which_of_our_expertises_are_you_interested_in}
                  </legend>
                  {form.expertises.map((label, i) => {
                    return (
                      <FormField
                        key={label}
                        name={`which_of_our_expertises_are_you_interested_in[${i}]`}
                        component={Checkbox}
                        componentProps={{ label }}
                      />
                    );
                  })}
                </fieldset>
                <FormField
                  required
                  name="details_on_your_project"
                  component="textarea"
                  label={form.details_on_your_project}
                  componentProps={{ rows: '5' }}
                />
                <HTML markdown={gdprNotice} />
                <FormField
                  name="gdpr"
                  component={Checkbox}
                  componentProps={{ label: form.gdpr }}
                />
                <small>
                  <HTML markdown={moreGdpr} />
                </small>
                <Cta type={enumTypes.SECONDARY} size="large">
                  {submit}
                </Cta>
              </form>
            )}
          </FormikContainer>
        </FlexItem>
      </Flex>
      <h2>{partners}</h2>
      <Flex justify="space-between">
        {edges.map(({ node }) => (
          <Img
            key={node.id}
            fluid={node.childImageSharp.fluid}
            alt={node.name}
            css={{ width: 70, [Tablet]: { width: 140 } }}
          />
        ))}
      </Flex>
    </Container>
  );
};

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "form.png" }) {
      childImageSharp {
        fluid(maxWidth: 975, traceSVG: { color: "#1a214d" }) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    partners: allFile(
      filter: { name: { regex: "/^partner[0-9]+$/" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 140, traceSVG: { color: "#1a214d" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Demo;
