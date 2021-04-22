// const getImagenPromesa = () => {
//     return new Promise((resolve,reject) => resolve('https://ssdsfsdfsdf.com'))
// }

// getImagenPromesa().then(console.log);


const getImageAsync = async () => {

    try{
    
        const apiKey = "IrJwy71enEpDaAVanUv2AWa7QamoITgN";
        const result = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await result.json(); //Desestructuramos data
        console.log(data);

        const { url } = data.images.original
        console.log(url);
        
        const img = document.createElement('img')
        img.src = url;
        document.body.append(img);

    }catch(error){
        console.error(error);
    }

}

getImageAsync()





