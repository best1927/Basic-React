import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideosList from './components/video_list';
const API_KEY = 'AIzaSyBwaaan7YCpPs203UEa-TE4-gk0yfTjvWM';

class App extends Component
{
    constructor(props) {
        super(props);
        //init State
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');

    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
            //   this.setState( {videos : videos});

        });

    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},500);
        return (
            <div>
                <SearchBar onSearchChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideosList
                    onVideoSelect={(selectedVideo) => (this.setState({selectedVideo}))}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.querySelector('.container'));
