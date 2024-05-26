chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  console.log(message);
  console.log(JSON.stringify(_sender));
  console.log(sendResponse);

  fetch("http://localhost:1323", {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      sendResponse({ data });
    });

  return true;
});
