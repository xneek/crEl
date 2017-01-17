# crEl

��������� ����������� ��� �������� DOM ���������.

�����������

* ��������������� (IE6+)
* ������ (667 ���� gzip)
* ��� ������������
* �������� � ���������
* �������� � Data-\* �����������
* �������������� ����� ��� ����� ������������ ���������� (e,c,s,d)

##��� ��� ���������
###��� ����� ��������
```html
<a href="#" class="btn">������ ����</a>
```
###��� ��� �������� ������ 
```javascript
var a = document.createElement('a');
    a.setAttribute('href','#');
    a.setAttribute('class','btn');
    a.appendChild(document.createTextNode("������ ����"))

``` 
###��� ��� �������� ������ 
```javascript

var a = crEl('a',{href:'#', c:'btn'}, "������ ����")

```  

##������������
```javascript
crEl(tagName,[attr, child-1,... child-n]) // return DOM element
//���
new crEl(tagName,[attr, child-1,... child-n]) // return DOM element
```  

<table>
    <tr>
      <td><strong>���������</strong></td>
      <td><strong>���</strong></td>
      <td><strong>��������</strong></td>
      <td><strong>������</strong></td>
    </tr>
    <tr>
      <td>tagName</td>
      <td>String</td>
      <td>HTML ���</td>
      <td>div, em, a, table, ...</td>
    </tr>
    <tr>
      <td>attr</td>
      <td>Object</td>
      <td>����� "����:��������"</td>
      <td>{name:'psw', type:'password'}</td>
    </tr>
    <tr>
      <td>child</td>
      <td>String, Array, Node</td>
      <td>������, DOM-�������� ��� ������ �����/DOM-���������</td>
      <td>&quot;Hello&quot; or crEl(&quot;strong&quot;,{},&quot;hello&quot;)</td>
    </tr>
</table>

###���������
���������� �����  �� ����� ���������� � ����� ������� (����� �������), �� ����� ���������� ������.
```javascript
{	
	href:'#',
    disabled:is_user_auth,
	e:{click:myFunc}
}
```
> <strong>c</strong> - ���������� ��� ��������� "class" ��� "className" (���� �� �������:))
> <strong>s</strong> - ���������� ��� ��������� "style"
> <strong>d</strong> - ���������� ��� ���������� data-*
> <strong>e</strong> - ��� �������� �������

��������� �� ��������� ���� Boolean �������������� ��������� �������: �������� �� ��������� ������ ��������������� ��� ��������, � �� ������ ���� ������������.
```javascript
	crEl('select',
    	crEl('option',{value:1},'�������'),
        crEl('option',{value:2, selected:!isVipState},'Lux')
    )
```
```html
   		<!-- ��� isVipState = false; -->
    	<select>
        	<option value="1">�������</option>
            <option value="2" selected>Lux</option>
        </select>
```
```html
       <!-- ��� isVipState = true; -->
    	<select>
        	<option value="1">�������</option>
            <option value="2">Lux</option>
        </select>
```
####����� inline
� �������� ��������� <strong>s</strong> ��� <strong>style</strong> ����� ���� �������� ��� ������ � ��������� ����� ��������, ��� � ������ ���������� css �������� � ���������� JS. ������������� �������:
```javascript
	crEl('a',{href:'#', s:'color:red; font-weight:bold'}, "Click me")
```
```javascript
	crEl('a',{href:'#', s:{color:'red', fontWeight:'bold'}}, "Click me")
```

####Data-���������
� �������� ��������� <strong>d</strong> ��� <strong>data</strong> ����� ���� ������� ������ ������ ���������� ���� ����:�������� ��� data-����������. ���������� �������������� �������������� camelCase ������� � ��������� ��� ������ � ��������� DOM-�������� ����.
```javascript
var el = crEl('div',{d:{beHappy:'yes'}},'ololo');
// <div data-be-happy="yes">ololo</div>
	alert(el.dataset.beHappy); // yes
```
������ ������� �������� ��������� ���������� �������� element.dataset.myAttr


####Events

�������� ������� ���������������, ��������� �� ���������� ��������� �������� ������� (elem.onclick= function(){}). ����������� �������� ������ <strong>this</strong>


```javascript
var myFunc = function(){
	alert(this.innerHTML)
}
crEl('a',{href:'#', e:{click:myFunc, dragstart: func1, dragend:func2}}, "Click me");
//���
crEl('a',{href:'#', event:{click:myFunc, dragstart: func1, dragend:func2}}, "Click me");
//���
crEl('a',{href:'#', onclick:myFunc, ondragstart:func1, ondragend:func2 }, "Click me");
```
���������� � �������������� ��������� �������
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

����� ��������� ���������� 
```javascript
    function Button(name, attrs = {}){
    	var btn =  crEl('button', Object.assign({},attrs), name);
        btn.classList.add('btn');
        return btn;
    }

	crEl('div',{c:'toolbar'},
    	new Button('������',{onclick: function(){ myModal.close() }}),
    	new Button('���������', {c:'btn-primary', onclick:saveFunc})
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
