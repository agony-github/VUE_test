<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <!--用于渲染匹配的组件-->
        <div prop-name="atguigu">
          <h2>Home</h2>
          <div>Home route component!<input type="text"></div>
        </div>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a v-link="{path: '/home/news'}">news</a>
            </li>
            <li>
              <a  v-link="{path: '/home/message'}">message</a>
            </li>
          </ul>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
<style>
</style>
