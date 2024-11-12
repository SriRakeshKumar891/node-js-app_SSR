const express    = require('express');

const app  = express();
const PORT  = 3000;

app.use(express.json());

const items  =  {};

app.post('/items',(req,res)=>{
    const {id ,name} = req.body;
    if(items[id])
        return res.status(409).send({message : 'Item already exists'});
    items[id] = { id, name };  // Add the item to the items object
    res.status(201).send(items[id]);
})

//Read item

app.get('/items/:id',(req,res)=>{
    const item =  items[req.params.id];
    if(!item)
        return res.status(404).send({message : 'Item not found'});
    res.send(item);

})

//update Item
app.put('/items/:id',(req,res)=>{
    const {id} = req.params;
    const { name } = req.body;
    if (!items[id])
         return   req.status(404).send({message : 'Item not found'});
    items[id].name =  name;
    res.send(items[id]);
})
//delete item
app.delete('/items/:id',(req,res)=>{
    const {id} = req.params;
    if (!items[id])
         return   req.status(404).send({message : 'Item not found'});
  delete  items[id];
  res.sendStatus(204);
})

app.listen(PORT , ()=> console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;