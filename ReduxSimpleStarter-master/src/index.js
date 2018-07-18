import React, { Component } from "react";
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyD6CLIwKMJvuqHYGLiosymz7pZ4XV_s8so';


//Creazione del componente
class App extends Component {
    constructor(props) {
     super(props);
     this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'arte'}, (videos) => {
        this.setState({videos});
    });

    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }

}

//Inserimento del componente nel DOM

ReactDOM.render(<App />, document.querySelector('.container'));