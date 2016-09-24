import { connect } from 'react-redux';
import ArticleList from '../ArticleList';

const mapStateToProps = (state) => {
  return {
    articles: state.articlesList
  }
}

const ArticleListItems = connect(
  mapStateToProps
)(ArticleList);

export default ArticleListItems;
