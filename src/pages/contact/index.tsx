import { useState } from 'react'

import { CONTACT_PLACEHOLDERS } from './constants'
import { Button, Form, Input, TextArea } from './styled'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Form>
      <Input
        type="text"
        placeholder={CONTACT_PLACEHOLDERS['Your name']}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder={CONTACT_PLACEHOLDERS['Your email']}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextArea
        placeholder={CONTACT_PLACEHOLDERS['Your message']}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={3}
      />
      <Button type="submit">{CONTACT_PLACEHOLDERS.Send}</Button>
    </Form>
  )
}
