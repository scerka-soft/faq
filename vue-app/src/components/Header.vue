<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
    <div class="container">
		<svg xmlns="http://www.w3.org/2000/svg" style="width: 26px;" fill="none" viewBox="0 0 84 133"><path fill-rule="evenodd" clip-rule="evenodd" d="M38 59v74L0 114V82h15v24.5l8 4V74H0V19L38 0v51H23V22.5l-8 4V59h23zm31-8h15V19L46 0v133l38-19V82H69v24.5l-8 4v-88l8 4V51z" fill="#fff"></path></svg>
      <a class="navbar-brand" href="#">FAQ</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Главная</router-link>
          </li>
          <li class="nav-item">
				<router-link class="nav-link" to="/programs">Программы</router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>