import { Account } from "../../Model/Model_Account";

export const addAccount = (data:Account) => ({
    type: 'AddAccount',
    payload: data,
})
