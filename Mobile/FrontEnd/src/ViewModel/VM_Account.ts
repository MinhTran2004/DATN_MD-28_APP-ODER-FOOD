import { useState } from "react"
import Model_Account from "../model/Model_Account";
import SeviceAccount from "../service/Seveice_Account";
import { useDispatch, useSelector } from "react-redux";
import { addAccount } from "../redux/action/action";

export const ViewModelAccount = (navigation:any) => {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [account, setAccount] = useState('a@gmai.com');
    const [password, setPassword] = useState('12345678');
    const [image, setImage] = useState('');
    const [role, setRole] = useState('');
    const [dateCrate, setDateCreate] = useState('');
    const [status, setStatus] = useState('');
    
    const [isChecked, setIsChecked] = useState(true);

    const dispatch = useDispatch();
    // const selector = useSelector((state:any) => state.account.data);

    //Tao tai khoan
    const createAccount = async () => {
        const checkData = Model_Account.validateInputs(username, account, password);
        if(checkData){
            const data = new Model_Account(username, account, password, 'Khách hàng', 'Đang sử dụng')
            const reponse = await SeviceAccount.createAccount(data);
            return reponse;
        }else{
            return;
        }
    }

    //Lay thong tin tai khoan theo account va password
    const getAccountByAccountAndPassword = async () => {
        navigation.navigate('Main');
        
    }

    return {
        id, username, account, password, image, role, dateCrate, status, isChecked,
        setId, setUsername, setAccount, setPassword, setImage, setRole, setDateCreate, setStatus,setIsChecked,
        createAccount, getAccountByAccountAndPassword,
    }
}