import { NavLink } from 'react-router-dom';
import styles from './index.module.less';

function MyAside() {
  const menuList = [
    {
      label: '开始学习',
      path: '/study'
    },
    {
      label: '添加单词',
      path: '/add',
    }
  ];

  return (
    <div className={styles.myAside}>
      <div className="logo"></div>
      <div className="menu-wrapper">
        {
          menuList.map((menu) => {
            return <NavLink className="menu-item" to={menu.path} key={menu.label}>
              <span>{menu.label}</span>
            </NavLink>
          })
        }
      </div>
    </div>
  )
}

export default MyAside