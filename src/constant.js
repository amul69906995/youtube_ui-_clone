
const api_key=import.meta.env.VITE_YOUTUBE_API_KEY;
const  baseURL = "https://www.googleapis.com/youtube/v3";
import ytHeaderLogoFull from './assets/ytHeaderLogoFull.png'

    




//list of videos
export const list_of_videos=`${baseURL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${api_key}`


 
export {api_key,baseURL,ytHeaderLogoFull}