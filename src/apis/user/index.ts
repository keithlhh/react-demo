import axios from '@/utils/request';
import {
	UserInfoRequest,
	UserInfoResponse
} from '@/types/schemas/user';

/**
 * 获取用户信息接口
 */
export function getUserInfoApi(info: UserInfoRequest) {
	return axios.get<UserInfoResponse>('/user/getUserInfo', {
	}).then(res => res.data);
}

