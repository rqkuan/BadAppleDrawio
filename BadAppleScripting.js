async function playBadApple() {
    const d = document.getElementById("display");
    const arr = Array.from(d.getElementsByTagName("rect")); 

    let file = await fetch("./BadAppleData.json", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
       .then(response => response.json())
       .then();
    let video = await JSON.parse(JSON.stringify(file));
    
    for (let f = 0; f < video.length; f++) {
        await new Promise(r => setTimeout(r, 90));
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.fill="rgb("+video[f][i]+", "+video[f][i]+", "+video[f][i]+")";
        }
    }
}