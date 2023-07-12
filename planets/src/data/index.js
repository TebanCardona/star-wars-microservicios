const axios = require("axios");

module.exports = {
  list: async () => {
    const result = await axios.get("http://databases:8004/Planets");
    return result.data;
  },
  get: async (id) => {
    const result = await axios.get(`http://databases:8004/Planets/${id}`);
    return result.data;
  },
  create: async (data) => {
    const result = await axios.post("http://databases:8004/Planets", data);
    return result.data;
  },
  delete: async (id) => {
    const result = await axios.delete(`http://databases:8004/Planets/${id}`);
    return result.data;
  },
  update: async (id, data) => {
    const result = await axios.patch(
      `http://databases:8004/Planets${id}`,
      data
    );
    return result.data;
  },
};
