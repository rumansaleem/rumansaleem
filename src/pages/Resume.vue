<template>
  <Layout>
    <div class="bg-teal-100 text-gray-900 min-h-screen flex font-sans">

      <aside class="w-48 bg-teal-600 text-gray-200 py-6">
        <div class="px-4 mb-4">
          <g-image
            class="block mx-auto w-24 rounded-full mb-2"
            src="/images/ruman-saleem.jpg"
            alt="Ruman Saleem, standing with a bag on shoulder, in front of a lawn"
          />
          <h1 class="font-bold text-lg text-center leading-tight">Ruman Saleem</h1>
          <h3 class="font-semibold uppercase text-xs text-center text-xs text-gray-300">Web Developer</h3>
        </div>
        <details class="mb-3" open>
          <summary class="font-semibold bg-teal-700 text-xs uppercase px-4 mb-2 cursor-pointer">
            <h4 class="leading-none py-2">Contact Information</h4>
          </summary>
          <div class="px-4 text-xs">
            <p>
              <b>Email: </b>
              <a class="hover:underline" href="mailto:ruman63@gmail.com">ruman63@gmail.com</a>
            </p>
            <p>
              <b>Phone: </b>
              <a class="hover:underline" href="tel:+918510052301">+918510052301</a>
            </p>
          </div>
        </details>
        <details class="mb-3" open>
          <summary class="font-semibold bg-teal-700 text-xs uppercase px-4 cursor-pointer">
            <h4 class="leading-none py-2">Skills</h4>
          </summary>
          <div class="px-4 py-1 border-b border-teal-700 text-xs leading-tight">
            <b>Laravel</b>
            <p class="-mx-1">
              <span class="progress-square bg-white mx-1"></span>
              <span class="progress-square bg-white mx-1"></span>
              <span class="progress-square bg-white mx-1"></span>
              <span class="progress-square bg-white mx-1"></span>
              <span class="progress-square mx-1"></span>
            </p>
          </div>
          <div class="px-4 py-1 border-b border-teal-700 text-xs leading-tight">
            <b>VueJS</b>
            <p class="-mx-1">
              <span class="progress-square bg-white mx-1"></span>
              <span class="progress-square bg-white mx-1"></span>
              <span class="progress-square bg-white mx-1"></span>
              <span class="progress-square bg-white mx-1"></span>
              <span class="progress-square mx-1"></span>
            </p>
          </div>
        </details>
      </aside>
      <main class="flex-1 p-4">
        <p>
          Hi! I am Ruman Saleem. I am a fullstack web developer.
          Laravel + Vue is my preferred stack. Apart from Laravel and Vue, I know other tehnologies as well like - CodeIgniter, ExpressJS, NativeScript-Vue, React Native.
          I am currently pursuing, masters degree in Computer Science at Delhi University.
        </p>
        <div class="print:hidden">hello there</div>
      </main>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume"
  }
};
</script>
<style scoped lang="postcss">
html,
body {
  font-size: calc(12px + 0.5vw);
}
summary {
  @apply flex;
}
.progress-square {
  @apply inline-block w-2 h-2 border border-white;
}
@page {
  size: 8.5in 11in;
  margin: 0cm;
}
</style>
