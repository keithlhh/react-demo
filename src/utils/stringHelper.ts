export const createUrl = (domain: string, obj:Object) => {
	const querys = Object.keys(obj).map(k => `${k}=${obj[k]}`);
	return `${domain}?${querys.join('&')}`;
};