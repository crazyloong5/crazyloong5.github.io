var posts=["2022/11/26/learn/MarkDown/","2023/04/07/learn/Framework/Mybatis-01/","2023/04/08/learn/Framework/Mybatis-02/","2022/12/20/learn/SQL/","2023/04/10/learn/Framework/MybatisPlus-01/","2023/04/13/learn/Framework/MybatisPlus-02/","2023/04/09/learn/Framework/Mybatis-03/","2023/03/11/learn/Framework/SpringBoot入门-01/","2023/04/01/learn/Framework/SSM整合/","2023/03/16/learn/Framework/SpringBoot入门-02/","2023/03/04/learn/Framework/SpringMVC入门-02/","2023/03/08/learn/Framework/SpringMVC入门-03/","2023/03/01/learn/Framework/SpringMVC入门01/","2023/02/01/learn/Framework/Spring入门-01/","2023/02/07/learn/Framework/Spring入门-02/","2023/02/15/learn/Framework/Spring入门-03/","2023/02/24/learn/Framework/Spring入门-04/","2022/12/10/learn/Java/Java IO流/","2023/03/20/learn/Framework/springsecurity入门/","2022/12/12/learn/Java/Java 反射/","2022/11/26/learn/Java/Java 变量/","2022/12/09/learn/Java/Java 多线程/","2022/12/05/learn/Java/Java 常用类/","2022/12/04/learn/Java/Java 异常/","2022/12/08/learn/Java/Java 图形界面设计/","2022/12/03/learn/Java/Java 枚举和注解/","2022/11/29/learn/Java/Java 数组、排序和查找/","2022/12/06/learn/Java/Java 数据结构/","2022/12/07/learn/Java/Java 树/","2022/11/26/learn/Java/Java 概述/","2022/12/13/learn/Java/Java 正则表达式/","2022/11/28/learn/Java/Java 程序控制结构/","2022/12/11/learn/Java/Java 网络编程/","2022/11/27/learn/Java/Java 运算符/","2022/12/01/learn/Java/Java 面向对象编程（中级）/","2022/11/30/learn/Java/Java 面向对象编程（基础）/","2022/12/02/learn/Java/Java 面向对象编程（高级）/","2022/12/14/learn/Java/Jdbc 和数据库连接池/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };