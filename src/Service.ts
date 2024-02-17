import axios from "axios";

export default class Service {
  static async getPosts(titleQuery: string) {
    const url = titleQuery
      ? `https://jsonplaceholder.typicode.com/posts?title=${titleQuery}`
      : `https://jsonplaceholder.typicode.com/posts`;

    const response = (await axios.get(url)).data;

    return response;
  }
}
