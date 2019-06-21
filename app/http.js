function makeTheCall(url,method="get",data=null){
    return new Promise(function(successCallback,failureCallback){
        var x=new XMLHttpRequest();
        x.onreadystatechange=function(){
            if (x.readyState==4) {
                if (x.status==200) successCallback(JSON.parse(x.responseText));
                else failureCallback(x);
            }
        }
        x.open(method,url,true);
        x.setRequestHeader("Accept","application/json");
        x.setRequestHeader("Content-Type","application/json");
        x.send(data && JSON.stringify(data));        
    });
}

export const HTTP={
    get: url => makeTheCall(url),
    put: (url,data) => makeTheCall(url,'put',data),
    post: (url,data) => makeTheCall(url,'post',data),
    delete: (url) => makeTheCall(url,'delete')
};
