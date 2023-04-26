function getdata()
{
  

    fetch('http://localhost:5000/getusernames').then(res=>{
        console.log(res)
    })
    
}