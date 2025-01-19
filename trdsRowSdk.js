function compareArr( arr_1= [],arr_2=[]){
    let count = 0 
arr_1.forEach(element => {
    if(arr_2.includes(element)){
        count++
    }
});
if(count == 3){
    return true
}else{
    return false
}
    
}