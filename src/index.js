//defined React
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyBrD5Z0avTYetDUzVqk8I898sZBXBSuXos';


// create a component, this component should produce some HTML.

class App extends Component{
	constructor(props){
		super(props);

		this.state={ 
			videos: [],
			selectedVideo:null
		};

		this.videoSearch('hiking');
	}

	videoSearch(term) {
		YTSearch({key:API_KEY,term:term},(videos) => {
	    	this.setState({ 
	    		videos:videos,
	    		selectedVideo:videos[0]
	    	});
	    	//console.log(videos);
		});
	} 


	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)},1000);


		return (
			<div>
				<SearchBar onSearchTermChange={(term) =>{videoSearch(term)}}/>
				<VideoDetail v={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={(selectedVideo) => this.setState({selectedVideo}) }
				videos={this.state.videos}/>
				
 			</div>
		);
	}
}


// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// }

// Take this component generated  HTML and put it on the page.

ReactDOM.render(<App />, document.querySelector('.container'));
