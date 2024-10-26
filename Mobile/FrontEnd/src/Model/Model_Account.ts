interface User {
    _id: string;
    username: string;
    account: string;
    password: string;
    image: string;
    phone: string;
    role: string;
    dateCrate: String;
    status: string;
}

export default class Model_Account {
    _id: string;
    username: string;
    account: string;
    password: string;
    image: string;
    phone: string;
    role: string;
    dateCrate: String;
    status: string;

    constructor(id: string = "", username: string = "", account: string = "", password: string = "", phone: string = "", image: string = "", role: string = "", dateCrate: string = "", status: string = "") {
        this._id = id;
        this.username = username;
        this.account = account;
        this.password = password;
        this.phone = phone;
        this.image = image;
        this.role = role;
        this.dateCrate = dateCrate;
        this.status = status;
    }

    static checkNullInput(username:string, account:string, password:string, phone:string){
        return username !== "" && account !== "" && password !== "" && phone !== "";
    }
}