import {createConnection} from "typeorm";
import {Photo} from "../entity/photo.entity";
import { PhotoMetadata } from "../entity/photo-metadata.entity";

createConnection(/*...*/).then(async connection => {

    /* -- INSERT
    let photo = new Photo();
    photo.name = "Me and Bears-Repository";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;
    const photos = [
        photo,
        photo
    ]
    let photoRepository = connection.getRepository(Photo);

    await photoRepository.save(photos);
    console.log("Photo has been saved");

    let savedPhotos = await photoRepository.find();
    console.log("All photos from the db: ", savedPhotos);
    */

    /* -- SELECT

    let photoRepository = connection.getRepository(Photo);

    let allPhotos = await photoRepository.find();
    console.log("All photos from the db-->>>>: ", allPhotos);

    let firstPhoto = await photoRepository.findOne(2006);
    console.log("First photo from the db-->: ", firstPhoto);

    let meAndBearsPhoto = await photoRepository.findOne({ name: "Me and Bears-Repository" });
    console.log("Me and Bears photo from the db: ", meAndBearsPhoto);

    let allViewedPhotos = await photoRepository.find({ views: 1 });
    console.log("All viewed photos: ", allViewedPhotos);

    let allPublishedPhotos = await photoRepository.find({ isPublished: true });
    console.log("All published photos: ", allPublishedPhotos);

    let [allPhotos, photosCount] = await photoRepository.findAndCount();
    console.log("All photos: ", allPhotos);
    console.log("Photos count: ", photosCount);
    */

    /* -- UPDATE

    let photoRepository = connection.getRepository(Photo);
    let photoToUpdate = await photoRepository.findOne(2006);
    photoToUpdate.name = "Me, my friends";
    await photoRepository.save(photoToUpdate);
    
    */

    /* -- DELETE

    let photoRepository = connection.getRepository(Photo);
    let photoToRemove = await photoRepository.findOne(2006);
    await photoRepository.remove(photoToRemove);

    */

    /* -- METADATA - Loading with their relations

    let photoRepository = connection.getRepository(Photo);
    let photos = await photoRepository.find({ relations: ["metadata"] });
    console.log('Hi-photo', photos);
    

    */

    //* -- CASCADE 
    
    let metadata = new PhotoMetadata();
    metadata.height = 6402;
    metadata.width = 4802;
    metadata.orientation = "Casecade portait";
    metadata.compressed = true;
    metadata.comment = "Casecade cybershoot";

    // create photo metadata object
    let photo = new Photo();
    photo.name = "Casecade Me and Bears";
    photo.description = "Casecade I am near polar bears";
    photo.filename = "Casecade photo-with-bears.jpg";
    photo.views = 98;
    photo.isPublished = true;
    photo.metadata = metadata; // this way we connect them

    // get repository
    let photoRepository = connection.getRepository(Photo);

    // saving a photo also save the metadata
    await photoRepository.save(photo);

    console.log("Photo is saved, photo metadata is saved too. :)")

    //*/


}).catch(error => console.log(error));