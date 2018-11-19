let projects = [
  {
    title: 'Bigben',
    description: 'Ecommerce frontend on the commercial CMS VTEX',
    imageUrl: require('@/assets/bigben.jpg'),
    demoUrl: 'https://www.bigben.com.br/',
    urlLabel: 'View site',
    codeUrl: '#',
    active: true,
    skills: ['HTML', 'SASS', 'Javascript']
  },
  {
    title: 'This website',
    description: 'This site is made with VueJS and the SEO friendly Nuxt.',
    imageUrl: require('@/assets/project-self.jpg'),
    demoUrl: '#',
    urlLabel: '',
    codeUrl: 'https://github.com/marcelomaias/portfolio',
    active: true,
    skills: ['VueJS', 'Nuxt', 'Vuex']
  },
  {
    title: 'Moovee',
    description: 'A React SPA making requests to The MovieDB API.',
    imageUrl: require('@/assets/moovee.jpg'),
    demoUrl: '/projects/moovee',
    urlLabel: 'Demo',
    codeUrl: 'https://github.com/marcelomaias/moovee',
    active: true,
    skills: ['React', 'Javascript']
  },
  {
    title: 'Landing page',
    description: 'Landing page made with Vue and AOS for the animations.',
    imageUrl: require('@/assets/proj01.jpg'),
    demoUrl: '/projects/vue-landing',
    urlLabel: 'Demo',
    codeUrl: 'https://github.com/marcelomaias/vue-landing',
    active: true,
    skills: ['VueJS', 'SASS', 'Vuetify']
  },
  {
    title: 'Bands',
    description: 'A simple SPA made with Vue showcasing a menu animation.',
    imageUrl: require('@/assets/proj02.jpg'),
    demoUrl: '/projects/vue-bands',
    urlLabel: 'Demo',
    codeUrl: 'https://github.com/marcelomaias/vue-bands',
    active: true,
    skills: ['VueJS', 'SASS']
  },
  {
    title: 'Background Video',
    description: 'Video used as a background(can be paused).',
    imageUrl: require('@/assets/proj03.jpg'),
    demoUrl: '/projects/video-bg',
    urlLabel: 'Demo',
    codeUrl: 'https://github.com/marcelomaias/video-background',
    active: true,
    skills: ['HTML', 'CSS', 'Javascript']
  }
  // {
  //   title: 'Landing Page',
  //   description: 'A Landing Page using AOS for the animations.',
  //   imageUrl: require('@/assets/proj04.jpg'),
  //   demoUrl: '/projects/landing',
  //   urlLabel: 'Demo',
  //   codeUrl: '#',
  //   active: true,
  //   skills: ['HTML', 'CSS', 'Javascript']
  // }
]

export default {
  projectsList() {
    return projects
  }
}
