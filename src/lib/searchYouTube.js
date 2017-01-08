var searchYouTube = ({key, query, max = 5 }, callback) => {
  //get the link from https://developers.google.com/youtube/v3/docs/search/list
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({response}) => {
    response.error.errors.forEach((err) => {
      console.error(err);
    });
  });
};

window.searchYouTube = searchYouTube;
