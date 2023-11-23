import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import teamworkImage from "../../images/teamwork.jpg";
import containersImage from "../../images/containers.jpg";
import devImage from "../../images/dev.jpg";

const Title = styled.h3`
  ${tw`text-white font-bold text-5xl mb-8`}
`;

const Grid = styled.div`
  ${tw`flex flex-wrap -mx-3 overflow-hidden`}
`;

const Column = styled.div`
  ${tw`my-3 px-3 w-full md:w-1/3`}
`;

const Card = styled.div`
  ${tw`rounded bg-gray-900 text-white overflow-hidden shadow-lg transition-all duration-300 ease-in`}
  &:hover {
    transform: scale(1.05);
  }
`;

// eslint-disable-next-line jsx-a11y/alt-text
const CardImage = styled.div`
  ${tw`w-full h-48`}
  background-image: url(${(props) => props.src});
  background-size: cover;
`;

const CardContent = styled.div`
  ${tw`p-4`}
`;

const CardTitle = styled.div`
  ${tw`font-bold text-xl mb-2`}
`;

const CardSubtitle = styled.span`
  ${tw`text-gray-600 font-medium ml-2`}
`;

const Techs = styled.div`
  ${tw`mt-4`}
`;

const Techno = styled.span`
  ${tw`inline-block bg-gray-200 rounded-full px-3 py-0 text-sm font-semibold
    text-gray-700 mr-1 mb-1`}
`;

const ProjectDescription = styled.div`
  ${tw`text-white`}
`;

const Projects = () => (
  <>
    <Title>Current stack</Title>
    <Grid>
      <Column>
        <Card>
          <CardImage src={devImage} />
          <CardContent>
            <CardTitle>
              Java <CardSubtitle>Development</CardSubtitle>
            </CardTitle>
            <ProjectDescription>
              From workers to API services, and from design to rollout.
            </ProjectDescription>
            <Techs>
              <Techno>Java</Techno>
              <Techno>SpringBoot</Techno>
              <Techno>TestContainers</Techno>
              <Techno>OpenAPI</Techno>
              <Techno>KISS</Techno>
              <Techno>Clean code</Techno>
            </Techs>
          </CardContent>
        </Card>
      </Column>

      <Column>
        <Card>
          <CardImage src={containersImage} />
          <CardContent>
            <CardTitle>
              Devops <CardSubtitle>Infrastructure</CardSubtitle>
            </CardTitle>
            <ProjectDescription>
              Getting further and being self-reliant in infrastructure
              management.
            </ProjectDescription>
            <Techs>
              <Techno>Kubernetes</Techno>
              <Techno>Docker</Techno>
              <Techno>Terraform</Techno>
              <Techno>Helm/Flux</Techno>
              <Techno>Istio</Techno>
              <Techno>Jenkins</Techno>
              <Techno>GCP</Techno>
            </Techs>
          </CardContent>
        </Card>
      </Column>

      <Column>
        <Card>
          <CardImage src={teamworkImage} />
          <CardContent>
            <CardTitle>
              Team work <CardSubtitle>Soft skills</CardSubtitle>
            </CardTitle>
            <ProjectDescription>
              Working with Agile practices. Being more players and less pawns.
            </ProjectDescription>
            <Techs>
              <Techno>Kanban</Techno>
              <Techno>Fail/Learn/Succeed</Techno>
              <Techno>Workshops</Techno>
              <Techno>Conferences</Techno>
              <Techno>Fun&Serious</Techno>
            </Techs>
          </CardContent>
        </Card>
      </Column>
    </Grid>
  </>
);

export default Projects;
