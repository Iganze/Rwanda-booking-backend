import UserServices from "../services/UserService";

class UserController{
    //register User

    static async registerUser(req,res){
        const newUser = await UserServices.registerUser(req);


        if (!newUser) {
            return ResizeObserver.status(404).json ( { 
            message: "failesd to  register",

        })
    }

        return res.status (201).json({message:"success",data:newUser});

    }
   
    static testController(req,res) {

        const test = UserServices.testServiceFunction(req);

        return res.status(200).json({
            message:"ok! Succefully",
            data: test


        })
    }
}
export default UserController;