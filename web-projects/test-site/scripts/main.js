// 變數宣告
var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myVariable;
myVariable = 'Bob';
myVariable;
//let myVariable = 'Bob';

myVariable = 'Steve';
myVariable;

// 判斷式
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}

// 函數
function multiply(num1,num2) {
	let result = num1 * num2;
	return result;
  }

  alert(multiply(4,7));
  multiply(20,20);
  multiply(0.5,3);

// 事件 (監聽瀏覽器)
// document.querySelector('html').onclick = function() { 
//   alert('Ouch! Stop poking me!');
// }

// 圖片轉換器
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../images(1).png') {
      myImage.setAttribute ('src','images(2).png');
    } else {
      myImage.setAttribute ('src','../images(1).png');
    }
}

// 添加個客製化的歡迎訊息
var myButton = document.querySelector('button');

function setUserName(){
  // 產生一個對話視窗，但會要求使用者輸入一些資料
  let myName = prompt('Please enter your name.');
  /**
   * 呼叫名為 localStorage 的 API，可以讓使用者先將一些資料儲存在瀏覽器裡面
   * 使用 localStorage 的 setItem() 函式把資料儲存到一個名稱為 'name' 的變數裡，再把包含者用者名字的 myName 的值指定給她
   * 將一個字串跟使用者的名字指定給標題的 innerHTML 特性
   * 
   * innerHTML --> 屬性獲取或設置元素中包含的 HTML 或 XML 標記
   */
  // localStorage.setItem('name', myName);  // Way 1
  // myHeading.innerHTML = myName + '\'s cat is cute';

  // 用戶名稱是否為 null 或空白 (取消提示時，值會被設為 null)
  if(!myName || myName === null){
    setUserName();
  }else{
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName + '\'s cat is cute';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');  // Way 2
  myHeading.innerHTML = storedName + '\'s cat is cute';
}

myButton.onclick = function() {
  setUserName();
}
