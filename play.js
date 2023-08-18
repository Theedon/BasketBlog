const getAPIData = (apiURI) => {
  return fetch(apiURI)
    .then((response) => {
      if (!response.ok) {
        throw new Error("it failed");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

const asyncAPIData = async (apiURI) => {
  try {
    const response = await fetch(apiURI);
    if (!response.ok) {
      throw new Error("it did not work");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { getAPIData, asyncAPIData };
