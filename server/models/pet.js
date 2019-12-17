console.log("pet.js is running");

const mongoose = require("mongoose");
const unique = require("mongoose-unique-validator");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Your pet needs a name!"],
        minlength: [3, "Name must be at least 3 characters"],
        //unique: true
    },
    
    type: {
        type: String,
        required: [true, "You must define a type for your pet!"],
        minlength: [3, "Type must be at least 3 characters"]
    },

    description: {
        type: String,
        required: [true, "You must describe your pet!"],
        minlength: [3, "Description must be at least 3 charaters!"]
    },

    likes: {
        type: Number,
        default: 0
    },

    skill1: { type: String },

    skill2: { type: String },
    
    skill3: { type: String },

}, {timestamps: true}); //.plugin(unique);

mongoose.model("Pet", PetSchema);