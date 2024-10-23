import { Table } from 'react-bootstrap';
import styles from '../CSS/CSS_PageTable.module.css';

export default function PageManagerCoupon() {

    return (
        <div className={styles.container_header}>
            <div className={styles.container_link}>
                <p className={styles.text_link}>Mã giảm giá <span style={{ color: 'black' }}>/ Quản lý mã giảm giá </span></p>
            </div>

            <div className={styles.container_body}>
                <p className={styles.title_body}>Danh sách mã giảm giá</p>

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
                                <th>Tên mã</th>
                                <th>Ảnh</th>
                                <th>Thể loại</th>
                                <th>Đã dùng</th>
                                <th>Số lượng</th>
                                <th>Điều kiện</th>
                                <th>Hạn sử dụng</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Giảm tối đa 30k</td>
                                <td>Link ảnh</td>
                                <td>Vận chuyển</td>
                                <td>20</td>
                                <td>45</td>
                                <td>Đơn tối thiểu 0Đ </td>
                                <td>15/10/2024</td>
                                <td>Đang sử dụng</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Giảm 7% tối đa 20k</td>
                                <td>Link ảnh</td>
                                <td>Đơn hàng</td>
                                <td>16</td>
                                <td>40</td>
                                <td>Đơn tối thiểu 200k</td>
                                <td>8/10/2024</td>
                                <td>Đã hết hạn</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Giảm tối đa 100k</td>
                                <td>Link ảnh</td>
                                <td>Vận chuyển</td>
                                <td>20</td>
                                <td>50</td>
                                <td>Đơn tối thiểu 200k </td>
                                <td>10/10/2024</td>
                                <td>Đang sử dụng</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Giảm 50k</td>
                                <td>Link ảnh</td>
                                <td>Đơn hàng</td>
                                <td>24</td>
                                <td>60</td>
                                <td>Đơn tối thiểu 100k </td>
                                <td>18/10/2024</td>
                                <td>Đang sử dụng</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Giảm 12% tối đa 50k</td>
                                <td>Link ảnh</td>
                                <td>Vận chuyển</td>
                                <td>34</td>
                                <td>40</td>
                                <td>Đơn tối thiểu 150k </td>
                                <td>25/10/2024</td>
                                <td>Đang sử dụng</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}