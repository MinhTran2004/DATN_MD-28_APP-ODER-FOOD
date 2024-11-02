import { Table } from 'react-bootstrap';
import styles from '../CSS/CSS_PageTable.module.css';
import ViewModelCoupon from '../ViewModel/VM_Coupon';

export default function PageManagerCoupon() {
    const viewModel = ViewModelCoupon();

    return (
        <div className={styles.container_header}>
            <div className={styles.container_link}>
                <p className={styles.text_link}>Mã giảm giá <span style={{ color: 'black' }}>/ Quản lý mã giảm giá </span></p>
            </div>

            <div className={styles.container_body}>
                <p className={styles.title_body}>Danh sách mã giảm giá</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                    <div className={styles.container_search} >
                        <input placeholder='Nhập mã giảm giá' className={styles.input_body} />
                        <img src={require("../Image/icon_search.png")} alt="" />
                    </div>
                    <div className={styles.container_filter}>
                        <img src={require('../Image/icon_filter.png')} style={{ width: 20, height: 20 }} alt='' />
                        <p className={styles.text_filter}>Hiển bộ lọc</p>
                    </div>
                </div>

                <div className={styles.container_table}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên mã</th>
                                <th>Thể loại</th>
                                <th>Số lượng</th>
                                <th>Điều kiện đơn hàng</th>
                                <th>Ngày bắt đầu</th>
                                <th>Ngày kết thúc</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewModel.data.map((item) => (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.discountType}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.condition.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
                                    <td>{item.startDate}</td>
                                    <td>{item.endDate}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className={styles.btn_CreateProduct}>Quay lại</button>
                    <button className={styles.btn_CreateProduct}>Tiếp theo</button>
                </div>


            </div>
        </div>
    )
}