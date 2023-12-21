import cls from '../../../utils/classnames';

import styles from './Stepper.module.css';

type StepperProps = {
  activeStep: number;
};

export default function Stepper({ activeStep }: StepperProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stepper}>
        <div
          className={cls(
            styles.stepDot,
            activeStep === 1 && styles.stepDotActive,
            (activeStep === 2 || activeStep === 3) && styles.stepDotCompleted
          )}
        ></div>
        <div className={cls(styles.stepLine, (activeStep === 2 || activeStep === 3) && styles.stepLineActive)}></div>
        <div
          className={cls(
            styles.stepDot,
            activeStep === 2 && styles.stepDotActive,
            activeStep === 3 && styles.stepDotCompleted
          )}
        ></div>
        <div className={cls(styles.stepLine, activeStep === 3 && styles.stepLineActive)}></div>
        <div className={cls(styles.stepDot, activeStep === 3 && styles.stepDotActive)}></div>
      </div>
      <ul className={styles.stepNumbers}>
        <li className={styles.activeStep}>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
