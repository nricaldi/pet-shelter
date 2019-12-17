console.log("pets.js is running");

const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

class PetController {
    getAll(req, res) {
        Pet.find({}).sort('type').exec()
            .then(all_pets => res.json(all_pets))
            .catch(err => res.json(err));
    }

    getOne(req, res) {
        Pet.findById(req.params._id)
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }

    create(req, res) {
        let pet = new Pet(req.body);
        pet.save()
            .then(() => res.json({"msg": "pet created"}))
            .catch(err => res.json(err));
    }

    update(req, res) {
        let _id = req.params._id;
        Pet.findByIdAndUpdate({_id}, req.body, {runValidators: true})
            .then(() => res.json({"msg": "pet updated"}))
            .catch(err => res.json(err));
    }

    delete(req, res) {
        Pet.findByIdAndRemove(req.params._id)
            .then(() => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    
}

module.exports = new PetController();