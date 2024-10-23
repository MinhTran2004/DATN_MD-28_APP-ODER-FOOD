import { Table } from 'react-bootstrap';
import styles from '../CSS/CSS_PageTable.module.css';

export const PageOrderSuccess = () => {

    return (
        <div className={styles.container_header}>
            <div className={styles.container_link}>
                <p className={styles.text_link}>Đơn hàng <span style={{ color: 'black' }}>/ Thành công </span></p>
            </div>

            <div className={styles.container_body}>
                <p className={styles.title_body}>Đơn hàng thành công</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                    <div className={styles.container_search} >
                        <input placeholder='Nhập tên khách hàng' className={styles.input_body} />
                        <img src={require("../Image/icon_search.png")} alt="" />
                    </div>
                    <div className={styles.container_filter}>
                        <img src={require('../Image/icon_filter.png')} style={{ width: 20, height: 20 }} alt='' />
                        <p className={styles.text_filter}>Hiển bộ lọc</p>
                    </div>
                </div>

                <div style={{ overflow: 'auto' }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>ID khách hàng</th>
                                <th>Số lượng</th>
                                <th>Địa chỉ</th>
                                <th>Số điện thoại</th>
                                <th>Thời gian tạo</th>
                                <th>Thời gian nhận</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2004</td>
                                <td>5</td>
                                <td>Số nhà 2, Mỹ Đình, Hà nội</td>
                                <td>0987654321</td>
                                <td>20:30 12/10/2024</td>
                                <td>22:30 12/10/2024</td>
                                <td>23.000</td>
                                <td>Thành công</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}


