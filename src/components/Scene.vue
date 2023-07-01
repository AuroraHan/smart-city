<template>
    <div class="scene" ref="sceneDiv"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap';
import * as THREE from "three";
//导入场景
import scene from '@/three/scene'
// 导入相机
import camera from '@/three/camera'
//导入渲染器
import renderer from '@/three/renderer'
//导入坐标轴
import axesHelper from '@/three/axesHelper'
//导入控制器
import controls from '@/three/controls'
//监听屏幕大小改变的变化
import '@/three/init'
//动画
import animate from '@/three/animate'

import createMesh from '@/three/createMesh'
import createCity from '@/three/mesh/city'


//场景元素
let sceneDiv = ref<HTMLElement>()

scene.add(camera);
scene.add(axesHelper);
createCity()

onMounted(() => {
    sceneDiv.value?.appendChild(renderer.domElement)
    animate()
})

</script>

<style scoped lang="scss"></style>