const router = require("express").Router();
const User = require("../models/updatesModel");

router.post("/", async (req, res)=>{
    try{
        const {heading, note, news, source, image} = req.body;
  
        //save new user account to the database
        const newFeedback = new User({
            heading, 
            note, 
            news, 
            source, 
            image
        });
        
  
        await newFeedback.save();
  
    } catch (err) {
        console.error(err);
        res.status(500).send(); 
    }
  });

  router.get("/", async (req, res) => {
    try {
      const feedbacks = await User.find({}).sort({"date":-1});
      res.json(feedbacks);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

  router.patch("/",async(req, res) => {
    try{
        const _id = req.params.id;
        const feedbacks = await User.findByIdAndUpdate(_id,req.body, {
            new:true
        })
        res.send(feedbacks);
    }catch(e){
        res.status(500).send(e);
    }
});

  module.exports = router;