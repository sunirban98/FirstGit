function saveToLocalStorage(event)
    {
        event.preventDefault();
    const name=document.getElementById('name').value;
    const mail=document.getElementById('mail').value;
    const number=document.getElementById('number').value;
    //localStorage.setItem('Name',name);
    //localStorage.setItem('Email ID',mail);
    //localStorage.setItem('Phone Number',number);
    const obj={
        name,
        mail,
        number
    }
    localStorage.setItem(obj.mail,JSON.stringify(obj));
    showUserOnScreen(obj)
}
function showUserOnScreen(obj){
    const parentElement=document.getElementById('listOfitems');
    const childElement=document.createElement('li');
    childElement.textContent=obj.name+'-'+obj.mail+'-'+obj.number;
    const deleteButton=document.createElement('input');
    deleteButton.type="button";
    deleteButton.value='Delete';
    deleteButton.onclick=()=>{
        localStorage.removeItem=(obj.mail);
        parentElement.removeChild(childElement);
        parentElement.removeChild(deleteButton);
    }
    parentElement.appendChild(deleteButton);
    parentElement.appendChild(childElement);
}
    