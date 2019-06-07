const router = require('express').Router();

const Recipes = require('./recipe-model.js')

router.get('/', (req,res) => {
    console.log(req.body)
    Recipes.getRecipes()
    .then(recipe => {
        console.log(recipe)
        res.status(200).json(recipe);
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

router.get('/:id', (req,res) => {
    Recipes.findById(req.params.id)
    .then(recipe => {
        if(recipe)
        {
            res.status(200).json(recipe);
        }
        else {
            res.status(404).json({message:'recipe id not found'});
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
    Recipes
    .addRecipe(req.body)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

router.put('/:id', (req,res) => {
    Recipes
    .update(req.params.id,req.body)
    .then(count => {
        console.log('count ',count)
        if(count>0)
        {
            res.status(201).json(count);
        }
        else{
            res.status(404).json({message:'recipe id not found'});
        }
    })
    .catch(error => {
        console.log('update error ',error)
        res.status(500).json(error);
    }

    )
});

router.delete('/:id', (req,res) => {
    
    Recipes
    .remove(req.params.id)
    .then(count => {
        console.log('count ',count)
        if(count>0)
        {
            res.status(201).json(count);
        }
        else{
            res.status(404).json({message:'recipe id not found'});
        }
    })
    .catch(error => {
        console.log('update error ',error)
        res.status(500).json(error);
    }

    )
})

module.exports = router;