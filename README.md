# crEl

A small constructor for generated DOM elements

Cross-browser, Lightweight, No dependencies;

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
```javascript
crEl(tagName,[attr, child-1,... child-n]) // return DOM element
```  

<table>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Example</strong></td>
    </tr>
    <tr>
      <td>tagName</td>
      <td>String</td>
      <td>name of HTML tag</td>
      <td>div, em, a, table, ...</td>
    </tr>
    <tr>
      <td>attr</td>
      <td>Object</td>
      <td>attributeName:value </td>
      <td>{name:'psw', type:'password'}</td>
    </tr>
    <tr>
      <td>child</td>
      <td>String or DOM element</td>
      <td>String or DOM element</td>
      <td>&quot;Hello&quot; or crEl(&quot;strong&quot;,{},&quot;hello&quot;)</td>
    </tr>
</table>

> <strong>c</strong> - is alias for "class" attribute
> <strong>s</strong> - is alias for "style" attribute
> <strong>d</strong> - for set data-* attributes
> <strong>e</strong> - for attach events

##Examples
```javascript
    crEl('hr'); // return <hr> DOM element
```  
```javascript    
    crEl('div',{c:'jumbotron'}); // return <div> DOM element with class jumbotron
```  
```javascript    
    crEl('a',{href:'#'}, "link", crEl('sup',{ d:{role:'badge'}, s:'color:red'},"NEW")); 
    // return <a href="#">link<sup data-role="badge" style="color:red">NEW</sup></a>
```  
```javascript    
    crEl("button",{e:{click:function(){alert('Ololo');}}},"Click Me"); // button with event click
```  
```javascript
    crEl('ul',{c:'menu', id:'menu'},
            crEl('li', crEl('a', {href:'#1'},"Link-1")),
            crEl('li', crEl('a', {href:'#2'},"Link-2")),
            crEl('li', crEl('a', {href:'#3'},"Link-3")),
    ); // typical menu
```  
```javascript
    var i = 0, menu = document.getElementById('menu');
    while(i<=100500){//to add 100500 items to the menu
        menu.appendChild( crEl('li', crEl('a', {href:'#'+i},"Link-"+i)) ); 
        i++;
    }
```  


##Simple converter HTML⇨crEL
http://fednik.ru/f/crel/




