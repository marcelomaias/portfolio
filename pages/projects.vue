<template>
  <section>
    <h1>Projects<span class="cursor">_</span></h1>

    <!-- <div class="stack-links">
      <button value="HTML" @click="filterBy($event)">HTML</button>
      <button value="VueJS" @click="filterBy($event)">VueJS</button>
    </div> -->

    <div id="projects">
      <div v-for="project in projects" :key="project.title" :class="project.title">
        <figure>
          <div class="image">
            <img :src="project.imageUrl" alt="img02">
            <div class="stack">
              <span v-for="skill in project.skills" :key="skill">{{ skill }}</span>
            </div>
          </div>
          <figcaption>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="links">
              <a target="_blank" :href="project.demoUrl"><span v-html="project.urlLabel"/> <i class="icon-link-ext"/></a>
              <a target="_blank" :href="project.codeUrl">View Code <i class="icon-github"/></a>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Projects",
  data () {
    return {
      filter: ''
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects
    }
    // filteredProjects () {
    //   return this.$store.getters.filteredProjects
    // }
  },
  created() {
   this.$store.dispatch('getProjects') // Dispatches the action
  }
  // methods: {
  //   filterBy () {
  //     const buttonValue = event.target.value
  //     this.$store.getters.filterProjects(buttonValue)
  //     console.log(buttonValue)
  //   }
  // }
}
</script>
