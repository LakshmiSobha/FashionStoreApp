import {HTTP} from './http';

export default {
    dresses:[],

    validate(dress){
        let existing=this.dresses.find(a => a.DressID==dress.DressID);
        if (existing) Object.assign(existing,dress);
        else this.dresses.push(dress);
    },

    getAll(cb){
        HTTP.get("/api/kidsclothing").then(arr =>{
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
        HTTP.get("/api/kidsclothing/"+id).then(b => {
            this.validate(b);
            cb(b);
        });
    }

}