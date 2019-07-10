<template>
    <Layout class="bg-white">
    <div ref="resume" class="resume-wrapper bg-white text-gray-900 font-sans leading-tight">
      <div class="personal-area mb-3">
          <h1 class="font-thin text-3xl" v-text="main.title"></h1>
          <h3 class="uppercase text-gray-600 mb-3" v-text="main.subtitle"></h3>
          <ul class="">
              <li class="py-1 flex items-center" v-for="link in main.links" :key="link.target">
                  <svg-icon :icon="link.icon" class="h-current mr-2"></svg-icon>
                  <a class="hover:underline" :href="link.target" v-text="link.text"></a>
              </li>
          </ul>
      </div>
      <resume-section class="education-area  mb-2 font-thin">
        <template slot="header">Education</template>
        <div v-for="education in educations" class="mb-4" :key="education.title">
            <div class="font-medium text-gray-700 mb-1">
                <h4 class="text-gray-900" v-text="education.title"></h4>
                <h5 class="text-sm font-medium whitespace-no-wrap" v-text="education.subtitle"></h5>
            </div>
            <p v-if="education.institute" v-text="education.institute"></p>
            <p v-if="education.board" v-text="education.board"></p>
            <p v-if="education.score" v-text="education.score"></p>
        </div>
      </resume-section>
      <resume-section class="skills-area mb-3">
          <template slot="header">Skills</template>
          <div v-for="skill in skills" :key="skill.header" class="mb-3">
            <h4 class="text-sm uppercase text-gray-800 mb-1" v-text="skill.header"></h4>
            <ul class="text-sm flex flex-wrap -m-1">
                <li v-for="name in skill.list"
                  :key="name"
                  v-text="name"
                  class="leading-none p-1 m-1 border border-gray-700"
                ></li>
            </ul>
          </div>
      </resume-section>
      <resume-section class="experience-area  mb-2 font-thin">
          <template slot="header">Work Experience</template>
          <div class="flex mb-3" v-for="work in works" :key="work.title">
              <div class="w-48 sm:w-1/3 lg:w-48 font-medium text-gray-700 pr-4">
                  <h4 class="text-gray-900" v-text="work.title"></h4>
                  <h5 class="text-sm font-medium mb-1" v-text="work.subtitle"></h5>
                  <p class="text-gray-600 text-sm font-medium" v-text="work.timeline"></p>
              </div>
              <div class="ml-4 flex-1">
                <ul class="list-disc pl-4">
                    <li v-for="(sentence, index) in work.details" :key="index" v-html="sentence" class="mb-1"></li>
                </ul>
                <p v-if="work.link" class="flex items-center font-normal text-gray-900">
                  <svg-icon class="h-current mr-2" :icon="work.link.icon"></svg-icon>
                  <a  class="hover:underline" :href="work.link.target" v-text="work.link.text"></a>
                </p>
              </div>
          </div>
      </resume-section>
      <resume-section class="projects-area mb-2 font-thin">
          <template slot="header">Projects</template>
          <div class="flex mb-2" v-for="project in projects" :key="project.title">
              <div class="w-48 sm:w-1/3 lg:w-48 font-medium text-gray-700 pr-4 leading-snug">
                  <h4 class="text-gray-900" v-text="project.title"></h4>
                  <h5 class="text-sm font-medium" v-text="project.subtitle"></h5>
              </div>
              <div class="flex-1 pl-4">
                <ul class="list-disc">
                    <li v-for="(sentence, index) in project.details" :key="index" v-html="sentence" class="mb-1"></li>
                </ul>
              </div>
          </div>
      </resume-section>
      <resume-section class="hackathons-area  font-thin">
          <template slot="header">Hackathons</template>
          <div v-for="hackathon in hackathons" class="flex flex-row md:flex-col lg:flex-row" :key="hackathon.title">
              <div class="w-48 md:w-full lg:w-48 font-medium text-gray-700 pr-4 lg:pr-4 md:pr-0 md:mb-4 lg:mb-0">
                  <h4 class="text-gray-900" v-text="hackathon.title"></h4>
                  <p class="text-sm font-medium" v-text="hackathon.subtitle"></p>
              </div>
              <ul class="ml-4 flex-1 list-disc">
                  <li v-for="(sentence, index) in hackathon.details" :key="index" class="mb-1" v-html="sentence"></li>
              </ul>
          </div>
      </resume-section>
    </div>
    <button @click="print" class="fixed bottom-0 right-0 mb-6 mr-6 bg-teal-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md print:hidden">
        <svg-icon icon="fontawesome.solid.print" class="w-4 h-4 fill-current text-white"></svg-icon>
    </button>
    </Layout>
</template>
<script>
import ResumeSection from '../layouts/ResumeSection';
import SvgIcon from '../components/SvgIcon';
import main from '../../content/resume/main.yaml';
import skills from '../../content/resume/skills.yaml';
import projects from '../../content/resume/projects.yaml';
import educations from '../../content/resume/education.yaml';
import experience from '../../content/resume/experience.yaml';
import hackathons from '../../content/resume/hackathons.yaml';

export default {
  metaInfo: {
    title: "Resume",
    htmlAttrs: {
      class: 'smaller'
    },
    bodyAttrs: {
      class: 'smaller'
    },
  },
  components: { ResumeSection, SvgIcon },
  data() {
    return {
      main, skills, projects, educations, hackathons, experience
    }
  },
  computed: {
    works() {
      return this.experience.filter(work => work.show);
    },
    projectsWithSource() {
      return this.projects.filter(p => p.source);
    }
  },
  methods: {
      print: () => window.print()
  },
};
</script>
<style lang="postcss">
summary {
  @apply flex;
}

.resume-wrapper {
  display: grid;
  grid-template-areas: 
    'main' 
    'experience'
    'projects'
    'education'
    'skills' 
    'hackathons';
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  grid-auto-rows: auto;
}

@screen md {
  .resume-wrapper {
    grid-template-areas: 
      'main experience'
      'education experience'
      'skills projects'
      'hackathons projects';
    grid-template-columns: 20rem 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: .75rem;
    grid-template-rows: repeat(4, auto);
  }
}
@screen lg {
  .resume-wrapper {
    grid-template-areas:
      'main experience'
      'education experience'
      'education projects'
      'skills projects'
      'skills hackathons';
    grid-template-rows: repeat(3, auto) repeat(2, minmax(auto, 16rem));
  }
}
@media print {
  .resume-wrapper {
    grid-template-areas: 
      'main experience'
      'education experience'
      'skills projects'
      'hackathons projects';
    grid-template-columns: 20rem 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: .75rem;
    grid-template-rows: repeat(4, auto);
  }
}
.main-area {
  grid-area: main;
}
.education-area {
  grid-area: education;
}
.skills-area {
  grid-area: skills;
}
.experience-area {
  grid-area: experience;
}
.projects-area {
  grid-area: projects;
}
.hackathons-area {
  grid-area: hackathons;
}
</style>
