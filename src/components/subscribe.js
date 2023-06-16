import * as React from 'react'
import { 
  subscribe,
} from './subscribe.module.css'

const Subscribe = ({ context }) => {
  return (

    <div className={ subscribe }>

      <p>
        Are you a software developer looking to move beyond the ranks of commodity coders?
        Start reading <strong>The Solution Space Newsletter</strong> and learn how to build a reputation 
        as an <strong>irreplaceable problem solver</strong>.
      </p>

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
        <input type="submit" value="Read For Free" />
      </form>

    </div>

  )
}

export default Subscribe