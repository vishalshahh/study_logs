const http = require('http');
const path = require('path');
const fs = require('fs');
const server = require('../solutions/fileServer.solution');

describe('API Endpoints', () => {
  let globalServer;

  beforeAll((done) => {
    if (globalServer) {
      globalServer.close();
    }
    globalServer = server.listen(3000, done);
  });

  afterAll((done) => {
    globalServer.close(done);
  });

  describe('GET /files', () => {
    test('should return a list of files', async () => {
      const options = {
        method: 'GET',
        path: '/files'  // ✅ FIXED
      };

      const response = await sendRequest(options);

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body).length).toBeGreaterThan(0); // ✅ parse body
    });

    test('should handle internal server error', async () => {
      const options = {
        method: 'GET',
        path: '/files' 
      };

      jest
        .spyOn(fs, 'readdir')
        .mockImplementation((dir, callback) => {
          callback(new Error('Mocked Internal Server Error'), null);
        });

      const response = await sendRequest(options);

      expect(response.statusCode).toBe(500);

      fs.readdir.mockRestore();
    });
  });

  describe('GET /files/:filename', () => {
    const testFilePath = path.join(__dirname, '..', 'files', 'test-file.txt');

    beforeAll(() => {
      fs.writeFileSync(testFilePath, 'Test file content');
    });

    afterAll(() => {
      fs.unlinkSync(testFilePath);
    });

    test('should serve the requested file', async () => {
      const options = {
        method: 'GET',
        path: '/files/test-file.txt' 
      };
      const response = await sendRequest(options);

      expect(response.statusCode).toBe(200);
      expect(response.body).toBe('Test file content');
    });

    test('should handle file not found', async () => {
      const options = {
        method: 'GET',
        path: '/files/non-existing-file.txt'
      };
      const response = await sendRequest(options);

      expect(response.statusCode).toBe(404);
      expect(response.body).toBe('File not found');
    });
  });

  describe('Invalid Routes', () => {
    test('should return 404 for invalid routes', async () => {
      const options = {
        method: 'GET',
        path: '/invalid'
      };
      const response = await sendRequest(options);

      expect(response.statusCode).toBe(404);
      expect(response.body).toBe("Route not found");
    });
  });
});

function sendRequest(options, requestBody) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        ...options,
        host: 'localhost',
        port: 3000,
      },
      (res) => {
        let body = '';

        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body,
          });
        });
      }
    );

    req.on('error', (err) => {
      reject(err);
    });

    if (requestBody) {
      req.write(requestBody);
    }

    req.end();
  });
}
