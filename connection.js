const submitData =()=>{
    fetch("http://localhost:5000/api/user/:id/edituser",{
        method : 'PUT',
        headers: {
      'Content-Type': 'application/json' },
        body:JSON.boolean ({
            verified
        })
    })

.then (res=> res.json())
.then(data => {
    console.log(data)

})

}

const fetchData =()=>{
    fetch("http://localhost:5000/api/user/getallusers",{
        method : 'get',
        headers: {
      'Content-Type': 'application/json' },
        body:JSON.stringify({
            
        })
    })

.then (res=> res.json())
.then(data => {
    console.log(data)

})

}