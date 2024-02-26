function saveToCrudCrud(event)
    {
        event.preventDefault();
    const name=event.target.username.value;
    const mobile=event.target.mobilenumber.value;
    const address=event.target.useraddress.value;
    const obj={
        name,
        mobile,
        address
    }
    axios.post("https://crudcrud.com/api/cacd2756bb6548c9b17ab3e08a01ee9e/add_students",obj)
    .then((response)=>{
        showStudentOnScreen(response.data)
        //console.log(response)
    })
    .catch((err)=>{
        document.body.innerHTML= document.body.innerHTML+"<h4> Something went wrong<h4>"
            console.log(err)
        })
}
function showStudentOnScreen(obj) {
    //console.log(obj)
    const parentElement = document.getElementById('listOfitems')
    for (var i = 0; i < obj.length; i++) {
        //console.log(obj[i]._id)
        // const childElement = document.createElement('li');
        parentElement.innerHTML=''
        parentElement.innerHTML =`
            <li>${obj[i].name} : ${obj[i].mobile} : ${obj[i].address} <button onclick="editStudent(${obj[i]._id})">Edit</button>
            <button onclick="deleteStudent(${obj[i]._id})">Delete</button></li>
            `
    }
}
function deleteStudent(id){
    console.log(id)
}

window.addEventListener('DOMContentLoaded',displayStudent)
function displayStudent(){
    console.log("student")
    axios.get("https://crudcrud.com/api/cacd2756bb6548c9b17ab3e08a01ee9e/add_students")
    .then((res)=>{
        console.log(res)
        showStudentOnScreen(res.data)
    })
    .catch((err)=>console.log(err))
}