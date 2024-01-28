<template>
  <Layout class="md:bg-gray-100 print:bg-white">
    <div ref="resume" class="
        resume
        text-sm
        print:p-0 print:border-0 print:mt-0
        bg-white
        mt-8
        md:p-8 md:border md:border-gray-600
        max-w-a4
        mx-auto
        text-gray-900
        leading-tight
      ">
      <div class="mb-2">
        <h1 class="text-3xl font-black" v-text="main.title"></h1>
        <h3 class="text-lg uppercase text-gray-600 mb-3" v-text="main.subtitle"></h3>
        <ul class=" text-center -mx-2 grid grid-cols-3 gap-1">
          <li class="inline-flex items-center whitespace-no-wrap mx-2" v-for="link in main.links" :key="link.target">
            <feather-icon :name="link.icon" :title="link.label" class="inline-block h-current mr-1"></feather-icon>
            <a class="inline-block hover:underline" :href="link.target" v-text="link.text"></a>
          </li>
        </ul>
      </div>
      <resume-section class="mb-2">
        <template slot="header">Work Experience</template>
        <div class="mb-6" v-for="positions, title in works" :key="title">
          <h3 class="text-gray-900 mb-1" v-text="title"></h3>
          <div v-for="work in positions" :key="[work.title, work.subtitle].join('_')" class="mb-2">
            <div class="mb-2 w-full font-semibold text-gray-800">
              <h4 class="text-sm font-semibold" v-text="work.subtitle"></h4>
              <p class="text-sm" v-text="work.timeline"></p>
            </div>
            <div class="flex-1">
              <ul class="list-disc pl-4">
                <li v-for="(sentence, index) in work.details" :key="index" v-html="sentence" class="mb-1"></li>
              </ul>
              <p v-if="work.link" class="flex items-center font-normal text-gray-900">
                <feather-icon class="h-current mr-2" :name="work.link.icon"></feather-icon>
                <a class="hover:underline" :href="work.link.target" v-text="work.link.text"></a>
              </p>
            </div>
          </div>
        </div>
      </resume-section>
      <resume-section class="mb-2">
        <template slot="header">Education</template>
        <div v-for="education in educations" class="mb-1" :key="education.title">
          <div class="inline-block space-x-1">
            <h3 class="
                inline-block
                font-semibold
                whitespace-no-wrap
                text-gray-900
              " v-text="education.title"></h3>
            <h4 class="
                inline-block
                font-semibold
                whitespace-no-wrap
                text-gray-700
              ">
              ({{ education.subtitle }})
            </h4>
            <span>-</span>
            <p v-if="education.institute" class="inline text-xs">
              {{ education.institute }} ({{ education.board }})
            </p>
            <p class="inline-block text-xs font-semibold" v-if="education.score" v-html="education.score"></p>
          </div>
        </div>
      </resume-section>
      <resume-section class="mb-2">
        <template slot="header">Skills</template>
        <dl v-for="skill in skills" :key="skill.header" class="mb-1 flex space-x-1 items-baseline">
          <dt class="flex-none font-semibold text-gray-800" v-text="skill.header + ': '"></dt>
          <dd class="text-xs" v-text="skill.list.join(', ')"></dd>
        </dl>
      </resume-section>
      <resume-section class="mb-2">
        <template slot="header">Awards / Recognitions</template>
        <ul class="mb-6 list-disc pl-4">
          <li v-for="achievement in achievements" :key="achievement.title" v-html="achievement.title" class="mb-1"></li>
        </ul>
      </resume-section>
    </div>
    <button @click="print" class="
        fixed
        bottom-0
        right-0
        mb-6
        mr-6
        bg-teal-500
        text-white
        w-12
        h-12
        rounded-full
        flex
        items-center
        justify-center
        shadow-md
        print:hidden
      ">
      <feather-icon name="printer" class="w-4 h-4" :strokeWidth="2.5"></feather-icon>
    </button>
  </Layout>
</template>
<script>
import { groupBy } from "../utils/collections";
import ResumeSection from "../layouts/ResumeSection";
import FeatherIcon from "../components/FeatherIcon";
import main from "../../content/resume/main.yaml";
import skills from "../../content/resume/skills.yaml";
import achievements from "../../content/resume/achievements.yaml";
import educations from "../../content/resume/education.yaml";
import experience from "../../content/resume/experience.yaml";
import hackathons from "../../content/resume/hackathons.yaml";

export default {
  metaInfo: {
    title: "Resume",
    htmlAttrs: {
      class: "smaller",
    },
    bodyAttrs: {
      class: "smaller",
    },
  },
  components: { ResumeSection, FeatherIcon },
  data() {
    return {
      main,
      skills,
      achievements,
      educations,
      hackathons,
      experience,
    };
  },
  computed: {
    works() {
      return groupBy(this.experience.filter((work) => work.show), (item) => item.title);
    },
    displayProjects() {
      return this.projects.filter((project) => project.show);
    },
    projectsWithSource() {
      return this.projects.filter((p) => p.source);
    },
  },
  methods: {
    print: () => window.print(),
  },
};
</script>
<style lang="postcss">
summary {
  @apply flex;
}

@page {
  margin: 0.1in;
}

.resume em {
  @apply font-semibold italic;
}

@media print {
  .resume em {
    font-weight: semibold !important;
    font-style: italic !important;
  }
}
</style>
