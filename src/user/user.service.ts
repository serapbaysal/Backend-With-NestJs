import { Injectable } from '@nestjs/common';
import { UserModel } from 'tools/models/user.model';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuditModel } from 'tools/models/audit.model';
import  environment from 'tools/environment/environment'

const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashText = environment.hashText;


@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userMongo: Model<UserModel>
    ) {

    }

    async createUser(user: UserCreateDto): Promise<UserModel> {   // MongoDb promise döner, dolayısıyla yazılan fonksiyonlar da promise dönmeli
        const audit = new AuditModel();
        audit.active = true;
        audit.createdBy = 'Admin';   // şimdilik admin, sonra değişecek
        audit.createdDate = new Date();



        const createdUser = new this.userMongo({ ...user, ...audit });
        return await createdUser.save();
    }


    async findAll(): Promise<UserModel[]> {

        return await this.userMongo.find().exec();
    }


    async findOne(id: string): Promise<UserModel> {

        return await this.userMongo.findById(id).exec();


    }


    async delete(id: string): Promise<UserModel> {
        return await this.userMongo.findByIdAndRemove(id).exec();
    }


    async update(id: string, user: UserUpdateDto): Promise<UserModel> {
        
        let newModel = this.userMongo.findOne({ _id: id }).exec();
        
        newModel = { ...newModel, ...user };
        
        return await this.userMongo.findByIdAndUpdate(id, newModel, {new: true, useFindAndModify:false}).exec();   // new:true = yeni kullanıcı döndürülür, new:false = bir önceki kullanıcı döndürülür

    }
    async convertToHash(value:string) {
        let hashPwd;
        await bcrypt.hash(`${hashText}${value}`,saltRounds).then(hash => {hashPwd = hash})
        return await hashPwd;
    }
    async compareHashes(password, hashed) {
        const match = await bcrypt.compareSync(`${hashText}${password}`, hashed)
        return await match;
    }
}
