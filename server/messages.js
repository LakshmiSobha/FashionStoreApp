module.exports={

    error(error,code=400,message="failed"){
        console.log(message,error);
        return {error:{code,message}};
    },
    success(message){
        return {data:{code:200,message}};
    },

    send(resp,{error,data}){
        if (error) resp.status(error.code).json(error);
        else resp.json(data);
    }

}