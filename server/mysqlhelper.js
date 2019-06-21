
var options={
    protocol: "mysql",
    host: 'localhost',
    port: 3306,
    user     : "administrator",
    password : "test123",
    database : 'FashionStoreApp'
}

var mysql=require("mysql");

module.exports={
	pool:mysql.createPool(options),
	
	query:function(sql,cb){
		this.pool.getConnection(function(error,conn){
			if (error){
				if (conn) conn.release();
				cb({error})
				return;
			}
			conn.query(sql,function(error,data,fields){
				conn.release();
				cb({error,data,fields})
			});
		});
	},
	paramQuery:function(sql, obj,cb){
		this.pool.getConnection(function(error,conn){
			if (error){
				if (conn) conn.release();
				cb({error})
				return;
			}
			conn.query(sql,obj,function(error,data,fields){
				conn.release();
				cb({error,data,fields})
			});	
		});
	},
	end:function(){this.pool.end();}
}

/*
let dbserver={
	pool:mysql.createPool(options),
	query:function(sql,cb){
		this.pool.getConnection(function(error,conn){
			if (error){
				if (conn) conn.release();
				cb({error})
				return;
			}
			conn.query(sql,function(err,rows,fields){
				conn.release();
				cb({rows,fields})
			});
		});
	},
	insert:function(sql, obj,cb){
		this.pool.getConnection(function(error,conn){
			if (error){
				if (conn) conn.release();
				cb({error})
				return;
			}
			conn.query(sql,obj,function(err,data){
				cb({data})
			});	
		});
	}
}

dbserver.query("select * from author", ({rows}) => console.log(rows));
dbserver.insert("INSERT INTO author SET ?",{lastName:'Linna',firstName:'VÃ¤inÃ¶'},
					({data}) => console.log(data.insertId));
*/
/*
let dbserver={
	pool:mysql.createPool(options),
	query:function(){
		this.pool.getConnection(function(err,conn){
			if (err){
				if (conn) conn.release();
				console.log("Error ",err);
				return;
			}
			conn.query("SELECT * from author",function(err,rows,fields){
				console.log(rows);
				conn.release();
			});
		});
	}
}

dbserver.query();
*/

/*
var pool=mysql.createPool(options);
pool.getConnection(function(err,conn){
	if (err){
		if (conn) conn.release();
		console.log("Error ",err);
		return;
	}
	conn.query("SELECT * from author",function(err,rows,fields){
		console.log(rows);
		conn.release();
		pool.end(function(err){
			if (err) console.log(err);
		});
	});
});
*/

/*
var pool=mysql.createPool(options);
pool.getConnection(function(err,conn){
	if (err){
		if (conn) conn.release();
		console.log("Error ",err);
		return;
	}
	var author={lastName:'Kivi',firstName:'Aleksis'};
	conn.query("INSERT INTO author SET ?",author,function(err,data){
		//console.log(err,data);
		console.log("Inserted id",data.insertId);
	});	
	conn.query("SELECT * from author",function(err,rows,fields){
		console.log(rows);
		conn.release();
		pool.end(function(err){
			if (err) console.log(err);
		});
	});
});
*/

