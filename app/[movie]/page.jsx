import Image from "next/image"
export default async function MovieDetails({params}){
    const {movie}=params
    const imagePath ="https://image.tmdb.org/t/p/original"
    const data=await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
     const res =await data.json()
    //  console.log(res)
    return(
        
        <div>
            <div>
               <h1>{res.title}</h1>
               <h2 className="text-lg">{res.release_date}</h2>
               <h2>Runtime :{res.runtime} minutes</h2>
               <h2 className="text-sm m-1  p-2 bg-green-500 inline-block rounded-md">{res.status}</h2>
            <Image width={300} height={400} src={imagePath+res.poster_path} alt={res.title}/>
             <p>{res.overview}</p>
            </div>
        </div>
    )
}