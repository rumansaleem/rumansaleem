<template>
  <Layout>
    <div class="narrow-container mx-auto flex flex-col items-center py-4 mb-8">
      <g-image class="h-64 mt-1 ml-3 mb-6 shadow-xl rounded-lg"
        src="/images/ruman-saleem.jpg" 
        alt="Ruman Saleem, standing with a bag on shoulder, background contains greenery of a lawn"></g-image>
      <h2 class="text-3xl font-medium mb-2">Ruman Saleem</h2>
      <h3 class="text-gray-800 uppercase font-normal mb-6">Web Developer</h3>
      <ul class="flex justify-center items-center -mx-2 mb-6">
        <li class="mx-2">
          <a href="https://github.com/rumansaleem" class="text-gray-500 hover:text-black">
            <svg-icon class="h-5 fill-current" icon="fontawesome.brands.github"></svg-icon>
          </a>
        </li>
        <li class="mx-2">
          <a href="https://www.linkedin.com/in/ruman-saleem-3947ba122/" class="text-gray-500 hover:text-blue-700">
            <svg-icon class="h-5 fill-current" icon="fontawesome.brands.linkedin"></svg-icon>
          </a>
        </li>
        <li class="mx-2">
          <a href="https://twitter.com/zruman" class="text-gray-500 hover:text-blue-400">
            <svg-icon class="h-5 fill-current" icon="fontawesome.brands.twitter"></svg-icon>
          </a>
        </li>
      </ul>
      <div class="px-4 leading-normal">
        <p class="mb-4">
          Hi! I am Ruman Saleem. I am a fullstack web developer. 
          Laravel + Vue is my preferred stack. Apart from Laravel and Vue, I know other tehnologies as well like - CodeIgniter, ExpressJS, NativeScript-Vue, React Native.
          I am currently pursuing, masters degree in Computer Science at Delhi University.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro, voluptate nulla quod corrupti ab architecto nesciunt vitae dolor autem. Vel aperiam numquam vero. Tempora fugiat nemo harum temporibus corporis!
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
import SvgIcon from './../components/SvgIcon';
export default {
  metaInfo: {
    title: 'Home'
  },
  components: { SvgIcon },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
