<template>
  <div id="box" ref="mount"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
let mount = ref(null);
onMounted(() => {
  // 创建一个场景
  const scene = new THREE.Scene();
  // 创建一个相机
  // PerspectiveCamera(视角, 宽高比, 近裁剪面, 远裁剪面)
  const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 100; // 设置相机位置
  // 创建一个渲染器
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(mount.value.clientWidth, mount.value.clientHeight); // 设置渲染器的大小为视口的大小
  // 将渲染器挂载到div元素上
  mount.value.appendChild(renderer.domElement);
  // 创建一个几何体
  const geometry = new THREE.BoxGeometry(100, 100, 100); // BoxGeometry(宽度, 高度, 深度)
  // 为立方体的每个面创建材质
  const materials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // 红色
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // 绿色
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // 蓝色
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // 黄色
    new THREE.MeshBasicMaterial({ color: 0xff00ff }), // 品红
    new THREE.MeshBasicMaterial({ color: 0x00ffff })  // 青色
  ];
  // 创建一个网格，使用几何体和材质
  const cube = new THREE.Mesh(geometry, materials);
  // 将网格添加到场景中
  scene.add(cube);
  // 为立方体创建控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // 启用阻尼效果，需要在动画循环中调用controls.update()
  controls.dampingFactor = 0.05;  // 阻尼系数
  controls.screenSpacePanning = false; // 禁用屏幕空间平移
  controls.minDistance = 100; // 设置相机距离目标的最小距离
  controls.maxDistance = 500; // 设置相机距离目标的最大距离
  controls.maxPolarAngle = Math.PI; // 设置相机的极角范围
  // 创建一个渲染循环
  const animate = function () {
    requestAnimationFrame(animate);
    // 更新控制器
    controls.update();
    // 使用相机渲染场景
    renderer.render(scene, camera);
  };
  //自动旋转
  setInterval(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }, 1000 / 60);

  animate();
});
</script>
<style scoped>
#box {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
