function saveToLocalStorage(event)
    {
        event.preventDefault();
    const name=document.getElementById('name').value;
    const mail=document.getElementById('mail').value;
    const number=document.getElementById('number').value;
    localStorage.setItem('Name',name);
    localStorage.setItem('Email ID',mail);
    localStorage.setItem('Phone Number',number);

    }
    