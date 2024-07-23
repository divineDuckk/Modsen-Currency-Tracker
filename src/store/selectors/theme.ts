import { RootState } from '@/store/types'

export const selectThemeName = (state: RootState) => state.theme.name
