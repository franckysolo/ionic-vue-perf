(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ef46"],{d884:function(n,e,a){"use strict";a.r(e),a.d(e,"mdTransitionAnimation",(function(){return o}));a("5e31"),a("b948"),a("498c");var i=a("cfbf"),t=(a("38bb"),a("c2d4")),o=function(n,e){var a="40px",o="0px",r="back"===e.direction,c=e.enteringEl,d=e.leavingEl,b=Object(t["b"])(c),s=b.querySelector("ion-toolbar"),l=Object(i["a"])();if(l.addElement(b).fill("both").beforeRemoveClass("ion-page-invisible"),r?l.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):l.duration(e.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY("+a+")","translateY("+o+")").fromTo("opacity",.01,1),s){var u=Object(i["a"])();u.addElement(s),l.addAnimation(u)}if(d&&r){l.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var f=Object(i["a"])();f.addElement(Object(t["b"])(d)).afterStyles({display:"none"}).fromTo("transform","translateY("+o+")","translateY("+a+")").fromTo("opacity",1,0),l.addAnimation(f)}return l}}}]);
//# sourceMappingURL=chunk-2d21ef46.ed5d2331.js.map