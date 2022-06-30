import UserModel from "../models/user"
class UserServices {
    //registering user
    static async registerUser(req){
    const user = UserModel.create(req.body);
    
    return user;
    
}



static testServiceFunction(req){
    req.body.name = req.body.name.toUpperCase();
    const {num1,num2} = req.body;

    const sum = num1 + num2;
    req.body.sum = sum;


    return req.body;
}
}

export default UserServices;
