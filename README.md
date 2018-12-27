# PasswordReveal

Just copy and paste the following code to your browser console:

`var script=document.createElement("script");script.src="https://suarezluis.github.io/PasswordReveal/main.js",document.body.appendChild(script);`

If the website throws an error use the raw code:

`for(array=document.getElementsByTagName("input"),i=0;i<array.length;i++)"password"==array[i].getAttribute("type")&&array[i].setAttribute("type","text");`
