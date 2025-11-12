
export const FruitController=(req,res)=>{

const fruits=req.body;

if(!Array.isArray(fruits)||fruits.length===0){

   return res.status(400).json({msg:"Please add fruit details correctly!"})
}

for(const fruit of fruits){


   if(!fruit.FruitName || !fruit.FruitColor ||!fruit.FruitQuantity){

      return res.status(400).json({msg:"Plese add full fruit details corectly"})
   }
}

res.status(200).json({msg:`here are${fruits.length}selected fruits`,selectedFruits:fruits})

};


export const FruitIdController=(req,res)=>{

console.log(req.params);

const{id}=req.params;

const Fruits={

   1:{name:"Apple",color:"Red"},
   2:{name:"Mango",color:"Yellow"},
   3:{name:"Guava",color:"Green"},
   4:{name:"Grapes",color:"Purple"}
}

const selectedFruits=Fruits[id]

if(selectedFruits){

   res.status(200).json({msg:`Here is Fruit detail with your selected id`,data:selectedFruits})
}else{

   res.status(404).json({msg:"Fruit not found"})
   
}





};


export const SearchController = (req, res) => {
    const { color, minQuantity } = req.query;

    if (!color || !minQuantity) {
        return res.status(400).json({ msg: "color or minQuantity is missing" });
    }

    const Fruits = {
        1: { name: "Apple", color: "Red", minQuantity: 30 },
        2: { name: "Banana", color: "Yellow", minQuantity: 20 },
        3: { name: "Guava", color: "Green", minQuantity: 50 },
        4: { name: "Orange", color: "Orange", minQuantity: 10 }
    };

    const results = [];

    for (const key in Fruits) {
        const fruit = Fruits[key];
        if (fruit.color.toLowerCase() === color.toLowerCase() && fruit.minQuantity >= parseInt(minQuantity)) {
            results.push(fruit);
        }
    }

    if (results.length > 0) {
        res.status(200).json({ msg: "Here are your matching fruits:", data: results });
    } else {
        res.status(404).json({ msg: "No fruits found matching your criteria" });
    }
};