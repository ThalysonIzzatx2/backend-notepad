const Notes = require('../models/Notes');

module.exports = {
    async getNotes (req,res) {
        try{
            const notes = await Notes.find();
            
            return res.send({notes});
    
        }catch(err){
            return res.status(400).send({error: 'failed getting'});
        }
    },
     async createNotes (req, res) {
        try{
            const notes = await Notes.create(req.body);
            
            return res.send({notes});
    
        }catch(err){
            return res.status(400).send({error: 'failed creation'});
        }
    }
};