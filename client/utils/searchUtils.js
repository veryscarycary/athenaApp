import fetch from 'isomorphic-fetch';

export default {
  search (options) {
    var qs;
    if (options.type === 'kb') {
      qs = `/api/search?` +
             `term=${options.term}` +
             `&type=${options.type}` +
             `&archived=${options.archived ? options.archived : 'false'}` +
             `${options.dateStart ? '&dateStart=${options.dateStart}' : ''}` +
             `${options.dateEnd ? '&dateEnd=${options.dateEnd}' : ''}`
    } else {
      qs = `/api/search?` +
             `term=${options.term}` +
             `&type=${options.type}` +
             `${options.dateStart ? '&dateStart=${options.dateStart}' : ''}` +
             `${options.dateEnd ? '&dateEnd=${options.dateEnd}' : ''}`
    }
    return new Promise((resolve, reject) =>
      fetch(qs)
      .then(response => response.json())
      .then(json => resolve(json
        .map(result => ({
          issue: result._source.issue,
          solution: result._source.solution,
          issuePreview: result._source.issuePreview,
          id: result._source.id,
          title: result._source.title
        })
      )))
      .catch(err => reject(err))
    );
  }
}
