import uuid from 'uuid';

export const createArticle = ({ abstract, text }) => {
  return {
    type: 'CREATE_ARTICLE',
    id: uuid.v4(),
    abstract,
    text
  }
}
