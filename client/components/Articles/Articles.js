import React, { Component } from  'react';
import { Link } from 'react-router';
import SearchArticles from './SearchArticles';
import CreateArticle from './CreateArticle';
import ArticleList from './ArticleList';
import FullArticle from './FullArticle';
import EditModal from './EditModal';
import articles from '../../mock/articleStubs';
import { connect } from 'react-redux';
import { getArticles } from '../../actions';
import { bindActionCreators } from 'redux';

class ArticlesDisplay extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.getArticles();
  }
  render() {
    return(
      <div>
        <CreateArticle />
        <ArticleList />
        <SearchArticles />
        <FullArticle />
        <EditModal />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getArticles}, dispatch)
}

const Articles = connect(() => ({}),
  mapDispatchToProps
)(ArticlesDisplay);

export default Articles;
