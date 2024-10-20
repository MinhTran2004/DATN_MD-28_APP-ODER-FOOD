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
import styles from "../CSS/CSS_Main.module.css";
import PageHome from "./PageHome";

export default function PageMain() {
    // eslint-disable-next-line
    const [page, setPage] = useState("");
    const [buttonTab, setButtonTab] = useState(false);
    const activeScreen = useRef("PageManagerAccount");

    const screenData = [
        { icon: require('../Image/icon_home.png'), title: 'Trang chủ', data: "PageHome" },
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
                    <p className={styles.text_logo}>Order<span style={{ color: 'white' }}>Food</span></p>
                </div>

                {screenData.map((item, index) => (
                    <ItemNavigation key={index} icon={item.icon} title={item.title} data={item.data} event={setPage} activeScreen={activeScreen} />
                ))}
            </div>

            {/* content */}
            <div className={styles.container_content}>
                {/* header #1 */}
                <div className={styles.container_header_1}>
                    <div className={styles.container_header}>
                        <img src={require('../Image/icon_profile.png')} alt="" className={styles.img_header} />
                        <p className={styles.text_header}>Minh Minh</p>
                    </div>
                </div>

                {/* header #2 */}
                <div className={styles.container_header_2}>
                    {buttonTab ?
                        (<div className={styles.list_navigation}>
                            <div className={styles.container_logo}>
                                <RxHamburgerMenu style={{ color: 'white', fontSize: 20 }} onClick={() => setButtonTab(!buttonTab)}/>
                                <img src={require('../Image/logo_app.png')} className={styles.image_logo} alt="" />
                                <p className={styles.text_logo}>Order<span style={{ color: 'white' }}>Food</span></p>
                            </div>

                            {screenData.map((item, index) => (
                                <ItemNavigation key={index} icon={item.icon} title={item.title} data={item.data} event={setPage} activeScreen={activeScreen} />
                            ))}
                        </div>)
                        :
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <RxHamburgerMenu style={{ color: 'black', fontSize: 20 }} onClick={() => setButtonTab(!buttonTab)}/>
                            <img src={require('../Image/icon_profile.png')} alt="" className={styles.img_header} />
                        </div>}
                </div>

                {/* home */}
                {activeScreen.current === 'PageHome' && <PageHome />}
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