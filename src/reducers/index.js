import { combineReducers } from "redux"


const songsReducer = () => {
    return [
        { title: 'song1', duration: '4:03' },
        { title: 'song2', duration: '7:33' },
        { title: 'song3', duration: '6:02' },
        { title: 'song4', duration: '5:05' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})