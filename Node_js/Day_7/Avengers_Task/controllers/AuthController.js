export const AuthController = (req, res) => {
  console.log(req.body);
  

  const { warriorName, warriorPlace, warriorSuperPower, warriorExperience } = req.body;

  if (!warriorName || !warriorPlace || !warriorSuperPower || !warriorExperience) {
    return res.status(400).json({
      msg: " Please provide all warrior details correctly!",
      received: req.body
    });
  }

  const data = {
    warriorName,
    warriorPlace,
    warriorSuperPower,
    warriorExperience
  };

  res.status(200).json({
    msg: ` Avenger ${warriorName} details added successfully!`,
    data
  });
};

export const StoneController=(req,res)=>{

console.log(req.params);

const{id}=req.params;
const stones={

    1:{name:"Power Stone",color:"Purple"},
    2:{name:"Soul Stone",color:"Orange"},
    3:{name:"Mind Stone",color:"Yellow"},
    4:{name:"Time Stone",color:"Green"}
};

const selectedStone=stones[id];

if(!selectedStone){

    return res.status(404).json({msg:"Invalid stone id!"});
}

res.status(200).json({msg:`you have selected the ${selectedStone.name}!`,stoneDetails:selectedStone})



};

export const ThanosController=(req,res)=>{

console.log(req.query);

const{thanos,planet}=req.query;

if(!thanos||!planet){

    return res.status(400).json({msg:"Please provide both 'thonos' and 'planet' query parameters!"})

}

 res.status(200).json({

    msg:`Thanos is currently at ${thanos},targetting planet ${planet}!`
 });



};

export const vibraniumController = (req, res) => {
  console.log( req.headers);

  const vacondoId = req.headers["vacondo-id"];

  if (!vacondoId) {
    return res.status(400).json({
      msg: "Missing vacondo-id.",
    });
  }

  res.status(200).json({
    msg: " Vibranium Access Granted!",
    vacondoId,
    info: "Welcome to vocondo!",
  });
};
