import MainPageForm from '../../components/MainPageForm';
import UserSocialsInfo from '../../components/UserSocialsInfo';
import styles from './MainPage.module.css';

export default function MainPage() {
  return (
    <div className={styles.wrapper}>
      <UserSocialsInfo />
      <MainPageForm />
    </div>
  );
}
