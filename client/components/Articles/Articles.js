import React, { Component } from  'react';
import { Link } from 'react-router';
import SearchArticles from './SearchArticles';
import CreateArticle from './CreateArticle';
import ArticleList from './ArticleList';
import FullArticle from './FullArticle';
import articles from '../../mock/articleStubs';
import { connect } from 'react-redux';
import { loadArticles } from '../../actions';
import { bindActionCreators } from 'redux';


class ArticlesDisplay extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.loadArticles(articles);
  }
  render() {
    return(
      <div>
        <CreateArticle />
        <ArticleList />
        <SearchArticles />
        <FullArticle />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loadArticles}, dispatch)
}

const Articles = connect(() => ({}),
  mapDispatchToProps
)(ArticlesDisplay);

export default Articles;
