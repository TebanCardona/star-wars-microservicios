const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/errors");

const planetsSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  rotation_period: Number,
  orbital_period: Number,
  diameter: Number,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: Number,
  residents: [{ type: String, ref: "characters" }],
  films: [{ type: String, ref: "films" }],
});
planetsSchema.statics.list = async function () {
  return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};
planetsSchema.statics.get = async function (id) {
  const data = await this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
  if (!data) throw new ClientError("Id not found");
  else return data;
};
planetsSchema.statics.insert = async function (info) {
  const all = await this.list();
  info._id ? info._id : (info._id = all.length + 1);
  return await this.create(info);
};
planetsSchema.statics.delete = async function (_id) {
  return await this.findByIdAndDelete(_id);
};
planetsSchema.statics.update = async function (_id, info) {
  await this.updateOne({ _id }, info);
  return await this.get(_id);
};
module.exports = planetsSchema;
