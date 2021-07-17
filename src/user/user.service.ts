import { Injectable } from '@nestjs/common';
import { UserModel } from 'tools/dtos/models/user.model';
import { UserCreateDto } from 'tools/dtos/user.dto';

const result: UserModel[] = [];



@Injectable()
export class UserService {
    getAllUsers(): UserModel[] {
        if (result.length === 0) {   // user yoksa
            this.creatingMockUser({   // yeni user oluştur
                birthDay: new Date(),
                email: "serap@hotmail.com",
                name: "Serap",
                surname: "Baysal",
                password: "123456"


            })
        }
        return result;
    }
    createUser(body: UserCreateDto) {
        const isExists = result.find(res => (
            res.email === body.email
            )
            
            )
        if (isExists) {
            return isExists;
        }else {
            this.creatingMockUser(body);
            return result.slice(result.length-1, result.length);
        }

    }
    private creatingMockUser(data: any) {
        const user: UserModel = new UserModel();
        user.birthDay = data.birthDay;
        user.email = data.email;
        user.name = data.name;
        user.surname = data.surname;
        user.password = data.password;

    }
}
