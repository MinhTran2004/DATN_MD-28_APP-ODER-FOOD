import { useState } from "react"
import Model_Account from "../Model/Model_Account";

export const ViewModelAccount = () => {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [dateCrate, setDateCreate] = useState('');
    const [status, setStatus] = useState('');
    
    const checkNullInput = (username:string, account:string, password:string, phone:string) => {
        return Model_Account.checkNullInput(username, account, password, phone);
    }



    return {
        id, username, account, password, image, phone, role, dateCrate, status, 
        setId, setUsername, setAccount, setPassword, setImage, setPhone, setRole, setDateCreate, setStatus,
        checkNullInput,
    }
}