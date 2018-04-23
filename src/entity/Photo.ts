import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { type } from "os";

@Entity()
export class Photo {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column({type:'text'})
    description: string;
    
    @Column()
    filename: string;
    
    @Column()
    views: number;
    
    @Column()
    isPublished: boolean;
}