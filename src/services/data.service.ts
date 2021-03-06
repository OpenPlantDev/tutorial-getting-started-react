
export class DataService {

  private _baseUrl: string;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  private async fetchData(url: string)  {
    console.log(`url: ${url}`);
    return fetch(url).then( async (response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error reading data");
            }
        }).then((result) => {
            return result;
        }).catch((err) => {
            console.log(`In fetchComponents catch: ${err}`);
            throw err;
        });
  }

  public async fetchComponents(queryString?: string) {
    try {
      let url = `${this._baseUrl}/components`;
      if(queryString) {
        url = `${url}?${queryString}`
      }
      const result = await this.fetchData(url);
      return result;
    } catch (err) {
      throw err;
    }
  }
}
