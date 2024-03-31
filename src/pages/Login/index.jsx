import { useState } from 'react';
import { Input, Button, message } from 'antd';
import md5 from 'md5';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

function Login() {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    if (!name) {
      message.error('请输入用户名');
      return;
    }
    if (!pwd) {
      message.error('请输入密码');
      return;
    }
    const { code } = await window.postFetch('/user/add', {
      name,
      pwd: md5(pwd),
    });
    if (code === 200) {
      navigate('/');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className="login-card">
        <div className="login-img"></div>
        <div className="login-info">
          <div className="row-label">用户名</div>
          <Input className='login-input' value={name} onChange={(e) => setName(e.target.value)} placeholder='请输入用户名' />
          <div className="row-label">密码</div>
          <Input.Password className='login-input' value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder='请输入密码' />
          <div className="login-tip">如果是未注册用户，则点击登录代表注册</div>
          <Button className='login-btn' type='primary' size='large' onClick={handleLogin}>登录</Button>
        </div>
      </div>
    </div>
  )
};

export default Login;