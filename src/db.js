import mongoose from "mongoose";

export const conectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://juanrt:GOh3xD3LlVc9p50q@cluster0.1foctct.mongodb.net/merndbretryWrites=true&w=majority"
    );
    console.log(">>>>> DB IS CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
