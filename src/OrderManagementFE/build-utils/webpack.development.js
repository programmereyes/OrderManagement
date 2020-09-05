const path=require("path");
module.exports=(env)=>({
    entry:path.join(__dirname,"..","src","index.js"),
    output:{
        filename:"bundle.js"
    }
});