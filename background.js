var url=""; 
 
//插件按钮图标点击后进入后台 
chrome.browserAction.onClicked.addListener(function(tab) { 
		url="http://"+"lgn.bjut.edu.cn/"
    chrome.tabs.create( { url:url }, function(){ postData() }); 
}); 
 
 
//进入后台后提交账号密码 
function postData(){  
        chrome.tabs.executeScript(null,{file:"jquery-3.2.1.js"});  //executeScript 相当于在当前页面插入js代码/文件 
        chrome.tabs.executeScript(null,{file:"contentscripts.js"},function(){ //插入contentscripts.js文件，用户填写账号密码并登录 
            chrome.tabs.onUpdated.addListener(updateTab); 
        }); 
 } 