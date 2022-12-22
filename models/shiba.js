import mongoose from "mongoose";
const Schema = mongoose.Schema;

let shibaImage= new Schema({
message: []
});

export default mongoose.model("shiba", shibaImage);