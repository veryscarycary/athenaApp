import React, { PropTypes } from 'react';

export const Button = ({icon, text, cssClass, clickEvent}) => (
  <button
    className={cssClass}
    onClick={clickEvent}>
    {icon ? <i className="material-icons">{icon}</i> : text}
  </button>
)

Button.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  cssClass: PropTypes.string,
  clickEvent: PropTypes.func,
}

export const DeleteButtonContainer = ({text, cssClass, article, deleteArticle}) => {
  let clickEvent = () => {
    deleteArticle(article.id);
  }
  return (
    <button
      className={cssClass}
      onClick={clickEvent}>
      {text}
    </button>
  );
};

export const EditButtonContainer = ({text, cssClass, article, toggleEdit}) => {
  let clickEvent = () => {
    toggleEdit(article)
  }
  return (
    <button
      className={cssClass}
      onClick={clickEvent}>
      {text}
    </button>
  );
};

