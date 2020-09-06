import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'; 
import { Cors, CheckMethod}  from '../middlewares';
import { ENV }  from '../utils/constants';
import { createServer } from 'http';
import { http_error } from '../utils/messages/responses/http.response';
import * as route from '../routes'; 

export class Express {
    constructor() {
        this.app = express();
        this.setConfig = this.setConfig.bind(this);
        this.setPublic = this.setPublic.bind(this);
        this.setLoging = this.setLoging.bind(this);
        this.exceptError = this.exceptError.bind(this);
        this.onError = this.onError.bind(this);
        this.listen = this.listen.bind(this);
        this.setRoute  = this.setRoute.bind(this);
    }




    setConfig() {
        //this.app.use(CheckMethod);
        this.app.use(Cors);
        this.app.disable('etag');
        this.app.disable('x-powered-by');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    setPublic() {
        this.app.use(express.static(path.join(__dirname, '../../../public')))
        this.app.use('/', (req, res) => {
            res.status(200).sendFile(path.join(__dirname, '../../../public/index.html'))
        });
    
    }
 

    setLoging() { 

    }

    setRoute(){ 
      this.app.use("/api",[
            route.TopicRoute,
            route.Topic8Route,
            route.Topic16Route
      ]);  
    }
    
    exceptError(){
        this.app.use((err,req,res,next)=>{
            res.status(500).json(http_error(err.message));
        });
    }
  
    onError(error){
        console.info("on Error" ,error.message)
        if (error.syscall !== 'listen') {
            throw error;
        }
        switch (error.code) {
            case 'EACCES':
                process.exit(1);
                break;
            case 'EADDRINUSE':
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    listen() {   
        const port = ENV.APP_PORT || 8080;  
        const server = createServer(this.app);
        server.listen(port,()=>console.info(`Start Server with port ${port}`));
        server.on('error', this.onError);
    }

    
}


