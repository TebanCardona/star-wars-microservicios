const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/errors");

const characterSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: { type: String, enum: ["male", "female", "none"] },
  homeworld: { type: String, ref: "planets" },
  films: [{ type: String, ref: "films" }],
});
characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};
characterSchema.statics.get = async function (id) {
  const data = await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
  if (!data) throw new ClientError("Id not found");
  else return data;
};
characterSchema.statics.insert = async function (info) {
  const all = await this.list();
  info._id ? info._id : (info._id = all.length + 2);
  return await this.create(info);
};
characterSchema.statics.delete = async function (_id) {
  return await this.findByIdAndDelete(_id);
};
characterSchema.statics.update = async function (_id, info) {
  await this.updateOne({ _id }, info);
  return await this.get(_id);
};

module.exports = characterSchema;
