import { Express } from './configs/express.config';
import { Database }  from './configs/database.config';

export class Server {
  constructor() {
    this.app = new Express();
    this.start = this.start.bind(this);
  }

  static bootstrap() {
    return new Server();
  }

  async start(){
    try{ 
      await Database.connect(); 
      this.app.setConfig();
      this.app.setRoute();
      this.app.setPublic();
      this.app.exceptError();
      this.app.listen();
    }catch(err){  
      console.log(err.message);
      process.exit(0);
    }
   
  }

}
