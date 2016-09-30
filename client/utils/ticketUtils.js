import fetch from 'isomorphic-fetch';

const ticketUtils = {
  getTickets: () => {
    return fetch('http://localhost:3000/api/ticket', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error getting the tickets!');
    });
  },
  submitNewTicket: () => {
    return fetch('http://localhost:3000/api/ticket', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: document.getElementById('title').value,
        issuePreview: document.getElementById('issue').value.slice(0, 50),
        issue: document.getElementById('issue').value,
        customerId: document.getElementById('customerId').value,
        product: document.getElementById('product').value,
        solution: document.getElementById('solution').value,
        relatedArticles: document.getElementById('relatedArticles').value,
        relatedProducts: document.getElementById('relatedProducts').value,
        resolved: true,
        authorId: JSON.stringify(Math.floor(Math.random * 1000)),
        dateSubmitted: new Date(),
        datesOpened: new Date(),
        checkedOut: true
      })
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error getting the tickets!');
    });
  },
  editTicket: (ticketId) => {
    return fetch(`http://localhost:3000/api/ticket/${ticketId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: document.getElementById('editTitle').value,
        issuePreview: document.getElementById('editIssue').value.slice(0, 50),
        issue: document.getElementById('editIssue').value,
        customerId: document.getElementById('editCustomerId').value,
        product: document.getElementById('editProduct').value,
        solution: document.getElementById('editSolution').value,
        relatedArticles: document.getElementById('editRelatedArticles').value,
        relatedProducts: document.getElementById('editRelatedProducts').value,
        authorId: JSON.stringify(Math.floor(Math.random * 1000)),
        datesOpened: new Date(),
        checkedOut: true
      })
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error getting the tickets!');
    });
  }
};

export default ticketUtils;
