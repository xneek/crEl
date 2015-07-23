var crEl = function(tagName, tagAttributes /*, [child1], [child2], ..., [child n]*/){
	'use strict';
	var i,l,k,ev,
		e = document.createElement(tagName),
		IE='\v'=='v';
		
	if(tagAttributes){
		for(k in tagAttributes){	
			if(k==='events'){
				for(ev in tagAttributes[k]){
					if(IE){
						e.attachEvent( "on" + ev , tagAttributes[k][ev])
					} else {
						e.addEventListener( ev.toString(),  tagAttributes[k][ev], false);
					}
				}
			} else {
				if(k === 'c' || k === 'cl' ){tagAttributes['class'] = tagAttributes[k];  k='class'; }
				e.setAttribute(k,tagAttributes[k]);
			}
			
		}
	}
	if(arguments.length>2){
		for(i=2,l=arguments.length; i<l;i++){
			if(typeof(arguments[i])==='string'){
				e.appendChild(document.createTextNode(arguments[i]));
			}else if(typeof(arguments[i])==='object' && arguments[i] && arguments[i].nodeType === 1){
				e.appendChild(arguments[i]);
			}  
		}
	}
	return e;
}
