# crEl
Работа с DOM создание элемента. Нативный Javascript.

#In the past 
```
var a = document.createElement('a');
    a.setAttribute('href','#');
    a.setAttribute('class','btn');
    a.appendChild(document.createTextNode("Click me"))

``` 
#right now 
```

var a = crEl('a',{href:'#', c:'btn'}, "Click me")

```  
