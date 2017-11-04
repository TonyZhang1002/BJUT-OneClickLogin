 //填写默认账号密码并登录，账号密码可以自己更改 
chrome.extension.sendRequest({}, function(response) { 
      
      	$(document).xpathEvaluate('/html/body/div/div/div[2]/form/table/tbody/tr[5]/td[2]/input').val("15372233");
      	$(document).xpathEvaluate('/html/body/div/div/div[2]/form/table/tbody/tr[6]/td[2]/input').val("jk123456");
      	$(document).xpathEvaluate('/html/body/div/div/div[2]/form/table/tbody/tr[7]/td/p/input[1]').attr("checked","checked");
        $(document).xpathEvaluate('/html/body/div/div/div[2]/form/table/tbody/tr[9]/td[2]/input[1]').click();
}); 

// 处理XPath
$.fn.xpathEvaluate = function (xpathExpression) {
   $this = this.first(); 
   xpathResult = this[0].evaluate(xpathExpression, this[0], null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
   result = [];
   while (elem = xpathResult.iterateNext()) {
      result.push(elem);
   }
   $result = jQuery([]).pushStack( result );
   return $result;
}