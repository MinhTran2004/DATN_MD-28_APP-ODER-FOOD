import { InputTextCreateProduct } from '../Component/ComponentMain';
import styles from '../CSS/CSS_PageCreate.module.css';

export default function PageCreateProduct() {

    return (
        <div className={styles.container_header}>
            <div className={styles.container_link}>
                <p className={styles.text_link}>Sản phẩm <span style={{ color: 'black' }}>/ Tạo mới sản phẩm </span></p>
            </div>

            <div className={styles.container_body}>
                <p className={styles.title_body}>Tạo sản phẩm</p>

                <div className={styles.container_input}>
                    <InputTextCreateProduct title={"Tên sản phẩm"} placeholder={"Nhập tên sản phẩm"} />
                    <InputTextCreateProduct title={"Giá sản phẩm"} placeholder={"Nhập giá sản phẩm"} />
                    <InputTextCreateProduct title={"Số lượng"} placeholder={"Nhập số lượng sản phẩm"} />
                </div>

                <InputTextCreateProduct title={"Thể loại"} placeholder={"Nhập thể loại sản phẩm"} />
                <InputTextCreateProduct title={"Ảnh sản phẩm"} placeholder={"Nhập ảnh sản phẩm"} />
                <InputTextCreateProduct title={"Mô tả"} placeholder={"Mô tả sản phẩm"} type={'textarea'} />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className={styles.btn_CreateProduct}>Tạo mới</button>
                    <button className={styles.btn_CreateProduct}>Hủy</button>
                </div>

            </div>
        </div>
    )
}