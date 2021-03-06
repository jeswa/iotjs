/* Copyright 2017-present Samsung Electronics Co., Ltd. and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var http = require('http');
var port = 8080;

var server = http.createServer(function(req, res) {
  var body = '';
  req.on('data', function(data) {
    body += data;
  });
  req.on('end', function() {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end(body);
  });
});

server.listen(port, 5);

