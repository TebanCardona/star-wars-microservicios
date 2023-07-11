const axios = require("axios");

module.exports = {
  list: async () => {
    const result = await axios.get("http://databases:8004/Characters");
    return result.data;
  },
  create: async () => {
    throw { message: "Error magico ", status: 501 };
  },
  delete: async () => {
    throw { message: "Error magico ", status: 501 };
  },
};
