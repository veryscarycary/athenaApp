import React, { Component } from  'react';
import SearchArticles from './SearchArticles';
import CreateArticle from './CreateArticle';
import ArticleList from './ArticleList';
import FullArticle from './FullArticle';
import EditModal from './EditModal';
import { connect } from 'react-redux';
import { getArticles } from '../../actions';
import { bindActionCreators } from 'redux';

export class ArticlesDisplay extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.getArticles();
  }
  render() {
    return(
      <div className="articles">
        <CreateArticle />
        <ArticleList />
        <FullArticle />
        <EditModal />
        <SearchArticles />
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
