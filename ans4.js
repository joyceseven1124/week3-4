function getData(){
    fetch("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json").then(function(response){
        return response.json();
    }).then(function(data){
        let attractions = data["result"]["results"]
        let attractionImg = ""
        let attractionName =""
        for(let t = 0; t < 2; t++){
            attractionImg = attractions[t]["file"].split("https:")
            attractionImg.splice(0,1)

            attractionName = attractions[t]["stitle"]

            let newImgTop = document.createElement("img")
            newImgTop.src =  "https:"+attractionImg[0]
            newImgTop.setAttribute("class","twobar_wrap_content_img")

            let imgHomeTwo = document.querySelectorAll(".twobar_wrap_content")
            imgHomeTwo[t].appendChild(newImgTop)

            let nameTop = document.createElement("div")
            let nameTopWord = document.createTextNode(attractionName)
            nameTop.appendChild(nameTopWord)
            nameTop.setAttribute("class","twobar_wrap_content_word")
            imgHomeTwo[t].appendChild(nameTop)
        }

        for(let i = 0; i <= 7; i++){
            attractionImg = attractions[i+2]["file"].split("https:")
            attractionImg.splice(0,1)

            attractionName = attractions[i+2]["stitle"]

            let newImg = document.createElement("img")
            newImg.src = "https:"+attractionImg[0]

            let name = document.createElement("div")
            name.setAttribute("class",'eight_wrap_content_word')
            name.setAttribute("index",attractionName)

            let imgHomeEight = document.querySelectorAll(".eight_wrap_content")
            imgHomeEight[i].appendChild(newImg)
            imgHomeEight[i].appendChild(name)
        }

    });
}

getData()


