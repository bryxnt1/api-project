import mongoose from "mongoose";
const Schema = mongoose.Schema;

let pugImage= new Schema({
message: []
});

export default mongoose.model("pug", pugImage);