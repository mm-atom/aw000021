import global from '@mmstudio/global';

/**
 * 根据文件名删除文件服务器上的文件
 * @param productid 产品id
 * @param file_id 要删除的文件id,上传时返回的filename
 */
export default async function remove(file_id: string[]) {
	try {
		const res = await fetch(`${global('host', '.')}/fsweb/delfile?id=${file_id.join(',')}`, {
			method: 'POST'
		});
		const ret = await res.json() as { code: 0 | 1; code_msg: '删除成功！' | string };
		return ret && ret.code === 1;
	} catch (error) {
		// console.error(error);
		return false;
	}
}
