const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/errors");
const filmsSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{ type: String, ref: "characters" }],
  planets: [{ type: String, ref: "planets" }],
});
filmsSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};
filmsSchema.statics.get = async function (id) {
  const data = await this.findById(id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
  if (!data) throw new ClientError("Id not found");
  else return data;
};
filmsSchema.statics.insert = async function (info) {
  const all = await this.list();
  info._id ? info._id : (info._id = all.length + 1);
  return await this.create(info);
};
filmsSchema.statics.delete = async function (_id) {
  return await this.findByIdAndDelete(_id);
};
filmsSchema.statics.update = async function (_id, info) {
  await this.updateOne({ _id }, info);
  return await this.get(_id);
};
module.exports = filmsSchema;
