import { InputTextCreateProduct } from '../Component/ComponentMain';
import styles from '../CSS/CSS_PageCreate.module.css';
import ViewModelCoupon from '../ViewModel/VM_Coupon';

export default function PageCreateCoupon() {
    const viewModel = ViewModelCoupon();

    return (
        <div className={styles.container_header}>
            <div className={styles.container_link}>
                <p className={styles.text_link}>Phiếu giảm giá <span style={{ color: 'black' }}>/ Tạo mã giảm giá </span></p>
            </div>

            <div className={styles.container_body}>
                <p className={styles.title_body}>Tạo mã giảm giá</p>
                <div className={styles.col_2}>
                    <InputTextCreateProduct title={"Tên mã giảm giá"} placeholder={"Nhập tên mã giảm giá"} state={viewModel.name} event={viewModel.setName}/>
                    <InputTextCreateProduct title={"Thể loại"} placeholder={"Chọn thể loại"} state={viewModel.discountType} event={viewModel.setDiscountType} />
                </div>

                <InputTextCreateProduct title={"Số lượng"} placeholder={"Nhập số lượng mã"} state={viewModel.quantity} event={viewModel.setQuantity}/>
                <InputTextCreateProduct title={"Giảm giá"} placeholder={"Nhập giá trị mã giảm giá nếu là %"} state={viewModel.discountValue} event={viewModel.setDiscountValue} />
                <InputTextCreateProduct title={"Giá trị tối đa"} placeholder={"Nhập giá trị tối đa"} state={viewModel.maxDiscount} event={viewModel.setMaxDiscount} />
                <InputTextCreateProduct title={"Điều kiện đơn hàng"} placeholder={"Điều kiện tối thiểu để được sử dụng"} state={viewModel.condition} event={viewModel.setCondition} />
                <InputTextCreateProduct title={"Ảnh"} placeholder={"Nhập ảnh"} state={viewModel.image} event={viewModel.setImage} />
                <div className={styles.col_2}>
                    <InputTextCreateProduct title={"Ngày bắt đầu"} placeholder={"Ngày bắt đẩu"} type={'date'} state={viewModel.startDate} event={viewModel.setStartDate} />
                    <InputTextCreateProduct title={"Ngày kết thúc"} placeholder={"Ngày kết thúc"} type={'date'} state={viewModel.endDate} event={viewModel.setEndDate} />
                </div>

                <InputTextCreateProduct title={"Mô tả"} placeholder={"Mô tả mã giảm giá"} type={'textarea'} state={viewModel.describe} event={viewModel.setDescribe} />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className={styles.btn_CreateProduct} onClick={viewModel.createCoupon}>Tạo mới</button>
                    <button className={styles.btn_CreateProduct}>Hủy</button>
                </div>
            </div>
        </div>
    )
}