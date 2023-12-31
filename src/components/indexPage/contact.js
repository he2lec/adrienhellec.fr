import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const Grid = styled.div`
  ${tw`flex flex-wrap overflow-hidden mb-4 mt-8 px-5`}
`;

const Column = styled.div`
  ${tw`my-3 px-3 overflow-hidden w-1/2 md:w-1/3 text-center`}
`;

const ColumnResp = styled(Column)`
  ${tw`w-full`}
`;

const Button = styled.button`
  ${tw`text-center font-bold w-full bg-white rounded px-6 py-4 md:py-2
    hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in`}
  color: ${(props) => props.color};
  &:hover {
    transform: scale(1.05);
  }
  &:hover > * {
    ${tw`text-white`}
  }
`;

const Block = styled.div`
  ${tw`text-center font-bold text-base w-full bg-white rounded tracking-tighter
    px-1 py-4 md:py-2 hover:bg-gray-900 hover:text-white inline-block`}
`;

const Contact = () => (
  <>
    <Grid>
      <Column>
        <a
          href="https://linkedin.com/in/adrienhellec"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="#0077b5">Linkedin</Button>
        </a>
      </Column>
      <Column>
        <a
          href="https://linkedin.com/in/adrienhellec"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="#97266d">Resume</Button>
        </a>
      </Column>
      <ColumnResp>
        <Block>number-fluency0r@icloud.com</Block>
      </ColumnResp>
    </Grid>
  </>
);

export default Contact;
