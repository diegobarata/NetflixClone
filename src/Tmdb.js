const API_KEY = '91a96fa2a62a766b7ab380a94444dfb0';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async() => {
        return[
            {
                sulg: 'originals',
                title: 'Recomendados para você',
                itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                sulg: 'trending',
                title: 'Recomendados para você',
                itens: await basicFetch(`/tranding/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                sulg: 'toprated',
                title: 'Em alta',
                itens:  await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                sulg: 'action',
                title: 'Ação',
                itens: await basicFetch(`/discover/movie/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },            
            {
                sulg: 'comedy',
                title: 'Comédia',
                itens: await basicFetch(`/discover/movie/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },            
            {
                sulg: 'horror',
                title: 'Terror',
                itens: await basicFetch(`/discover/movie/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

            },            
            {
                sulg: 'romance',
                title: 'Romance',
                itens: await basicFetch(`/discover/movie/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                sulg: 'documentary',
                title: 'documentarios',
                itens: await basicFetch(`/discover/movie/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)

            }      
        ]
    }
}