const style=document.createElement("link");style.setAttribute("rel","stylesheet"),style.setAttribute("href","./fpsStat/fps-stat.css"),document.head.appendChild(style);var fpsSections=document.querySelectorAll("section.syles.fps-graph");fpsSections.forEach(a=>{var b=document.createElement("div"),c=document.createElement("div");c.classList.add("fps-text");var d=document.createElement("h1");d.setAttribute("id","fps-value"),d.innerHTML="FPS";var e=document.createElement("div");e.setAttribute("id","graph");for(let b=0;25>b;b++){var f=document.createElement("span");e.appendChild(f)}var g=document.createElement("div");g.setAttribute("id","ping");var h=document.createElement("h1");h.setAttribute("id","ping-value"),h.innerHTML="10 PING",c.appendChild(d),b.appendChild(c),b.appendChild(e),g.appendChild(h),b.appendChild(g),a.appendChild(b)});var lastLoop=new Date,time=1e3,lowestFps=60,highesFps=60;setInterval(()=>{var a=document.querySelectorAll("#graph"),b=document.querySelectorAll("#fps-value"),c=new Date,d=Math.floor(60*(time/(c-lastLoop)));lastLoop=c,a.forEach(a=>{var b=a.firstElementChild;a.appendChild(b),b.style.height=Math.floor(d/5)+"px"}),d<lowestFps?lowestFps=d:d>highesFps&&(highesFps=d),b.forEach(a=>{a.innerHTML=`${d} FPS (${lowestFps}-${highesFps})`})},time);
