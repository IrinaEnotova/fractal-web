import { useMemo, useState } from 'react';
import Stepper from '../../components/UI/Stepper';
import styles from './ProfilePage.module.css';
import StepOne from '../../components/StepOne';
import StepTwo from '../../components/StepTwo';
import StepThree from '../../components/StepThree';

export default function ProfilePage() {
  const [activeStep, setActiveStep] = useState(1);

  const changeActiveStep = (stepValue: number) => {
    if (stepValue <= steps.length || stepValue >= 1) {
      setActiveStep(stepValue);
    }
  };

  const steps = useMemo(
    () => [
      { label: 'Step 1', value: 1, component: <StepOne changeActiveStep={changeActiveStep} /> },
      { label: 'Step 2', value: 2, component: <StepTwo changeActiveStep={changeActiveStep} /> },
      { label: 'Step 3', value: 3, component: <StepThree changeActiveStep={changeActiveStep} /> },
    ],
    []
  );

  const activeComponent = useMemo(() => {
    return steps.find((step) => step.value === activeStep)?.component || null;
  }, [activeStep, steps]);

  return (
    <div className={styles.wrapper}>
      <Stepper activeStep={activeStep} />
      {activeComponent}
    </div>
  );
}
