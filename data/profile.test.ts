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

  it('uses display name 徐仁禄 / Xu Renlu', () => {
    expect(profile.zh.profile.firstName).toBe('徐仁禄')
    expect(profile.en.profile.firstName).toBe('Xu Renlu')
  })

  it('keeps zh/en employment lists non-empty', () => {
    expect(profile.zh.employmentHistory.length).toBeGreaterThan(0)
    expect(profile.en.employmentHistory.length).toBeGreaterThan(0)
  })

  it('lists shipped apps 动手学 / 妙墨 / fogBoard in projects', () => {
    const zhSubjects = profile.zh.projects.map((p) => p.subject)
    expect(zhSubjects).toContain('动手学')
    expect(zhSubjects).toContain('妙墨')
    expect(zhSubjects).toContain('fogBoard')
    expect(profile.en.projects.some((p) => p.subject.includes('动手学'))).toBe(true)
    expect(profile.en.projects.some((p) => p.subject.includes('妙墨'))).toBe(true)
  })

  it('lists Chrome Web Store torows extensions with store search link', () => {
    const chromeLink = 'https://chromewebstore.google.com/search/torows'
    expect(profile.zh.projects.some((p) => p.link === chromeLink)).toBe(true)
    expect(profile.en.projects.some((p) => p.link === chromeLink)).toBe(true)
  })
})
