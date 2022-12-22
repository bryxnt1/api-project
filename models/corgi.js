import mongoose from "mongoose";
const Schema = mongoose.Schema;

let corgiImage= new Schema({
message: []
});

export default mongoose.model("corgi", corgiImage);