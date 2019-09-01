<template>
    <Layout class="bg-white">
    <div ref="resume" class="resume-wrapper narrow-container mx-auto bg-white text-gray-900 leading-tight mt-8 print:mt-0">
      <div class="personal-area">
          <h1 class="text-3xl" v-text="main.title"></h1>
          <h3 class="uppercase text-gray-600 mb-3" v-text="main.subtitle"></h3>
          <ul class="">
              <li class="py-1 flex items-center" v-for="link in main.links" :key="link.target">
                  <feather-icon :name="link.icon" class="h-current mr-2"></feather-icon>
                  <a class="hover:underline" :href="link.target" v-text="link.text"></a>
              </li>
          </ul>
      </div>
      <resume-section class="education-area">
        <template slot="header">Education</template>
        <div v-for="education in educations" class="mb-4" :key="education.title">
            <div class="font-semibold text-gray-700 mb-1">
                <h4 class="text-gray-900" v-text="education.title"></h4>
                <h5 class="text-sm font-semibold whitespace-no-wrap" v-text="education.subtitle"></h5>
            </div>
            <p v-if="education.institute" v-text="education.institute"></p>
            <p v-if="education.board" v-text="education.board"></p>
            <p v-if="education.score" v-text="education.score"></p>
        </div>
      </resume-section>
      <resume-section class="skills-area mb-3">
          <template slot="header">Skills</template>
          <div v-for="skill in skills" :key="skill.header" class="mb-3">
            <h4 class="text-xs font-semibold tracking-wider uppercase text-gray-800 mb-1" v-text="skill.header"></h4>
            <ul class="text-sm flex flex-wrap -m-1">
                <li v-for="name in skill.list"
                  :key="name"
                  v-text="name"
                  class="leading-none p-1 m-1 border border-gray-700"
                ></li>
            </ul>
          </div>
      </resume-section>
      <resume-section class="experience-area">
          <template slot="header">Work Experience</template>
          <div class="mb-6 no-break-inside" v-for="work in works" :key="work.title">
              <div class="w-full font-semibold text-gray-700 mb-2">
                  <h4 class="text-gray-900" v-text="work.title"></h4>
                  <h5 class="text-sm font-semibold" v-text="work.subtitle"></h5>
                  <p class="text-gray-600 text-sm font-semibold" v-text="work.timeline"></p>
              </div>
              <div class="flex-1">
                <ul class="list-disc pl-4">
                    <li v-for="(sentence, index) in work.details" :key="index" v-html="sentence" class="mb-1"></li>
                </ul>
                <p v-if="work.link" class="flex items-center font-normal text-gray-900">
                  <feather-icon class="h-current mr-2" :name="work.link.icon"></feather-icon>
                  <a  class="hover:underline" :href="work.link.target" v-text="work.link.text"></a>
                </p>
              </div>
          </div>
      </resume-section>
      <resume-section class="projects-area">
          <template slot="header">Projects</template>
          <div class="mb-6 no-break-inside" v-for="project in projects" :key="project.title">
              <div class="w-full font-semibold text-gray-700 mb-2">
                  <h4 class="text-gray-900" v-text="project.title"></h4>
                  <h5 class="text-sm font-semibold" v-text="project.subtitle"></h5>
              </div>
              <div class="flex-1">
                <ul class="list-disc pl-4 mb-2">
                    <li v-for="(sentence, index) in project.details" :key="index" v-html="sentence" class="mb-1"></li>
                </ul>
                <p class="flex items-center font-normal mb-1" v-for="link in project.links" :key="link.target">
                  <feather-icon :name="link.icon" class="h-current mr-2"></feather-icon>
                  <a :href="link.target" v-text="link.text" class="hover:underline"></a>
                </p>
              </div>
          </div>
      </resume-section>
      <resume-section class="hackathons-area">
          <template slot="header">Hackathons</template>
          <div v-for="hackathon in hackathons" class="mb-6 no-break-inside" :key="hackathon.title">
              <div class="w-full font-semibold text-gray-700 mb-2">
                  <h4 class="text-gray-900" v-text="hackathon.title"></h4>
                  <p class="text-sm font-semibold" v-text="hackathon.subtitle"></p>
              </div>
              <ul class="ml-4 flex-1 list-disc">
                  <li v-for="(sentence, index) in hackathon.details" :key="index" class="mb-1" v-html="sentence"></li>
              </ul>
          </div>
      </resume-section>
    </div>
    <button @click="print" class="fixed bottom-0 right-0 mb-6 mr-6 bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md print:hidden">
        <feather-icon name="printer" class="w-4 h-4" :strokeWidth="2.5"></feather-icon>
    </button>
    </Layout>
</template>
<script>
import ResumeSection from '../layouts/ResumeSection';
import FeatherIcon from '../components/FeatherIcon';
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
  components: { ResumeSection, FeatherIcon },
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
    grid-template-columns: 18rem 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: .75rem;
    grid-template-rows: repeat(4, auto);
  }
}
@media print {
  .resume-wrapper {
    grid-template-areas: 
      'main experience'
      'education experience'
      'skills projects'
      'hackathons projects';
    grid-template-columns: 18rem 1fr;
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
