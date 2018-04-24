import { Entity, PrimaryColumn, Column } from "typeorm";


@Entity()
export class Checker {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    userId: string;

    @Column()
    path: number;

}