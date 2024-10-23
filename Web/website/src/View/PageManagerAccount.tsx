import { Table } from 'react-bootstrap';
import styles from '../CSS/CSS_PageTable.module.css';

export const PageManagerAccount = () => {

    return (
        <div className={styles.container_header}>
            <div className={styles.container_link}>
                <p className={styles.text_link}>Tài khoản <span style={{ color: 'black' }}>/ Tài khoản khách hàng </span></p>
            </div>

            <div className={styles.container_body}>
                <p className={styles.title_body}>Danh sách tài khoản</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                    <div className={styles.container_search} >
                        <input placeholder='Nhập tên khách hàng' className={styles.input_body} />
                        <img src={require("../Image/icon_search.png")} style={{ width: 20, height: 20 }} alt="" />
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
                                <th>Ảnh</th>
                                <th>Tên người dùng</th>
                                <th>Tài khoản</th>
                                <th>Mật khẩu</th>
                                <th>Số điện thoại</th>
                                <th>Ngày tạo</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Link ảnh</td>
                                <td>Trần Công Minh</td>
                                <td>minh209204@gmail.com</td>
                                <td>minh209204</td>
                                <td>0987654321</td>
                                <td>12/10/2024</td>
                                <td>Đang sử dụng</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        </div>
    )
}


