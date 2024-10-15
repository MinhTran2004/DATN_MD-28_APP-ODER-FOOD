import { useRef, useState } from "react";
import { ItemNavigation } from "../Component/ComponentMain";
import { RxHamburgerMenu } from "react-icons/rx";
import { PageManagerAccount } from "./PageManagerAccount";
import PageCreateProduct from "./PageCreateProduct";
import PageManagerProduct from "./PageManagerProduct";
import { PageOrderConfirm } from "./PageOrderConfirm";
import { PageOrderSuccess } from "./PageOrderSuccess";
import { PageOrderCancell } from "./PageOrderCancell";
import PageCreateCoupon from "./PageCreateCoupon";
import PageManagerCoupon from "./PageManagerCoupon";
import PageManagerMessenger from "./PageManagerMessenger";
import PageManagerNotification from "./PageManagerNotification";
import styles from "../CSS/CSS_MainPage.module.css";

export default function PageMain() {
    // eslint-disable-next-line
    const [page, setPage] = useState("");
    const activeScreen = useRef("PageManagerMessenger");

    const screenData = [
        { icon: require('../Image/icon_home.png'), title: 'Trang chủ', data: "undifined" },
        { icon: require('../Image/icon_user.png'), title: 'Quản lý tài khoản', data: 'PageManagerAccount' },
        { icon: require('../Image/icon_product.png'), title: 'Quản lý sản phẩm', data: [{ text: 'Tạo mới sản phẩm', page: 'PageCreateProduct' }, { text: 'Danh sách sản phẩm', page: 'PageManagerProduct' },] },
        { icon: require('../Image/icon_order.png'), title: 'Quản lý đơn hàng', data: [{ text: 'Chờ xác nhận', page: 'PageOrderConfirm' }, { text: 'Thành công', page: 'PageOrderSuccess' }, { text: 'Hủy đơn', page: 'PageOrderCancell' }] },
        { icon: require('../Image/icon_coupon.png'), title: 'Quản lý mã giảm giá', data: [{ text: 'Tạo mã giảm giá', page: 'PageCreateCoupon' }, { text: 'Danh sách mã giảm giá', page: 'PageManagerCoupon' }] },
        { icon: require('../Image/icon_notification.png'), title: 'Thông báo', data: 'PageManagerNotification' },
        { icon: require('../Image/icon_messenger.png'), title: 'Tin nhắn', data: 'PageManagerMessenger' },
        { icon: require('../Image/icon_setting.png'), title: 'Setting', data: "undifined" },
    ]

    return (
        <div style={{ display: 'flex', width: '100%' }}>

            {/* navigation */}
            <div className={styles.container_navigation}>
                <div className={styles.container_logo}>
                    <RxHamburgerMenu style={{ color: 'white', fontSize: 20 }} />
                    <img src={require('../Image/logo_app.png')} className={styles.image_logo} alt="" />
                    <p style={{ color: 'yellow', marginBottom: 0, fontSize: 17, fontWeight: 'bold' }}>Order<span style={{ color: 'white' }}>Food</span></p>
                </div>

                {screenData.map(item => (
                    <ItemNavigation icon={item.icon} title={item.title} data={item.data} event={setPage} activeScreen={activeScreen} />
                ))}

            </div>


            {/* content */}
            <div className={styles.container_content}>
                <div className={styles.container_header}>
                    <img src={require('../Image/icon_profile.png')} alt="" className={styles.img_header} />
                    <p className={styles.text_header}>Minh Minh</p>
                </div>

                {/* account */}
                {activeScreen.current === 'PageManagerAccount' && <PageManagerAccount />}

                {/* product */}
                {activeScreen.current === 'PageCreateProduct' && <PageCreateProduct />}
                {activeScreen.current === 'PageManagerProduct' && <PageManagerProduct />}

                {/* order */}
                {activeScreen.current === 'PageOrderConfirm' && <PageOrderConfirm />}
                {activeScreen.current === 'PageOrderSuccess' && <PageOrderSuccess />}
                {activeScreen.current === 'PageOrderCancell' && <PageOrderCancell />}

                {/* coupon */}
                {activeScreen.current === 'PageCreateCoupon' && <PageCreateCoupon />}
                {activeScreen.current === 'PageManagerCoupon' && <PageManagerCoupon />}

                {/* notification */}
                {activeScreen.current === 'PageManagerNotification' && <PageManagerNotification />}

                {/* messenger */}
                {activeScreen.current === 'PageManagerMessenger' && <PageManagerMessenger />}
            </div>

        </div>
    )
}