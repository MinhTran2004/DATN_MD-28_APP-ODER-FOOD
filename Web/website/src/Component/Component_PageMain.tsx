import { Accordion } from "react-bootstrap"

export default class Component_PageMain {
    static ItemNavigation = ({ title, id }: any) => {
        return (
            <Accordion flush = {true}>
                <Accordion.Item eventKey={id} >
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                        <p style={{ color: 'red' }} >Quản lý nhân viên</p>
                        <p style={{ color: 'red' }} >Quản lý nhân viên</p>
                        <p style={{ color: 'red' }} >Quản lý nhân viên</p>
                        <p style={{ color: 'red' }} >Quản lý nhân viên</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    }
}