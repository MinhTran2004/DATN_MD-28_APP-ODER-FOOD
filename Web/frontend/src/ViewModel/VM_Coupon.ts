import { useEffect, useRef, useState } from "react";
import ModelCoupon, { Coupon } from "../Model/Model_Coupon";
import SeviceCoupon from "../Sevice/Sevice_Coupon";

const ViewModelCoupon = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://2handofficial.com/wp-content/uploads/2021/09/ma-giam-gia-shopee.png');
    const [discountType, setDiscountType] = useState('Mã giảm giá');
    const [discountValue, setDiscountValue] = useState(0);
    const [maxDiscount, setMaxDiscount] = useState(0);
    const [quantity, setQuantity] = useState(20);
    const [remaining, setRemaining] = useState(0);
    const [condition, setCondition] = useState(0);
    const [startDate, setStartDate] = useState('1/11/2024');
    const [endDate, setEndDate] = useState('5/11/2024');
    const [describe, setDescribe] = useState('Lượt sử dụng có hạn. Nhanh tay kẻo lỡ bạn nhé! Giảm 10% Đơn Tối Thiểu ₫50k Giảm tối đa ₫25k');
    const [idAccount, setIdAccount] = useState('');
    const [createAt, setCreateAt] = useState('');
    const [updateAt, setUpdateAt] = useState('');
    const [status, setStatus] = useState('Đang sử dụng');

    const [data, setData] = useState<Coupon[]>([]);
    const limit = useRef(13);

    const createCoupon = async () => {
        const coupon = new ModelCoupon(name, image, discountType, discountValue, maxDiscount, quantity, condition, startDate, endDate, describe, 'Đang sử dụng')
        await SeviceCoupon.createCoupon(coupon);
    }

    const getAllCouponByLimit = async () => {
        const reponse = await SeviceCoupon.getAllCouponByLimit(limit.current);
        if (reponse != null){
            setData(reponse);
        }else{
            console.log('Dữ liệu trống');
        }
    }

    useEffect(() => {
        getAllCouponByLimit();
    }, [])

    return {
        name, image, discountType, discountValue, maxDiscount, quantity, remaining, condition, startDate, endDate, describe, idAccount, createAt, updateAt, status,
        setName, setImage, setDiscountType, setDiscountValue, setMaxDiscount, setQuantity, setRemaining, setCondition, setStartDate, setEndDate, setDescribe, setIdAccount, setCreateAt, setUpdateAt, setStatus,
        data,
        createCoupon, getAllCouponByLimit,
    }

}

export default ViewModelCoupon;