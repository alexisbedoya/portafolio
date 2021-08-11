import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Typography from '@material-ui/core/Typography';
import { Link, StepContent } from '@material-ui/core';
import { Container } from './styled';
import { useTranslation } from 'react-i18next';
import WorkCard from '../../component/workCard';
import { IInformationCompany } from './types';
import '../../animation/pulse.css';
import i18next from 'i18next';

const Works = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();
  const handleStep = (step: number) => () => {
    if (activeStep === step) setActiveStep(-1);
    else setActiveStep(step);
  };

  const getCompanys = () => [
    t('workExp.company.n1.dateI'),
    
  ];

  const getCompanyInfo = (step: number) => {
    return {
      name: t(`workExp.company.n${step}.name`),
      post: t(`workExp.company.n${step}.post`),
      img: t(`workExp.company.n${step}.img`),
      dateI: t(`workExp.company.n${step}.dateI`),
      dateF: t(`workExp.company.n${step}.dateF`),
      description: t(`workExp.company.n${step}.description`),
    } as IInformationCompany;
  };

  const getStepContent = (step: number) => {
    const companyInfo = getCompanyInfo(step + 1);
    return (
      <WorkCard
        img={companyInfo.img}
        company={companyInfo.name}
        post={companyInfo.post}
        initialDate={companyInfo.dateI}
        finalDate={companyInfo.dateF}
        description={companyInfo.description}
      />
    );
  };

  const urlCV = `/documents/${i18next.language}/CV.pdf`;

  return (
    <Container>
     <Typography variant='h2' align='center'>
        {t('workExp.title')}
      </Typography>
       <Link
        href={urlCV}
        target='_blank'
        style={{ animation: 'jvcAnimationPulse 1s infinite' }}
      >
        {t('workExp.downloadCV')}
      </Link>

      <br />
      <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
        {getCompanys().map((label, index) => {
          const stepProps = {};
          const buttonProps = {} as any;
          return (
            <Step key={label} {...stepProps}>
              <StepButton onClick={handleStep(index)} {...buttonProps}>
                {label}
              </StepButton>
              <StepContent>{getStepContent(index)}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </Container>
  );
};

export default Works;
