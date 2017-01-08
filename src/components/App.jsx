class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
  }

  handleVideosListEntryTitleClick (video) {
    this.setState ({
      currentVideo: video
    });
  }

  getYouTubeVideos (query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (video) => 
      this.setState({
        videos: videos,
        currentVideo: video[0]
      })
    );
  }


  render () {
    return (
      <div>
        <Nav handleSearchInput={this.getYouTubeVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList handleVideosListEntryTitleClick={this.handleVideosListEntryTitleClick.bind(this)} videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
