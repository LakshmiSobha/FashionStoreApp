module.exports=function(app,dbserver){
    const dao=require('./womenclothingdao')(dbserver);
    const msg=require('./messages');
    const bodyParser=require('body-parser');
    app.use(bodyParser.json());

    app.get("/api/womenclothing",function(req,resp){
        dao.getAll(msg.send.bind(this,resp));
    });

    app.get("/api/womenclothing/:id",function(req,resp){
        let id = Number(req.params.id);
        dao.get(id,msg.send.bind(this,resp));
    });

    app.post("/api/womenclothing",function(req,resp){
        dao.insert(req.body,msg.send.bind(this,resp));
    });

    app.put("/api/womenclothing/:id",function(req,resp){
        let id = Number(req.params.id);
        if (id!=req.body.id) msg.send(resp,msg.error("Bad data",400,'Id mismatch'));
        else dao.update(req.body,msg.send.bind(this,resp));
    });

    app.delete("/api/womenclothing/:id",function(req,resp){
        let id = Number(req.params.id);
        dao.delete(id,msg.send.bind(this,resp))
    });   
}