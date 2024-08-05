import {
  SubmitButton,
  ContactUsInfo,
  Form,
  FormInput,
  FormTextArea,
  ContactWrapper,
} from './styled'
import {
  CONTACT_PLACEHOLDERS,
  CONTACT_US_INFO,
  TEXTAREA_ROW,
} from './constants'
import { ChangeEvent, useState } from 'react'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value)
  return (
    <ContactWrapper data-testid="contact">
      {CONTACT_US_INFO.map((info) => (
        <ContactUsInfo key={info}>{info}</ContactUsInfo>
      ))}
      <Form>
        <FormInput
          type="text"
          placeholder={CONTACT_PLACEHOLDERS['Your name']}
          value={name}
          onChange={handleNameChange}
          required
        />
        <FormInput
          type="email"
          placeholder={CONTACT_PLACEHOLDERS['Your email']}
          value={email}
          onChange={handleEmailChange}
          required
        />
        <FormTextArea
          placeholder={CONTACT_PLACEHOLDERS['Your message']}
          value={message}
          onChange={handleMessageChange}
          required
          rows={TEXTAREA_ROW}
        />
        <SubmitButton type="submit">{CONTACT_PLACEHOLDERS.Send}</SubmitButton>
      </Form>
    </ContactWrapper>
  )
}
