import { expect } from 'chai';
import t from '../dist/index';

describe('remove file', () => {
	it('remove file by id', async () => {
		window.host = 'http://127.0.0.1:8889';
		const v = await t(['6016884b-41d3-4157-9cf5-730203c6ea5c']);
		expect(v).eq(true);
	});
});
