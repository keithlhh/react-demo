import { message } from 'antd';
import { DataNode } from 'antd/lib/tree';
import dayjs from 'dayjs';
import qs from 'qs';
import { ItemGetItemCatsResponse } from '@/types/schemas/productManage';

type DataProps = ItemGetItemCatsResponse['data'];
// 工具库


// 序列化
export const serialization = (keyMap: any) => {
	let result = [];
	for (let key in keyMap) {
		// eslint-disable-next-line no-prototype-builtins
		if (keyMap.hasOwnProperty(key)) {
			result.push(`${key}=${keyMap[key]}`);
		}
	}
	return result.join('&');
};


// copy到粘贴板
export function copyToPaste(str: string) {
	let input = document.createElement('input');
	input.value = str;
	document.body.appendChild(input);
	input.select();
	document.execCommand('Copy');
	input.style.display = 'none';
	document.body.removeChild(input);
	message.success('复制成功');
}

// 获取字符串长度，中文为2，英文数字为1
export function getBystesLength(str: string) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 255) {
			count += 2;
		} else {
			count++;
		}
	}
	return count;
}


// 价格转两位小数
export function formatPrice(price: string | number) {
	return (Number(price) / 100).toFixed(2);
}


/**
*树形结构树生成
*/
export const formatTreeData: (data: DataProps) => DataNode[] = (data: DataProps) => {
	/**
	* obj转arr
	*/
	const _arrayForm: <T extends {}>(obj: T) => (DataNode & { cid: string })[] = obj => {
		return Object.keys(obj).map(objKey => {
			const objVal = obj[objKey];
			if (Array.isArray(objVal)) {
				return {
					cid: objKey,
					children: objVal.map(objValItem => {
						const { name, cid: objValCid } = objValItem;
						return {
							title: name,
							value: objValCid,
							key: objValCid.toString()
						};
					})
				};
			}
			return {
				...objVal,
				title: objVal.name,
				value: objKey,
				key: objKey
			};
		});
	};
	const { rootMap, childMap } = data;
	const rootArray = _arrayForm(rootMap);
	const childArray = _arrayForm(childMap);
	return rootArray.map(rootItem => {
		const { cid } = rootItem;
		const cidItem = childArray.find(item => item.cid === cid.toString());
		return {
			...rootItem,
			children: cidItem ? cidItem.children : null
		};
	});
};

/**
 * @param param 处理的字段
 * @result 为空返回 -
 */
export const formatEmptyField: <T extends {} = string>(param: T) => T | string = (param) => {
	if (!param) {
		return ' - ';
	}

	if (Object.prototype.toString.call(param) === '[object Object]' && Object.keys(param).length === 0) {
		return ' - ';
	}

	return param;
};

/**
 * @param search location.search
 */
export const useQuery = (search: string) => {
	return qs.parse(search.substring(1));
};
