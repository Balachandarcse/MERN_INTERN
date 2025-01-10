function Sample(a){
    console.log(a)
    return "it is a return statement"
}

console.log(Sample("hello"));
function submitform(submit,db){
    var [a,b]=db()
    console.log("dbname is ",a,b)
    console.log(submit)
}

function database(){
    dbname="SECE"
    return [dbname,"data stored successfully"]
}

submitform("from submitted successfully",database)