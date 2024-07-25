import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://jatin030292:Dattebayo3292%40%40@cluster0.s4tignp.mongodb.net/blog-app"
  );
  console.log("DB connected");
};
