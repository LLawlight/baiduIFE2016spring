/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
 var city=document.getElementById('aqi-city-input');
 var num=document.getElementById('aqi-value-input');
 var addbtn=document.getElementById('add-btn');
 var aqiData = {};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
var mycity=city.value.trim();
var mynum=num.value.trim();
    if(!mycity.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！")
        return;
    }
    if(!mynum.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！")
        return;
    }
aqiData[mycity]=mynum;
}
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
var oneline="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>"
for (var mycity in aqiData) {
	oneline+="<tr><td>"+mycity+"</td><td>"+aqiData[mycity]+"</td><td><button data-city='"+mycity+"'>删除</button></td></tr>"
}
document.getElementById("aqi-table").innerHTML=mycity?oneline:"";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(mycity) {
  // do sth.

delete aqiData[mycity];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

addbtn.onclick=addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
document.getElementById("aqi-table").addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === 'button') delBtnHandle.call(null, event.target.dataset.city);
    })
}

init();