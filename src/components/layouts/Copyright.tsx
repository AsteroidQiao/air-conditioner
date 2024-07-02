import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import * as pkg from '~/../package.json'

const socialList = [
  // {
  //   type: 'github',
  //   color: 'inherit',
  //   icon: 'i-mdi-github',
  //   label: 'GitHub: AsteroidQiao',
  //   href: 'https://github.com/AsteroidQiao/air-conditioner',
  // },
  // {
  //   type: 'telegram',
  //   color: '#1da1f2',
  //   icon: 'i-mdi-telegram',
  //   label: 'Telegram Channel',
  //   href: 'https://t.me/elpsycn',
  // },
  // {
  //   type: 'weibo',
  //   color: '#DB2828',
  //   icon: 'i-mdi-sina-weibo',
  //   label: '小小怪成大事',
  //   href: 'https://weibo.com/asteroidqiao',
  // },
  // {
  //   type: 'B站',
  //   color: '#1da1f2',
  //   icon: 'i-mdi-bilibili',
  //   label: '你的果粒橙',
  //   href: 'https://space.bilibili.com/503400640',
  // },
  // {
  //   type: 'wechat',
  //   color: '#1AAD19',
  //   icon: 'i-mdi-wechat',
  //   label: '微信公众号：云游君',
  //   href: 'https://.jpg',
  // },
  // {
  //   type: 'blog',
  //   color: '#6435C9',
  //   icon: 'i-mdi-earth',
  //   label: '博客：.cn',
  //   href: 'http://www..cn',
  // },
]

const Copyright: React.FC = () => {
  return (
    <div className="opacity-80 text-xs text-center mt-8">
      <div className="ac-text flex justify-center items-center m-2">
        {'© '}
        <a href="https://github.com/AsteroidQiao/air-conditioner" target="_blank" rel="noreferrer">
          Air Conditioner
        </a>
        <a
          className="inline-flex"
          href=""
          target="_blank" rel="noreferrer"
          style={{ color: '#0078e7' }}
        >
          <div className="i-mdi-cloud text-sm mx-1" />
        </a>
        <a href="https://github.com/AsteroidQiao/" target="_blank" rel="noreferrer">
          成大事@AsteroidQiao
        </a>
      </div>
      <p>
        {`2023 - ${new Date().getFullYear()}`}
      </p>
      <div className="text-center">
        {socialList.map(item => (
          <Tooltip title={item.label} arrow key={item.type}>
            <IconButton
              sx={{ color: item.color }}
              href={item.href}
              target="_blank"
            >
              <div className={`${item.icon} text-lg`} />
            </IconButton>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export default Copyright
