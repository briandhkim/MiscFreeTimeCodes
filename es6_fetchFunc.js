fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php",{
    method: 'get',
    dataType: 'json'
}).then((res)=>{
    console.log('response ', res.status);
    if(res.status === 200){
        res.json().then((data)=>{
            console.log('data: ', data);
        });
    }else{
        console.log('error: ', res.status);
    }
  
}).catch((err)=>{
    console.log('error: ', err);
})