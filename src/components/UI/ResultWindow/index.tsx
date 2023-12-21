import { Link } from 'react-router-dom';

import successIcon from '../../../assets/success-icon.svg';
import cancelIcon from '../../../assets/cancel-icon.svg';
import closeIcon from '../../../assets/close-icon.svg';

import Button from '../Button';

import styles from './ResultWindow.module.css';

interface ResultWindowProps {
  closeModal: () => void;
  isSuccess: boolean;
}

export default function ResultWindow({ isSuccess, closeModal }: ResultWindowProps) {
  return (
    <div className={styles.dimming}>
      <div className={styles.wrapper}>
        {isSuccess ? (
          <>
            <h3 className={styles.heading}>Форма успешно отправлена</h3>
            <div className={styles.statusSuccess}>
              <img src={successIcon} alt="Success" />
            </div>
            <Link to={'/'}>
              <Button id="button-to-main" appearance="primary">
                На главную
              </Button>
            </Link>
          </>
        ) : (
          <>
            <div className={styles.headingWrapper}>
              <h3 className={styles.heading}>Ошибка</h3>
              <div onClick={closeModal} className={styles.closeWrapper}>
                <img src={closeIcon} alt="Close" />
              </div>
            </div>
            <div className={styles.statusCancel}>
              <img src={cancelIcon} alt="Cancel" />
            </div>
            <Button onClick={closeModal} className={styles.closeBtn} id="button-close" appearance="primary">
              Закрыть
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
