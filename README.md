# crEl
Работа с DOM создание элемента. Нативный Javascript.

##How it works
###What you need to get
```html
<a href="#">Click me</a>
```
###In the past 
```javascript
var a = document.createElement('a');
    a.setAttribute('href','#');
    a.setAttribute('class','btn');
    a.appendChild(document.createTextNode("Click me"))

``` 
###right now 
```

var a = crEl('a',{href:'#', c:'btn'}, "Click me")

```  

