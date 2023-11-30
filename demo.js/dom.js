//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title= 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent= 'Hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

// GETELEMENTBYID//
//console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='GoodBye';
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>';
//headerTitle.style.borderBottom='solid 3px #000';
header.style.borderBottom='solid 3px #000';
//GETELEMENTSBYCLASSNAME//
//Var items=document.getElementsByClassName('list-group-item');
//items[2].style.backgroundColor='green';
//for(var i =0; i <items.length; i++)
//{
    //items[i].style.fontWeight='bold';
//}
//GETELEMENTSBYTAGNAME//
var li=document.getElementsByTagName('li');

//QUERYSELECTORALL//
//var titles=document.querySelectorAll('.title');
//titles[0].style.fontWeight='bold';
//titles[0].style.backgroundColor='green';
//QUERYSELECTOR//
//var secondItems=document.querySelector('.list-group-item:nth-child(2)');
//secondItems.style.backgroundColor='green';
//QUERYSELECTORALL//
//var odd=document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odd.length;i++)
{
    //odd[i].style.backgroundColor='green';
}
//TRAVERSE THE DOM//
var itemList=document.querySelector('#items');
//parentNode//
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//parentElement//
//itemList.parentElement.style.backgroundColor='#f4f4f4';
//childNodes//
//children//
//itemList.children[1].style.backgroundColor='yellow';
//firstChild//
//firstElementChild//
itemList.firstElementChild.textContent='Hello';
//lastElementChild//
//itemList.lastElementChild.textContent='Hello';
//nextSibling//
//nextElementSibling//
//itemList.nextElementChild.textContent='Hello';
//previousSibling/
//previousElementSibling//
///temList.previousElementSibling.textContent='Hello';
//createElement//
//Add a div
var newDiv=document.createElement('div');
//Create a class//
newDiv.className='hello';
//Add id
newDiv.id='hello1';
//Add attribute
newDiv.setAttribute('title','Hello Div');
//Create text node//
var newDiv=document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv,h1);













