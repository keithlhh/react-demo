import { observable } from "mobx";

export class UserStore {
    @observable userInfo = {}
}

export default new UserStore();