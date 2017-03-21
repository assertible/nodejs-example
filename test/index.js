
/*
 * Tests for the express server
 */

const request = require('supertest')
const server = require('../index.js')

describe('GET /', () => {
    it('Responds with "Hello world"', () => {
        request(server).get("/")
                       .expect(200)
                       .expect(res => res.body === "Hello world")
    })
})
