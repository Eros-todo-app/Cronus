<template>
  <div id="app">
    <header>
      <div class="container">
        <router-link id="logo" to="/">
          <h1>Cronus</h1>
        </router-link>
        <nav id="nav">
          <router-link to="/about">About</router-link>
          <router-link to="/sourcecode">Source code</router-link>
          <router-link to="/privacy">Privacy</router-link>
          <router-link to="/register">Login/Register</router-link>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
@use "main";
@use "components/header";
@use "components/usp.scss";
</style>
