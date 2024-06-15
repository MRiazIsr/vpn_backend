import { IUserDataAccess } from '../User/IUserDataAccess';
import { UserDataAccess } from '../DataAccess/UserDataAccess';


class DataAccessFactory {
    static createDataAccess(type: string) {
        let dataAccess;
        switch (type) {
            case IUserDataAccess:
                dataAccess = new UserDataAccess();
                break;
            default:
                dataAccess = false;
                break;
        }
        return dataAccess;
    }
}