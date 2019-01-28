import { RESTDataSource } from 'apollo-datasource-rest';

export default class Forum extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3001/api/';
  }

  async getAll() {
    return this.get('forums');
  }

  async create(topic, description) {
    return this.post('forums', {
      topic,
      description
    });
  }

  async destroy(id) {
    return this.delete(`forums/${id}`);
  }
}
