let name = "Никита ";
let secondNmae = "Сотников.";
let discription = "Меня зовут ";
let lastStr = "я сделал задание";
let age = +21;

let obj = {
  age,
  discription,
  name,
  secondNmae,
  lastStr,
};

window.addEventListener("load", concateString(obj));

function concateString(obj) {
  let nowStr = "";
  let newStr = "";
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      nowStr += obj[key];
    }
  }
  for (let i = 0; i < nowStr.length; i++) {
    if (nowStr[i] == "." && i != nowStr.length - 1) {
      newStr += nowStr[i];
      newStr += nowStr[i + 1];
      newStr += nowStr[i + 2].toUpperCase();
      i += 2;
    } else {
      newStr += nowStr[i];
    }
  }

  console.log(newStr);
}
