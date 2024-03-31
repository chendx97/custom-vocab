import { useState } from 'react';
import { Input, Button, message } from 'antd';
import md5 from 'md5';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

function Login() {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [isLogin, setIsLogin] = useState(true);
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
    const { message: msg } = await window.postFetch(`/user/${isLogin ? 'login' : 'add'}`, {
      name,
      pwd: md5(pwd),
    });
    if (msg === 'success') {
      navigate('/');
    } else {
      message.error(msg);
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
          <Button className='login-btn' type='primary' size='large' onClick={handleLogin}>{isLogin ? '登录' : '注册'}</Button>
          <Button className='btn-register' type='link' onClick={() => setIsLogin(!isLogin)}>{isLogin ? '注册' : '登录'}</Button>
        </div>
      </div>
    </div>
  )
};

export default Login;