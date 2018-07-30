const request = require('supertest');
const express = require('express');

import pool from '../../database/pgpool';

jest.mock('../../database/pgpool');
//import runner from '../routers/runner'
import index from '../routers/index';

var app = express();
app.use(index);

describe('runner route', () => {
	it('handles not sending parameters', (done) => {		
		request(app)
			.get('/runner')
			.expect('Content-Type', /json/)
			.expect(200, []) // by returning no data
			.end(done);
	});

	it('can query a name', (done) => {
		var fakeData = [{data: 'fake data'}],
			fakeResponse = {rows: fakeData};

		var queryMock = jest.fn();
		var releaseMock = jest.fn();

		//Mock two things
		queryMock.mockImplementation((query, callback) => {
			callback(false, fakeResponse);
		});
		pool.connect.mockImplementation((connectFn) => {
			connectFn(false, {query: queryMock}, releaseMock);
		});

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
		var fakeData = [{data: 'fake data2'}],
			fakeResponse = {rows: fakeData};

		var queryMock = jest.fn();
		var releaseMock = jest.fn();

		//Mock two things
		queryMock.mockImplementation((query, callback) => {
			callback(false, fakeResponse);
		});
		pool.connect.mockImplementation((connectFn) => {
			connectFn(false, {query: queryMock}, releaseMock);
		});

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
		var fakeData = [{data: 'fake data'}],
			fakeResponse = {rows: fakeData};

		var queryMock = jest.fn();
		var releaseMock = jest.fn();

		//Mock two things
		queryMock.mockImplementation((query, callback) => {
			callback(false, fakeResponse);
		});
		pool.connect.mockImplementation((connectFn) => {
			connectFn(false, {query: queryMock}, releaseMock);
		});

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
		var fakeData = [{data: 'fake data2'}],
			fakeResponse = {rows: fakeData};

		var queryMock = jest.fn();
		var releaseMock = jest.fn();

		//Mock two things
		queryMock.mockImplementation((query, callback) => {
			callback(false, fakeResponse);
		});
		pool.connect.mockImplementation((connectFn) => {
			connectFn(false, {query: queryMock}, releaseMock);
		});

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
		var fakeData = [{data: 'fake data2'}],
			fakeResponse = {rows: fakeData};

		var queryMock = jest.fn();
		var releaseMock = jest.fn();

		//Mock two things
		queryMock.mockImplementation((query, callback) => {
			callback(false, fakeResponse);
		});
		pool.connect.mockImplementation((connectFn) => {
			connectFn(false, {query: queryMock}, releaseMock);
		});

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
		var fakeData = [{data: 'fake data2'}],
			fakeResponse = {rows: fakeData};

		var queryMock = jest.fn();
		var releaseMock = jest.fn();

		//Mock two things
		queryMock.mockImplementation((query, callback) => {
			callback(false, fakeResponse);
		});
		pool.connect.mockImplementation((connectFn) => {
			connectFn(false, {query: queryMock}, releaseMock);
		});

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
});