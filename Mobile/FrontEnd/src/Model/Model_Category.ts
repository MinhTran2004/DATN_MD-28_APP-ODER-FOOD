export interface Category {
    _id: string;
    name: string;
    status: string;
}

export default class Model_Category {
    name: string;
    account: string;

    constructor(name: string, account: string) {
        this.account = account;
        this.name = name;
    }
}
