import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/user.entity";
import {Photo} from "./entity/photo.entity";



createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");

    /*
    
    
     //Coming from FrontEnd

    const user = new User();
    user.firstName = "Thomas";
    user.lastName = "Lan";
    user.age = 277;

    
     //Realt-Time -> These methods resides in the 'repository'
     

    await connection.manager.save(user);
     console.log("Saved a new user with id: " + user.id);
     console.log("Loading users from the database...");

    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);
     
    console.log("Here you can setup and run express/koa/any other framework.");

    */

    /*

    // PHOTO

    let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    await connection.manager.save(photo);

    */

//    let savedPhotos = await connection.manager.find(Photo);
//    console.log("All photos from the db: ", savedPhotos);
    
    
}).catch(error => console.log(error));
