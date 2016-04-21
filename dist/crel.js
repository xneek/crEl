var crEl = function(tagName){
  'use strict';
  var i,l,k,x,dt,ii, ll,
    e = document.createElement(tagName);
  if(arguments.length>1){
    for(i=1,l=arguments.length; i<l;i++){
      if(typeof(arguments[i])==='string'){
        e.appendChild(document.createTextNode(arguments[i]));
      }else if(typeof(arguments[i])==='object' && arguments[i] && arguments[i].nodeType === 1){
        e.appendChild(arguments[i]);
      }else if(typeof(arguments[i])==='object'){
        for(k in arguments[i]){
          if(k==='e' || k==='events'){
            for(x in arguments[i][k]){
              if('addEventListener' in e){
				e.addEventListener( x.toString(),  arguments[i][k][x], false);
              } else {
				/*e.attachEvent( "on" + x , arguments[i][k][x]);*/
				e["on" + x] = arguments[i][k][x]
              }
            }
          } else if(k==='d' || k==='data'){
            for(x in arguments[i][k]){
                if('dataset' in e){
                    e.dataset[x] = arguments[i][k][x];
                } else {
                    e.setAttribute('data-'+ (x.replace(/([A-Z])/g, function(string) { return '-' + string.toLowerCase();})),arguments[i][k][x]);
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
			if(typeof arguments[i][k] === 'object'){
				for(x in arguments[i][k]){
					if(x in e.style){
						e.style[x] = arguments[i][k][x];
					}
				}
			} else {
				e.style.cssText = arguments[i][k];
			}
            
          } else {
            e.setAttribute(k,arguments[i][k]);
          }
        }
      }
    }
  }
  return e;
};