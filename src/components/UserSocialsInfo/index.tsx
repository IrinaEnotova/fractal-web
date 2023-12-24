import folderIcon from '../../assets/folder-icon.svg';

import styles from './UserSocialsInfo.module.css';

export default function UserSocialsInfo() {
  const userSocials = [
    { name: 'Telegram', link: '#' },
    { name: 'GitHub', link: '#' },
    { name: 'Резюме', link: '#' },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>АИ</div>
      <div className={styles.info}>
        <p className={styles.name}>Алексей Иванов</p>
        <ul className={styles.socialList}>
          {userSocials.map((social) => (
            <li key={social.name}>
              <a className={styles.socialItem} href={social.link}>
                <img src={folderIcon} alt="" />
                <span>{social.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
