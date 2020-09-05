const htmlWebpackPlugin=require("html-webpack-plugin");
module.exports=(template,{title})=>{
    console.log(template,title)
    return (new htmlWebpackPlugin(
    {
    template:template,
    title:title||"Employee Management"
    }
    ))
};