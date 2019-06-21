module.exports=function(app,dbserver){
    const dao=require('./kidsclothingdao')(dbserver);
    const msg=require('./messages');
    const bodyParser=require('body-parser');
    app.use(bodyParser.json());

    app.get("/api/kidsclothing",function(req,resp){
        dao.getAll(msg.send.bind(this,resp));
    });

    app.get("/api/kidsclothing/:id",function(req,resp){
        let id = Number(req.params.id);
        dao.get(id,msg.send.bind(this,resp));
    });

    app.post("/api/kidsclothing",function(req,resp){
        dao.insert(req.body,msg.send.bind(this,resp));
    });

    app.put("/api/kidsclothing/:id",function(req,resp){
        let id = Number(req.params.id);
        if (id!=req.body.id) msg.send(resp,msg.error("Bad data",400,'Id mismatch'));
        else dao.update(req.body,msg.send.bind(this,resp));
    });

    app.delete("/api/kidsclothing/:id",function(req,resp){
        let id = Number(req.params.id);
        dao.delete(id,msg.send.bind(this,resp))
    });   
}