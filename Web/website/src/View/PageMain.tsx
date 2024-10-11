import Component_PageMain from "../Component/Component_PageMain";
import styles from "../CSS/CSS_MainPage.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

export default function PageMain() {
    return (
        <div>
            {/* navigation */}
            <div className={styles.container_navigation}>
                <div className={styles.container_logo}>
                    <RxHamburgerMenu style={{ color: 'white', fontSize: 20 }} />
                    <img src={require('../Image/logo_app.png')} className={styles.image_logo} alt="" />
                    <p style={{ color: 'white' }}>Order Food</p>
                </div>

                <Component_PageMain.ItemNavigation title={"Quản trị hệ thống"} id={"1"} />
                <Component_PageMain.ItemNavigation title={"Quản lý tài khoản"} id={"2"} />
                <Component_PageMain.ItemNavigation title={"Quản lý sản phẩm"} id={"3"} />
            </div>






            {/* content */}
            <div className={styles.container_content}>
            </div>

        </div>
    )
}