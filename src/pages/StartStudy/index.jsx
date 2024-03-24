import { Button } from 'antd';
import styles from './index.module.less';

function StartStudy() {
  return (
    <div className={styles.startStudy}>
      <div className="content-wrapper">
        <div className="card">
          <div className="word">hello</div>
          <div className="explain-list">
            <div className="explain-item">aaaaaaaa</div>
            <div className="explain-item">aaaaaaaa</div>
          </div>
        </div>
        <div className="switch-wrapper">
          <Button className='btn-switch'>上一个</Button>
          <Button className='btn-switch'>下一个</Button>
        </div>
        <div className="opera-wrapper">
          <Button className='btn-opera btn-tip'>提示</Button>
          <Button className='btn-opera btn-simple'>标记为简单</Button>
          <Button className='btn-opera btn-difficult'>标记为困难</Button>
          <Button className='btn-opera btn-delete'>删除</Button>
        </div>
      </div>
    </div>
  )
}

export default StartStudy;