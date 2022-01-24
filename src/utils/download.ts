/**
 * @description: 下载图片
 * @param { url } 图片链接
 * @return {*}
 */
import axios from "axios";

class DownloadImage {
	private url: string;

	private fileName: string;

	constructor(url: string, fileName?: string) {
		this.url = url;
		// 如果配置在https下，不能使用http协议下载
		if(this.url.startsWith('http://')) {
			this.url = this.url.replace('http://', '//');
		}
		this.fileName = fileName || this.url.split('/').pop();
		// this.downloadFile();
		this.downloadFileByXHR();
	}

	// 通过ajax方式下载文件
	async downloadFileByXHR() {
		const res = await axios({
			method: "get",
			// 加上时间戳防止因为缓存出现跨域问题
			url: `${ this.url }?timstamp=${ new Date().getTime() }`,
			responseType: "blob",
		});
		const newUrl = window.URL.createObjectURL(res.data);
		const a = document.createElement("a");
		a.href = newUrl;
		a.download = this.fileName;
		a.click();
		a.remove();
		  //在资源下载完成后 可以人工清除createObjectURL 占用的缓存资源
		window.URL.revokeObjectURL(newUrl);
	}

	/** 开始下载图片*/
	async downloadFile() {
		let content: string = await this.getBase64(`${this.url}?v=${new Date().getTime()}`, 0, 0);
		const fileName = this.fileName ?? this.url.split('/').pop().split('.')[0];
		const aLink = document.createElement('a');
		const blob = this.base64ToBlob(content); // new Blob([content]);
		const evt = document.createEvent('HTMLEvents');
		evt.initEvent('click', true, true); // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
		aLink.download = fileName;
		aLink.href = URL.createObjectURL(blob);
		aLink.click();
	}

	/** 获取base64格式图片*/
	getBase64(src: string, width: number, height: number) {
		return new Promise<string>((resolve, reject) => {
			const image = new Image();
			image.crossOrigin = 'anonymous';
			image.src = src;
			image.onload = () => {
				const canvas = document.createElement('canvas');
				canvas.width = width || image.width;
				canvas.height = height || image.height;
				const ctx = canvas.getContext('2d');
				ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
				const dataUrl = canvas.toDataURL();
				resolve(dataUrl);
			};
			image.onerror = (err) => {
				reject(err);
			};
		});
	}

	/** base64 To Blob */
	base64ToBlob(code: string) {
		const parts = code.split(';base64,');
		const contentType = parts[0].split(':')[1];
		const raw = window.atob(parts[1]);
		const rawLength = raw.length;
		const uInt8Array = new Uint8Array(rawLength);
		for (let i = 0; i < rawLength; i += 1) { uInt8Array[i] = raw.charCodeAt(i); }
		return new Blob([uInt8Array], { type: contentType });
	}
}

export default DownloadImage;
