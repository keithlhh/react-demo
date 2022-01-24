import { Base } from '@/types/schemas/index';

export interface UserInfoRequest extends Base{
    
}

export interface UserInfoResponse extends Base{
    taobaoId: number,
    taobaoNick: string
}