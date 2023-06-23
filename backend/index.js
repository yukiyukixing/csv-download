const express = require('express');
const cors = require('cors');
const app = express();
const iconv = require('iconv-lite');

// 配置CORS，允许跨域请求
app.use(cors());

// 读取CSV文件的接口
app.get('/api/csv-data', (req, res) => {
    res.setHeader('Content-Type', 'text/csv; charset=GBK');
    const data = '数据1,数据2,数据3';
    const gbkBuffer = iconv.encode(data, 'GBK');
    res.end(gbkBuffer);
});

const port = 3001;

// 启动服务
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
