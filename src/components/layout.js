/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

import "./layout.css";

const Content = styled.div`
  margin: 0 auto;
  padding-top: 0;
`;

// const Footer = styled.footer`
//   display: flex;
//   justify-content: center;
// `

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Content>
          <main>{children}</main>
          {/* <Footer>
            © {new Date().getFullYear()}, adrienhellec.fr
          </Footer> */}
        </Content>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
