module.exports = {
  default: 3000,
  user: `http://${process.env.DOCKER_COMPOSE ? 'user' : 'localhost'}:3001`,
  ticket: `http://${process.env.DOCKER_COMPOSE ? 'ticket' : 'localhost'}:3002`,
  kb: `http://${process.env.DOCKER_COMPOSE ? 'kb' : 'localhost'}:3003`,
  kbSearch: `http://${process.env.DOCKER_COMPOSE ? 'kb-search' : 'localhost'}:3004`,
};
