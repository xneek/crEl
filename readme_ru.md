# crEl

Небольшой конструктор для создания DOM элементов.

Особенности

* Кроссбраузерный (IE6+)
* Легкий (667 байт gzip)
* Без зависимостей
* Работает с событиями
* работает с Data-\* аттрибутами
* Синтаксический сахар для часто используемых аттрибутов (e,c,s,d)

##Как это работатет
###Что нужно получить
```html
<a href="#" class="btn">Кликни меня</a>
```
###Как это делалось раньше 
```javascript
var a = document.createElement('a');
    a.setAttribute('href','#');
    a.setAttribute('class','btn');
    a.appendChild(document.createTextNode("Кликни меня"))

``` 
###Как это делается теперь 
```javascript

var a = crEl('a',{href:'#', c:'btn'}, "Кликни меня")

```  

##Документация
```javascript
crEl(tagName,[attr, child-1,... child-n]) // return DOM element
//или
new crEl(tagName,[attr, child-1,... child-n]) // return DOM element
```  

<table>
    <tr>
      <td><strong>Параметры</strong></td>
      <td><strong>Тип</strong></td>
      <td><strong>Описание</strong></td>
      <td><strong>Пример</strong></td>
    </tr>
    <tr>
      <td>tagName</td>
      <td>String</td>
      <td>HTML тег</td>
      <td>div, em, a, table, ...</td>
    </tr>
    <tr>
      <td>attr</td>
      <td>Object</td>
      <td>Набор "ключ:значение"</td>
      <td>{name:'psw', type:'password'}</td>
    </tr>
    <tr>
      <td>child</td>
      <td>String, Array, Node</td>
      <td>Строки, DOM-элементы или массив строк/DOM-элементов</td>
      <td>&quot;Hello&quot; or crEl(&quot;strong&quot;,{},&quot;hello&quot;)</td>
    </tr>
</table>

###Аттрибуты
Передаются любым  по счету аргументом в вызов функции (кроме первого), но лучше передавать вторым.
```javascript
{	
	href:'#',
    disabled:is_user_auth,
	e:{click:myFunc}
}
```
> <strong>c</strong> - Сокращение для аттрибута "class" или "className" (будь он проклят:))
> <strong>s</strong> - Сокращение для аттрибута "style"
> <strong>d</strong> - Сокращение для аттрибутов data-*
> <strong>e</strong> - Для привязки событий

Аттрибуты со значением типа Boolean обрабатываются следующим образом: аттрибут со значением истина устанавливается без значения, а со значем ложь игнорируется.
```javascript
	crEl('select',
    	crEl('option',{value:1},'Обычный'),
        crEl('option',{value:2, selected:!isVipState},'Lux')
    )
```
```html
   		<!-- При isVipState = false; -->
    	<select>
        	<option value="1">Обычный</option>
            <option value="2" selected>Lux</option>
        </select>
```
```html
       <!-- При isVipState = true; -->
    	<select>
        	<option value="1">Обычный</option>
            <option value="2">Lux</option>
        </select>
```
####Стили inline
В качестве аттрибута <strong>s</strong> или <strong>style</strong> может быть передана как строка с описанием стиля элемента, так и объект содержащий css свойства в синтаксисе JS. Эквивалентные примеры:
```javascript
	crEl('a',{href:'#', s:'color:red; font-weight:bold'}, "Click me")
```
```javascript
	crEl('a',{href:'#', s:{color:'red', fontWeight:'bold'}}, "Click me")
```

####Data-аттрибуты
В качестве аттрибута <strong>d</strong> или <strong>data</strong> может быть передан только объект содержащий пары ключ:значение для data-аттрибутов. Происходит автоматическое преобразование camelCase свойств к уместному для записи в аттрибуты DOM-элемента виду.
```javascript
var el = crEl('div',{d:{beHappy:'yes'}},'ololo');
// <div data-be-happy="yes">ololo</div>
	alert(el.dataset.beHappy); // yes
```
чтение совойст возможно нативными средствами браузера element.dataset.myAttr


####Events

Привязка событий кроссбраузерная, построена на синтаксисе изменения свойства обьекта (elem.onclick= function(){}). Сохраняется контекст вызова <strong>this</strong>


```javascript
var myFunc = function(){
	alert(this.innerHTML)
}
crEl('a',{href:'#', e:{click:myFunc, dragstart: func1, dragend:func2}}, "Click me");
//или
crEl('a',{href:'#', event:{click:myFunc, dragstart: func1, dragend:func2}}, "Click me");
//или
crEl('a',{href:'#', onclick:myFunc, ondragstart:func1, ondragend:func2 }, "Click me");
```
Аналогично с использованием анонимных функций
```javascript
crEl('a',{href:'#', e:{click:function(){alert(this.innerHTML)}}}, "Click me");
```



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

Можно создавать компоненты 
```javascript
    function Button(name, attrs = {}){
    	var btn =  crEl('button', Object.assign({},attrs), name);
        btn.classList.add('btn');
        return btn;
    }

	crEl('div',{c:'toolbar'},
    	new Button('Отмена',{onclick: function(){ myModal.close() }}),
    	new Button('Сохранить', {c:'btn-primary', onclick:saveFunc})
    )
```  
```javascript
  var Icon = function(name){
      if(name && name.length){
          name = name.replace('icon','fa');
          if(name.indexOf('fa-')===-1){name = 'fa-'+name;}
      }
      return crEl('i',{c:'fa '+ name ||''});
  }
``` 
##Install
###Bower
```bash
    bower i https://github.com/xneek/crEl
```

##Simple converter HTML?crEl
http://fednik.ru/f/crel/
