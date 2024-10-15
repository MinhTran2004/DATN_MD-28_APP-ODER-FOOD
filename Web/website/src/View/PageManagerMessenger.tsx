import { ItemMessenger } from '../Component/ComponentMain';
import styles from '../CSS/CSS_PageListAccount.module.css';

export default function PageManagerMessenger() {
    return (
        <div className={styles.container_header}>
            <div className={styles.container_link}>
                <p className={styles.text_link}>Tin nhắn <span style={{ color: 'black' }}>/ Tin nhắn</span></p>
            </div>

            <div className={styles.container_body}>

            <ItemMessenger />
            <ItemMessenger />




            </div>
        </div>
    )
}