//编译智能合约脚本
const path=require('path');
const fs=require('fs');
const solc=require('solc');

const srcpath=path.resolve(__dirname,'contracts','Lottery.sol');
const source=fs.readFileSync(srcpath,'utf-8');

const result=solc.compile(source,1);

console.log(result);

module.exports=result.contracts[':Lottery'];