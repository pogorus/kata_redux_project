export default class AviasalesService {
  baseURL = 'https://aviasales-test-api.kata.academy';

  async getId() {
    const res = await fetch(`${this.baseURL}/search`);
    return await res.json();
  }

  async getTickets(searchId) {
    const res = await fetch(`${this.baseURL}/tickets?searchId=${searchId}`);
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }
    return await res.json();
  }
}
