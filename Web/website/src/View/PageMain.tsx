import styles from "../CSS/CSS_MainPage.module.css";

export default function PageMain() {
    const ItemNavigation = ({ name }: any) => {
        return (
            <div className={styles.item_navigation}>
                <p>{name}</p>
            </div>
        )
    }

    return (
        <div>
            <div className={styles.container_header}>
                <img src={require('../Image/logo_app.png')} alt="" style={{height: '100%'}}/>
            </div>

            <div className={styles.body}>
                {/* naviagtion */}
                <div className={styles.container_navigation}>
                    <ItemNavigation name={"Quản lý khách hàng"} />
                    <ItemNavigation name={"Quản lý nhà cung cấp"} />
                    <ItemNavigation name={"Quản lý sản phẩm"} />
                    <ItemNavigation name={"Quản lý đơn hàng"} />
                    <ItemNavigation name={"Quản lý hóa đơn"} />
                    <ItemNavigation name={"Quản lý hóa đơn"} />
                    <ItemNavigation name={"Quản lý khuyến mại"} />
                </div>








                {/* content */}
                <div className={styles.container_content}></div>
            </div>

        </div>
    )
}