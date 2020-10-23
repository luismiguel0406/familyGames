
var computersModel = require('../Models/Computers')

const computerController = {

//metodo controlador de computers
getComputers:function(req,res){
    
    computersModel.find({}).exec((error,computers)=>{
    if (error) return res.status(500).send('Hubo un error al realizar la consulta');
    if(!computers) return res.status(404).send('No existen los datoss solicitados');
    return res.status(200).send({computers:computer});

    });
},

getComputer:function(req,res){
    var id = req.params.id;

    computersModel.findById(id,(error,computer)=>{
    if (error) return res.status(500).send('Hubo un error al realizar la consulta');
    if(!computer) return res.status(404).send('No existe el dato soolicitado');
    return res.status(200).send({computers:computer});
        
    })
},

updateComputer:function(req,res){

var computerId = req.params.id;
Update = req.body;

computersModel.findByIdAndUpdate(computerId,Update,{new:true},(error,computerUpdated)=>{
if (error) return res.status(500).send('Hubo un error al realizar la consulta');
if(!computerUpdated) return res.status(404).send('No existe  el dato solicitado');
return res.status(200).send({computers:computerUpdated});

})

},

deleteComputer:function(req,res){

    var computerId = req.params.id;
    computersModel.findByIdAndRemove(computerId,(error,computerRemoved)=>{
    if (error) return res.status(500).send('Hubo un error al realizar la consulta');
    if (!computerRemoved) return res.status(404).send('No existe el dato solicitado');
    return res.status(200).send({computerRemoved:computerRemoved});
    })
}

}
module.exports = computerController;