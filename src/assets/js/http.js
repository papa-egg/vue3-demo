import CONFIG from './config';
import { ElMessage, ElLoading } from 'element-plus';

/**
 * @param { String } api
 * @param { Object } sendData
 * @param { Boolean } isLoading
 * @returns { Promise }
 */
function http (api, sendData = {}, isLoading) {
  try {
    let startTime = Date.parse(new Date());
    let loading = null;

    // loading transition
    if (isLoading) {
      loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    }

    sendData = Object.assign(sendData, { fulecoId: CONFIG.fulecoId });

    let sendUrl = apiFilter(api);
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.open('post', sendUrl, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.send(JSON.stringify(sendData));

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {

          // close loading
          if (isLoading) {
            loading.close();
          }

          if (xhr.status === 200) {
            const resData = JSON.parse(xhr.responseText);

            if (resData.statusCode === 200) {
              resolve(resData);
            } else {

              if (resData.statusCode === 401) {

                return;
              }

              if (resData.message) {
                ElMessage.warning({
                  message: resData.message,
                  type: 'warning'
                });
              } else {
                console.error('Request failed, resData: ' + JSON.stringify(resData));
                console.error(resData);
                console.error('--------------------------------');

                ElMessage.warning({
                  message: 'Request failed, resData: ' + JSON.stringify(resData),
                  type: 'warning'
                });
                reject(resData);
              }
            }
          } else {
            if (!window.navigator.onLine) {
              ElMessage.warning({
                message: '网络断开，请检查网络！',
                type: 'warning'
              });
            } else {
              let endTime = Date.parse(new Date());

              if (parseFloat((endTime - startTime) / 1000) >= 8) {
                ElMessage.warning({
                  message: '请求超时, 请检查网络或重试!',
                  type: 'warning'
                });
              } else {
                ElMessage.warning({
                  message: '请求超时, 请检查网络或重试!',
                  type: 'warning'
                });
              }
            }

            if (isLoading) {
              loading.close();
            }

            console.error('Request failed, status code: ' + xhr.status);
          }
        }
      };
    });

  } catch (err) {
    console.error(err);

    ElMessage.warning({
      message: '系统错误：' + err,
      type: 'warning'
    });
  }
}

/**
 * @param { String } name
 * @returns { String }
 */
function getCookie (name) {
  let strCookie = document.cookie;
  let arrCookie = strCookie.split('; ');

  for (let i = 0; i < arrCookie.length; i++) {
    let arr = arrCookie[i].split('=');
    if (arr[0] === name) {

      return arr[1];
    }
  }

  return '';
}

/**
 * @param { String } api
 * @returns { String }
 */
function apiFilter (api) {
  if (!api) throw new Error('Please input legal api');

  let sendUrl = '';

  if (api.startsWith('http') || api.startsWith('//')) {
    sendUrl = api;
  } else {
    if (api.startsWith('/')) {
      sendUrl = CONFIG.DOMAIN + api;
    } else {
      sendUrl = CONFIG.DOMAIN + '/' + api;
    }
  }

  return sendUrl;
}

export default http;
