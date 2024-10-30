import { InputTextCreateProduct } from '../Component/ComponentMain';
import styles from '../CSS/CSS_PageCreate.module.css';

export default function PageCreateCoupon() {

    return (
        <div className={styles.container_header}>
            <div className={styles.container_link}>
                <p className={styles.text_link}>Phiếu giảm giá <span style={{ color: 'black' }}>/ Tạo mã giảm giá </span></p>
            </div>

            <div className={styles.container_body}>
                <p className={styles.title_body}>Tạo mã giảm giá</p>

                <div className={styles.container_input}>
                    <InputTextCreateProduct title={"Tên mã giảm giá"} placeholder={"Nhập tên mã giảm giá"} />
                    <InputTextCreateProduct title={"Thể loại"} placeholder={"Chọn thể loại"} />
                    <InputTextCreateProduct title={"Số lượng"} placeholder={"Nhập số lượng mã"} />
                </div>

                <InputTextCreateProduct title={"Ảnh"} placeholder={"Nhập ảnh"} />
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
                    <InputTextCreateProduct title={"Ngày sử dụng"} placeholder={"Nhập ngày sử dụng"} />
                    <InputTextCreateProduct title={"Ngày hết hạn"} placeholder={"Nhập ngày hết hạn"} />
                </div>
                <InputTextCreateProduct title={"Mô tả"} placeholder={"Mô tả điều kiện sử dụng"} type={'textarea'} />
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className={styles.btn_CreateProduct}>Tạo mới</button>
                    <button className={styles.btn_CreateProduct}>Hủy</button>
                </div>
                
            </div>


        </div>
    )
}