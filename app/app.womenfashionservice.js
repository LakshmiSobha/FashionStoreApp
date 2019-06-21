import {HTTP} from './http';

export default {
    dresses:[],

    validate(dress){
        let existing=this.dresses.find(a => a.DressID==dress.DressID);
        if (existing) Object.assign(existing,dress);
        else this.dresses.push(dress);
    },

    getAll(cb){
        HTTP.get("/api/womenclothing").then(arr =>{
            arr.forEach(a => this.validate(a));
            cb(this.dresses);
        });
    },

    get(id,cb){
        let dress= this.dresses.find(b => b.DressID==id) || {};
        let error="dress not found";
        if (!id){
            cb(dress);
            return;
        }
        HTTP.get("/api/womenclothing/"+id).then(b => {
            this.validate(b);
            cb(b);
        });
    },

    delete(id,cb){
        let index=this.dresses.findIndex(b => b.DressID==id);
        HTTP.delete("/api/womenclothing/"+id)
            .then(x => {
                if (index>=0) this.dresses.splice(index,1);
                cb(this.dresses);
            })
            .catch(function(err) {
                console.log('error in womenfashionservice delete : ', err);
            })
    },

    create(dress,cb){
        HTTP.post("/api/womenclothing",dress).then(b => {
            this.validate(b);
            cb(b);
        })
    }
}