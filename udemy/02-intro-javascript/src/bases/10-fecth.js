
//http://api.giphy.com/v1/gifs/random?api_key=IrJwy71enEpDaAVanUv2AWa7QamoITgN

const apiKey = "IrJwy71enEpDaAVanUv2AWa7QamoITgN"

const  httpcall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpcall
    .then(result => result.json())
    .then(({data})=>{
        //console.log(data.images.original.url)
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url;
        
        document.body.append(img);

    })
.catch(console.warn)