const style = document.createElement("link")
style.setAttribute("rel", "stylesheet")
style.setAttribute("href", "./fpsStat/fps-stat.css")
document.head.appendChild(style)

var fpsSections = document.querySelectorAll("section.syles.fps-graph")

fpsSections.forEach(fpsSection => {
    var div = document.createElement("div")

    var fpsText = document.createElement("div")
    fpsText.classList.add("fps-text")
    
    var fpsTextTitle = document.createElement("h1")
    fpsTextTitle.setAttribute("id", "fps-value")
    fpsTextTitle.innerHTML = "FPS"
    
    var graph = document.createElement("div")
    graph.setAttribute("id", "graph")

    for (let i = 0; i < 25; i++) {
        var span = document.createElement("span");
        graph.appendChild(span)
    }

    var ping = document.createElement("div")
    ping.setAttribute("id", "ping")
    
    var pingTitle = document.createElement("h1")
    pingTitle.setAttribute("id", "ping-value")
    pingTitle.innerHTML = "10 PING"
    
    
    fpsText.appendChild(fpsTextTitle)
    div.appendChild(fpsText)

    div.appendChild(graph)

    ping.appendChild(pingTitle)
    div.appendChild(ping)

    fpsSection.appendChild(div)

})

var lastLoop = new Date();

var time = 1000
var lowestFps = 60, highesFps = 60;

setInterval(() => {
    
    var graphs = document.querySelectorAll("#graph")
    var fpsTexts = document.querySelectorAll("#fps-value")

    var thisLoop = new Date();
    var fps = Math.floor(time / (thisLoop - lastLoop) * 60);
    lastLoop = thisLoop;

    graphs.forEach(graph => {
        var graphFEC = graph.firstElementChild
        graph.appendChild(graphFEC)
        graphFEC.style.height =  (Math.floor(fps / 5)) + "px"
    })
    
    if (fps < lowestFps) {

        lowestFps = fps

    } else if (fps > highesFps) {

        highesFps = fps

    }

    fpsTexts.forEach(fpsText => {
        fpsText.innerHTML = `${fps} FPS (${lowestFps}-${highesFps})`
    })


}, time);