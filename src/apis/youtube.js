import axios from 'axios'

const KEY = 'AIzaSyBem0BVR_TC-MsweeY2VisXKBijF5Bs1xM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})