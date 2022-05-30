export class User {
    constructor(
      public email: string,
      public id: string,
      private _token: string,
      private _tokenExpirationDate: Date,
      public trainings: number,
      public trainingsList: number[],
      public name?: string,
      public imageUrl?: string,
    ) {}
  
    get token() {
      if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
        return null;
      return this._token;
    }
  }
  