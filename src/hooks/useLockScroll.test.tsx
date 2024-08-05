import { renderHook } from '@testing-library/react'

import { useLockScroll } from './useLockScroll'

describe('useLockScroll', () => {
  it('should lock scroll on mount and unlock on unmount', () => {
    const originalOverflow = window.getComputedStyle(document.body).overflow
    const { unmount } = renderHook(() => useLockScroll())
    expect(document.body.style.overflow).toBe('hidden')
    unmount()
    expect(document.body.style.overflow).toBe(originalOverflow)
  })
})
