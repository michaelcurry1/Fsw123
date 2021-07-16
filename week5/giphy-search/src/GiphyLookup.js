import { useState, useEffect } from "react";

function GiphyLookup({initialQuery}) {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const[imgSrc, setImageSrc] = useState('');
    const[alt, setAlt] = useState('');

    const fetchImage = (query = initialQuery ) =>{

        setLoading(true);
        const encodedQuery = encodeURIComponent(query);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=StGEROY7n9630aOR3Cn3JMMHPbNnEXwo&tag=${encodedQuery}`;

        fetch(url, {
            method:'GET',
        }).then(function(response) {
            if (response.ok) {
                return response.json();
            }
                return Promise.reject(response);
        }).then(function({data}){
            setLoading(false);
            setImageSrc(data.fixed_height_downsampled_url);
            setAlt(data.title)
        }).catch(function(error){
            setLoading(false);
            setError(true);
            console.warn('something went wrong',error);
        });
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetchImage(evt.target.query.value)
    }
    useEffect(fetchImage, [initialQuery]);

    return (
        <div>
            <br></br>
            <header>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="query" placeholder="search phrase" style={{width:"225px"}}/> &nbsp;
                    <button type="submit">Enter</button>
                </form>
            </header>
            <br></br>
            <main>
                <section>
                    {loading &&<div>Loading...</div>}
                    {error &&<div>Error</div>}
                    {!loading && !error && !imgSrc &&
                    <div>Nothing Found</div>}
                     {!loading && !error && imgSrc &&
                     <div><img src={imgSrc} alt = {alt} style={{width:'300px'}}/></div>
                     }

                </section>
            </main>
        </div>
    )
 }                                    

   //
    export default GiphyLookup