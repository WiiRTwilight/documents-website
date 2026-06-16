<template>
  <div id="artalk-comments" class="artalk-comments-container" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import Artalk from 'artalk'
import 'artalk/dist/Artalk.css'

const route = useRoute()

let artalk: ReturnType<typeof Artalk.init> | null = null
let cleanup: (() => void) | null = null

function initArtalk() {
  cleanup?.()
  const el = document.getElementById('artalk-comments')
  if (!el) return

  artalk = Artalk.init({
    el: '#artalk-comments',
    server: 'https://comments.timeless-twilight.com/',
    site: 'twlildoc',
    pageKey: route.path,
    pageTitle: typeof document !== 'undefined' ? document.title : '',
  })

  cleanup = () => {
    artalk?.destroy()
    artalk = null
    cleanup = null
  }
}

onMounted(() => {
  nextTick(() => initArtalk())
})

onUnmounted(() => {
  cleanup?.()
})

watch(() => route.path, () => {
  nextTick(() => initArtalk())
})
</script>

<style>
.artalk-comments-container {
  margin-top: 24px;
}
</style>
