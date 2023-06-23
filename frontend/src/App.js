import axios from 'axios';

function App() {

  const downloadFile = (content, filename) => {
    // 创建一个 Blob 对象
    const blob = new Blob([content], { type: 'application/octet-stream' });
  
    // 创建一个 a 标签
    const link = document.createElement('a');
  
    // 设置 href 为 Blob 对象
    link.href = URL.createObjectURL(blob);
  
    // 设置下载的文件名
    link.download = filename;
  
    // 将 a 标签添加到 DOM
    document.body.appendChild(link);
  
    // 触发下载
    link.click();
  
    // 从 DOM 移除 a 标签
    document.body.removeChild(link);
    // 释放 Blob URL
    URL.revokeObjectURL(link.href);
  }

  const csvDownLoad = () => {
    axios.get(' http://localhost:3001/api/csv-data',{
      responseType: 'arraybuffer'
    }).then(response => {
      downloadFile(response.data,'测试CSV下载.csv')
    }).catch(error => {
      console.log(error);
    });
  }

  return <button onClick = {csvDownLoad}>下载CSV文件</button>;
}

export default App;
