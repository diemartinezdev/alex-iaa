<template>
    <div id="nav">
      
      <h1>Alex-IAA</h1>
      
      
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  #nav {
    display: flex;
    align-items: center;
  }
  
  img {
    width: 150px;
    margin: 1vw;
  }
  
  h1 {
    color: #f7690c;
    font-size: 1.6vw;
    font-style: italic;
    user-select: none;
  }
  
  .nav-link {
    text-decoration: none;
    color: hsl(24, 46%, 77%);
    font-size: 1.2vw;
    font-weight: bold;
  }
  
  .nav-link:hover {
    color: #f7690c;
  }
  
  #nav-icons {
    display: flex;
    list-style: none;
    margin-left: 6vw;
    gap: 4vw;
  }
  @media only screen and (max-width: 768px) {
  img {
    width: 70px;
  }
    h1 {
      display: none;
    }
  
    .nav-link {
  font-size: 12px;
    }
  
    
  }
  </style>