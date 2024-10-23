import { ItemMessenger } from '../Component/ComponentMain';
import styles from '../CSS/CSS_PageManagerMessenger.module.css';

export default function PageManagerMessenger() {
    return (
        <div className={styles.container}>
            <p className={styles.text_link}>Tin nhắn <span style={{ color: 'black' }}>/ Tin nhắn</span></p>

            <div className={styles.container_body}>

                <div className={styles.container_list_messenger}>
                    <ItemMessenger />
                    <ItemMessenger />
                </div>

                <div className={styles.container_detail_messenger}>

                    <div className={styles.header_detail}>
                        <img src={require('../Image/icon_profile.png')} alt="" style={{ width: 45, height: 45 }} />
                        <p className={styles.name_detail}>Trần Công Minh</p>
                    </div>

                    <div className={styles.body_detail}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={require('../Image/icon_profile.png')} alt="" style={{ width: 40, height: 40 }} />
                            <p className={styles.text_body}>Tôi cần hỗ trợ</p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                            <p className={styles.text_body}>Bạn cần hỗ trợ gì ?</p>
                            <img src={require('../Image/icon_profile.png')} alt="" style={{ width: 40, height: 40 }} />
                        </div>
                    </div>

                    <div className={styles.footer_detail}>
                        <input type="text" placeholder='Aa' className={styles.input_footer} />
                        <button className={styles.btn_detail}>Gửi đi</button>
                    </div>

                </div>






            </div>
        </div>
    )
}