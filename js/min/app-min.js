var FibonaccMe=function(){var o=!1,t=!0,n=0,r=12,s=1,l,e,a=$(".buttonContainer").find("ul"),i=[],c;return{start:function p(){for(c=c?c:this;r>n;){var a;t&&(console.log("first run"),l=0,e=s),o||(console.log("second run"),l=s,e=s),a=l+e,console.log("result: ",a),l=e,e=a,o=!0,t=!1,colors=c.newRGB(),n++,i.push("<li style='order: "+n+"; position: relative;'><button class='keyword' style='background-color: rgba("+colors[0]+", "+colors[1]+", "+colors[2]+", 1);' data-popularityindex="+n+"><p class='keyword'>"+a+"</p><div class='arrow-left'></div><div class='rightSide'><p class='popularityNumber'>"+n+"</p></div></button></li>")}i.length?c.insertKeywords():console.log("no liArr.length",i)},newRGB:function u(){var o=0,t=255,n=[],r,s,l,e=function(){return Math.floor(Math.random()*(t-o+1))+o};return r||(r=e(),n.push(r)),s||(s=e(),n.push(s)),l||(l=e(),n.push(l)),3===n.length?(console.log("colorArr: ",n),n):void 0},insertKeywords:function d(){var o=0,t=i.length;t&&(a.empty().append(i.join("")),$("#clickme").off("click").on("click",function(n){n.stopPropagation(),n.preventDefault();var r=Math.floor(Math.random()*(t-o+1))+o,s=Math.floor(Math.random()*(t-o+1))+o,l=a.find("li:nth-child("+r+")"),e=a.find("li:nth-child("+s+")"),i=l.offset(),c=parseInt(i.top,10),p=parseInt(i.left,10),u=e.offset(),d=parseInt(u.top,10),f=parseInt(u.left,10),h=c>d?-1*(c-d):c-d,g=p>f?-1*(p-f):p-f;l.css({transform:"translate3d("+-1*g+"px, "+-1*h+"px, 0)",position:"absolute"}),e.css({transform:"translate3d("+g+"px, "+h+"px, 0)",position:"absolute"})}),i=[])}}}();FibonaccMe.start();