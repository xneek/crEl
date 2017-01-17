/*jshint esversion: 6 */
class crEl { // goodby IE
    constructor(args) {
        let e = document.createElement(args[0] && typeof(args[0]) === 'string' ? args[0] : 'div');;
        args.forEach((a, i) => {
            if (i > 0 && typeof a === 'string') {
                e.appendChild(document.createTextNode(a));
            } else if (typeof a === 'object') {
                if (a.nodeType && a.nodeType === 1) {
                    e.appendChild(a);
                } else {
                    switch (Object.prototype.toString.call(a)) {
                        case '[object Object]':
                            for (let k in a) {
                                if (k === 'e' || k === 'events') {
                                    for (let x in a[k]) {
                                        e['on' + x] = a[k][x];
                                    }
                                } else if (/^on[a-zA-Z]+/.test(k)) {
                                    if (typeof a[k] === 'function') {
                                        e[k] = (function(func) {
                                            return function() {
                                                func.apply(e, arguments);
                                            }
                                        })(a[k])
                                    } else {
                                        e[k] = a[k];
                                    }

                                } else if (k === 'd' || k === 'data') {
                                    for (let x in a[k]) {
                                        e.dataset[x] = a[k][x];
                                    }
                                } else if (k === 'c' || k === 'class') {
                                    a[k].replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ').split(' ').forEach((c) => {
                                        if (c && c.length) {
                                            e.classList.add(c);
                                        }
                                    });
                                } else if (k === 's' || k === 'style') {
                                    if (Object.prototype.toString.call(a[k]) === '[object Object]') {
                                        for (let x in a[k]) {
                                            if (x in e.style) {
                                                e.style[x] = a[k][x];
                                            }
                                        }
                                    } else {
                                        e.style.cssText = a[k];
                                    }

                                } else {
                                    if (typeof a[k] === 'boolean') {
                                        e[k] = a[k];
                                    } else {
                                        e.setAttribute(k, a[k]);
                                    }
                                }
                            }
                            break;
                        case '[object Array]':
                            a.forEach((n) => {
                                e.appendChild(n.nodeType === 1 ? n : document.createTextNode(n));
                            });
                            break;
                        default:
                            break;
                    }
                }
            }
        });
        return e;
    }
}
if (typeof exports === 'object') {
    module.exports = crEl;
} else if (typeof define === 'function' && define.amd) {
    define(crEl);
} else {
    window.crEl = crEl;
}