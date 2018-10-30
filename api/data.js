let projects = [
  {
    title: 'Bigben', 
    description: 'Ecommerce frontend implemented on the commercial CMS VTEX',
    imageUrl: require('@/assets/bigben.jpg'),
    demoUrl: 'https://www.bigben.com.br/',
    urlLabel: 'View site',
    codeUrl: '#',
    active: true,
    skills: ['VueJS', 'Nuxt', 'Vuex']
  },
  {
    title: 'This website', 
    description: 'This site is made with VueJS and Nuxt, making Vue SEO friendly.',
    imageUrl: require('@/assets/proj05.jpg'),
    demoUrl: '#',
    urlLabel: 'View demo',
    codeUrl: '#',
    active: true,
    skills: ['VueJS', 'Nuxt', 'Vuex']
  },
  {
    title: 'Landing page', 
    description: 'Landing page made with Vue, Material Design and AOS for the animations.',
    imageUrl: require('@/assets/proj01.jpg'),
    demoUrl: '#',
    urlLabel: 'View demo',
    codeUrl: '#',
    active: true,
    skills: ['VueJS', 'SASS', 'Vuetify']
  },
  {
    title: 'Bands', 
    description: 'A simple SPA made with Vue showcasing a menu animation.',
    imageUrl: require('@/assets/proj02.jpg'),
    demoUrl: '#',
    urlLabel: 'View demo',
    codeUrl: '#',
    active: true,
    skills: ['VueJS', 'SASS']
  },
  {
    title: 'Background Video', 
    description: 'Video used as a background and can be paused.',
    imageUrl: require('@/assets/proj03.jpg'),
    demoUrl: '#',
    urlLabel: 'View demo',
    codeUrl: '#',
    active: true,
    skills: ['HTML', 'CSS', 'Javascript']
  },
  {
    title: 'Title Four', 
    description: 'A Landing Page using AOS for the animations.',
    imageUrl: require('@/assets/proj04.jpg'),
    demoUrl: '#',
    urlLabel: 'View demo',
    codeUrl: '#',
    active: true,
    skills: ['HTML', 'CSS', 'Javascript']
  }
]

export default {
  projectsList () {
    return projects
  }
} 