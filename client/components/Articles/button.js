import React from 'react';

export const Button = ({icon, clickEvent}) => {
  const handleClick = () => {
    clickEvent()
  }
  return (
    <div className="button-float">
      <button
        className="full-article-button"
        onClick={handleClick}>
        <i className="material-icons">
          icon
        </i>
      </button>
    </div>
  )
}
