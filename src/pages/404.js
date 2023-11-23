import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

import styled from "@emotion/styled";
import tw from "twin.macro";

const Container = styled("div")`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Text = styled("span")`
  ${tw`text-white text-center`};
`;

const Button = styled("button")`
  ${tw`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded
    inline-flex items-center text-black cursor-pointer transition-all
    duration-150 ease-linear`};
  & > * {
    ${tw`text-black`}
  }
  &:hover > *,
  &:hover {
    ${tw`text-white duration-150 transition-all ease-linear`}
  }
  &:hover {
    ${tw`bg-black`}
  }
`;

const Center = styled("div")`
  ${tw`text-center`}
`;

const StyledLink = styled((props) => <Link {...props} />)`
  ${tw`no-underline`}
`;

const AbsoluteLink = styled("span")`
  ${tw`absolute top-0 w-32 text-center font-normal border transition-all
    duration-150 ease-linear rounded`}
  & > * {
    ${tw`text-white transition-all duration-150 ease-linear`}
  }
  &:hover > * {
    ${tw`text-black transition-all duration-150 ease-linear`}
  }
  &:hover {
    ${tw`bg-white transition-all duration-150 ease-linear`}
  }
  top: 15px;
`;

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container>
      <AbsoluteLink>
        <StyledLink to="/">Fly to Home</StyledLink>
      </AbsoluteLink>
      <Text>
        <h1>Absolute &lt;void&gt;</h1>
        <p>You&apos;re looking for my Linkedin? It&apos;s right there:</p>
      </Text>
      <Center>
        <a
          href="https://linkedin.com/in/adrienhellec"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="#0077b5">Linkedin</Button>
        </a>
      </Center>
    </Container>
  </Layout>
);

export default NotFoundPage;
