import * as React from 'react'
import { Follow } from 'react-twitter-widgets'

function FollowOnTwitter({ twitterHandle }) {
  return (
    <div className="mt-5">
      <Follow username={twitterHandle} />
    </div>
  )
}

export default FollowOnTwitter
