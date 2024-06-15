import { FC, useState } from 'react'

import { CheckBox, Slider, Switch } from './styled'

export const ThemeButton: FC = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <Switch>
      <CheckBox type="checkbox" checked={checked} onChange={handleChange} />
      <Slider />
    </Switch>
  )
}
