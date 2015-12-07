var crEl = function(tagName){
  'use strict';
  var i,l,k,ev,dt,ii, ll,
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
          if(!arguments[i].hasOwnProperty(k)){continue;}
          if(k==='e' || k==='events'){
            for(ev in arguments[i][k]){
              if(!arguments[i][k].hasOwnProperty(ev)){continue;}
              if(IE){
                e.attachEvent( "on" + ev , arguments[i][k][ev]);
              } else {
                e.addEventListener( ev.toString(),  arguments[i][k][ev], false);
              }
            }
          } else if(k==='d' || k==='data'){
            for(dt in arguments[i][k]){
                if(!arguments[i][k].hasOwnProperty(dt)){continue;}
                if('dataset' in e){
                    e.dataset[dt] = arguments[i][k][dt];
                } else {
                    e.setAttribute('data-'+ (dt.replace(/([A-Z])/g, function(string) { return '-' + string.toLowerCase();})),arguments[i][k][dt]);
                }
            }
          } else  if(k === 'c' || k === 'class'){
              if('classList' in e){
                 var classes = arguments[i][k].replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ').split(' ');
                 for(ii=0, ll=classes.length; ii<ll; ii++){
					if(classes[ii].length){e.classList.add(classes[ii]);}
				}
              } else {
                 e.className = arguments[i][k];
              }
          } else if(k === 's' || k === 'style'){
            e.style.cssText = arguments[i][k];
          } else {
            e.setAttribute(k,arguments[i][k]);
          }
        }
      }
    }
  }
  return e;
}