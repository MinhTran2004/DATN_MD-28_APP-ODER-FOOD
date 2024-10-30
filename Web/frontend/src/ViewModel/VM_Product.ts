import { useRef, useState } from "react"
import ModelProduct, { Product } from "../Model/Model_Product";
import SeviceProduct from "../Sevice/Sevice_Product";

export const ViewModelProduct = () => {
    const [name, setName] = useState('');
    const [idCategory, setIdCategory] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [image, setImage] = useState('');
    const [sold, setSold] = useState('');
    const [quantity, setQuantity] = useState('100');
    const [rate, setRate] = useState('');
    const [describe, setDescribe] = useState('');
    const [status, setStatus] = useState('');

    const [data, setData] = useState<Product[]>([]);
    const limit = useRef(10);
    

    const createProduct = async () => {
        const data: ModelProduct = new ModelProduct(idCategory, name, price, discount, image, "0", quantity, "5", describe, "Còn hàng");
        const reslut = ModelProduct.isCheckNullProduct(data);

        if (reslut) {
            try {
                const reponse = await SeviceProduct.createProduct(data);
                console.log(reponse);
            } catch (err) {
                console.log(err);
            }
        } else {
            return;
        }
    }

    const getAllProductByLimit = async (next:boolean) => {
        if(next){
            limit.current = limit.current + 10;
            
            try{
                const reponse = await SeviceProduct.getAllProductByLimit(limit.current);
                setData(reponse);
            }catch(err){
                console.log(err);
            }
        }else{
            if (limit.current > 10) {
                limit.current -= 10;
                
                try{
                    const reponse = await SeviceProduct.getAllProductByLimit(limit.current);
                    setData(reponse);
                }catch(err){
                    console.log(err);
                }
            }
        }

        
    }








    return {
        name, idCategory, price, discount, image, sold, quantity, rate, describe, status, data,
        setName, setIdCategory, setPrice, setDiscount, setImage, setSold, setQuantity, setRate, setDescribe, setStatus,
        createProduct, getAllProductByLimit,
    }
}