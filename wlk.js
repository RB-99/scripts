/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */

const url = "http://ww.hmkj668.cn//index/ka_ban/getKabanInfo/account/8986062128005071321";
const method = "POST";
const headers = {"Field": "test-header-param"};
const data = {"info": "abc"};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body

const sj=response.body
//获取卡号
const kahao=sj.match(/kahao":"(.*?)","real/)[1]


//获取总流量

 count=sj.match(/liuliang_count":"(.*?)","liuliang_sheny/)[1]/1024
 
//使用流量
const shiyong=sj.match(/liuliang_use":"(.*?)","nikename/)[1]/1024



//剩余
const shengyu=sj.match(/liuliang_shenyu":"(.*?)","liuliang_use/)[1]/1024
//shiyong=shiyong.match(/\d+/g)[0]/1024


//输出文本
console.log("流量总量："+count);
    $notify("物联卡流量使用提醒：", "卡号："+kahao, "流量套餐:"+count+"G"+"使用流量:"+Math.round(shiyong)+"G"+"剩余流量:"+Math.round(shengyu)+"G"); // Success!
   











 $done();
}, reason => {
    








// reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
