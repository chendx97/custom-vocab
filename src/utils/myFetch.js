import { message } from 'antd';
const prefix = '/vapi';

// 封装GET请求
window.getFetch = async (url, params) => {
  try {
    const queryString = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
    const response = await fetch(`${prefix}${url}?${queryString}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      message.error('请求失败');
      return new Promise(() => { });
    }
  } catch (error) {
    message.error('网络错误');
  }
}

// 封装POST请求
window.postFetch = async (url, params) => {
  try {
    const response = await fetch(prefix + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      message.error('请求失败');
      return new Promise(() => { });
    }
  } catch (error) {
    message.error('网络错误');
  }
}
