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
          placeholder="your email address"
        />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe $0.00" />
      </form>

    </div>

  )
}

export default Subscribe