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
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
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
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}
