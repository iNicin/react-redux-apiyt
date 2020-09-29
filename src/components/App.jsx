import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// CSS //
import '../style/search.css'


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <body>
                <div className="main-app">
                    <SearchBar handleFormSubmit={this.handleSubmit}/>
                </div>   
               
               
                <div>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                </div>         
                
            </body>
        );
    };
};

export default App;