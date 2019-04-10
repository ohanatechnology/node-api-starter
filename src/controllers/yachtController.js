import mongoose from 'mongoose';
import  { YachtSchema } from '../models/yachtModel';

const Yacht = mongoose.model('Yacht', YachtSchema);

export const addNewYacht = (req, res) => {
    let newYacht = new Yacht(req.body);

    newYacht.save((err, yacht) => {
        if (err) {
            res.send(err);
        }
        res.json(yacht);
    });
};

export const getYachts = (req, res) => {
    Yacht.find({}, (err, yacht) => {
        if (err) {
            res.send(err);
        }
        res.json(yacht);
    });
}

export const getYachtById = (req, res) => {
    Yacht.findById(req.params.yachtId, (err, yacht) => {
        if (err) {
            res.send(err);
        }
        res.json(yacht);
    });
}

export const updateYachtById = (req, res) => {
    Yacht.findOneAndUpdate({_id: req.params.yachtId}, req.body, { new: true}, (err, yacht) => {
        if (err) {
            res.send(err);
        }
        res.json(yacht);
    });
}

export const deleteYachtById = (req, res) => {
    Yacht.remove({ _id: req.params.yachtId}, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted yacht'});
    });
}
