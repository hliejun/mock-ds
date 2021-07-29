// https://github.com/chromaui/chromatic-cli/issues/152

const fs = require('fs');
const data = fs.readFileSync('./node_modules/.bin/chromatic').toString();

const [firstLine, ...restLines] = data.split('\n');
const linesWithInjectedScript = [
  firstLine,
  `
    var http = require('http');
    var https = require('https');
    var HttpsProxyAgent = require('https-proxy-agent');

    const globalAgent = new HttpsProxyAgent(process.env.http_proxy || process.env.HTTP_PROXY);
    http.globalAgent = globalAgent;
    https.globalAgent = globalAgent;
  `
    .split('\n')
    .map(line => line.trim())
    .join('\n'),
  ...restLines,
];

fs.writeFileSync('./node_modules/.bin/chromatic', linesWithInjectedScript.join('\n'), 'UTF-8');