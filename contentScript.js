console.log("content script!");

const obj = {
  a: 1,
  fun: function () {
    console.log("hi");
  },
};
chrome.storage.local.set({ obj: obj });
