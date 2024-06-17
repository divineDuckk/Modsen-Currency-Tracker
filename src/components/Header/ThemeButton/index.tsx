import { FC, useState } from 'react'

import { setTheme } from '@/store/slices/themeSlice'
import { DARK, LIGHT } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectTheme } from '@/store/selectors'

import { CheckBox, Slider, Switch } from './styled'

export const ThemeButton: FC = () => {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  const [checked, setChecked] = useState(theme === LIGHT ? true : false)
  const handleChange = () => {
    dispatch(setTheme(!checked ? LIGHT : DARK))
    setChecked(!checked)
  }

  return (
    <Switch>
      <CheckBox type="checkbox" checked={checked} onChange={handleChange} />
      <Slider />
    </Switch>
  )
}
