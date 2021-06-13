const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { findByIdAndUpdate } = require("../models/user");

const checkPremission = async (req, res) => {
  const newUser = await User.find(req.body.password, req.body.mail);

  if (newUser == null) {
    const token = jwt.sign(
      { name: user.name, password: user.password },
      process.env.SECRET
    );
    res.send(token);
  }
};


const getAllEmployed = async(req, res) => {
     await User.find()
    .then((employes) => employes.filter((employe => employe.status != "not worker")))
    .then(employes => res.status(200).json({employes: employes}))
    .catch(err => console.log(err));
}

const getEmployeById = async(req, res) => {
   await User.findById(req.params.id)
    .then((employe) => res.status(200).json({employe: employe}))
    .catch(err => {console.log(err);})
}


const setNewEmploye = async(req, res) => {
    const newEmploye= new User(req.body);
    try{
        const employe= await newEmploye.save();
        res.json({employe: employe});
   }
   catch(err){
       console.log(err);
   }
}

const uptadeEmploye =async(req, res) => {
    // const newEmploye= new User(req.body);
    // const employe= await User.findById(req.params.id);
    // employe=newEmploye;
    // await employe.save()
    // .then(res.json({employe: employe}))
    // .catch(err => console.log(err))

   const e= await User.findById(req.params.id);
   e.name=req.body.name;
    await e.save()
    .then(employe => res.json({employe: employe})
    // )
    .catch(err => console.log(err)))

}

module.exports= {checkPremission, getAllEmployed, getEmployeById, setNewEmploye, uptadeEmploye};
