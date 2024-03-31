import { Input, Button } from 'antd';
import styles from './index.module.less';

function Login() {
  return (
    <div className={styles.loginPage}>
      <div className="login-card">
        <div className="login-img"></div>
        <div className="login-info">
          <div className="row-label">用户名</div>
          <Input className='login-input' placeholder='请输入用户名' />
          <div className="row-label">密码</div>
          <Input.Password className='login-input' placeholder='请输入密码' />
          <div className="login-tip">如果是未注册用户，则点击登录代表注册</div>
          <Button className='login-btn' type='primary' size='large'>登录</Button>
        </div>
      </div>
    </div>
  )
}

export default Login;