import User from "../userModel.js"

export const create = async(req, res) => {
  try {
    const userDate = new User(req.body);
    const {email} = userDate;
    const userExist = await User.findOne({email});
    if(userExist) {
      return res.status(400).json({message: "alredy exists."})
    }
    const saveUser = await userDate.save();
    res.status(200).josn(saveUser);
  }catch(error) {
    res.status(500).json({error: "연결 안됌"})
  }
}