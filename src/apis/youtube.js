import axios from 'axios';
const KEY = 'AIzaSyC_4NRokNmeP1lDZuBjD1MGLFhUXzPUiCw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 4,
        key: KEY
    }
})