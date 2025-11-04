
const TeaProcess=["Milk","Water","Tea Powder","Ginger"];

const ShopName=["Guru's Tea Stall"]

console.log(`Welcome to My TeaKadai ${ShopName}`);
setTimeout(() => {
    console.log("Preparing Your Tea Order");

    setTimeout(() => {
        
        console.log("Adding ingredients for your tea....");

        setTimeout(() => {
            
             console.log(TeaProcess);
             console.log("Your Tea is Ready! Enjoy !");
             
             
        }, 4000);
        
    }, 3000);   
}, 2000);

module.exports={

    ShopName,TeaProcess
}