import { FC, useState } from 'react'

import { setTheme } from '@/store/slices/themeSlice'
import { DARK, LIGHT } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectThemeName } from '@/store/selectors'

import { CheckBox, Slider, Switch } from './styled'

export const ThemeButton: FC = () => {
  const theme = useAppSelector(selectThemeName)
  const dispatch = useAppDispatch()

  const [checked, setChecked] = useState(theme === LIGHT)
  const handleChange = () => {
    dispatch(setTheme(checked ? DARK : LIGHT))
    setChecked((prev) => !prev)
  }

  return (
    <Switch>
      <CheckBox type="checkbox" checked={checked} onChange={handleChange} />
      <Slider />
    </Switch>
  )
}
