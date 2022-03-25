import React from 'react'
import { selectSong } from '../actions'
import SongList from './SongList'

const App = () => {
    return (
        <div>
            <h1>App js file</h1>
            <SongList />
        </div>
    )
}

export default App