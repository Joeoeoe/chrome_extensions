const changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", function (data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute("value", data.color);
});

changeColor.onclick = function (element) {
  const color = element.target.value;
  chrome.storage.local.get("obj", function (data) {
    const obj = data.obj;
    document.getElementById('obj').innerHTML = obj.a;
    obj.fun();
  });

  // console.log(obj);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.backgroundColor = "' + color + '";',
    });
  });
};
