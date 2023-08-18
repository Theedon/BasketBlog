const { getAPIData, asyncAPIData } = require("./play");

const apiURI = "https://www.boredapi.com/api/activity";

// const a = getAPIData(apiURI)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

asyncAPIData(apiURI)
  .then((data) => {
    console.log(data["activity"]);
  })
  .catch((err) => console.error(err));
