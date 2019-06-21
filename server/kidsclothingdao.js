
const msg=require('./messages')

const dressTemplate = () => ({
    DressID:null,
    DisplayName:'',
    Name:'',
    Material:'',
    Color:'',
    Description:'',
    Image:'',
    Size:'',
    Price:'',
    Availability:''
})

function hasErrors(dress){
    if (!dress.DisplayName) 
        return msg.error("Validation",400,'Display Name required');

    if (!dress.Price) 
        return msg.error("Validation",400,'Price required');
        
    return null;
}

module.exports=function(server,templateBuilder) {
    let helper=require('./daohelper')(server,"kidsclothing",dressTemplate,hasErrors);
    return {
        getAll(cb){
            helper.query("select * from kidsclothing order by DressID", cb);
        },
        get(id, cb){
            helper.getById(id,cb);
        },
        insert(dress,cb){
            helper.insert(dress,cb);
        },
        update(dress,cb){
            helper.update(dress,cb);
        },
        delete(id,cb){
            helper.delete(id,cb);
        }
    }
}