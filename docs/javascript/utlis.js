/**
 * download file
 * @param { String } url 请求的链接
 * @param { String } filename 保存的文件名
 * @param { String } onProgress 处理下载进度
 */
function downloadFile(url, filename, onProgress) {
  const req = new XMLHttpRequest();

  req.onprogress = onProgress;
  req.open("GET", url, true);
  req.responseType = "blob";

  req.onload = function (event) {
    var blob = req.response;
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  req.send();
}
