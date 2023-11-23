import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Title from '../components/indexPage/title';
import Intro from '../components/indexPage/intro';
import Contact from '../components/indexPage/contact';
import Skills from '../components/indexPage/skills';
import Projects from '../components/indexPage/projects';
import Footer from '../components/indexPage/footer';

import styled from '@emotion/styled';
import tw from 'twin.macro';

const Center = styled.div`
  margin: 0 auto;
`;

const SmallWidth = styled(Center)`
  max-width: 860px;
`;

const RegWidth = styled(Center)`
  ${tw`mt-16 px-8`}
  max-width: 1200px;
`;

const Space = styled.div`
  ${tw`m-16`}
`;

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      keywords={[
        `engineer`,
        `senior`,
        `computer`,
        `development`,
        `devops`,
        `java`,
        `spring`,
        `springboot`,
        `france`,
        `paris`,
        `backend`,
        `epita`,
        `spring`,
        `resume`,
        `cv`,
        `linkedin`,
        `job`,
        `project`,
        `projects`,
        `mobile`,
        `app`,
        `application`,
        `docker`,
        `deployment`,
        `design`,
        `computer`,
        `django`,
        `python`,
        `agile`,
        `management`,
        `c++`,
        `team`,
        `master`,
        `ingenieur`,
        `software`,
        `developpement`,
        `logiciel`,
        `equipe`,
        `informatique`,
        `ecole`,
        `projet`,
        `curriculum vitae`,
        `profile`,
        `portofolio`,
        `skills`,
        `skill`,
        `competences`,
        `contact`,
        `email`,
      ]}
    />
    <Title />
    <SmallWidth>
      <Intro />
      <Contact />
    </SmallWidth>
    <RegWidth>
      <Skills />
    </RegWidth>
    <RegWidth>
      <Projects />
    </RegWidth>
    <Space />
    <Footer />
    <Space />
  </Layout>
);

export default IndexPage;
