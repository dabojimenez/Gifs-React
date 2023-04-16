export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=OxjjAn7Si1An7ZtkF2xdyoRDujEz7cr5&q=${category}&limit=10`;
    const respons = await fetch( url)
    const {data} = await respons.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    // console.log(gifs);
    
    return gifs;
}