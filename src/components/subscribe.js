import * as React from 'react'
import { 
  subscribe,
} from './subscribe.module.css'

const Subscribe = ({ children }) => {
  return (

    <div className={ subscribe }>

      <form
        action="
          https://buttondown.email/api/emails/embed-subscribe/CorySerratore
        "
        method="post"
        target="popupwindow"
        class="embeddable-buttondown-form"
      >
        <input
          type="email"
          name="email"
          placeholder="you@gmail.com"
        />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
      </form>

    </div>

  )
}

export default Subscribe