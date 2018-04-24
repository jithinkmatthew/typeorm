import {createConnection} from "typeorm";
import {Photo} from "../entity/photo.entity";

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

}).catch(error => console.log(error));