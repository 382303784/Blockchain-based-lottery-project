# Blockchain-based-lottery-project
中文注释：
1.这是一个基于区块链以太坊的简易彩票项目实现，它包含测试与部署
2.运行它之前，你的chrome需要有一个MetaMask插件，并注册一个账户，请将助记词保存好，这是通向你账户的唯一通道
3.你还需要注册并添加一个Infura的账号，它可以是你与以太坊网络畅通无阻
4.下载并在idea软件上运行后，首先你需要执行 npm i ，添加所有的依赖包
5.这个项目是运行在rinkeby test network，所以你需要去乞讨几个rinkeby的测试用ETH
6.打开deploy.js文件，请将你的助记词填写到const mnemonic = "";的引号中
7.将infura的RINKEBY ENDPOINT填写到const provider = new HDWalletProvider(mnemonic, "");的引号中，别忘了保存
8.一切都就绪后，输入 npm start 就可以把项目运行起来了
9.所有的npm依赖的版本信息都在package.json文件中

Description：
1. This is a simple lottery project based on the blockchain Ethereum, which includes testing and deployment.
2. Before running it, your chrome needs to have a MetaMask plugin, and register an account, please save the mnemonic, this is the only channel to your account.
3. You also need to register and add an Infura account, it can be your unimpeded network with the Ethereum network.
4. After downloading and running on the idea software, first you need to execute "npm i" to add all the dependencies.
5. This project is running on rinkeby test network, so you need to beg for a few rinkeby tests with ETH
6. Open the deploy.js file, fill in your mnemonic in the quotes of 'const mnemonic = "";'
7. Fill infura's RINKEBY ENDPOINT into the quotes of 'const provider = new HDWalletProvider(mnemonic, "");', don't forget to save
8. Once everything is ready, type 'npm start' to run the project.
9. All npm dependent version information is in the package.json file.
