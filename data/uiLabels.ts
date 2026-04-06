export type Locale = 'en' | 'zh'

export const uiLabels = {
  en: {
    metaTitle: 'Resume',
    metaDescription: 'AI consultant & agent architecture — resume',
    navLangEn: 'English',
    navLangZh: '简体中文',
    printOrPdf: 'Print / PDF',
    exportImage: 'Export image',
    sections: {
      profile: 'Profile',
      education: 'Education',
      employment: 'Experience',
      projects: 'Side projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    labels: {
      objective: 'Career focus',
      location: 'Location',
      phone: 'Phone',
      email: 'Email',
    },
    footerVersion: 'Version',
  },
  zh: {
    metaTitle: '简历',
    metaDescription: 'AI 咨询顾问 · Agent 架构 — 个人简历',
    navLangEn: 'English',
    navLangZh: '简体中文',
    printOrPdf: '打印 / PDF',
    exportImage: '导出图片',
    sections: {
      profile: '个人简介',
      education: '教育背景',
      employment: '工作经历',
      projects: '项目与作品',
      skills: '技能',
      contact: '联系方式',
    },
    labels: {
      objective: '求职方向',
      location: '所在地',
      phone: '电话',
      email: '邮箱',
    },
    footerVersion: '版本',
  },
} as const

export type UiCopy = (typeof uiLabels)[Locale]
