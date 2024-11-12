// asyncFunctions.js
function fetchDataWithCallback(callback) {
    setTimeout(() => {
      callback("data received");
    }, 1000);
  }
  
  module.exports = { fetchDataWithCallback };