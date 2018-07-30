const request = require('supertest');
const express = require('express');

import pool from '../../database/pgpool';
import index from '../routers/index';

jest.mock('../../database/pgpool');

var app = express();
app.use(index);

describe('race route', () => {
		it('returns all races by default', (done) => {

		var fakeData = [{race_id: 5, race_name: 'super race'}],
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
			.get('/race')
			.expect('Content-Type', /json/)
			.expect(200, fakeData) // by returning no data
			.end(done);
	});
});