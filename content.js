console.log("sendMessage start");
chrome.runtime.sendMessage({ type: "fetch_issueno" }, (res) => {
  console.log(res);
  document.querySelector(".main_page").innerText = JSON.stringify(res);
});
