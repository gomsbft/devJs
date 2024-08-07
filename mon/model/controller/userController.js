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

export const read = async(req, res) => {
  try {
    const users = await User.find();
    if(users.length === 0) {
      return res.status(404).json({message: " Not Found"})
    }
    res.status(200).josn(users);
  }catch(error) {
    res.status(500).json({error: "서버 에러"});
}
}

export const update = async(req, res) => {
  try{
    const id = req.params.id
    const userExist = await User.findOne({_id: id});
    if(!userExist) {
      return res.status(404).json({message: "Not Found"})
    }
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.status(200).json(updateUser);
  }catch(error) {
    res.status(500).json({error: "서버 에러"});
}
}