import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Title = styled.h3`
  ${tw`text-white font-bold text-5xl mb-8`}
`;

const Grid = styled.div`
  ${tw`flex flex-wrap -mx-3`}
`;

const Column = styled.div`
  ${tw`my-3 px-3 w-full md:w-1/3`}
`;

const Card = styled.div`
  ${tw`rounded text-black bg-white overflow-hidden shadow-lg p-4 transition-all duration-300 ease-in`}
  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.div`
  ${tw`font-bold text-xl mb-8`}
`;

const Skill = styled.span`
  ${tw`inline-block bg-gray-200 rounded-full px-3 py-0 text-sm font-semibold
    text-gray-700 mr-2 mb-2`}
`;

const SpecialSkill = styled(Skill)`
  ${tw`text-pink-600`}
`;

const Skills = () => (
  <>
    <Title>Skills</Title>
    <Grid>
      <Column>
        <Card>
          <CardTitle>Programming</CardTitle>
          <Skill>C</Skill>
          <Skill>C++</Skill>
          <Skill>C#</Skill>
          <Skill>Javascript</Skill>
          <Skill>Python</Skill>
          <SpecialSkill>Java</SpecialSkill>
          <SpecialSkill>SpringBoot</SpecialSkill>
          <Skill>Go</Skill>
          <Skill>Bash</Skill>
          <Skill>SQL</Skill>
          <Skill>PHP</Skill>
        </Card>
      </Column>

      <Column>
        <Card>
          <CardTitle>Technologies</CardTitle>
          <Skill>Docker</Skill>
          <SpecialSkill>Kubernetes</SpecialSkill>
          <Skill>Git</Skill>
          <Skill>GCP</Skill>
          <Skill>Jenkins</Skill>
          <Skill>Kafka</Skill>
          <Skill>Istio</Skill>
          <Skill>Helm</Skill>
          <Skill>Flux</Skill>
          <SpecialSkill>Terraform</SpecialSkill>
        </Card>
      </Column>

      <Column>
        <Card>
          <CardTitle>Interests</CardTitle>
          <Skill>Photography</Skill>
          <SpecialSkill>Green tech</SpecialSkill>
          <Skill>Travel</Skill>
          <SpecialSkill>Emerging tech</SpecialSkill>
          <Skill>Nature</Skill>
        </Card>
      </Column>
    </Grid>
  </>
);

export default Skills;
