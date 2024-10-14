import { useState } from "react";
import styles from "../CSS/Component.module.css";
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";

// Page Main
const BodyNavigation = ({ event, text, page, activeScreen }: any) => {
    return (
        <div className={styles.container_body_navigation} onClick={() => { event(text); activeScreen.current = page }}>
            <p className={activeScreen.current === page ? styles.title_body_navigation2 : styles.title_body_navigation1}>{text}</p>
        </div>
    )
}
export const ItemNavigation = ({ icon, title, data, event, activeScreen }: any) => {
    const [clickHeader, setClickHeader] = useState(false);
    return (
        <div className={styles.container_item_navigation}>
            <div className={styles.container_header_navigation}>

                {typeof (data) === 'string' ?
                    (<div style={{ display: 'flex' }} onClick={() => { event(data); activeScreen.current = data }}>
                        <img src={icon} className={styles.icon_header_navigation} alt="" />
                        <p className={activeScreen.current !== data ? styles.title_header_navigation1 : styles.title_header_navigation2}>{title}</p>
                    </div>)
                    :
                    (<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex' }}>
                            <img src={icon} className={styles.icon_header_navigation} alt="" />
                            <p className={styles.title_header_navigation1}>{title}</p>
                        </div>
                        <FaChevronDown className={styles.icon_title_navigation} onClick={() => { setClickHeader(!clickHeader) }} />
                    </div>)
                }
            </div>

            {clickHeader ?
                (<div>
                    {data.map((item: any, index: any) => {
                        const { page, text } = item;
                        return (
                            <BodyNavigation key={index} event={event} text={text} page={page} activeScreen={activeScreen} />
                        )
                    })}
                </div>)
                : (<div></div>)
            }
        </div>
    )
}

/* page create product */
export const InputTextCreateProduct = ({ title, placeholder, type }: any) => {
    return (
        <div>
            {type ?
                (<div className={styles.form_input}>
                    <p className={styles.title_input}>{title}</p>
                    <textarea className={styles.text_input} placeholder={placeholder} rows={10} />
                </div>)
                :
                (<div className={styles.form_input}>
                    <p className={styles.title_input}>{title}</p>
                    <input className={styles.text_input} placeholder={placeholder} type="text" />
                </div>)}
        </div>
    )
}


// page mesenger
export const ItemMessenger = () => {
    return (
        <div className={styles.container_messenger}>
            <div style={{display: 'flex'}}>
                <img src={require('../Image/icon_profile.png')} alt="" style={{ width: 50, height: 50 }} />
                <div style={{ marginLeft: 10 }}>
                    <p className={styles.name_messenger}>Trần Công Minh</p>
                    <p className={styles.text_messenger}>Hello you, I want to drink everything</p>
                </div>
            </div>
            <FaAngleRight />
        </div>
    )
}