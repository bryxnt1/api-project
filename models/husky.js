import mongoose from "mongoose";
const Schema = mongoose.Schema;

let huskyImage= new Schema({
message: []
});

export default mongoose.model("husky", huskyImage);