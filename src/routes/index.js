import express from 'express';


const router = express.Router();


router.get('/status',function(req,res){
	res.json({message:'OK'});
});

export default router;
