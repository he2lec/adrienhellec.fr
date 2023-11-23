import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const OuterContainer = styled.div`
  ${tw`text-white mt-32`}
`;

const Content = styled.div`
  ${tw`text-white text-lg text-justify leading-relaxed px-8 font-light mt-4`}
  font-family: Lato;
`;

const Big = styled.h3`
  ${tw`text-4xl sm:text-5xl font-bold mb-4`}
`;

const Strong = styled.span`
  ${tw`font-black`}
  font-family: 'Roboto', 'Avenir', 'Helvetica', 'sans-serif';
`;

// eslint-disable-next-line jsx-a11y/anchor-has-content
const StyledLink = styled(props => <a {...props} />)`
  ${tw`border-dotted border-b border-white no-underline text-white`}
`;

const Intro = () => (
  <OuterContainer>
    <Content>
      <Big>Hello,</Big>
      I’m a French <Strong>back-end engineer</Strong> working at{' '}
      <StyledLink
        href="https://blablacar.fr"
        target="_blank"
        rel="noopener noreferrer"
      >
        BlaBlaCar
      </StyledLink>{' '}, based in Paris.
    </Content>
    <Content>
      I'm currently working on <Strong>users and access management</Strong>, using Java services and playing with Kubernetes
      through our huge Google Cloud infrastructure. But I swear, my skills <Strong>don't stop there</Strong>!
      Whether in my work or personal life I really enjoy <Strong>learning and trying</Strong> new technologies and activies.
      Beyond that, I am permanently concerned about <Strong>world issues</Strong> such as social and gender inequalities, as
      well as climate change.
    </Content>
    <Content>
      For now, I'm <Strong>not open</Strong> to job offers and even less to non{' '}
      <StyledLink
        href="https://www.climate-lab-book.ac.uk/2018/warming-stripes/"
        target="_blank"
        rel="noopener noreferrer"
      >
        climate-aware
      </StyledLink>{' '} companies.
    </Content>
  </OuterContainer>
);

export default Intro;
