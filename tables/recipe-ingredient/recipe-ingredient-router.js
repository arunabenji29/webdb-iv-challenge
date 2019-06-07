const router = require('express').Router();

const RecipeIngredient = require('./recipe-ingredient-model.js')

router.get('/', (req,res) => {
    console.log(req.body)
    RecipeIngredient.find()
    .then(rec => {
        console.log(rec)
        res.status(200).json(rec);
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

router.get('/:id', (req,res) => {
    RecipeIngredient.findById(req.params.id)
    .then(rec => {
        if(rec)
        {
            res.status(200).json(rec);
        }
        else {
            res.status(404).json({message:'zoo id not found'});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

// router.get('/:id/students', (req,res) => {
//     Dishes.getStudents(req.params.id)
//     .then(dish => {
//         if(dish)
//         {
//             res.status(200).json(dish);
//         }
//         else {
//             res.status(404).json({message:'zoo id not found'});
//         }
//     })
//     .catch(error => {
//         res.status(500).json(error);
//     }

//     )
// })

router.post('/', (req,res) => {
    RecipeIngredient
    .add(req.body)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

router.put('/:id', (req,res) => {
    RecipeIngredient
    .update(req.params.id,req.body)
    .then(count => {
        console.log('count ',count)
        if(count>0)
        {
            res.status(201).json(count);
        }
        else{
            res.status(404).json({message:'zoo id not found'});
        }
    })
    .catch(error => {
        console.log('update error ',error)
        res.status(500).json(error);
    }

    )
});

router.delete('/:id', (req,res) => {
    
    RecipeIngredient
    .remove(req.params.id)
    .then(count => {
        console.log('count ',count)
        if(count>0)
        {
            res.status(201).json(count);
        }
        else{
            res.status(404).json({message:'zoo id not found'});
        }
    })
    .catch(error => {
        console.log('update error ',error)
        res.status(500).json(error);
    }

    )
})

module.exports = router;