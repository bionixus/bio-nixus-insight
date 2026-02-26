import zlib from 'zlib';

function accepts(acceptEncoding = '', token) {
  return acceptEncoding.toLowerCase().includes(token);
}

export function sendCompressedHtml(req, res, html, statusCode = 200) {
  const source = Buffer.from(html, 'utf-8');
  const acceptEncoding = req.headers['accept-encoding'] || '';

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.setHeader('Vary', 'Accept-Encoding');

  if (accepts(acceptEncoding, 'br')) {
    const compressed = zlib.brotliCompressSync(source, {
      params: {
        [zlib.constants.BROTLI_PARAM_QUALITY]: 4,
      },
    });
    res.setHeader('Content-Encoding', 'br');
    return res.status(statusCode).send(compressed);
  }

  if (accepts(acceptEncoding, 'gzip')) {
    const compressed = zlib.gzipSync(source, { level: 6 });
    res.setHeader('Content-Encoding', 'gzip');
    return res.status(statusCode).send(compressed);
  }

  return res.status(statusCode).send(source);
}

