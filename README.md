# crEl
Работа с DOM создание элемента. Нативный Javascript.

##How it works
###What you need to get
```html
<a href="#" class="btn">Click me</a>
```
###In the past 
```javascript
var a = document.createElement('a');
    a.setAttribute('href','#');
    a.setAttribute('class','btn');
    a.appendChild(document.createTextNode("Click me"))

``` 
###Right now 
```javascript

var a = crEl('a',{href:'#', c:'btn'}, "Click me")

```  

##Docs
```

crEl(tagName[,attr, child-1,... child-n]) // return DOM element
/*
    PARAMS
    | tagMame| String | name of HTML tag        | (e.g. div, em, a, table et al.)        |
    | attr   | Object | attribute:value         | (e.g. {name:'psw', type:'password'})   |
    | child  | Object | String or DOM element   | plenty                                 |
*/
```  

| parameters  | Type |
| tagMame | String |
| attr  | Object  |
| child  | String or DOM element  |



##Examples
```javascript
    crEl('hr'); // return <hr> DOM element
```  
```javascript    
    crEl('div',{c:'jumbotron'}); // return <div> DOM element with class jumbotron
```  
```javascript    
    crEl('a',{href:'#'}, "link", crEl('sup',{style:'color:red'},"NEW")); 
    // return <a href="#">link<sup style="color:red">NEW</sup></a>
```  
```javascript    
    crEl("button",{events:{click:function(){alert('Ololo');}}},"Click Me"); // button with event click
```  
```javascript
    crEl('ul',{c:'menu', id:'menu'},
            crEl('li',{}, crEl('a', {href:'#1'},"Link-1")),
            crEl('li',{}, crEl('a', {href:'#2'},"Link-2")),
            crEl('li',{}, crEl('a', {href:'#3'},"Link-3")),
    ); // typical menu
```  
```javascript
    var i = 0, menu = document.getElementById('menu');
    while(i<=100500){//to add 100500 items to the menu
        menu.appendChild( crEl('li',{}, crEl('a', {href:'#'+i},"Link-"+i)) ); 
        i++;
    }
```  


##Simple converter HTML⇨crEL
http://fednik.ru/f/crel/




