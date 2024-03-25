import { useState, useEffect } from 'react';
import { Button } from 'antd';
import styles from './index.module.less';

function StartStudy() {
  const totalWordData = [
    {
      word: 'study',
      explain: 'v. 学习;n. 学习',
    },
    {
      word: 'explain',
      explain: 'v. 解释'
    },
  ];
  const [currIdx, setCurrIdx] = useState(0);
  const [wordList, setWordList] = useState([]);
  const wordInfo = wordList[currIdx];

  useEffect(() => {
    setWordList(getRandomList(totalWordData))
  }, []);

  // 切换单词
  function handleSwitch(num) {
    setCurrIdx(currIdx + num);
  }

  // 提示
  function handleTip() {
    const arr = [...wordList];
    arr[currIdx].showWord = true;
    arr[currIdx].showExplain = true;
    setWordList(arr);
  }

  return (
    <div className={styles.startStudy}>
      <div className="content-wrapper">
        {
          wordInfo ?
            <>
              <div className="card">
                <div className={['word', wordInfo.showWord ? 'show' : ''].join(' ')}>{wordInfo.word}</div>
                <div className={['explain-list', wordInfo.showExplain ? 'show' : ''].join(' ')}>
                  {
                    wordInfo.explain.split(';').map(item => {
                      return <div className="explain-item" key={item}>{item}</div>
                    })
                  }
                </div>
              </div>
              <div className="switch-wrapper">
                <Button className='btn-switch' disabled={currIdx === 0} onClick={() => handleSwitch(-1)}>上一个</Button>
                <Button className='btn-switch' disabled={currIdx === wordList.length - 1} onClick={() => handleSwitch(1)}>下一个</Button>
              </div>
              <div className="opera-wrapper">
                <Button className='btn-opera btn-tip' onClick={handleTip}>提示</Button>
                <Button className='btn-opera btn-simple'>标记为简单</Button>
                <Button className='btn-opera btn-difficult'>标记为困难</Button>
                <Button className='btn-opera btn-delete'>删除</Button>
              </div>
            </> : null
        }
      </div>
    </div>
  )
}

function getRandomList(data) {
  let arr = [];
  data.forEach(info => {
    arr.push(Object.assign({}, info, {
      showWord: false,
      showExplain: true,
    }));
    arr.push(Object.assign({}, info, {
      showWord: true,
      showExplain: false,
    }));
  })
  arr = arr.sort(() => Math.random() - 0.5);
  return arr;
}

export default StartStudy;