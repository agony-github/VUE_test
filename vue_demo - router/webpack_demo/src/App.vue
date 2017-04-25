<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <a v-link="{path: '/about'}" class="list-group-item">About</a>
          <a v-link="{path: '/home'}" class="list-group-item">Home</a>
        </div>
      </div>
      <!--用来渲染当前组件的内容-->
      <router-view keep-alive></router-view>
    </div>
  </div>
</template>
<script>
</script>
<style>

</style>
