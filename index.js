let playList = document.querySelector("#playList");
console.log(playList);

let videoBox = document.querySelector("#videoBox");
console.log(videoBox);

async function fetchData(){
    let stream = await window.fetch("./data.json");
    let data = await stream.json();
    console.log(data);
    
    data.map((element, index) => {
        console.log(element);
        let name = element.name;
        let video = element.video;
        let thumbnail = element.thumbnail;
        let cast = element.cast;
        console.log(thumbnail);


        let newVideo = document.createElement("div");
        playList.append(newVideo);
        newVideo.style.cssText = "height:300px;border:solid; margin: 5px 0px; "
        newVideo.innerHTML = `
        <video src="${video}" poster="${thumbnail}" height="85%" width="100%" ></video>
        <h2>${name}</h2> <br/>`;


        newVideo.addEventListener("click", ()=> {
            videoBox.innerHTML = `
            <video controls src="${video}" poster="${thumbnail}" width="100%" autoplay > </video> 
            <h2>Cast : ${cast}</h2>
            `
            console.log("reloaded");
        })

    })

}

fetchData();
