import { RootState } from '@/store/types'

export const selectTheme = (state: RootState) => state.theme.name
