const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    isFriendly: Boolean,
  },
  {
    timestamps: true,
  }
)

// const modelName = "Dog";
// const Dog = mongoose.model(modelName, DogSchema);
// module.exports = Dog;

module.exports = mongoose.model("Dog", DogSchema);
