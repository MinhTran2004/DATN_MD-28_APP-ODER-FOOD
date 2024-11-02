import { InputTextCreateProduct } from '../Component/ComponentMain';
import styles from '../CSS/CSS_PageCreate.module.css';
import { ViewModelProduct } from '../ViewModel/VM_Product';

export default function PageCreateProduct() {
    const viewModel = ViewModelProduct();

    return (
        <div className={styles.container_header}>
            <div className={styles.container_link}>
                <p className={styles.text_link}>Sản phẩm <span style={{ color: 'black' }}>/ Tạo mới sản phẩm </span></p>
            </div>

            <div className={styles.container_body}>
                <p className={styles.title_body}>Tạo sản phẩm</p>

                <div className={styles.container_input}>
                    <InputTextCreateProduct title={"Tên sản phẩm"} placeholder={"Nhập tên sản phẩm"} state={viewModel.name} event={viewModel.setName} />
                    <InputTextCreateProduct title={"Giá sản phẩm"} placeholder={"Nhập giá sản phẩm"} state={viewModel.price} event={viewModel.setPrice} />
                    <InputTextCreateProduct title={"Số lượng"} placeholder={"Nhập số lượng"} state={viewModel.quantity} event={viewModel.setQuantity} />
                </div>

                <InputTextCreateProduct title={"Giá ưu đãi"} placeholder={"Nhập giá ưu đãi"} state={viewModel.discount} event={viewModel.setDiscount} />
                <InputTextCreateProduct title={"Thể loại"} placeholder={"Nhập thể loại sản phẩm"} state={viewModel.idCategory} event={viewModel.setIdCategory} />
                <InputTextCreateProduct title={"Ảnh sản phẩm"} placeholder={"Nhập ảnh sản phẩm"} state={viewModel.image} event={viewModel.setImage} />
                <InputTextCreateProduct title={"Mô tả"} placeholder={"Mô tả sản phẩm"} type={'textarea'} state={viewModel.describe} event={viewModel.setDescribe} />


                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className={styles.btn_CreateProduct} onClick={() => viewModel.createProduct()}>Tạo mới</button>
                    <button className={styles.btn_CreateProduct}>Hủy</button>
                </div>

            </div>
        </div>
    )
}