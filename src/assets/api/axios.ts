import originAxios from 'axios';

const baseURL = import.meta.env.MODE === 'development' ? '/api' : '/';
export const axios = originAxios.create({
  baseURL,
});

const messageError: Record<string, Record<string, string>> = {
  'Network Error': {
    tipMessage: '网络错误',
  },
  'Request aborted': {
    tipMessage: '请求取消',
  },
};
const statusError: Record<number, Record<string, string>> = {
  401: {
    tipMessage: '未登录',
  },
  403: {
    tipMessage: '无权限',
  },
  404: {
    tipMessage: '资源不存在',
  },
  405: {
    tipMessage: '请求方式不支持',
  },
  500: {
    tipMessage: '服务器错误',
  },
};
axios.interceptors.response.use(
  (response) => {
    if (response.data.code !== 1 && response.data.error) {
      // display error message: response.data.error
    }
    return Promise.resolve(response);
  },
  (error) => {
    console.log(error);

    let message;
    if (error.response?.data && error.response?.data?.error) {
      message = error.response.data.error.split('！')[0];
    }
    else if (error.response?.status) {
      message = statusError[error.response.status as number]?.tipMessage;
    }
    else {
      message = messageError[error.message as string]?.tipMessage;
    }

    error.tipMessage = message;
    error.tipMessageShow = true;
    if (message) {
      // display error message: message
    }
    return Promise.reject(error);
  },
);

export default axios;
