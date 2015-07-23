# crEl
Работа с DOM создание элемента. Нативный Javascript.

| In the past  | right now |
| ------------- | ------------- |
| ```
var a = document.createElement('a');
    a.setAttribute('href','#');
    a.onlick = function(){alert("Ololo");}
    a.appendChild(document.createTextNode("Click me"))

``` | ```

crEl('a',{href:'#', events:{click:function(){alert('Ololo')}} }, "Click me")

```  |
