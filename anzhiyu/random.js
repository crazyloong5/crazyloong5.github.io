var posts=["2022/10/15/template/","2022/10/15/hello-world copy/","2024/12/09/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };