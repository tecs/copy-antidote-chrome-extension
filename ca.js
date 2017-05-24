const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.innerText = "\
(function() {\
const el = EventTarget.prototype.addEventListener;\
EventTarget.prototype.addEventListener = function(e, fn, capture) {\
    if (e !== 'copy' || fn.toString().indexOf('function copyPoison(') !== 0) {\
        return el.apply(this, arguments);\
    }\
};\
})()";
document.documentElement.appendChild(script);
