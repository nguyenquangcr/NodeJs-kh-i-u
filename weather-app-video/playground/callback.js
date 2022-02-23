const getData = (callback) => {
  setTimeout(() => {
    console.log("get Data");
    callback();
  }, 3000);
};

const showData = () => {
  console.log("Show data");
  // setTimeout(() => {
  // }, 3000);
};

getData(() => {
  showData();
});
