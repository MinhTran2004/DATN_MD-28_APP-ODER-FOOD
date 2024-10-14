import { Table } from "react-bootstrap";
import styles from '../CSS/CSS_PageListAccount.module.css';

export default function PageProduct() {
    return (
        <div className={styles.container_header}>
            <div className={styles.container_link}>
                <p className={styles.text_link}>Sản phẩm <span style={{ color: 'black' }}>/ Danh sách sản phẩm </span></p>
            </div>

            <div className={styles.container_body}>
                <p className={styles.title_body}>Danh sách sản phẩm</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20  }}>
                    <div className={styles.container_search} >
                        <input placeholder='Nhập thông tin cần tìm' className={styles.input_body} />
                        <img src={require("../Image/icon_search.png")} alt="" />
                    </div>
                    <div className={styles.container_filter}>
                        <img src={require('../Image/icon_filter.png')} style={{ width: 20, height: 20 }} alt='' />
                        <p className={styles.text_filter}>Hiển bộ lọc</p>
                    </div>
                </div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID Product</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                            <th>Thể loại</th>
                            <th>Ảnh</th>
                            <th>Đã bán</th>
                            <th>Còn lại</th>
                            <th>Bình chọn</th>
                            <th>Mô tả</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Hambuger big size</td>
                            <td>20.000</td>
                            <td>Hambuger, Bánh mì</td>
                            <td>Link ảnh</td>
                            <td>23</td>
                            <td>50</td>
                            <td>4.6</td>
                            <td>Bambuger hihihahahahhasdhiahdias</td>
                            <td>Active</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </div>
    )
}