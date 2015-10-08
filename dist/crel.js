var crEl = function(tagName){
  'use strict';
  var i,l,k,ev,
    e = document.createElement(tagName),
    IE='\v'=='v';

  if(arguments.length>1){
    for(i=1,l=arguments.length; i<l;i++){
      if(typeof(arguments[i])==='string'){
        e.appendChild(document.createTextNode(arguments[i]));
      }else if(typeof(arguments[i])==='object' && arguments[i] && arguments[i].nodeType === 1){
        e.appendChild(arguments[i]);
      }else if(typeof(arguments[i])==='object'){
        for(k in arguments[i]){  
          if(k==='events'){
            for(ev in arguments[i][k]){
              if(IE){
                e.attachEvent( "on" + ev , arguments[i][k][ev]);
              } else {
                e.addEventListener( ev.toString(),  arguments[i][k][ev], false);
              }
            }
          } else {
            if(k === 'c' || k === 'cl' ){tagAttributes['class'] = arguments[i][k]; k='class'; }
            e.setAttribute(k,arguments[i][k]);
          }
          
        }
      }
    }
  }
  return e;
}