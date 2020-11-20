<template>
  <div id="app">
    <header>
      <router-link to="/"><h1 id="logo">TODO APP</h1></router-link>
      <div id="nav">
        <router-link to="/about">About</router-link>
        <router-link to="/sourcecode">Soure Code</router-link>
        <router-link to="/login">Privacy</router-link>
        <router-link to="/register">Login/Register</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
@use "main";
@use "components/header";
</style>
