var posts=["2022/10/15/hello-world copy/","2024/12/09/hello-world/","2022/10/15/template/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };