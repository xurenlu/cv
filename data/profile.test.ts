import { describe, it, expect } from 'vitest'
import profile from './profile'

describe('profile data', () => {
  it('includes Ruoran / 若然 employment as the latest entry', () => {
    expect(profile.en.employmentHistory[0].employer).toContain('Ruoran')
    expect(profile.zh.employmentHistory[0].employer).toContain('若然')
  })

  it('uses 花生财经 / Huasheng for the 2020–2024 role', () => {
    expect(profile.zh.employmentHistory[1].employer).toBe('花生财经')
    expect(profile.en.employmentHistory[1].employer).toBe('Huasheng Finance')
  })

  it('keeps zh/en employment lists non-empty', () => {
    expect(profile.zh.employmentHistory.length).toBeGreaterThan(0)
    expect(profile.en.employmentHistory.length).toBeGreaterThan(0)
  })
})
