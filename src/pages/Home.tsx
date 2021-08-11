import { Container, Paper } from '@material-ui/core';
import React from 'react';
import BasicInformation from '../container/basicInformation';
import styled from 'styled-components';
import About from '../container/about';
import Works from '../container/works';
import Projects from '../container/project';
import Contact from '../container/contact';

const DivStyled = styled('div')`
  padding-top: 150px;
`;

const Home = () => {
  return (
    <Container component={Paper}>
      <div id='information'>
        <BasicInformation />
      </div>
      <DivStyled id='about' data-aos='slide-up'>
        <About />
      </DivStyled>
      <DivStyled id='work' data-aos='flip-up'>
        <Works />
      </DivStyled>
      <DivStyled id='project' data-aos='fade-up'>
        <Projects />
      </DivStyled>
      <DivStyled id='contact' data-aos='fade-up'>
        <Contact/>
      </DivStyled>
    </Container>
  );
};

export default Home;
