import axios from "axios";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

const rapidAPI = axios.create({
  baseURL: 'https://article-extractor-and-summarizer.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': rapidApiKey,
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
});

export default rapidAPI;