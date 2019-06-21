module.exports=function(server,table,templateBuilder,hasErrors){
    const msg=require('./messages');

    const populateTemplate = data => {
        let valid=templateBuilder();
        for(var prop in valid) valid[prop]=data[prop];
        return valid;
    };

    return {
        query(str,cb){
            server.query(str,cb)
        },
        getById(id,cb){
            id=Number(id);
            if (isNaN(id)) cb(msg.error("Bad Data",400,"Non numeric id"))
            else server.paramQuery("SELECT * FROM ?? WHERE DressID=?",[table,id],({error,data}) => {
                if (error) cb(msg.error(error,500,"Cannot get"));
                else {
                    if (data.length) cb({data:data[0]});
                    else cb(msg.error(error,404,"Not Found"));
                }
            });
        },
        insert(values,cb){
            let value=populateTemplate(values);
            let notValid=hasErrors(value);
            if (notValid) cb(notValid); 
            else server.paramQuery("INSERT INTO "+table+" SET ?",value, ({error,data}) => {
                if (error) cb(msg.error(error,500,"Cannot insert"));
                else this.getById(data.insertId,cb);
            });
        },
        update(values,cb){
            let value=populateTemplate(values);
            let notValid=hasErrors(value);
            if (notValid) cb(notValid); 
            else{
                let id=Number(values.id);
                if (isNaN(id)) cb(msg.error("Bad id",400,"Non-numeric ID"));
                else server.paramQuery("UPDATE "+table+" SET ? WHERE DressID="+id,value,({error})=>{
                    if (error) cb(msg.error(error,500,"Cannot update"));
                    else this.getById(id,cb);
                })
            }
        },
        delete(id,cb){
            id=Number(id);
            if (isNaN(id)) cb(errorMessage('Non numeric id'));
            else server.query("DELETE FROM "+table+" WHERE DressID="+id,({error,data}) => {
                if (error) cb(msg.error(error,500,"Cannot delete"));
                else {
                    if (data.affectedRows) cb({data:{message:'deleted'}});
                    else cb(msg.error("No item",404,"Not found"));
                }
            });
        }
    }
}