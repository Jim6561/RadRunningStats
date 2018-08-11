const request = require('supertest');
const express = require('express');

import index from '../routers/index';
import pool from '../../database/pgpool';

jest.mock('../../database/pgpool');

var app = express();
app.use(index);

var fakeData = [{data: 'fake data2'}],
	fakeResponse = {rows: fakeData},
	queryMock,
	releaseMock;

beforeEach(() => {
	queryMock = jest.fn();
	releaseMock = jest.fn();

	queryMock.mockImplementation((query, callback) => {
		callback(false, fakeResponse);
	});
	pool.connect.mockImplementation((connectFn) => {
		connectFn(false, {query: queryMock}, releaseMock);
	});
});

describe('runner route', () => {
	it('handles not sending parameters', (done) => {
		//We've mocked the code to return fakeData, but in the situation with no parameters we don't get as far as the mocked code	
		request(app)
			.get('/runner')
			.expect('Content-Type', /json/)
			.expect(200, []) // by returning no data
			.end(done);
	});

	it('can query a name', (done) => {
		request(app)
			.get('/runner?name=alice')
			.expect('Content-Type', /json/)
			.expect(200, fakeData) // returns the data we returned from the mocked DB
			.expect(resp => {
				expect(queryMock.mock.calls.length).toBe(1);
				var queryParam = queryMock.mock.calls[0][0];
				var locationOfWhere = queryParam.indexOf('WHERE');
				expect(locationOfWhere).toBeGreaterThan(10);
				var whereClause = queryParam.substring(locationOfWhere);
				expect(whereClause).toMatch(/runner.name ILIKE '%alice%'/);
			})
			.expect(resp => {
				expect(releaseMock.mock.calls.length).toBe(1);
			})
			.end(done);
	});

	it('can query a raceId', (done) => {
		request(app)
			.get('/runner?raceId=70')
			.expect('Content-Type', /json/)
			.expect(200, fakeData) // returns the data we returned from the mocked DB
			.expect(resp => {
				expect(queryMock.mock.calls.length).toBe(1);
				var queryParam = queryMock.mock.calls[0][0];
				var locationOfWhere = queryParam.indexOf('WHERE');
				expect(locationOfWhere).toBeGreaterThan(10);
				var whereClause = queryParam.substring(locationOfWhere);
				expect(whereClause).toMatch(/runner.race_id = '70'/);
			})
			.expect(resp => {
				expect(releaseMock.mock.calls.length).toBe(1);
			})
			.end(done);
	});

	it('can query a bibNumber', (done) => {
		request(app)
			.get('/runner?bib=1357')
			.expect('Content-Type', /json/)
			.expect(200, fakeData) // returns the data we returned from the mocked DB
			.expect(resp => {
				expect(queryMock.mock.calls.length).toBe(1);
				var queryParam = queryMock.mock.calls[0][0];
				var locationOfWhere = queryParam.indexOf('WHERE');
				expect(locationOfWhere).toBeGreaterThan(10);
				var whereClause = queryParam.substring(locationOfWhere);
				expect(whereClause).toMatch(/runner.bib_number = '1357'/);
			})
			.expect(resp => {
				expect(releaseMock.mock.calls.length).toBe(1);
			})
			.end(done);
	});

	it('can query a raceId and name in that order', (done) => {
		request(app)
			.get('/runner?raceId=70&name=Kim')
			.expect('Content-Type', /json/)
			.expect(200, fakeData) // returns the data we returned from the mocked DB
			.expect(resp => {
				expect(queryMock.mock.calls.length).toBe(1);
				var queryParam = queryMock.mock.calls[0][0];
				var locationOfWhere = queryParam.indexOf('WHERE');
				expect(locationOfWhere).toBeGreaterThan(10);
				var whereClause = queryParam.substring(locationOfWhere);
				expect(whereClause).toMatch(/runner.race_id = '70'/);
				expect(whereClause).toMatch(/runner.name ILIKE '%Kim%'/);
			})
			.expect(resp => {
				expect(releaseMock.mock.calls.length).toBe(1);
			})
			.end(done);
	});

	it('can query a name and raceId in that order', (done) => {
		request(app)
			.get('/runner?name=morse&raceId=2')
			.expect('Content-Type', /json/)
			.expect(200, fakeData) // returns the data we returned from the mocked DB
			.expect(resp => {
				expect(queryMock.mock.calls.length).toBe(1);
				var queryParam = queryMock.mock.calls[0][0];
				var locationOfWhere = queryParam.indexOf('WHERE');
				expect(locationOfWhere).toBeGreaterThan(10);
				var whereClause = queryParam.substring(locationOfWhere);
				expect(whereClause).toMatch(/runner.race_id = '2'/);
				expect(whereClause).toMatch(/runner.name ILIKE '%morse%'/);
			})
			.expect(resp => {
				expect(releaseMock.mock.calls.length).toBe(1);
			})
			.end(done);
	});

	it('can query a bibNumber and raceId', (done) => {
		request(app)
			.get('/runner?bib=7755&raceId=2')
			.expect('Content-Type', /json/)
			.expect(200, fakeData) // returns the data we returned from the mocked DB
			.expect(resp => {
				expect(queryMock.mock.calls.length).toBe(1);
				var queryParam = queryMock.mock.calls[0][0];
				var locationOfWhere = queryParam.indexOf('WHERE');
				expect(locationOfWhere).toBeGreaterThan(10);
				var whereClause = queryParam.substring(locationOfWhere);
				expect(whereClause).toMatch(/runner.race_id = '2'/);
				expect(whereClause).toMatch(/runner.bib_number = '7755'/);
			})
			.expect(resp => {
				expect(releaseMock.mock.calls.length).toBe(1);
			})
			.end(done);
	});

	it('can ignores empty name', (done) => {
		request(app)
			.get('/runner?name=&raceId=2')
			.expect('Content-Type', /json/)
			.expect(200, fakeData) // returns the data we returned from the mocked DB
			.expect(resp => {
				expect(queryMock.mock.calls.length).toBe(1);
				var queryParam = queryMock.mock.calls[0][0];
				var locationOfWhere = queryParam.indexOf('WHERE');
				expect(locationOfWhere).toBeGreaterThan(10);
				var whereClause = queryParam.substring(locationOfWhere);
				expect(whereClause).not.toMatch(/runner.name/);
			})
			.expect(resp => {
				expect(releaseMock.mock.calls.length).toBe(1);
			})
			.end(done);
	});

	it('can ignores empty raceId', (done) => {
		request(app)
			.get('/runner?raceId=&name=Amy')
			.expect('Content-Type', /json/)
			.expect(200, fakeData) // returns the data we returned from the mocked DB
			.expect(resp => {
				expect(queryMock.mock.calls.length).toBe(1);
				var queryParam = queryMock.mock.calls[0][0];
				var locationOfWhere = queryParam.indexOf('WHERE');
				expect(locationOfWhere).toBeGreaterThan(10);
				var whereClause = queryParam.substring(locationOfWhere);
				expect(whereClause).not.toMatch(/runner.race_id/);
			})
			.expect(resp => {
				expect(releaseMock.mock.calls.length).toBe(1);
			})
			.end(done);
	});

	it('can ignores empty bib', (done) => {
		request(app)
			.get('/runner?bib=&name=Amy')
			.expect('Content-Type', /json/)
			.expect(200, fakeData) // returns the data we returned from the mocked DB
			.expect(resp => {
				expect(queryMock.mock.calls.length).toBe(1);
				var queryParam = queryMock.mock.calls[0][0];
				var locationOfWhere = queryParam.indexOf('WHERE');
				expect(locationOfWhere).toBeGreaterThan(10);
				var whereClause = queryParam.substring(locationOfWhere);
				expect(whereClause).not.toMatch(/runner.bib_number/);
			})
			.expect(resp => {
				expect(releaseMock.mock.calls.length).toBe(1);
			})
			.end(done);
	});
});