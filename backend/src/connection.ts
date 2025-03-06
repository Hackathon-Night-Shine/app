import "reflect-metadata";
import { DataSource } from "typeorm";
import { createDatabase } from "typeorm-extension";
import { config } from "dotenv";
import { User } from "./entities/User";
import { Request } from "./entities/Request";
import { Retreat } from "./entities/Retreat";
import { Review } from "./entities/Review";
import { UserRetreat } from "./entities/UserRetreat";
import { Supplier } from "./entities/Supplier";
import { SupplierReceipt } from "./entities/SupplierReceipt";
import { UserFile } from "./entities/UserFile";
import { UserUserFile } from "./entities/UserUserFile";
import { Receipt } from "./entities/Receipt";

config();

export const dataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    schema: 'public',
    entities: [User, Request, Retreat, Review, UserRetreat, Supplier, 
        Receipt, SupplierReceipt, UserFile, UserUserFile]
});

const initializeDataSource = async () => {
    if (dataSource.isInitialized) {
        console.log('Closing exiting connection...')
        await dataSource.destroy();
    }

    await dataSource.initialize()
}

export const AppDataSource = async () => {
    await initializeDataSource();
    return await createDatabase({
        ifNotExist: true,
        options: dataSource.options,
    });
};
