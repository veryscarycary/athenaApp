import fetch from 'isomorphic-fetch';

export default {
  search (options) {
    var qs = `/api/search?` +
             `term=${options.term}` +
             `&type=${options.type}` +
             `&archived=${options.archived ? options.archived : 'false'}` +
             `${options.dateStart ? '&dateStart=${options.dateStart}' : ''}` +
             `${options.dateEnd ? '&dateEnd=${options.dateEnd}' : ''}` +
    return new Promise((resolve, reject) =>
      fetch(qs)
      .then(response => response.json()
           .then(json => {
              resolve(json.map(result => {
                return {
                  id: result._source.id,
                  title: result._source.title,
                }
              }))
            })
      )
      .catch(err => reject(err))
    );
  }
}
