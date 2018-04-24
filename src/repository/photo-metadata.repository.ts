import {createConnection} from "typeorm";
import {Photo} from "../entity/photo.entity";
import {PhotoMetadata} from "../entity/photo-metadata.entity";

createConnection(/*...*/).then(async connection => {

    /*
    // create a photo
    let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 34;
    photo.isPublished = true;

    // create a photo metadata
    let metadata = new PhotoMetadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.comment = "cybershoot";
    metadata.orientation = "portait";
    metadata.photoId = 2009; // this way we connect them

    // get entity repositories
    let photoRepository = connection.getRepository(Photo);
    let metadataRepository = connection.getRepository(PhotoMetadata);

    // first we should save a photo
    await photoRepository.save(photo);

    // photo is saved. Now we need to save a photo metadata
    await metadataRepository.save(metadata);

    // done
    console.log("Metadata is saved, and relation between metadata and photo is created in the database too");
    */


    /* -- METADATA - Loading with their relations
    let photoMetadata = connection.getRepository(PhotoMetadata);
    let meta = await photoMetadata.find({ relations: ["photo"] });
    console.log('Hi-photo-metadata', meta);
    */

    /*
     
     */

}).catch(error => console.log(error));
