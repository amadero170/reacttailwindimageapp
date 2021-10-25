import Tag from './Tag';

function ImageCard({image}) {
    
    const tags = image.tags.split(",");

    return (
    <div className="overflow-hidden rounded shadow-xl">
        <img src= {image.webformatURL} alt="random img" />
        <div className="px-6 py-4">
        <div className="text-purple-500 text-lg">{image.user}</div>  
        <ul className="text-sm">
            <li>Views: {image.views}</li>
            <li>Downloads: {image.downloads}</li>
            <li>Likes: {image.likes}</li>
        </ul>
        </div>
        <div className="px-6 py-3">   
            {tags.map((item,index)=><Tag key={index} tagName={item}/>)}
        </div>
        
    </div>

    )
}
export default ImageCard;