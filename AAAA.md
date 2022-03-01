# Java反射



### 一、反射的概述

JAVA[反射机制](https://so.csdn.net/so/search?q=反射机制&spm=1001.2101.3001.7020)是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为java语言的反射机制。
要想解剖一个类,必须先要获取到该类的字节码文件对象。而解剖使用的就是Class类中的方法.所以先要获取到每一个字节码文件对应的Class类型的对象.


以上的总结就是什么是反射
反射就是把java类中的各种成分映射成一个个的Java对象
例如：一个类有：成员变量、方法、构造方法、包等等信息，利用反射技术可以对一个类进行解剖，把个个组成部分映射成一个个对象。（其实：一个类中这些成员方法、构造方法、在加入类中都有一个类来描述）
如图是类的正常加载过程：反射的原理在与class对象。
熟悉一下加载的时候：Class对象的由来是将class文件读入内存，并为之创建一个Class对象。

![img](https://img-blog.csdn.net/20170513133210763)

### 二、[Java中为什么需要反射？反射要解决什么问题？](https://www.cnblogs.com/buoge/p/9285142.html)

Java中编译类型有两种：

-   **静态编译**：在编译时确定类型，绑定对象即通过。
-   **动态编译**：运行时确定类型，绑定对象。动态编译最大限度地发挥了Java的灵活性，体现了多态的应用，可以减低类之间的耦合性。

**Java反射是Java被视为动态（或准动态）语言的一个关键性质**。这个机制允许程序在运行时透过Reflection APIs取得任何一个已知名称的class的内部信息，包括其modifiers（诸如public、static等）、superclass（例如Object）、实现之interfaces（例如Cloneable），也包括fields和methods的所有信息，并可于运行时改变fields内容或唤起methods。

Reflection可以在运行时加载、探知、使用编译期间完全未知的classes。即Java程序可以加载一个运行时才得知名称的class，获取其完整构造，并生成其对象实体、或对其fields设值、或唤起其methods。

反射（reflection）允许静态语言在运行时（runtime）检查、修改程序的结构与行为。
在静态语言中，使用一个变量时，必须知道它的类型。在Java中，变量的类型信息在编译时都保存到了class文件中，这样在运行时才能保证准确无误；换句话说，程序在运行时的行为都是固定的。如果想在运行时改变，就需要反射这东西了。

实现Java反射机制的类都位于java.lang.reflect包中：

1.  Class类：代表一个类
2.  Field类：代表类的成员变量（类的属性）
3.  Method类：代表类的方法
4.  Constructor类：代表类的构造方法
5.  Array类：提供了动态创建数组，以及访问数组的元素的静态方法

**一句话概括就是使用反射可以赋予jvm动态编译的能力，否则类的元数据信息只能用静态编译的方式实现，例如热加载，Tomcat的classloader等等都没法支持。**

### 三、使用

![img](https://img-blog.csdn.net/20170513144141409)

1、获取Class对象的三种方式

1.1 Object ——> getClass();
1.2 任何数据类型（包括基本数据类型）都有一个“静态”的class属性
1.3 通过Class类的静态方法：forName（String  className）(常用)

```java
/**
 * 获取Class对象的三种方式
 * 1 Object ——> getClass();
 * 2 任何数据类型（包括基本数据类型）都有一个“静态”的class属性
 * 3 通过Class类的静态方法：forName（String  className）(常用)
 *
 */

public class Fanshe {
	public static void main(String[] args) {
		//第一种方式获取Class对象  
		Student stu1 = new Student();//这一new 产生一个Student对象，一个Class对象。
		Class stuClass = stu1.getClass();//获取Class对象
		System.out.println(stuClass.getName());
		//第二种方式获取Class对象
		Class stuClass2 = Student.class;
		System.out.println(stuClass == stuClass2);
//判断第一种方式获取的Class对象和第二种方式获取的是否是同一个
		//第三种方式获取Class对象
		try {
			Class stuClass3 = Class.forName("fanshe.Student");
//注意此字符串必须是真实路径，就是带包名的类路径，包名.类名
			System.out.println(stuClass3 == stuClass2);
//判断三种方式是否获取的是同一个Class对象
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		System.out.println("*****************获取公有、无参的构造方法*************");
        Constructor con = clazz.getConstructor(null);
		//1>、因为是无参的构造方法所以类型是一个null,不写也可以：这里需要的是一个参数的类型，切记是类型
		//2>、返回的是描述这个无参构造函数的类对象。
		System.out.println("*************获取公有字段**并调用*****************");
		Field f = stuClass.getField("name");
        System.out.println(f);
		System.out.println("***************获取私有的show4()方法******************");
		m = stuClass.getDeclaredMethod("show4", int.class);
		System.out.println(m);
		m.setAccessible(true);//解除私有限定
		Object result = m.invoke(obj, 20);//需要两个参数，一个是要调用的对象（获取有反射），一个是实参
		System.out.println("返回值：" + result);
	}
}
```

 



# [Spring](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/Spring?id=spring)

------

## [基本概念](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/Spring?id=基本概念)

### [Spring](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/Spring?id=spring-1)

Spring 是用于开发 Java 应用程序的开源框架，为解决企业应用开发的复杂性而创建。

1.  Spring 的基本设计思想是利用 IOC（依赖注入）和 AOP （面向切面）解耦应用组件，降低应用程序各组件之间的耦合度。
2.  在这两者的基础上，Spring 逐渐衍生出了其他的高级功能：如 Security，JPA 等。

### [Spring MVC](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/Spring?id=spring-mvc)

Spring MVC 是 Spring 的子功能模块，专用于 Web 开发。

Spring MVC 基于 Servlet 实现，将 Web 应用中的数据业务、显示逻辑和控制逻辑进行分层设计。开发者可以直接调用 Spring MVC 框架中 Spring 解耦的组件，快速构建 Web 应用。

### [Spring Boot](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/Spring?id=spring-boot)

Spring Boot 是用于简化创建 Spring 项目配置流程，快速构建 Spring 应用程序的辅助工具。Spring Boot 本身并不提供 Spring 框架的核心特性以及扩展功能。但 在创建 Spring 项目时，Spring Boot 可以：

1.  自动添加 Maven 依赖，不需要在 pom.xml 中手动添加配置依赖。
2.  不需要配置 XML 文件，将全部配置浓缩在一个 appliaction.yml 配置文件中。
3.  自动创建启动类，代表着本工程项目和服务器的启动加载。
4.  内嵌 Tomcat 、Jetty 等容器，无需手动部署 war 文件。

------

## [Spring Boot 配置](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/Spring?id=spring-boot-配置)

### [依赖](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/Spring?id=依赖)

在Spring Boot中，引入的所有包都是 starter 形式：

spring-boot-starter-web-services，针对 SOAP Web Services spring-boot-starter-web，针对 Web 应用与网络接口 spring-boot-starter-jdbc，针对 JDBC spring-boot-starter-data-jpa，基于 Hibernate 的持久层框架 spring-boot-starter-cache，针对缓存支持

### [默认映射路径](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/Spring?id=默认映射路径)

-   `classpath:/META-INF/resources/`
-   `classpath:/resources/`
-   `classpath:/static/`
-   `classpath:/public/`

优先级顺序：META-INF/resources > resources > static > public

### [全局配置](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/Spring?id=全局配置)

位于 resources 文件夹下，支持以下两种格式。由 Spring Boot 自动加载。

1.  application.properties
2.  application.yml

```properties
#端口号
server.port=8080
#访问前缀
server.servlet.context-path=/demo

#数据库驱动
jdbc.driver=com.mysql.jc.jdbc.Driver
#数据库链接
jdbc.url=jdbc:mysql://localhost:3306/demo?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=UTC
#数据库用户名
jdbc.username=root
#数据库密码
jdbc.password=wdh19970506

#Mybatis
#配置文件路径
mybatis_config_file=mybatis-config.xml
#SQL语句配置路径
mapper_path=/mapper/**.xml
#实体类所在包
type_alias_package=com.example.demo.entityCopy to clipboardErrorCopied
```

-   JDBC 连接 Mysql5 驱动： com.mysql.jdbc.Driver
-   JDBC 连接 Mysql6 驱动： com.mysql.cj.jdbc.Driver , URL 必须要指定时区 serverTimezone ！

**多重配置**

在 Spring Boot 中，我们往往需要配置多个不同的配置文件去适应不同的环境：

-   `application-dev.properties` 开发环境
-   `application-test.properties` 测试环境
-   `application-prod.properties` 生产环境

只需要在程序默认配置文件 `application.properties` 中设置环境，就可以使用指定的配置。

```properties
spring.profiles.active=devCopy to clipboardErrorCopied
```

### [启动类](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/Spring?id=启动类)

`@SpringBootApplication` 类：作为程序入口，在创建 Spring Boot 项目时自动创建。

等同于 `@Configuration` + `@EnableAutoConfiguration` + `@ComponentScan` ，会自动完成配置并扫描路径下所有包。

```java
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}Copy to clipboardErrorCopied
```

------

Spring 需要定义调度程序 servlet ，映射和其他支持配置。我们可以使用 web.xml 文件或 Initializer 类来完成此操作：

```java
public class MyWebAppInitializer implements WebApplicationInitializer {

    @Override
    public void onStartup(ServletContext container) {
        AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
        context.setConfigLocation("com.pingfangushi");
          container.addListener(new ContextLoaderListener(context));
          ServletRegistration.Dynamic dispatcher = container
          .addServlet("dispatcher", new DispatcherServlet(context));
        dispatcher.setLoadOnStartup(1);
        dispatcher.addMapping("/");
    }
}Copy to clipboardErrorCopied
```

还需要将 `@EnableWebMvc` 注释添加到 `@Configuration` 类，并定义一个视图解析器来解析从控制器返回的视图：

```java
@EnableWebMvc
@Configuration
public class ClientWebConfig implements WebMvcConfigurer { 
   @Bean
   public ViewResolver viewResolver() {
      InternalResourceViewResolver bean
        = new InternalResourceViewResolver();
      bean.setViewClass(JstlView.class);
      bean.setPrefix("/WEB-INF/view/");
      bean.setSuffix(".jsp");
      return bean;
   }
}
```





# [Spring IOC](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=spring-ioc)

https://www.jianshu.com/p/ad05cfe7868e

------

## [IOC 原理](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=ioc-原理)

### [代码耦合](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=代码耦合)

实际开发中，我们如果在对象 A 内部去创建、修改或者注销另一个对象 B，这会导致对象之间非常复杂的依赖关系，不利于代码的维护更新。

比如我们直接在上层类内调用了底层类的构造方法，一旦底层类的构造方法发生改变，就必须修改所有上层类的代码。

![img](https://mrjokersince1997.github.io/My-Notes/javaee/spring/%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB.png)

### [依赖注入](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=依赖注入)

( Dependency Injection ) 我们用依赖注入的方式来降低耦合度。所谓依赖注入，就是把底层对象作为参数传入上层对象。避免底层类被修改后上层类代码也要随之改动。我们一般通过构造方法或者 setter 方法注入底层对象。

1.  设值注入：依赖的对象通过 setter 方法传入的，对象已经实例化，发生属性填充和依赖注入的时候。
2.  构造注入：依赖的对象是通过构造器传入，发生在实例化 Bean 的时候。

*主要采用设值注入，性能更好更易读。但对于依赖关系无需变化的 Bean 采用构造注入。所有的依赖关系全部在构造器内设定。*

![img](https://mrjokersince1997.github.io/My-Notes/javaee/spring/%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5.png)

优势：使用依赖注入后，即使底层类发生变化，上层类代码也不必改动，大大降低了代码的耦合度。

劣势：但这也导致了我们在初始化对象的过程中要书写复杂的代码。

### [控制反转](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=控制反转)

( Inversion of Control ) 控制反转，将对象的管理权交给 IOC 容器。

Spring 框架内会定义一个 IOC 容器类，通过其来统一管理对象的生命周期：创建、资源存取、注销；并自动维护对象间的依赖关系。用户只需要配置 XML 文件或者添加注解标明类之间的映射关系，初始化过程中的代码将由 IOC 容器自动完成。

IOC 容器底层通过工厂模式和 Java 反射机制来实现：

1.  IOC 容器根据 XML 配置文件或者注解读取 Bean 中保存的对象信息。
2.  IOC 容器充当工厂类，利用 Java 反射机制读取需要生成哪些对象，来自动生成相应的对象。

------

## [基础概念](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=基础概念)

### [IOC 容器](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=ioc-容器)

在 Spring 框架中已经定义了 ApplicationContext 和 BeanFactory 作为 IOC 容器类。其中 ApplicationContext是 BeanFactory 的子类，提供了事件发布、国际化信息支持等其他高级特性。

我们可以通过 IOC 容器类的 setBean 方法创建 Bean ，也可以通过 getBean 方法把 Bean 实例化并使用。

```java
public void testUser(){
    // 加载配置文件，创建 IOC 容器对象
    ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
    // IOC 容器根据 Bean 创建对象实例
    Person newUser = (Person) context.getBean("person");
    // 调用对象方法
    System.out.print(newUser.toString());
}Copy to clipboardErrorCopied
```

### [Java Bean](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=java-bean)

Java Bean 就是程序中被管理的对象在 IOC 容器中的代理，记录了对象信息。

Bean 包含以下参数：Bean 名称(name) 、所代理的类(class) 、以及作用域(scope)。

#### [Bean 的作用域](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=bean-的作用域)

-   **singleton 单例模式**（默认）： 在整个 IoC 容器中，Bean 只有一个对象实例。
-   **prototype 原型模式**： 每次调用 Ioc 容器的 getBean 方法，都将产生一个新的对象实例。
-   **request**： 对于每次 HTTP 请求，Bean 都将产生一个新的对象实例。
-   **session**： 对于每个 HTTP Session，Bean 都将产生一个新的对象实例。
-   **global session**： 对于每个全局的 HTTP Session，Bean 都将产生一个新的对象实例。

#### [Bean 的生命周期](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=bean-的生命周期)

Spring 对 Bean 方法进行了抽象和封装，开发者只需要进行配置和调用简单接口，具体实现都交付给 Spring 工厂来管理。

在调用 getBean 方法时，Spring 的工作流大致可分为以下两步：

1.  解析：读 xml 配置，扫描类文件，从配置或者注解中获取 Bean 的定义信息，注册一些扩展功能。
2.  加载：通过解析完的定义信息获取 Bean 实例。

![img](https://mrjokersince1997.github.io/My-Notes/javaee/spring/bean.png)

获取 BeanName，对传入的 name 进行解析，转化为可以从 Map 中获取到 BeanDefinition 的 bean name。 合并 Bean 定义，对父类的定义进行合并和覆盖，如果父类还有父类，会进行递归合并，以获取完整的 Bean 定义信息。 实例化，使用构造或者工厂方法创建 Bean 实例。 属性填充，寻找并且注入依赖，依赖的 Bean 还会递归调用 getBean 方法获取。 初始化，调用自定义的初始化方法。 获取最终的 Bean，如果是 FactoryBean 需要调用 getObject 方法，如果需要类型转换调用 TypeConverter 进行转化。

#### [循环依赖](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=循环依赖)

三个类 A、B、C，然后 A 关联 B，B 关联 C，C 又关联 A，这就形成了一个循环依赖。如果是方法调用是不算循环依赖的，循环依赖必须要持有引用。

1.  构造器循环依赖。依赖的对象是通过构造器传入的，发生在实例化 Bean 的时候。

无法解决

1.  设值循环依赖。依赖的对象是通过 setter 方法传入的，对象已经实例化，发生属性填充和依赖注入的时候。

Spring 框架只支持单例下的设值循环依赖。原型模式检测到循环依赖会直接抛出 BeanCurrentlyInCreationException 异常。

https://www.jianshu.com/p/9ea61d204559

------

## [IOC 注解详解](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=ioc-注解详解)

### [配置](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=配置)

为类添加 `@Configuration` 注解，表示该类为配置类。起到类似 XML 文件的作用，配置 IOC 容器用来管理 Bean。

#### [组件扫描](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=组件扫描)

为配置类添加 `@ComponentScan` 注解，启用组件扫描。配置类将根据注解向 IOC 容器添加 Bean，默认扫描本类中的 @Bean 方法。

可以指定需要扫描的包，这会扫描包内的所有组件。如 `@ComponentScan(value="com.company.project")`。

### [注册 (setBean)](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=注册-setbean)

-   **为类添加 `@Component` 注解**

表示该类型被注册为 Bean 。Bean 的名称默认为类名的首字母小写，作用域默认为单例模式。

1.  可以为注册的 Bean 指定名称，等同于 `@Component("car")` 。
2.  可以为注册的 Bean 指定作用域，如 `@Component("prototype")` 。

在 Spring MVC 中，我们可以把 `@Component` 细化为：

-   `@Controller` 注解：表示展示层的 Bean
-   `@Service` 注解：表示业务层的 Bean
-   `@Repository` 注解：表示数据访问层的 Bean

```java
@Component
@Scope("prototype")
class Car implements Vehicle{
    @AutoWired
    private FrameWork frameWork;
}Copy to clipboardErrorCopied
```

-   **为方法添加 `@Bean` 注解**

方法返回类型将被注册为 Bean。Bean 的名称默认为方法名，作用域默认为单例模式。

-   可以为注册的 Bean 指定名称，等同于 `@Bean(name = "myFoo")` 。
-   主要用在 @Configuration 注解的类里，也可以用在 @Component 注解的类里。

### [装配 (getBean)](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringIOC?id=装配-getbean)

-   **为对象添加 `@Autowired` 注解**

表示自动装配。在使用对象时 Spring 将**根据类型**自动查找 Bean 去创建对象，无法找到 Bean 则抛出异常。

1.  如果想要在无法找到 Bean 时返回 null 值，则将注解改为 `@Autowired(required=false)` 。
2.  如果自动装配对象的类型是接口，而配置的实现类 Bean 有多个。则必须用 `@Qualifier` 注解来指定 Bean 的名称。

```java
@Autowired
@Qualifier("car")
private Vehicle vehicle;Copy to clipboardErrorCopied
```

-   **为对象添加 `@Resource` 注解**

表示自动装配。默认按对象名称去查找 Bean，找不到再按类型去查找 Bean。

1.  注解可以指定按名称或者类型去查找 Bean，如 `@Resource(name="car")` 或者 `@Resource(type=Car.class)`。
2.  也可以同时按名称和类型查找 Bean，任何一个不匹配都将报错。

```java
@Resource(name="car")
private Vehicle vehicle;Copy to clipboardErrorCopied
```

>   @Autowired 是 Spring 的注解，@Resource 是 J2EE 的注解。

# [Spring AOP](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=spring-aop)

https://www.cnblogs.com/joy99/p/10941543.html

超级详细版：http://shouce.jb51.net/spring/aop.html

------

## [AOP 原理](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=aop-原理)

### [面向切面](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=面向切面)

( Aspect Orient Programming ) 面向切面编程，是面向对象编程(OOP) 的一种补充。

在 Java 程序自上而下处理主业务时，也会经常处理一些和主业务逻辑无关的问题（比如在接收用户访问请求时，计算程序响应该请求的运行时间）。这些代码如果和主逻辑代码混淆，会导致后期难以维护。

AOP 就是将这些横切性问题和主逻辑解耦。保证开发者不修改主逻辑代码的前提下，能为系统中的业务组件添加删除、或复用某种功能。

### [代理模式](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=代理模式)

AOP 的本质是修改业务组件实际执行方法的源代码。即代理类 A 封装了目标类 B ，外部调用 B 的目标方法时会被代理类 A 拦截，代理类 A 一方面执行切面逻辑，一方面把调用转发给目标类 B ，执行目标方法。

该过程是代理模式的实现，代理方式有以下两种：

-   **静态 AOP** ：在编译阶段对程序源代码进行修改，生成静态的 AOP 代理类（字节码文件已被修改）。性能更好。
-   **动态 AOP** ：在运行阶段动态生成代理对象。灵活性更好。

#### [动态代理](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=动态代理)

Spring 中的 AOP 是通过动态代理实现的，有以下两种方式：

-   **JDK 动态代理**

利用反射机制生成一个实现代理接口的类，在调用具体方法前调用 InvokeHandler 来处理。

JDK 代理只能对实现接口的类生成代理。代理生成的是一个接口对象，因此代理类必须实现了接口，否则会抛出异常。

-   **CGlib 动态代理**

直接操作字节码对代理对象类的字节码文件加载并修改，生成子类来处理。

CGlib 代理针对类实现代理，对指定的类生成一个子类并覆盖其中的方法，因此不能代理 final 类。

------

## [AOP 注解详解](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=aop-注解详解)

### [配置](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=配置)

对负责扫描组件的配置文件类(@Configuration) 添加 `@EnableAspectJAutoProxy` 注解，启用 AOP 功能。

**默认通过 JDK 动态代理方式进行织入。**但必须代理一个实现接口的类，否则会抛出异常。

注解改为 `@EnableAspectJAutoProxy(proxyTargetClass = true)`：

通过 cglib 的动态代理方式进行织入。但如果拓展类的方法被 final 修饰，则织入无效。

```java
@Configuration
@ComponentScan(basePackageClasses = {com.company.project.service.Meal.class})
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class AppConfig {
}Copy to clipboardErrorCopied
```

### [切面](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=切面)

对组件类(@component) 添加 `@Aspect` 注解，表示该类为切面类。

#### [增强类型](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=增强类型)

**前置通知**

切面方法注解 `@Before` 表示目标方法调用前，执行该切面方法。

```java
@Before("execution(* com.company.project.service.Meal.eat(..))")
public void cook() {
    System.out.println("cook");
}Copy to clipboardErrorCopied
```

**后置通知**

-   切面方法注解 `@After` 表示目标方法返回或抛出异常后，执行该切面方法。
-   切面方法注解 `@AfterReturning` 只在目标方法返回后，执行该切面方法。
-   切面方法注解 `@AfterThrowing` 只在目标方法抛出异常后，执行该切面方法。

```java
@AfterReturning("execution(* com.company.project.service.Meal.eat(..))")
public void clean() {
    System.out.println("clean");
}Copy to clipboardErrorCopied
```

**环绕通知**

切面方法注解 `@Around` 表示切面方法执行过程中，执行目标方法。

传入参数为 ProceedingJoinPoint 类对象，表示目标方法。在切面方法中调用其 proceed 方法来执行。

```java
@Around("execution(* com.company.project.service.Meal.eat(..))")
public void party(ProceedingJoinPoint pj) {
    try {
        System.out.println("cook");
        pj.proceed();
        System.out.println("clean");
    } catch (Throwable throwable) {
        throwable.printStackTrace();
    }
}Copy to clipboardErrorCopied
```

#### [切点声明](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=切点声明)

在切面方法中需要声明切面方法要切入的目标方法，execution 指示器是我们定义切点时最主要使用的指示器。

格式为： `execution(返回数据类型 路径.类.方法(传入参数类型))`

| 参数                                                         | 功能                                            |
| ------------------------------------------------------------ | ----------------------------------------------- |
| `execution(* com.company.project.service.Meal.eat(..))`      | 执行 Meal 类的 eat 方法时切入                   |
| `execution(* com.company.project.service.Meal.eat(int,String))` | 执行 Meal 类的 eat(int,String) 方法时切入       |
| `execution(* com.company.project.service.Meal.*(..))`        | 执行 Meal 类的所有方法时切入                    |
| `execution(* com.company.project.service.*.*(..))`           | 执行 service 包内的任意方法时切入（不包含子包） |
| `execution(* com.company.project.service..*.*(..))`          | 执行 service 包内的任意方法时切入（包含子包）   |
| `execution(public * *(..))`                                  | 执行所有目标类的所有 public 方法时切入          |
| `execution(* pre*(...))`                                     | 执行所有目标类所有以 pre 为前缀的方法时切入     |

还有一些其他指示器：

| 参数                                                 | 功能                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| `within(com.company.project.service.*)`              | 执行 service 包内的任意方法时切入                            |
| `this(com.company.project.service.AccountService)`   | 执行实现 AccountService 接口的代理对象的任意方法时切入       |
| `target(com.company.project.service.AccountService)` | 执行实现 AccountService 接口的目标对象的任意方法时切入       |
| `args(java.io.Serializable)`                         | 任何一个只接受一个参数，并且运行时所传入的参数是 Serializable 接口的方法 |

-   多个匹配条件之间使用链接符连接： `&&`、`||`、`!` 。
-   within 指示器表示可以选择的包，bean 指示器可以在切点中选择 bean 。

如参数 `execution(String com.company.project.service.test1.IBuy.buy(double)) && args(price) && bean(girl)`

要求返回类型为 String ；参数类型为 double ；参数名为 price ；调用目标方法的 bean 名称为 girl 。

**简化代码**

对于类中要频繁要切入的目标方法，我们可以使用 `@Pointcut` 注解声明切点表达式，简化代码。

```java
@Aspect
@Component
public class EatPlus {

    @Pointcut("execution(* com.company.project.service.Meal.eat(..))")
    public void point(){}

    @Before("point()")
    public void cook() {
        System.out.println("cook");
    }

    @Around("point()")
    public void party(ProceedingJoinPoint pj) {
        try {
            System.out.println("cook");
            pj.proceed();
            System.out.println("clean");
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
    }

    @Pointcut("execution(String com.company.project.service.Meal.eat(double)) && args(price) && bean(people)")
    public void point2(double price) {
    }

    @Around("point2(price)")
    public String pay(ProceedingJoinPoint pj, double price){
        try {
            pj.proceed();
            if (price > 100) {
                System.out.println("can not afford");
                return "没有购买";
            }
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
        return "购买";
    }
}Copy to clipboardErrorCopied
```

------

## [常用 AOP](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=常用-aop)

### [异常处理](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=异常处理)

-   `@ControllerAdvice` / `@RestControllerAdvice`: 标注当前类为所有 Controller 类服务
-   `@ExceptionHandler`: 标注当前方法处理异常（默认处理 RuntimeException） `@ExceptionHandler(value = Exception.class)`: 处理所有异常

```java
@RestControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(Throwable.class)
    public ResultBean handleOtherException(Throwable e) {
        String message = String.format("错误=%s,位置=%s", e.toString(), e.getStackTrace()[0].toString());
        return ResultBean.error(ErrorCode.UNKNOWN_ERROR.getErrorCode(), message);
    }

    @ExceptionHandler(StreamPlatformException.class)
    public ResultBean handleVenusException(StreamPlatformException e) {
        return ResultBean.error(e.getErrorCode(), e.getMessageToUser());
    }

    @ExceptionHandler(FormValidationException.class)
    public ResultBean handleFormValidationException(FormValidationException e) {
        StringBuilder message = new StringBuilder();
        e.getResult().getAllErrors().forEach(objectError -> {
            if (objectError instanceof FieldError) {
                FieldError fieldError = (FieldError) objectError;
                message.append("参数").append(fieldError.getField())
                        .append("错误值为").append(fieldError.getRejectedValue())
                        .append(fieldError.getDefaultMessage());
            } else {
                message.append(objectError.getDefaultMessage());
            }
        });
        return ResultBean.error(ErrorCode.PARAMETER_VALIDATION_ERROR.getErrorCode(),
                String.format(ErrorCode.PARAMETER_VALIDATION_ERROR.getMessage(), message));
    }
}Copy to clipboardErrorCopied
```

### [拦截器](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringAOP?id=拦截器)

-   **拦截器(Interceptor)**

Java Web 中，在执行 Controller 方法前后对 Controller 请求进行拦截和处理。依赖于 web 框架，在 Spring 配置。在实现上基于 Java 的反射机制。

-   **过滤器(Filter)**

Java Web 中，在 request/response 传入 Servlet 前，过滤信息或设置参数。依赖于 servlet 容器，在 web.xml 配置。在实现上基于函数回调。

>   两者常用于修改字符编码、删除无用参数、登录校验等。Spring 框架中优先使用拦截器：功能接近、使用更加灵活。

拦截器配置

```java
// 在配置中引入拦截器对象（单独编写拦截器类）

@Override
public void addInterceptors(InterceptorRegistry registry) {
    // 导入拦截器对象，默认拦截全部
    InterceptorRegistration addInterceptor = registry.addInterceptor(new myInterceptor());

    // 排除配置
    addInterceptor.excludePathPatterns("/error","/login","/user/login");               
    addInterceptor.excludePathPatterns("/asserts/**");                       
    addInterceptor.excludePathPatterns("/webjars/**");
    addInterceptor.excludePathPatterns("/public/**");
    // 拦截配置
    addInterceptor.addPathPatterns("/**");
}Copy to clipboardErrorCopied
```

拦截器类通过实现 HandlerInterceptor 接口或者继承 HandlerInterceptorAdapter 类。

```java
// 定义拦截器
public class myInterceptor extends HandlerInterceptorAdapter {

    // Session key
    public final static String SESSION_KEY = "user";

    // preHandle 预处理
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 检查 session
        HttpSession session = request.getSession();
        if (session.getAttribute(SESSION_KEY) != null) return true;
        // 重定向到登录页面
        request.setAttribute("message","登录失败，请先输入用户名和密码。");
        request.getRequestDispatcher("login").forward(request,response);
        return false;
    }

    // postHandle 善后处理
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                           ModelAndView modelAndView) {
        System.out.println("INTERCEPTOR POSTHANDLE CALLED");
    }

}Copy to clipboardErrorCopied
```

过滤器类通过继承 Filter 类实现，直接添加注解即可。

```java
@Component                                                                // 作为组件，交给容器处理
@ServletComponentScan                                                     // 扫描组件
@WebFilter(urlPatterns = "/login/*",filterName = "loginFilter")           // 设定过滤路径和名称
@Order(1)                                                                 // 设定优先级（值小会优先执行）
public class LoginFilter implements Filter{

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        // 过滤器前执行
        System.out.println("before");
        // 执行内部逻辑
        filterChain.doFilter(servletRequest,servletResponse);
        // 过滤器后执行
        System.out.println("after");
    }

    @Override
    public void destroy() {
    }
}Copy to clipboardErrorCopied
```

**调用顺序**

![filter](https://mrjokersince1997.github.io/My-Notes/javaee/spring/filter.png)









# [Spring Controller](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=spring-controller)

------

## [服务器控制](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=服务器控制)

### [响应架构](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=响应架构)

Spring Boot 内集成了 Tomcat 服务器，也可以外接 Tomcat 服务器。通过控制层接收浏览器的 URL 请求进行操作并返回数据。

底层和浏览器的信息交互仍旧由 servlet 完成，服务器整体架构如下：

-   **Server**： Tomcat 最顶层容器，代表整个服务器。
    -   **Service**：服务，对应不同的任务。
        -   **Connector**：有多个，用来处理连接相关的事情，并提供 Socket 到 Request 和 Response 相关转化。
        -   **Container**：只有一个，用于封装和管理 Servlet ，以及处理具体的 Request 请求。

### [启动过程](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=启动过程)

main 方法： 实例化 SpringApplication ，执行run方法

run方法：
配置属性、获取监听器，初始化输入参数、配置环境，输出banner 创建上下文、预处理上下文、刷新上下文、再刷新上下文：context

refreshApplicationContext方法：通过ServletWebServerFactory接口定义了getwebServer方法，通过其创建webServer并返回（创建时做了两件重要的事情：把Connector对象添加到tomcat中，配置引擎）【TomcatServletWebServerFactory是接口其中一个实现类】

TomcatwebServer类中，规定了Tomcat服务器的启动和关闭方法。

而tomcat的启动主要是实例化两个组件：Connector、Container

------

## [Controller 实现](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=controller-实现)

Controller 类需要使用 `@RestController` 或 `@Controller` 注解标注。

-   `@Controller`：类中所有方法以 String 形式返回 classpath 路径下同名 html 页面。适用于 JSP/thymeleaf 等动态加载页面。
-   `@RestController`：类中所有方法以 Map/List 等形式返回 JSON 数据。适用于前后端分离开发。

P.S. `@Controller` 类中标注 `@ResponseBody` 的方法，可以起到和 `@RestController` 类相同的效果。

### [请求映射](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=请求映射)

1.  Controller 类中的方法使用 `@RequestMapping` 注解标注，就可以将指定 URL 请求映射到方法上处理。

```java
@RequestMapping(value = "/hello", method = RequestMethod.GET)     // 参数为 URL 路径和请求方式
@RequestMapping("/hello")                                         // 默认接收所有请求方式

@GetMapping("/hello")                                             // 简写形式的 GET 请求
@PostMapping("/hello")                                            // 简写形式的 POST 请求

// 灵活映射
@RequestMapping("/?/hello")                                       // ? 匹配单字符
@RequestMapping("/*/hello")`：                                    // * 匹配任意数量字符
@RequestMapping("/**/hello")：                                    // ** 匹配任意数量目录
@RequestMapping("/{ID}/hello")`                                   // {} 自动读取 URL 路径动态参数Copy to clipboardErrorCopied
```

1.  Controller 类也可以通过 `@RequestMapping` 注解标注，表示路径下的 URL 请求在该类中寻找方法。

```java
@Controller
@RequestMapping("/speak")
public class SpeakController{
    @GetMapping("/hello")
    public String hello(){ return "hello"; } 
}Copy to clipboardErrorCopied
```

### [GET 请求参数](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=get-请求参数)

GET 请求参数直接附着在 URL 中。对于请求 `/test?username=mrjoker&password=123456` ，Controller 方法有以下几种方式接收：

1.  直接获取参数

```java
@RequestMapping("/test")
public String test(String username, String password){
    return username + password;
}Copy to clipboardErrorCopied
```

1.  通过 HttpServletRequest 类来获取参数

```java
@RequestMapping("/test")
public String test(HttpServletRequest request){
    String username = request.getParameter("username");
    String password = request.getParameter("password");
    return username + password;
}Copy to clipboardErrorCopied
```

1.  通过自定义对象来获取参数

```java
@RequestMapping("/test")
public String test(User user){
    String username = user.getUsername();
    String password = user.getPassword();
    return username + password;
}Copy to clipboardErrorCopied
```

1.  通过 RequestParam 注解来获取参数，实参值赋给形参。

```java
@RequestMapping("/test")
public String test(@RequestParam(value="username",required = false, defaultValue ="mrjoker") String s1, @RequestParam("password") String s2){
    return s1 + s2;
}Copy to clipboardErrorCopied
```

1.  通过 PathVariable 注解来动态获取参数，参数直接附着在 URL 中。

```java
@RequestMapping("/test/{username}/{password}")
public String test(@PathVariable("username") String s1, @PathVariable("password") String s2){
    return s1 + s2;
}Copy to clipboardErrorCopied
```

1.  通过 ModelAttribute 注解来获取其他方法返回值作为参数，被注释方法会在此 controller 中每个方法执行前被执行。

```java
@Controller 
public class HelloWorldController { 
    @ModelAttribute 
    public void populateModel(@RequestParam String abc, Model model) { 
        model.addAttribute("attributeName", abc); 
    } 

    @RequestMapping(value = "/helloWorld") 
    public String helloWorld() { 
       return "helloWorld"; 
    } 
}Copy to clipboardErrorCopied
```

### [POST 请求参数](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=post-请求参数)

POST 请求请求参数放置在请求体中，有以下两种格式：

-   **Form Data 格式**

请求的 Content-Type 为 application/x-www-form-urlencoded

示例：`username=mrjoker&password=123456`

-   **Request Payload 格式**

请求的 Content-Type 为 application/json 或者 multipart/form-data

示例：`{"username":"mrjoker", "password":"123456"}`

1.  AJAX 提交 POST 请求默认使用 Form Data 格式，Spring MVC 会自动解析到对应的 bean 中并获取参数。

```java
// 逐个参数接收
@RequestMapping(value="/test", method=RequestMethod.POST)
private String test(@RequestParam("username") String username, @RequestParam("password") String password){
    return username + password;
}

// 解析为整体接收
@RequestMapping(value="/test", method=RequestMethod.POST)
private String test(User user){
    return user.getUsername() + user.getPassword();
}Copy to clipboardErrorCopied
```

1.  Vue 提交 POST 请求默认使用 Request Payload 格式，Spring MVC 接收时必须进行处理：
    -   前端解决方案： axios 库可以使用 qs 库将 json 对象转化为 Form Data 格式。
    -   后端解决方案： Spring Boot 在请求参数上加 `@RequestBody` 注解，将请求正文解析到对应的 bean 中获取参数。

`@RequestBody` 可以直接以 String 接收前端传过来的 json 数据，也可以用对象自动解析前端传过来的 json 数据。对象里定义 List 属性，可用来接收多条 json 数据。

```java
// String 形式接收
@RequestMapping(value = "/test", method = RequestMethod.POST)
public String test(@RequestBody String user) {
    JSONObject userJson = JSON.parseObject(user);
    String username = userJson.getString("username");
    String password = userJson.getString("password");
    return username + password;
}

// 解析为对象接收
@RequestMapping(value = "/test", method = RequestMethod.POST)
public String updateClusterIdByClientAndQueue(@RequestBody User user) {
    return user.getUsername() + user.getPassword();
}Copy to clipboardErrorCopied
```

>   一个请求可以有多个 `@RequestParam`，但只能有一个 `@RequestBody`。 URL 内含有参数时，两者可以同时使用。

### [请求转发和重定向](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=请求转发和重定向)

1.  **请求转发（forward）**

    客户端（浏览器）向服务器 A 发送一个 URL 请求，服务器 A 会向另一台服务器 B 获取资源并将此资源响应给浏览器。浏览器的 URL 地址仍然是 A 。

2.  **重定向（Redirect）**

    客户端（浏览器）向服务器 A 发送一个 URL 请求，服务器 A 告知浏览器资源在服务器 B，浏览器会重新发送请求到服务器 B。浏览器的 URL 地址切换为 B。

```java
// 请求转发
@RequestMapping("/test1")
public String test1(){
    String type = 'forward';
    return "forward:/test2?type=" + type;
}

// 重定向
@RequestMapping("/test2")
public String test2(){
    String type = 'redirect';
    return "redirect:/test2?type=" + type;
}Copy to clipboardErrorCopied
```

在拦截器中，常通过修改 HttpSevletRequest 对象实现请求转发。

```java
request.getRequestDispatcher("login").forward(request,response);Copy to clipboardErrorCopied
```

------

## [Controller 配置](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=controller-配置)

Spring 的 WebMvcConfigurer 接口定义了 Controller 层配置信息（默认为空实现）。

开发者可以通过实现 WebMvcConfigurer 接口或继承 WebMvcConfigurationSupport 类对以下方法进行重写。

```java
@Configuration
public class WebMVCConfig implements WebMvcConfigurer {

    /** 解决跨域问题 **/
    @Override
    public void addCorsMappings(CorsRegistry registry){};
    /** 添加拦截器 **/
    @Override
    public void addInterceptors(InterceptorRegistry registry){};

}Copy to clipboardErrorCopied
```

### [跨域问题](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=跨域问题)

配置如何处理跨域请求，否则返回数据会被浏览器拦截。

```java
@Override
public void addCorsMappings(CorsRegistry registry) {
            // 添加映射路径（全部）
    registry.addMapping("/**")
            // 放行哪些原始域
            .allowedOrigins("*")
            // 是否发送 Cookie 信息
            .allowCredentials(true)
            // 放行哪些原始域(请求方式)
            .allowedMethods("GET","POST", "PUT", "DELETE")
            // 放行哪些原始域(头部信息)
            .allowedHeaders("*")
            // 暴露哪些头部信息
            .exposedHeaders("Header1", "Header2");
}Copy to clipboardErrorCopied
```

**局部跨域**

1.  `@CrossOrigin` 注解：在方法上（@RequestMapping）或者在控制器（@Controller）上使用，可以实现局部跨域。

```java
@RequestMapping("/hello")
@ResponseBody
@CrossOrigin("http://localhost:8080") 
public String index( ){
    return "Hello World";
}Copy to clipboardErrorCopied
```

1.  使用 HttpServletResponse 对象添加响应头实现局部跨域。

```java
@RequestMapping("/hello")
@ResponseBody
public String index(HttpServletResponse response){
    response.addHeader("Access-Control-Allow-Origin", "http://localhost:8080");         // 指定端口放行
    // response.addHeader("Access-Control-Allow-Origin", "*");                             全部放行
    return "Hello World";
}Copy to clipboardErrorCopied
```

### [拦截器 & 过滤器](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=拦截器-amp-过滤器)

-   **拦截器(Interceptor)**

Java Web 中，在执行 Controller 方法前后对 Controller 请求进行拦截和处理。依赖于 web 框架，在 Spring 配置。在实现上基于 Java 的反射机制。

-   **过滤器(Filter)**

Java Web 中，在 request/response 传入 Servlet 前，过滤信息或设置参数。依赖于 servlet 容器，在 web.xml 配置。在实现上基于函数回调。

>   两者常用于修改字符编码、删除无用参数、登录校验等。Spring 框架中优先使用拦截器：功能接近、使用更加灵活。

拦截器配置

```java
// 在配置中引入拦截器对象（单独编写拦截器类）

@Override
public void addInterceptors(InterceptorRegistry registry) {
    // 导入拦截器对象，默认拦截全部
    InterceptorRegistration addInterceptor = registry.addInterceptor(new myInterceptor());

    // 排除配置
    addInterceptor.excludePathPatterns("/error","/login","/user/login");               
    addInterceptor.excludePathPatterns("/asserts/**");                       
    addInterceptor.excludePathPatterns("/webjars/**");
    addInterceptor.excludePathPatterns("/public/**");
    // 拦截配置
    addInterceptor.addPathPatterns("/**");
}Copy to clipboardErrorCopied
```

拦截器类通过实现 HandlerInterceptor 接口或者继承 HandlerInterceptorAdapter 类。

```java
// 定义拦截器
public class myInterceptor extends HandlerInterceptorAdapter {

    // Session key
    public final static String SESSION_KEY = "user";

    // preHandle 预处理
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 检查 session
        HttpSession session = request.getSession();
        if (session.getAttribute(SESSION_KEY) != null) return true;
        // 重定向到登录页面
        request.setAttribute("message","登录失败，请先输入用户名和密码。");
        request.getRequestDispatcher("login").forward(request,response);
        return false;
    }

    // postHandle 善后处理
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                           ModelAndView modelAndView) {
        System.out.println("INTERCEPTOR POSTHANDLE CALLED");
    }

}Copy to clipboardErrorCopied
```

过滤器类通过继承 Filter 类实现，直接添加注解即可。

```java
@Component                                                                // 作为组件，交给容器处理
@ServletComponentScan                                                     // 扫描组件
@WebFilter(urlPatterns = "/login/*",filterName = "loginFilter")           // 设定过滤路径和名称
@Order(1)                                                                 // 设定优先级（值小会优先执行）
public class LoginFilter implements Filter{

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        // 过滤器前执行
        System.out.println("before");
        // 执行内部逻辑
        filterChain.doFilter(servletRequest,servletResponse);
        // 过滤器后执行
        System.out.println("after");
    }

    @Override
    public void destroy() {
    }
}Copy to clipboardErrorCopied
```

**调用顺序**

![filter](https://mrjokersince1997.github.io/My-Notes/javaee/spring/filter.png)

------

### [Spring Boot配置HTTPS](https://mrjokersince1997.github.io/My-Notes/#/javaee/spring/SpringController?id=spring-boot配置https)

\####生成SSL证书

https://www.cnblogs.com/benwu/articles/4891758.html

JDK提供证书管理工具: JDK\bin\keytool.exe

Tomcat使用Java提供的密码库，通过Java的Keytool工具生成JKS等格式的证书文件。 Apache使用OpenSSL提供的密码库，生成PEM、KEY、CRT等格式的证书文件。

**cmd命令(JDK\bin目录打开)**

密钥库: 保存密钥和对应的证书。【证书只含有公钥】

genkeypair 生成密钥对（非对称加密算法） genseckey 生成密钥（对称加密算法） 创建名为tomcat的密钥对以及自签名的证书，放入mykeystore密钥库中（不存在则创建） `keytool -genkeypair -alias "tomcat" -keyalg "RSA" -validity 180 -keypass "123456" -keystore "D:\mykeystore.keystore" -storetype PKCS12 -storepass`

-   alias 证书别名
-   keyalg 加密算法，生成密钥对默认RSA
-   keysize 密钥键长，RSA默认2048
-   validity 证书有效期，默认90
-   keypass 证书密码
-   keystore 密钥库路径，默认创建在用户目录下
-   storetype 密钥库类型，默认JKS
-   storepass 密钥库密码

查看密钥库 `keytool -list -v -alias tomcat -keystore "D:\mykeystore.keystore" -storepass 123456`

将生成的证书文件拷贝到项目resources目录下

\####修改全局配置文件

application.properties格式

```properties
server.port = 8443
server.ssl.key-store = classpath:mykeystore.keystore
server.ssl.key-store-password = 123456
server.ssl.keyStoreType = PKCS12
server.ssl.keyAlias = tomcatCopy to clipboardErrorCopied
```

设置SSL后，默认使用HTTPS协议。访问localhost:8443，会出现证书安全提示，强行进入即可。 【未付费注册，不被数字认证机构CA认可：会被浏览器标记为不安全】

如果将服务器端口号设置成443端口,即https的默认访问端口,那么在进行https访问的时候可以不带端口号直接访问。

**修改入口文件**

如果访问[http://localhost:8443，则提示需要TLS。](http://localhost:8443，则提示需要TLS。/)

》》将http连接自动转换为https连接

```java
@Configuration
public class TestSslApplication {
    //servlet容器，自己写的bean会覆盖自动配置的bean？
    @Bean
    public ServletWebServerFactory servletContainer() {
        TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();
        tomcat.addAdditionalTomcatConnectors(createStandardConnector());
        return tomcat;
    }

　　// 新建connecter监听80端口，并重定向至8443
    private Connector createStandardConnector() {
        Connector connector = new Connector("org.apache.coyote.http11.Http11NioProtocol");
        connector.setScheme("http");
        connector.setPort(80);
        connector.setSecure(false);
        connector.setRedirectPort(8443);
        return connector;
    }

}
Copy to clipboardErrorCopied
```

重新配置Servlet容器(Tomcat)

自动配置类ServletWebServerFactoryAutoConfiguration会读取bean

https://www.jianshu.com/p/017a7f40efff



# [Redis](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=redis)

------

## [Redis 介绍](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=redis-介绍)

### [NoSQL 技术](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=nosql-技术)

在实际项目开发中，我们往往需要面对海量用户和高并发的数据请求。MySQL 等传统关系型数据库面临着两大问题：

1.  磁盘 IO 速度缓慢，单机读写速度不超过 10000 QPS，当数据库无法及时响应高并发的用户请求，请求积压进而导致数据库瘫痪。
2.  数据关系复杂，扩展性差。不适合大规模集群。

因此我们必须引入 NoSQL 技术去解决以上两个问题，以作为关系型数据库的补充。

### [Redis 数据库](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=redis-数据库)

Redis 是一种**基于内存**的数据库技术。底层采用 C 语言开发，默认端口号 6379。

1.  Redis 数据库作为数据缓存，将业务数据直接存储在内存中进行读写，单机读/写速度可达 110000/84000 QPS，可以满足高速响应的需求。
2.  Redis 数据库只负责存储数据，数据之间不具有任何关联，易于扩容和伸缩。

### [Redis 应用场景](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=redis-应用场景)

受限于内存的高昂成本，一般我们只使用 Redis 存储高频读写的关键数据。比如：

1.  **热点数据**：如热点商品信息。
2.  **任务队列**：如秒杀队列、抢购队列。
3.  **实时更新信息**：如商品排行榜、公交到站信息。
4.  **时效性信息**：如手机验证码、session 、 心跳(heartbeat)。

>   Redis 主要适用于内部系统的高频数据。在线上环境负载极大的情况下，使用 Redis 也不足以满足对数据读写的速度要求。

### [Redis 基本使用](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=redis-基本使用)

#### [安装指令](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=安装指令)

在控制台输入以下指令安装和使用 Redis：

```shell
$ sudo apt-get install redis-server       # 安装 Redis 数据库（仅限 Ubuntu 可用）

$ redis-server                            # 启动 Redis 数据库
$ redis-server --port 6380                # 启动 Redis 数据库，在指定端口
$ redis-server redis-6379.conf            # 启动 Redis 数据库，使用指定配置文件

$ redis-cli                               # 进入 Redis 控制台，在默认端口
$ redis-cli -p 6380                       # 进入 Redis 控制台，在指定端口Copy to clipboardErrorCopied
```

#### [基础配置](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=基础配置)

在 Redis 安装目录下的 `redis.conf` 文件是 Redis 默认配置文件，启动 Redis 数据库时默认加载。

```conf
daemonize no                     # 守护线程，打开后启动 Redis 控制台不提示
bind 127.0.0.1                   # 绑定 IP 地址，绑定后只能通过该地址访问 Redis
port 6379                        # 端口号
databases 16                     # 存储区域数量Copy to clipboardErrorCopied
```

#### [日志配置](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=日志配置)

Redis 总共支持四个日志级别：debug / verbose / notice / warning ，从前往后日志记录信息逐渐减少。通常情况下开发环境设为 verbose ，生产环境设为 notice 。

```conf
loglevel verbose                 # 日志级别
logfile 6379.log                 # 日志文件名Copy to clipboardErrorCopied
```

#### [持久化配置](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=持久化配置)

默认使用 RDB 方式持久化数据，相关配置如下：

```conf
save 900 1                            # 自动同步数据条件，900s 内变更 1 个 key 值则持久化
save 300 10                           # 自动同步数据条件，300s 内变更 10 个 key 值则持久化

rdbcompression yes                    # 是否压缩数据，压缩后节省空间但读取较慢
rdbchecksum yes                       # 是否格式校验（默认开启），校验降低文件损坏风险但读取较慢

dbfilename dump.rdb                   # 保存文件名
dir ./                                # 保存文件位置Copy to clipboardErrorCopied
```

可以在配置文件中改用 AOF 方式持久化数据，刷新文件条件有三种类型： always / everysec / no 。

```conf
appendonly yes                        # 选用 AOF 方式持久化
appendsync everysec                   # 刷新文件条件，每秒更新一次操作日志Copy to clipboardErrorCopied
```

#### [容量配置](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=容量配置)

对 Redis 数据库占用空间和客户链接做出限制。

```conf
maxclients 100                        # 客户连接数上限，超出后拒绝客户访问，为 0 表示不限制
timeout 300                           # 客户闲置时长，超出后关闭连接，为 0 表示不关闭

maxmemory 50                          # Redis 最大占用内存比例，为 0 表示全部可用
maxmemory-samples                     # Redis 随机选取数据数量
maxmemery-policy volatile-lru         # Redis 逐出策略Copy to clipboardErrorCopied
```

#### [多机配置](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=多机配置)

如果我们要设置集群，则需要进行以下配置：

```conf
cluster enabled yes                        # 开启集群
cluster-config-file nodes.conf             # 集群配置文件Copy to clipboardErrorCopied
```

如果我们要设置主从服务器，则需要进行以下配置：

```conf
# 主服务器
requirepass 123456                    # 主服务器设置密码（可选）
repl-backlog-size 1mb                 # 缓冲区大小

# 从服务器
slaveof 127.0.0.1 6379                # 主服务器套接字，设置后自动连接
masterauth 123456                     # 主服务器密码
slave-serve-stale-data no             # 同步数据时是否允许读数据Copy to clipboardErrorCopied
```

------

## [Redis 基础](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=redis-基础)

1.  在 Redis 中单个指令都是原子性操作，通过指令操作 Redis 数据时无需担心线程安全问题。
2.  Redis 以 key-value 的形式保存数据：key 值一定为 string 类型，而 value 值支持以下五种基础类型：

| 数据类型   | 存储形式 |
| ---------- | -------- |
| string     | 字符串   |
| hash       | 哈希表   |
| list       | 链表     |
| set        | 哈希集   |
| sorted_set | 二叉树集 |

### [存储区域](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=存储区域)

Redis 将数据存储分为多个相互独立的区域，将 Redis 操作局限在自己的存储区域内。通常划分为 16 个（编号 0-15），默认使用编号 0 。

```shell
> select 1                         # 改用 1 号存储区域

> dbsize                           # 返回当前区域 key 数量
> move key 2                       # 将当前 key 迁移到 2 号存储区域
> flushdb                          # 清空当前存储区域
> flushall                         # 清空全部存储区域Copy to clipboardErrorCopied
```

### [key 操作](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=key-操作)

**基本操作**

```shell
> del key                            # 删除 key
> exists key                         # 判断是否存在 key
> type key                           # 返回 key 对应的 value 类型       

> rename key newkey                  # 重命名
> renamenx key newkey                # 重命名（返回 1），新名称已存在则失败（返回 0）
> sort                               # 对 key 排序Copy to clipboardErrorCopied
```

**时效性控制**

Redis 中可以为 key 设置有效期，key 过期后会由 Redis 执行删除策略回收内存空间。

```shell
> expire key 10                      # key 10s 内有效
> expireat key 1355292000            # key 截至时间戳有效
> persist key                        # key 永久有效

> ttl key                            # 返回 key 剩余有效时间，若不存在返回 -2 ，永久返回 -1Copy to clipboardErrorCopied
```

**查询操作**

Redis 支持查询存储区域内含有的 key，且允许使用以下通配符：

-   `*` 表示任意数量字符
-   `?` 表示任意一个字符
-   `[]` 表示一个指定字符

```shell
> keys *                             # 查询所有 key
> keys user:*                        # 查询所有 user 的 key
> keys id:75??                       # 查询 ID 为 7500-7599 的 key
> keys id:7[2345]55                  # 查询 ID 为 7255/7355/7455/7555 的 keyCopy to clipboardErrorCopied
```

### [基础类型](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=基础类型)

#### [string 类型](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=string-类型)

Redis 的 string 类型中，key 值对应的存储空间内将保存一个字符串数据，

key 值标准命名格式为 `表名:主键名:主键值:字段名`，如 `user:id:15942348:name - "王东浩"`。

**基本操作**

```shell
> set key 10                     # 设置键值对
> get key                        # 获取键值，不存在则返回 nil
> del key                        # 删除键值对
> strlen key                     # 获取价值的字符串长度
> append key 0                   # 在键值尾部追加

> mset key1 10 key2 100          # 设置多个数据
> mget key1 key2                 # 获取多个数据

> setex key 10 1                 # 设置键值对，10s 后自动删除
> psetex key 10 1                # 设置键值对，10ms 后自动删除Copy to clipboardErrorCopied
```

**数据操作**

如果字符串为合法数字，可以当作数字处理。但数值不能超过 shell 中的 long 类型。

```shell
> incr key                       # 键值加一
> decr key                       # 键值减一
> incrby key 10                  # 键值加十
> decrby key 10                  # 键值减十
> incrbyfloat key -1.5           # 键值加 -1.5Copy to clipboardErrorCopied
```

#### [hash 类型](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=hash-类型)

hash 类型中，key 值对应的存储空间内可以保存多个键值对(field-value)：field 和 value 都必须是字符串类型。当键值对较少时存储空间内采用数组存储，当键值对较多时采用哈希存储。

十分适合存储对象，每个键值对记录对象的一个属性。

![hash](https://mrjokersince1997.github.io/My-Notes/%E5%85%B6%E5%AE%83/%E6%95%B0%E6%8D%AE%E5%BA%93/hash.png)

**基本操作**

```shell
> hset key field 10               # 设置/更新键值对
> hsetnx key field 10             # 如果键值不存在则设置键值对
> hget key field                  # 获取键值
> hgetall key                     # 获取全部键值
> hdel key field                  # 删除键值对
> hlen key                        # 获取键值对数量
> hexists key field               # 判断是否存在字段（返回 1 或 0）

> hmset key field1 1 field2 2     # 设置/修改多个键值对
> hmget key field1 field2         # 获取多个键值对Copy to clipboardErrorCopied
```

**扩展操作**

```shell
> hkeys key                       # 返回 key 对应的所有 field
> hvals key                       # 返回 key 对应的所有 value

> hincrby key field 1             # 键值加一
> hdecrby key field 1             # 键值减一Copy to clipboardErrorCopied
```

#### [list 类型](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=list-类型)

list 类型中，key 值对应的存储空间内可以保存多个字符串数据，采用双向链表实现。具有索引的概念，但还是更适合从链表两侧操作。字符串总容量不能超过 2 的 32 次方。

十分适合存储有序信息，比如粉丝列表。

**基本操作**

```shell
lpush list 1                    # 链表左侧插入数据，返回下标
rpush list 2                    # 链表右侧插入数据，返回下标
lpop list                       # 获取并删除最左侧数据
rpop list                       # 获取并删除最右侧数据
blpop list 10                   # 获取并删除最左侧数据，不存在则至多等待 10 s
lrem list 3 x                   # 从左侧开始，删除三个为 x 的数据

lrange list 0 2                 # 返回左侧前3个数据
lrange list 0 -1                # 返回全部数据（常用）
lindex list 0                   # 返回指定位置数据
llen list                       # 返回字符串个数Copy to clipboardErrorCopied
```

#### [set 类型](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=set-类型)

set 类型中，key 值对应的存储空间内可以保存多个字符串数据，采用哈希存储实现。随机查询效率比 list 类型更高。字符串总容量不能超过 2 的 32 次方。

十分适合存储集合类信息，比如用户感兴趣的话题、用户权限。

**基本操作**

```shell
sadd set member                  # 添加数据（可以是多个）
srem set member                  # 删除数据（可以是多个）
smembers set                     # 展示全部数据  

scard set                        # 返回数据个数
sismember set                    # 判断是否含有数据

srandmember set 5                # 随机从集合中选取 5 个数据
spop set                         # 返回并删除一个随机数据Copy to clipboardErrorCopied
```

**扩展操作**

```shell
sinter set1 set2                   # 交
sunion set1 set2                   # 并
sdiff set1 set2                    # 差
sinterstore newset set1 set2       # 交且存入新集合
sunionstore newset set1 set2       # 并且存入新集合
sdiffstore newset set1 set2        # 差且存入新集合

smove oldset newset 5              # 数据从旧集合迁移到新集合Copy to clipboardErrorCopied
```

#### [sorted_set 类型](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=sorted_set-类型)

如果我们需要数据查询效率较高且有序，则可以使用 sorted_set 类型。底层和 set 结构相同采用哈希存储（value 值仍不可重复），但在 key-value 存储结构后添加 score 属性为数据排序，默认从小到大。score 是数字且可以使用小数，但如果使用小数浮点类型可能会出现精度丢失。

可以用来存储排行榜等有序数据集合，还可以用于存储时效性或者带有权重的任务队列，用当前时间或者权重作为 score 。

**基本操作**

```shell
zadd set score1 member             # 添加数据且标记序号（可以是多个）Copy to clipboardErrorCopied
```

### [高级类型](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=高级类型)

此外，Redis 还提供了 Bitmaps、 HyberLogLog、GEO 三种高级数据类型，用来适配特定的应用场景。

#### [Bitmaps 类型](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=bitmaps-类型)

Bitmaps 类型中用作存储布尔值：每个 key 对应若干字节数据（字节数 = 最大编号 / 8），每字节可以存储 8 个 boolean 值。

如果 Redis 要存储大量 boolean 值，使用 Bitmaps 类型可以显著节省内存空间。

```shell
setbit bits 0 1                  # 将 0 位置为 1(true)
getbit bits 0                    # 取 0 位的值Copy to clipboardErrorCopied
```

#### [HyperLogLog 类型](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=hyperloglog-类型)

HyperLogLog 类型用作数据统计，只记录数量不保存数据，且当数据量巨大时存在误差！

使用 HyperLogLog 类型可以显著节省内存空间，每个 key 仅占用 12k 内存标记基数。

```shell
setbit bits 0 1                  # 将 0 位置为 1(true)
getbit bits 0                    # 取 0 位的值Copy to clipboardErrorCopied
```

#### [GEO 类型](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=geo-类型)

GEO 类型用作地理位置计算，根据经纬度。

------

## [Redis 高级](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=redis-高级)

### [持久化](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=持久化)

Redis 使用内存存储，一旦断电可能会导致数据丢失。因此需要将数据保存到永久性存储介质中，防止数据意外丢失。

*如果 Redis 负责为数据库高热度数据访问加速或者一些其他业务（数据库中有重复数据），那么没必要为 Redis 数据持久化。*

Redis 持久化有以下两种方式：

#### [数据快照 RDB](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=数据快照-rdb)

**定时将全部数据存入文件**。存储速度慢但是恢复数据的速度很快，如果保存不及时仍会丢失少量数据。

数据以二进制形式默认存储在 `安装目录/data/dump.rgb` 文件。如果 Redis 数据库被关闭，下次重启时会从该文件读取数据。

**手动存储**

```shell
save                      # 数据存入文件（会阻塞 Redis 数据库，导致其他指令无法执行）
bgsave                    # 数据存入文件（Redis 数据库调创建单独进程完成指令）

debug reload              # 重启 Redis，且关闭时将数据存入文件
shutrown save             # 关闭 Redis，且关闭时将数据存入文件Copy to clipboardErrorCopied
```

**修改配置**

在 `安装目录/conf/redis-6379.conf` 配置文件内可以修改默认配置：

-   如果操作系统内安装了多个 Redis 数据库（使用不同的端口），必须通过修改存储文件名加以区分。

```shell
dir data2                            # 修改存储路径（默认 data） 
dbfilename dump-6379.rgb             # 修改存储文件名（默认 dump.rgb）
rdbcompression no                    # 关闭数据压缩（默认开启），读取文件加快但文件会变大
rdbchecksum no                       # 关闭格式校验（默认开启），读取文件加快但存在文件损坏风险
stop-writes-on-bgsave-error no       # 后台存储出现错误不停止（默认停止）Copy to clipboardErrorCopied
```

-   通过修改配置文件，可以让 Redis 数据库可以自动调用 bgsave 指令更新 RDB 文件。

```shell
save 100 10                          # 自动存储（100s 内发生 10 个 key 数据变化时触发）Copy to clipboardErrorCopied
```

#### [日志记录 AOF](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=日志记录-aof)

**将对数据的操作过程存入文件**。这种方式刷新更频繁因此丢失数据概率更低，但恢复数据的速度比 RDB 方式更慢，占用存储空间也更大。

数据以二进制形式默认存储在 `安装目录/data/appendonly.aof` 文件。如果 Redis 数据库被关闭，下次重启时会根据该文件恢复数据。

**文件重写**

随着命令不断写入 AOF ，AOF 文件会越来越大，占用内存增多、恢复数据也会变慢。因此 Redis 需要对 AOF 文件进行重写，合并指令记录。

```shell
rewriteaof                          # 重写 AOF 文件（会阻塞 Redis 数据库，导致其他指令无法执行）
bgrewriteaof                        # 重写 AOF 文件（Redis 数据库调创建单独进程完成指令）                        Copy to clipboardErrorCopied
```

**修改配置**

AOF 不是默认持久化方式，需要在 `安装目录/conf/redis-6379.conf` 配置文件内修改默认配置：

-   必须通过配置文件开启并配置 AOF 存储。

```shell
appendonly yes                        # 选用 AOF 方式持久化

appendsync always                     # 每次操作刷新文件：非常频繁，损耗性能
appendsync everysec                   # 每秒刷新文件（默认）
appendsync no                         # 手动刷新文件Copy to clipboardErrorCopied
```

-   修改路径和文件名的操作和 RDB 方法类似。

```shell
dir data2                             # 修改存储路径（默认 data） 
dbfilename appendonly-6379.aof        # 修改存储文件名（默认 appendonly.aof）Copy to clipboardErrorCopied
```

-   通过修改配置文件，可以让 Redis 数据库自动调用 bgrewriteaof 指令重写 AOF 文件。

```shell
略，之后补充Copy to clipboardErrorCopied
```

### [事务](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=事务)

假如我们通过多个操作执行一次购物，如果在这个过程中还执行了其他操作，可能导致我们的购物过程出现意想不到的错误。

因此我们引入事务的概念，将多个操作看作一个不可分割的整体，统一执行而不会被其他操作打断。

```shell
multi                     # 开启事务，之后的命令不再立刻执行、而是进入任务队列

# 输入事务内的命令

exec                      # 执行事务，执行任务队列里的命令
discard                   # 取消事务，清空任务队列Copy to clipboardErrorCopied
```

1.  如果事务中包含语法错误（不能识别的命令），所有的命令都不会执行。
2.  如果事务中包含无法执行的命令，仅有出错的命令将不会被执行，其他被执行的命令需要开发者自行回滚。

#### [锁](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=锁)

在事务准备的过程中，如果执行的其他操作导致触发事务的条件发生了变化，这个时候就不应该继续执行事务。

我们引入了锁的概念来监视特定 key，在执行事务前如果其 value 发生了变化则终止事务执行。

```shell
watch key1 key2            # 监视 key，书写在 multi 命令前
unwatch                    # 取消监视 key，书写在 multi 命令前

# 在之后执行事务Copy to clipboardErrorCopied
```

#### [分布式锁](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=分布式锁)

如果 key 值变化极为频繁，那么使用普通锁会导致事务一直被终止。我们引入了分布式锁的概念，在加锁期间不允许其他进程对该值修改。

```shell
setnx lock-num 1               # 对 key(num) 加公共锁，其他线程不能对其进行操作。成功则返回 1，若已有锁导致失败返回 0

# 输入命令或者事务

del lock-num                   # 对 key(num) 解公共锁Copy to clipboardErrorCopied
```

分布式锁如果长期不被释放，就会出现死锁，导致其他操作无法继续执行。我们可以对分布式锁计时。**计时分布式锁常用于多部署平台统一竞争锁。**

```shell
expire lock-num 10                # 对 key(num) 加公共锁，10s 后自动释放
pexpire lock-num 10               # 对 key(num) 加公共锁，10ms 后自动释放Copy to clipboardErrorCopied
```

### [删除策略](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=删除策略)

Redis 中每个存储区域除了存储 key-value 值，还会开辟额外的存储空间 expires 记录每个 key-value 的存储地址以及过期时间。如果 key 过期或被删除指令删除，那么 Redis 要执行删除策略清理内存空间。

Redis 删除策略有以下三种方式，主要使用惰性删除和定期删除两种方式。

1.  **定时删除**

key 过期后，存储 key-value 的内存地址立即被清空。

节省内存资源，但可能抢占处在繁忙状态的 CPU。

1.  **惰性删除**

key 过期后不做任何处理。访问 key 时才检查是否过期，如果过期存储该 key-value 的内存地址才被清空。

节省 CPU 资源，但过期键值对可能大量占用内存。

1.  **定期删除**

对于 16 个存储区域的 expires 进行轮询，对选中的 expires 随机选择 W 个 key 进行检查，如果 key 过期就进行删除。

-   如果过期 key 超过 25%，那么重复检查该 expires 存储区域。
-   如果过期 key 少于 25%，那么按顺序检查下一个 expires 存储区域。

### [逐出策略](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=逐出策略)

如果 Redis 使用内存空间前会检查内存容量。如果已被占满，那么 Redis 要执行逐出策略删除部分数据，以清理内存空间执行指令。

在选取删除数据时 Redis 并不会扫描全库数据，而是随机选取部分数据检测并从中删除：以节省 CPU 性能。

响应配置如下：

```shell
maxmemory 50                            # Redis 最大占用内存比例，默认为 0（全部可用）
maxmemory-samples                       # Redis 随机选取数据数量
maxmemery-policy volatile-lru           # Redis 逐出策略Copy to clipboardErrorCopied
```

Redis 逐出策略有以下三种方式，在配置文件中配置即可。

1.  **检查会过期数据**
    -   `volatile-lru` ：（推荐）挑选最久未使用的数据淘汰。
    -   `volatile-lfu` ：挑选最近一段时间使用频率最低的数据淘汰。
    -   `volatile-ttl` ：挑选将要过期的数据淘汰。
    -   `volatile-random` ：随机挑选数据淘汰。
2.  **检查全部数据**
    -   `allkeys-lru` ：挑选最久未使用的数据淘汰。
    -   `allkeys-lfu` ：挑选最近一段时间使用频率最低的数据淘汰。
    -   `allkeys-random` ：随机挑选数据淘汰。
3.  **不逐出数据**
    -   `no-enviction` ：（默认）抛出错误 Out Of Memery。

------

## [Redis 多机](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=redis-多机)

### [集群](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=集群)

当数据量过大时，单个 Redis 数据库就无法存放。我们需要多个 Redis 数据库组成集群(cluster)，去分别**存放不同的数据**。

1.  key-value 数据进行存入时，会根据 key 的哈希值对 16384 取模，放入相应的槽(slot)存放。这 16384 个槽会分发给各个存储空间。
2.  各个存储空间之间会相互通信，并记录所有编号的槽都存储在哪个存储空间：保证最多访问 Redis 两次可以命中。

**配置文件**

```shell
cluster enabled yes                            # 开启集群
cluster-config-file nodes-6379.conf            # 集群配置文件（默认为 nodes.conf）Copy to clipboardErrorCopied
```

**集群指令**

-   通过 `redis-cli` 打开 Redis 集群中的数据库，输入指令去插入不属于这个存储空间的键值，会返回错误。
-   通过 `redis-cli -c` 打开 Redis 集群中的数据库，会自动将插入数据指令转发到相应的存储空间。

### [主从复制](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=主从复制)

如果数据只交给一个 Redis 服务器处理，那么可能面临两大问题：

1.  服务器同时处理过多读写操作，超过服务器负载。
2.  一旦服务器宕机，就会导致服务异常中断。

为了避免这两个问题，我们必须引入多个 Redis 服务器来保存相同数据，并采用主从复制结构：一个主服务器 Master 对应多个从服务器 Slave 。

1.  **读写分离**：Master 负责写入数据；Slave 则会自动同步数据，并负责读取数据。起到均衡负载的作用。
2.  **数据冗余**：即使某个 Slave 故障，由于其他 Slave 已保存了这些数据，并不会导致服务中断。

#### [容错机制](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=容错机制)

-   主从之间使用**心跳**建立连接。 Slave 每秒 ping 一次，汇报自己的偏移量、获取最新的指令。Master 默认每 10s ping 一次 Slave， 检查 slave 是否在线：如果 Slave 多数掉线或者高延迟，Master 停止写和数据同步功能，保障数据稳定性。
-   在分布式系统里还会部署多个 Redis 服务器作为**哨兵**（除端口号外完全相同），不提供数据服务，只负责监控主从机制的运行：如果发现 Master 宕机，哨兵将通知所有机器，使 Master 下线并开启投票机制选用一个 Slave 担任 Master 。

#### [配置连接](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=配置连接)

Master 和 Slave 通过以下过程建立连接。

![x](https://mrjokersince1997.github.io/My-Notes/%E5%85%B6%E5%AE%83/%E6%95%B0%E6%8D%AE%E5%BA%93/%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5.png)

相比于输入指令，我们一般直接修改 conf 文件夹内的配置文件，由机器自动建立连接。

```shell
# Master 
requirepass 123456                # 连接主服务器需要密码（可选）

# Slave
slaveof 127.0.0.1 6379            # 根据套接字自动连接主服务器
masterauth 123456                 # 主服务器密码Copy to clipboardErrorCopied
```

#### [数据同步](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=数据同步)

Slave 会定期复制 Master 的持久化文件，以保证数据同步。

![x](https://mrjokersince1997.github.io/My-Notes/%E5%85%B6%E5%AE%83/%E6%95%B0%E6%8D%AE%E5%BA%93/%E5%90%8C%E6%AD%A5%E6%95%B0%E6%8D%AE.png)

**复制缓冲区**：一个先入先出队列，用来存储 AOF 形式指令。由偏移量记录当前执行到的位置。

-   如果开启 AOF ，在创建时就会开启复制缓冲区。（偏移量记录自己执行到的位置）
-   如果使用 RDB ，在成为 Master 时会开启复制缓冲区。（Master 可以含有多个偏移量，记录不同 Slave 读取到的位置。）

*如果 Slave 过多，数据同步也会导致 Master 负载过高。因此 Slave 也可以兼职 Master，向下级 Slave 提供服务。但层次太多会导致数据延迟，慎用。*

1.  数据同步阶段应避免流量高峰期，防止影响业务正常执行；也不要多个从服务器同时同步数据。
2.  缓冲区应该足够大，否则一旦发生数据溢出会反复进行全量复制。

```shell
# Master
repl-backlog-size 2mb                 # 修改缓冲区大小（默认 1mb）

# Slave
slave-serve-stale-data no             # 不允许同步数据时读数据Copy to clipboardErrorCopied
```

#### [命令传播](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=命令传播)

服务器每次启动都会随机生成一个运行 ID（40 位 16 进制字符） ，Master 和 Slave 之间正是依靠 Master 的运行 ID 相互识别。

![x](https://mrjokersince1997.github.io/My-Notes/%E5%85%B6%E5%AE%83/%E6%95%B0%E6%8D%AE%E5%BA%93/%E5%91%BD%E4%BB%A4%E4%BC%A0%E6%92%AD.png)

------

## [Redis 潜在问题](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=redis-潜在问题)

### [缓存故障](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=缓存故障)

Redis 缓存技术常用于高并发情况下，有效减轻服务器和数据库负载。如果 Redis 出现问题导致无法均衡负载，就可能导致服务崩溃。

1.  **缓存预热**

当系统刚启动时，**由于 Redis 尚未保存数据导致无法命中**，数据库被频繁请求数据，由于过载导致数据库崩溃。

数据库崩溃后， Redis 和应用服务器无法获取数据，请求积压会进一步导致 Redis 和服务器崩溃。

1.  **缓存雪崩**

当流量激增时，**如果 Redis 大量 key 过期导致无法命中**，数据库被频繁请求数据，由于过载导致数据库崩溃。

数据库崩溃后， Redis 和应用服务器无法获取数据，请求积压会进一步导致 Redis 和服务器崩溃。

1.  **缓存击穿**

当流量激增时，**如果 Redis 某个极高热度的 key 过期导致无法命中**，数据库被频繁请求数据，由于过载导致数据库崩溃。

数据库崩溃后， Redis 和应用服务器无法获取数据，请求积压会进一步导致 Redis 和服务器崩溃。

1.  **缓存穿透**

当流量激增时，**如果 Redis 收到大量非法访问导致无法命中**，数据库被频繁请求数据，由于过载导致数据库崩溃。

数据库崩溃后， Redis 和应用服务器无法获取数据，请求积压会进一步导致 Redis 和服务器崩溃。

### [一致性问题](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=一致性问题)

如果在缓存中存储数据库数据备份，以提高查询效率，就一定会出现一致性问题，导致脏读。比如数据库中数据从 1 更新到 10 ，但缓存还未更新时读取，就会读取到 1。这个问题难以避免。

1.  缓存就是缓存，必须要设过期时间。
2.  实时性要求比较高的（比如充值），直接读数据库。
3.  数据库并发高需要分库分表。

------

## [Redis 客户端](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=redis-客户端)

我们在实际使用 Redis 时往往要通过 Redis 客户端，以便在程序中直接操作 Redis 。常使用的 Redis 客户端有 Jedis、 以及功能更为高级的 Redisson、Lettuce 等。

### [RedisTemplate 类](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=redistemplate-类)

Spring Boot 提供了 RedisTemplate 工具类直接对 Redis 进行操作，也提供了 StringRedisTemplate 类继承 RedisTemplate 类，两者方法完全一致。

-   `RedisTemplate` 类：存储数据时序列化成字节数组保存，在 Redis 中数据为字节码。读取数据时自动转化为对象。
-   `StringRedisTemplate` 类：存储数据直接以字符串形式保存，在 Redis 中数据直接可读。只适用于字符串类型的数据。

由于两种序列化方法不同导致的数据存储形式差异，两个类之间不能对另一方存储的 Redis 数据进行操作。

**常用方法**

```java
/* 直接对 key 操作 */
redisTemplate.delete("key");                                             // 删除 key
redisTemplate.delete(collection);                                        // 批量删除 key
redisTemplate.expire("key",10,TimeUnit.MINUTES);                         // 设置 key 失效时间
Long expire = redisTemplate.getExpire("key");                            // 获取 key 失效时间
boolean flag = redisTemplate.hasKey("key");                              // 判断 key 是否存在

/* 操作字符串 */
redisTemplate.opsForValue().set("key", "value");                         // 设置键值对 
String str = (String)redisTemplate.opsForValue().get("key");             // 获取键值

/* 操作 hash */
redisTemplate.opsForHash().put("HashKey", "SmallKey", "HashValue");                  // 设置键值对
redisTemplate.boundHashOps("HashKey").putAll(hashMap);                               // 批量设置键值对
String value = (String) redisTemplate.opsForHash().get("HashKey", "SmallKey");       // 获取键值
Map entries = redisTemplate.opsForHash().entries("HashKey");                         // 获取全部键值对
redisTemplate.boundHashOps("HashKey").delete("SmallKey");                            // 删除键值对
Boolean isEmpty = redisTemplate.boundHashOps("HashKey").hasKey("SmallKey");          // 是否含有键值对


redisTemplate.opsForList();　　 // 操作 list
redisTemplate.opsForSet();　　  // 操作 set
redisTemplate.opsForZSet();　 　// 操作有序 setCopy to clipboardErrorCopied
```

### [Jedis 客户端](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=jedis-客户端)

Jedis 基于 Java 实现，是 shell 程序连接 Redis 数据库最常使用的工具。提供了比较全面的 Redis 命令的支持。

-   Jedis 使用阻塞 I/O，且其方法调用都是同步的，程序流需要等到 sockets 处理完 I/O 才能执行。
-   Jedis 采取直连模式，在多个线程间共享一个 Jedis 实例线程不安全，多线程操作 Redis 必须要使用多个 Jedis 实例。

1.  **导入依赖**

Spring Boot 2.x 版本 Redis 默认导入了 lettuce，需要排除才能使用 Redis .

```xml
<!-- Redis -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
    <exclusions>
        <exclusion>
            <groupId>io.lettuce</groupId>
            <artifactId>lettuce-core</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<!-- Jedis -->
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
</dependency>Copy to clipboardErrorCopied
```

1.  **基本使用**

使用引入的 Jedis 类即可连接 Redis 数据库并进行操作。操作名取自 Redis 指令，如果出现问题则会抛出 JedisDataException。

```java
import redis.clients.jedis.Jedis;

public class JedisTest{
    @Test
    public void jedisTest (){
        // 连接 Redis
        Jedis jedis = new Jedis("127.0.0.1", 6379);    
        // 对 Redis 操作（直接使用 Redis 指令）
        try {
            jedis.set("name", "MrJoker");                  
            System.out.print(jedis.get("name"));  
        } catch(JedisDataException e) {
            System.out.print("error");  
        } finally {
            // 关闭 Redis 连接
            jedis.close();    
        }                                          
    }
}Copy to clipboardErrorCopied
```

在实际开发中，创建多个 Redis 连接会非常复杂且难以管理，Jedis 提供了 JedisPool 类作为 Redis 连接池来管理 Redis 连接。

```java
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

public class JedisTest{
    @Test
    public void jedisTest (){
        // 配置连接池
        JedisPoolConfig poolConfig = new JedisPoolConfig();
        poolConfig.setMaxIdle(50);                 // 最大空闲数
        poolConfig.setMaxTotal(100);               // 最大连接数
        poolConfig.setMaxWaitMillis(20000);        // 最大等待毫秒数   
        // 创建连接池
        JedisPool pool = new JedisPool(poolConfig, "localhost");
        // 从连接池中获取单个连接
        Jedis jedis = pool.getResource();
        // 如果需要密码
        //jedis.auth("password");                                 
    }
}Copy to clipboardErrorCopied
```

1.  **Spring Boot 集成**

Spring Boot 中，我们无需自行创建 Redis 连接，只需要在配置文件中配置好参数。

```properties
# REDIS配置
# Redis数据库索引（默认为0）
spring.redis.database=0
# Redis服务器地址
spring.redis.host=localhost
# Redis服务器连接端口
spring.redis.port=6379
# Redis服务器连接密码（默认为空）
spring.redis.password=
# 连接池最大连接数（使用负值表示没有限制）
spring.redis.pool.max-active=8
# 连接池最大阻塞等待时间（使用负值表示没有限制）
spring.redis.pool.max-wait=-1
# 连接池中的最大空闲连接
spring.redis.pool.max-idle=8
# 连接池中的最小空闲连接
spring.redis.pool.min-idle=0
# 连接超时时间（毫秒）
spring.redis.timeout=0Copy to clipboardErrorCopied
```

Spring Boot 提供默认的 RedisTemplate 工具类根据配置文件自动连接 Redis，自动加载后可以直接调用其中的方法去操作。

```java
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest()
public class ApplicationTests {

    @Autowired
    private RedisTemplate redisTemplate;

    @Test
    public void test() throws Exception {
        User user = new User();
        user.setName("我没有三颗心脏");
        user.setAge(21);
        // 调用工具类方法
        redisTemplate.opsForValue().set("user_1", user);
        User user1 = (User) redisTemplate.opsForValue().get("user_1");
        System.out.println(user1.getName());
    }
}Copy to clipboardErrorCopied
```

**RedisTemplate 类常用操作**

```java
redisTemplate.delete(key);                                   // 删除 key
redisTemplate.delete(keys);                                  // 批量删除 key
redisTemplate.expire(key,time,TimeUnit.MINUTES);             // 设置 key 失效时间
Long expire = redisTemplate.getExpire(key);                  // 获取 key 失效时间Copy to clipboardErrorCopied
```

### [Lettuce 客户端](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=lettuce-客户端)

更加高级的 Redis 客户端，用于线程安全同步，异步和响应使用，支持集群，Sentinel，管道和编码器。

-   基于 Netty 框架的事件驱动的通信层，其方法调用是异步的。不用浪费线程等待网络或磁盘 I/O。
-   Lettuce 的 API 是线程安全的，所以可以操作单个 Lettuce 连接来完成各种操作。

1.  **导入依赖**

在 spring boot 2.x 版本，为 Redis 默认导入了 Lettuce 。

```xml
<!-- Redis 默认导入 Lettuce -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>Copy to clipboardErrorCopied
```

如果 Spring Boot 版本过低，也可以自行导入 Lettuce. Redis 版本至少需要 2.6 .

```xml
<!-- 单独导入 Lettuce -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
    <groupId>io.lettuce</groupId>
    <artifactId>lettuce-core</artifactId>
    <version>5.1.8.RELEASE</version>
</dependency>Copy to clipboardErrorCopied
```

1.  **基本使用**

```java
public class LettuceTest {
    @Test
    public void testSetGet() throws Exception {
        // 注册连接信息
        RedisURI redisUri = RedisURI.builder()                    
                .withHost("localhost")
                .withPort(6379)
                .withTimeout(Duration.of(10, ChronoUnit.SECONDS))
                .build();
        // 创建 Redis 客户端
        RedisClient redisClient = RedisClient.create(redisUri);   
        // 创建连接
        StatefulRedisConnection<String, String> connection = redisClient.connect();     
        // 创建同步命令
        RedisCommands<String, String> redisCommands = connection.sync();                
        SetArgs setArgs = SetArgs.Builder.nx().ex(5);
        String result = redisCommands.set("name", "throwable", setArgs);
        Assertions.assertThat(result).isEqualToIgnoringCase("OK");
        result = redisCommands.get("name");
        Assertions.assertThat(result).isEqualTo("throwable");
        /******************** 其他操作 **********************/
        connection.close();                     // 关闭连接
        redisClient.shutdown();                 // 关闭客户端
    }
}Copy to clipboardErrorCopied
```

Lettuce 主要提供三种API：同步（sync）`RedisCommands`、异步（async）`RedisAsyncCommands`、反应式（reactive）`RedisReactiveCommands`。

1.  **Spring Boot 集成**

同样在配置文件中配置好参数。

```properties
spring.redis.host=localhost
spring.redis.port=6379
spring.redis.password=root
# 连接池最大连接数(使用负值表示没有限制) 默认为8
spring.redis.lettuce.pool.max-active=8
# 连接池最大阻塞等待时间(使用负值表示没有限制) 默认为-1
spring.redis.lettuce.pool.max-wait=-1ms
# 连接池中的最大空闲连接 默认为8
spring.redis.lettuce.pool.max-idle=8
# 连接池中的最小空闲连接 默认为 0
spring.redis.lettuce.pool.min-idle=0Copy to clipboardErrorCopied
```

我们同样可以使用 Spring Boot 提供默认的 RedisTemplate 工具类根据配置文件自动连接 Redis。但默认情况下的模板只支持 `RedisTemplate<String,String>` 存入字符串，因此我们往往需要自定义 RedisTemplate 设置序列化器，以方便操作实例对象。

```java
@Configuration
public class RedisConfig {
    @Bean
    public RedisTemplate redisTemplate(RedisConnectionFactory factory) {
        RedisTemplate<String, Serializable> redisTemplate = new RedisTemplate<>();
        // key 采用 String 的序列化方式
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        // value 采用 jackson 的序列化方式
        redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer());
        // hash 采用 String/jackson 的序列化方式
        redisTemplate.setHashKeySerializer(stringRedisSerializer);
        redisTemplate.setHashValueSerializer(jackson2JsonRedisSerializer);
        redisTemplate.setConnectionFactory(connectionFactory);
        return redisTemplate;
    }
}Copy to clipboardErrorCopied
```

完成后即可用自定义的 RedisTemplate 工具类对 Redis 进行操作。

```java
@RunWith(SpringRunner.class)
@SpringBootTest
public class RedisTest {

    @Autowired
    private RedisTemplate<String, Serializable> redisTemplate;

    @Test
    public void test() {
        String key = "user:1";
        redisTemplate.opsForValue().set(key, new User(1,"pjmike",20));
        User user = (User) redisTemplate.opsForValue().get(key);
    }
}Copy to clipboardErrorCopied
```

------

## [参考链接](https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis?id=参考链接)

-   Lettuce

    ```
      https://www.cnblogs.com/throwable/p/11601538.html
      https://juejin.im/post/6844903681087930375
    ```





# [Linux](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=linux)

------

## [基本概念](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=基本概念)

### [简单分类](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=简单分类)

1.  **Windows**： 微软公司的操作系统。
2.  **Mac**： 苹果公司的类 Unix 操作系统。
3.  **Linux**： 基于 Linux 内核的类 Unix 操作系统总称，如 Ubuntu 和 CentOS 。

*Unix 是最早的多用户、多任务操作系统。*

------

## [文件管理](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=文件管理)

在 Linux 操作系统中，所有被操作系统管理的资源，例如网络接口卡、磁盘驱动器、输入输出设备、普通文件或是目录都被看作是一个文件。

### [文件类型](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=文件类型)

**Linux 支持 5 种文件类型 ：**

| 文件类型 | 描述               | 示例                                               |
| -------- | ------------------ | -------------------------------------------------- |
| 普通文件 | 存储信息和数据     | 代码、可执行文件、图片                             |
| 目录文件 | 管理文件和子目录   | 文件夹                                             |
| 链接文件 | 不同目录下文件共享 | 对于每个符号链接，都由系统创建链接文件指向具体位置 |
| 设备文件 | 访问硬件设备       | 键盘、鼠标                                         |
| 命名管道 | 进程之间的通信     |                                                    |

### [目录结构](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=目录结构)

Linux 文件系统的结构层次鲜明，就像一棵倒立的树，最顶层是其根目录 **/root**：

**常见子目录说明：**

-   **/bin：** 存放二进制可执行文件(ls、cat、mkdir等)，常用命令一般都在这里；
-   **/etc：** 存放系统管理和配置文件；
-   **/home：** 存放所有用户文件的根目录，是用户主目录的基点，比如用户user的主目录就是/home/user，可以用~user表示；
-   **/usr ：** 用于存放系统应用程序；
-   **/opt：** 额外安装的可选应用程序包所放置的位置。一般情况下，我们可以把tomcat等都安装到这里；
-   **/proc：** 虚拟文件系统目录，是系统内存的映射。可直接访问这个目录来获取系统信息；
-   **/root：** 超级用户（系统管理员）的主目录（特权阶级^o^）；
-   **/sbin:** 存放二进制可执行文件，只有 root 才能访问。通常存放系统管理员使用的系统级别的管理命令和程序。如ifconfig等；
-   **/dev：** 用于存放设备文件；
-   **/mnt：** 系统管理员安装临时文件系统的安装点，系统提供这个目录是让用户临时挂载其他的文件系统；
-   **/boot：** 存放用于系统引导时使用的各种文件；
-   **/lib ：** 存放着和系统运行相关的库文件 ；
-   **/tmp：** 用于存放各种临时文件，是公用的临时文件存储点；
-   **/var：** 用于存放运行时需要改变数据的文件，也是某些大文件的溢出区，比方说各种服务的日志文件（系统启动日志等。）等；
-   **/lost+found：** 这个目录平时是空的，系统非正常关机而留下“无家可归”的文件（windows下叫什么.chk）就在这里。

## [基本命令](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=基本命令)

Linux命令大全：http://man.linuxde.net/

### [目录切换命令](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=目录切换命令)

-   **`cd usr`：** 切换到该目录下usr目录
-   **`cd ..（或cd../）`：** 切换到上一层目录
-   **`cd /`：** 切换到系统根目录
-   **`cd ~`：** 切换到用户主目录
-   **`cd -`：** 切换到上一个操作所在目录

### [目录操作命令](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=目录操作命令)

1.  **`mkdir 目录名称`：** 增加目录

2.  **`ls或者ll`**（ll是ls -l的别名，ll命令可以看到该目录下的所有目录和文件的详细信息）：查看目录信息

3.  **`find 目录 参数`：** 寻找目录（查）

    示例：

    -   列出当前目录及子目录下所有文件和文件夹: `find .`
    -   在`/home`目录下查找以.txt结尾的文件名:`find /home -name "*.txt"`
    -   同上，但忽略大小写: `find /home -iname "*.txt"`
    -   当前目录及子目录下查找所有以.txt和.pdf结尾的文件:`find . \( -name "*.txt" -o -name "*.pdf" \)`或`find . -name "*.txt" -o -name "*.pdf"`

4.  **`mv 目录名称 新目录名称`：** 修改目录的名称（改）

    注意：mv的语法不仅可以对目录进行重命名而且也可以对各种文件，压缩包等进行 重命名的操作。mv命令用来对文件或目录重新命名，或者将文件从一个目录移到另一个目录中。后面会介绍到mv命令的另一个用法。

5.  **`mv 目录名称 目录的新位置`：** 移动目录的位置---剪切（改）

    注意：mv语法不仅可以对目录进行剪切操作，对文件和压缩包等都可执行剪切操作。另外mv与cp的结果不同，mv好像文件“搬家”，文件个数并未增加。而cp对文件进行复制，文件个数增加了。

6.  **`cp -r 目录名称 目录拷贝的目标位置`：** 拷贝目录（改），-r代表递归拷贝

    注意：cp命令不仅可以拷贝目录还可以拷贝文件，压缩包等，拷贝文件和压缩包时不 用写-r递归

7.  **`rm [-rf] 目录`:** 删除目录（删）

    注意：rm不仅可以删除目录，也可以删除其他文件或压缩包，为了增强大家的记忆， 无论删除任何目录或文件，都直接使用`rm -rf` 目录/文件/压缩包

### [文件操作命令](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=文件操作命令)

1.  **`touch 文件名称`:** 文件的创建（增）

2.  **`cat/more/less/tail 文件名称`** 文件的查看（查）

    -   **`cat`：** 查看显示文件内容
    -   **`more`：** 可以显示百分比，回车可以向下一行， 空格可以向下一页，q可以退出查看
    -   **`less`：** 可以使用键盘上的PgUp和PgDn向上 和向下翻页，q结束查看
    -   **`tail-10` ：** 查看文件的后10行，Ctrl+C结束

    注意：命令 tail -f 文件 可以对某个文件进行动态监控，例如tomcat的日志文件， 会随着程序的运行，日志会变化，可以使用tail -f catalina-2016-11-11.log 监控 文 件的变化

3.  **`vim 文件`：** 修改文件的内容（改）

    vim编辑器是Linux中的强大组件，是vi编辑器的加强版，vim编辑器的命令和快捷方式有很多，但此处不一一阐述，大家也无需研究的很透彻，使用vim编辑修改文件的方式基本会使用就可以了。

    **在实际开发中，使用vim编辑器主要作用就是修改配置文件，下面是一般步骤：**

    vim 文件------>进入文件----->命令模式------>按i进入编辑模式----->编辑文件 ------->按Esc进入底行模式----->输入：wq/q! （输入wq代表写入内容并退出，即保存；输入q!代表强制退出不保存。）

4.  **`rm -rf 文件`：** 删除文件（删）

    同目录删除：熟记 `rm -rf` 文件 即可

### [文件压缩命令](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=文件压缩命令)

**1）打包并压缩文件：**

Linux中的打包文件一般是以.tar结尾的，压缩的命令一般是以.gz结尾的。

而一般情况下打包和压缩是一起进行的，打包并压缩后的文件的后缀名一般.tar.gz。 命令：**`tar -zcvf 打包压缩后的文件名 要打包压缩的文件`** 其中：

z：调用gzip压缩命令进行压缩

c：打包文件

v：显示运行过程

f：指定文件名

比如：假如test目录下有三个文件分别是：aaa.txt bbb.txt ccc.txt，如果我们要打包test目录并指定压缩后的压缩包名称为test.tar.gz可以使用命令：**`tar -zcvf test.tar.gz aaa.txt bbb.txt ccc.txt`或：`tar -zcvf test.tar.gz       /test/`**

**2）解压压缩包：**

命令：tar [-xvf] 压缩文件

其中：x：代表解压

示例：

1 将/test下的test.tar.gz解压到当前目录下可以使用命令：**`tar -xvf test.tar.gz`**

2 将/test下的test.tar.gz解压到根目录/usr下:**`tar -xvf test.tar.gz -C /usr`**（- C代表指定解压的位置）

### [操作权限命令](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=操作权限命令)

操作系统中每个文件都拥有特定的权限、所属用户和所属组。权限是操作系统用来限制资源访问的机制，在Linux中权限一般分为读(readable)、写(writable)和执行(excutable)，分为三组。分别对应文件的属主(owner)，属组(group)和其他用户(other)，通过这样的机制来限制哪些用户、哪些组可以对特定的文件进行什么样的操作。通过 **`ls -l`** 命令我们可以 查看某个目录下的文件或目录的权限

示例：在随意某个目录下`ls -l`

![img](https://user-gold-cdn.xitu.io/2018/7/5/1646955be781daaa?w=589&h=228&f=png&s=16360)

第一列的内容的信息解释如下：

![img](https://user-gold-cdn.xitu.io/2018/7/5/16469565b6951791?w=489&h=209&f=png&s=39791)

>   下面将详细讲解文件的类型、Linux中权限以及文件有所有者、所在组、其它组具体是什么？

**文件的类型：**

-   d： 代表目录
-   -： 代表文件
-   l： 代表软链接（可以认为是window中的快捷方式）

**Linux中权限分为以下几种：**

-   r：代表权限是可读，r也可以用数字4表示
-   w：代表权限是可写，w也可以用数字2表示
-   x：代表权限是可执行，x也可以用数字1表示

**文件和目录权限的区别：**

对文件和目录而言，读写执行表示不同的意义。

对于文件：

| 权限名称 | 可执行操作                |
| -------- | ------------------------- |
| r        | 可以使用cat查看文件的内容 |
| w        | 可以修改文件的内容        |
| x        | 可以将其运行为二进制文件  |

对于目录：

| 权限名称 | 可执行操作               |
| -------- | ------------------------ |
| r        | 可以查看目录下列表       |
| w        | 可以创建和删除目录下文件 |
| x        | 可以使用cd进入目录       |

**需要注意的是超级用户可以无视普通用户的权限，即使文件目录权限是000，依旧可以访问。** **在linux中的每个用户必须属于一个组，不能独立于组外。在linux中每个文件有所有者、所在组、其它组的概念。**

-   **所有者**

    一般为文件的创建者，谁创建了该文件，就天然的成为该文件的所有者，用ls ‐ahl命令可以看到文件的所有者 也可以使用chown 用户名 文件名来修改文件的所有者 。

-   **文件所在组**

    当某个用户创建了一个文件后，这个文件的所在组就是该用户所在的组 用ls ‐ahl命令可以看到文件的所有组 也可以使用chgrp 组名 文件名来修改文件所在的组。

-   **其它组**

    除开文件的所有者和所在组的用户外，系统的其它用户都是文件的其它组

>   我们再来看看如何修改文件/目录的权限。

**修改文件/目录的权限的命令：`chmod`**

示例：修改/test下的aaa.txt的权限为属主有全部权限，属主所在的组有读写权限， 其他用户只有读的权限

**`chmod u=rwx,g=rw,o=r aaa.txt`**

![img](https://user-gold-cdn.xitu.io/2018/7/5/164697447dc6ecac?w=525&h=246&f=png&s=12362)

上述示例还可以使用数字表示：

chmod 764 aaa.txt

**补充一个比较常用的东西:**

假如我们装了一个zookeeper，我们每次开机到要求其自动启动该怎么办？

1.  新建一个脚本zookeeper
2.  为新建的脚本zookeeper添加可执行权限，命令是:`chmod +x zookeeper`
3.  把zookeeper这个脚本添加到开机启动项里面，命令是：`chkconfig --add  zookeeper`
4.  如果想看看是否添加成功，命令是：`chkconfig --list`

### [用户管理命令](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=用户管理命令)

Linux系统是一个多用户多任务的分时操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。

用户的账号一方面可以帮助系统管理员对使用系统的用户进行跟踪，并控制他们对系统资源的访问；另一方面也可以帮助用户组织文件，并为用户提供安全性保护。

**Linux用户管理相关命令:**

-   `useradd 选项 用户名`:添加用户账号
-   `userdel 选项 用户名`:删除用户帐号
-   `usermod 选项 用户名`:修改帐号
-   `passwd 用户名`:更改或创建用户的密码
-   `passwd -S 用户名` :显示用户账号密码信息
-   `passwd -d 用户名`: 清除用户密码

useradd命令用于Linux中创建的新的系统用户。useradd可用来建立用户帐号。帐号建好之后，再用passwd设定帐号的密码．而可用userdel删除帐号。使用useradd指令所建立的帐号，实际上是保存在/etc/passwd文本文件中。

passwd命令用于设置用户的认证信息，包括用户密码、密码过期时间等。系统管理者则能用它管理系统用户的密码。只有管理者可以指定用户名称，一般用户只能变更自己的密码。

**用户组**

每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。不同Linux 系统对用户组的规定有所不同，如Linux下的用户属于与它同名的用户组，这个用户组在创建用户时同时创建。

用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对/etc/group文件的更新。

**Linux系统用户组的管理相关命令:**

-   `groupadd 选项 用户组` :增加一个新的用户组
-   `groupdel 用户组`:要删除一个已有的用户组
-   `groupmod 选项 用户组` : 修改用户组的属性

### [其他常用命令](https://mrjokersince1997.github.io/My-Notes/#/理论基础/操作系统/linux?id=其他常用命令)

-   **`pwd`：** 显示当前所在位置

-   `sudo + 其他命令`：以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。

-   **`grep 要搜索的字符串 要搜索的文件 --color`：** 搜索命令，--color代表高亮显示

-   **`ps -ef`/`ps -aux`：** 这两个命令都是查看当前系统正在运行进程，两者的区别是展示格式不同。如果想要查看特定的进程可以使用这样的格式：**`ps aux|grep redis`** （查看包括redis字符串的进程），也可使用 `pgrep redis -a`。

    注意：如果直接用ps（（Process Status））命令，会显示所有进程的状态，通常结合grep命令查看某进程的状态。

-   **`kill -9 进程的pid`：** 杀死进程（-9 表示强制终止。）

    先用ps查找进程，然后用kill杀掉

-   **网络通信命令：**

    -   查看当前系统的网卡信息：ifconfig
    -   查看与某台机器的连接情况：ping
    -   查看当前系统的端口使用：netstat -an

-   **net-tools 和 iproute2 ：** `net-tools`起源于BSD的TCP/IP工具箱，后来成为老版本Linux内核中配置网络功能的工具。但自2001年起，Linux社区已经对其停止维护。同时，一些Linux发行版比如Arch Linux和CentOS/RHEL 7则已经完全抛弃了net-tools，只支持`iproute2`。linux ip命令类似于ifconfig，但功能更强大，旨在替代它。更多详情请阅读[如何在Linux中使用IP命令和示例](https://linoxide.com/linux-command/use-ip-command-linux)

-   **`shutdown`：** `shutdown -h now`： 指定现在立即关机；`shutdown +5 "System will shutdown after 5 minutes"`：指定5分钟后关机，同时送出警告信息给登入用户。

-   **`reboot`：** **`reboot`：** 重开机。**`reboot -w`：** 做个重开机的模拟（只有纪录并不会真的重开机）。





# [消息系统之 Kafka](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=消息系统之-kafka)

------

## [什么是消息系统](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=什么是消息系统)

消息系统是专用的中间件，负责将数据从一个应用传递到另外一个应用。使应用只需关注于数据，无需关注数据在两个或多个应用间是如何传递的。

消息系统一般基于可靠的消息队列来实现，使用点对点模式或发布订阅模式。数据实时在消息系统中传递，被看作流。

------

## [为什么使用消息系统](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=为什么使用消息系统)

使用消息系统具有以下优势：

1.  **解耦**：发送方和接收方统一使用消息系统提供的接口进行通信，易修改易扩展。
2.  **持久化**：传递过程中消息存储到本地磁盘，防止处理数据失败导致数据丢失。
3.  **均衡负载**：分布式系统能根据负载灵活调整机器数量，能够处理高吞吐量和流量突增的情况。

除此之外，消息系统还可以保障：

1.  **保障有序**：数据处理的顺序不被打乱。
2.  **传递加速**：通过缓冲层控制和优化数据流经过系统的速度。
3.  **延时处理**：提供了异步处理机制，允许用户把消息放入队列，但并不立即处理它。

------

## [什么是 Kafka](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=什么是-kafka)

Kafka 作为当前最常用的消息系统之一，一般用于日志收集的离线系统。采用发布订阅模式，由通过高性能 TCP 网络协议进行通信的服务器和客户端组成。

Kafka 使用 scala 开发，由 LinkedIn 开源，目前已捐献给 Apache 基金会。

>   Kafka 官网 [http://Kafka.apache.org/](http://kafka.apache.org/)

------

## [Kafka 的优劣势](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=kafka-的优劣势)

**优势**

1.  快速持久化，可以在O(1)的系统开销下进行消息持久化；
2.  IO 吞吐量高，使用 partition 把队列流量均匀分散在多台机器上，单台服务器可以达到 10W/s 的吞吐速率。

**劣势**

1.  不进行消息重复性检查，可能导致消费重复数据或者异常情况下的数据丢失。
2.  实时性方面也存在少量延迟。

------

## [生产者/消费者模式](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=生产者消费者模式)

Kafka 是一个分布式系统，由服务器和客户端组成，之间通过高性能 TCP 网络协议进行通信。

1.  服务器以 `Cluster` 为单位向外提供服务，由多个 `Broker` 组成。Broker 作为 Kafka 的服务节点，接收外部生产的数据，在本地磁盘对数据进行备份，并提供数据给指定的接收者。
2.  客户端分为以下两种类型：
    -   `Producer`: 数据生产者，向 Kafka 集群生产数据。
    -   `Consumer`：数据消费者，读取 Kafka 集群生产者生产的消息。
3.  组件之间通过 `Zookeeper` 进行协调。ZooKeeper 会保存 Broker 和 Consumer 的元数据信息，并进行数据变更的监控。并负责选举出 Cluster 内的 Controller （其中一个 Broker），管理 Zookeeper 上的元数据信息。

------

## [数据分片模型](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=数据分片模型)

Kafka 消息按照 `Topic` 进行数据的组织和隔离，Producer/Consumer 会向指定的 Topic 收发数据。

在服务器端，Topic 则按 `Patition` 进行分区，同一个 Topic 的 Partition 会散落在多个 Broker 上，存储为一个阻塞队列，从而达到了数据分布式存储的目的。Producer 可以指定发送的 Partition 以保证消息有序到达。

![Kafka](https://mrjokersince1997.github.io/My-Notes/%E5%85%B6%E5%AE%83/%E5%88%86%E5%B8%83%E5%BC%8F/Kafka.jpeg)

每个 `Consumer Group` 都会消费一个 Topic 全量的数据，彼此之间互不干扰。同一个 Consumer Group 下的 Consumer 只能消费到其中一部分 Partition ，通过多个 Consumer 可以达到并行消费的目的。Partition 数量推荐设为 Consumer 数量的整数倍，便于均分。

![group](https://mrjokersince1997.github.io/My-Notes/%E5%85%B6%E5%AE%83/%E5%88%86%E5%B8%83%E5%BC%8F/group.jpeg)

------

## [多副本模型](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=多副本模型)

为了提高可用性，避免 Broker 损坏导致的 Partition 不可用或者丢失问题，Kafka 会对每个 Partition 提供多个副本（默认为 3 个），其中有且仅有一个作为 `Leader`，负责数据的读写。其他副本 `Follower` 将存放在不同的 Broker 上，通过接收 Leader 广播将数据同步到本地。

每个 Leader Partition 维护一个独立的 `ISR` 列表，记录当前同步的 Follower 集合：

1.  如果 Follower 不能及时同步（延迟时间高或延迟条数超过阈值）就会被暂时踢出 ISR 。
2.  如果 Leader 不可用将从 ISR 中选出一个 Follower 担任 Leader 。

------

## [消息定位](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=消息定位)

### [定位方式](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=定位方式)

kafka 用 `Offset` 表示 Message 在 Partition 中的偏移量，通过 Offset 可以唯一确定 Partition 中的一条 Message 。

1.  **生产者 Offset (current position)**

每个 Partition 只有一个，表示当前消息生产到的位置。

1.  **消费者 Offset (committed offset)**

每个 Partition 可以有多个，取决于消费的 ConsumeGroup 数量。消费者 Offset 会记录到 Kafka 自带 Topic(__consumer_offsets) 内，表示当前消费到的位置。

| 参数    | 含义                                         |
| ------- | -------------------------------------------- |
| Group   | 消费者组                                     |
| Topic   | topic 名称                                   |
| Pid     | partition ID                                 |
| Offset  | 消费者在对应分区上已消费消息数               |
| logSize | 已经写到该分区的消息数                       |
| Lag     | 还有多少消息未读取（Lag = logSize - Offset） |
| Owner   | 分区所属 broker                              |

------

## [搭建 Broker](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=搭建-broker)

在服务器搭建 Broker ，需要通过指令来完成。本文所有的操作都是在MacOS系统上使用。如果是在Linux操作系统下进行实验，使用的命令是相同的；如果是在windows操作系统下进行实验，则需要使用对应的bin/windows目录下的bat文件。

```sh
# 最大offset
bin/kafka-run-class.sh kafka.tools.GetOffsetShell --broker-list localhost:9092 --topic test_topic --time -1

# 最小offset
bin/kafka-run-class.sh kafka.tools.GetOffsetShell --broker-list localhost:9092 --topic test_topic --time -2

# offset
bin/kafka-run-class.sh kafka.tools.GetOffsetShell --broker-list localhost:9092 --topic test_topicCopy to clipboardErrorCopied
# 列出当前 kafka 所有的 topic
bin/kafka-topics.sh --zookeeper localhost:2181 --list

# 创建 topic
bin/kafka-topics.sh --create --zookeeper localhost:2181 --topic test_topic --replication-factor 1 --partitions 1 

bin/kafka-topics.sh --create --zookeeper localhost:2181 --topic test_topic --replication-factor 3 --partitions 10 --config cleanup.policy=compact

bin/kafka-topics.sh --create --zookeeper localhost:2181  --topic test_topic --partitions 1   --replication-factor 1 --config max.message.bytes=64000 --config flush.messages=1

# 查看某 topic 具体情况
bin/kafka-topics.sh --zookeeper localhost:2181 --describe --topic test_topic

# 修改 topic （分区数、特殊配置如compact属性、数据保留时间等）
bin/kafka-topics.sh --zookeeper localhost:2181 --alter --partitions 3  --config cleanup.policy=compact --topic test_topic

# 修改 topic （也可以用这种）
bin/kafka-configs.sh --alter --zookeeper localhost:2181 --entity-name test_topic --entity-type topics --add-config cleanup.policy=compact

bin/kafka-configs.sh --alter --zookeeper localhost:2181 --entity-name test_topic --entity-type topics --delete-config cleanup.policyCopy to clipboardErrorCopied
```

------

## [JAVA 生产信息](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=java-生产信息)

### [导入依赖](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=导入依赖)

```xml
<!-- 导入 0.10.2 版本 Kafka -->
<dependency>
    <groupId>org.apache.Kafka</groupId>
    <artifactId>Kafka-clients</artifactId>
    <version>0.10.2.0</version>
</dependency>Copy to clipboardErrorCopied
```

### [配置生产者](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=配置生产者)

在创建 Producer 对象前，必须配置以下属性：

| 属性                | 含义              | 备注                              |
| ------------------- | ----------------- | --------------------------------- |
| `bootstrap.servers` | Kafka broker 地址 | 如果有多个地址用逗号分割          |
| `key.serializer`    | key 的序列化类    | 必须实现 Kafka 的 Serializer 接口 |
| `value.serializer`  | value 的序列化类  | 必须实现 Kafka 的 Serializer 接口 |

开发者还可以选择配置如下属性：

| 属性                    | 含义                                                         | 备注                                                         |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request.required.acks` | 指定消息系统何时向生产者返回 ACK ： `0` 不需要、 `1` 主服务器收到后、 `-1` 所有服务器收到后。 | 选择不接收 ACK 时生产者能以最大速度发送消息，但如果 broker 没有收到消息，生产者将无感知。 |
| `producer.type`         | 同步发送消息 `sync` 或异步发送消息 `async` 。                | 异步发送消息会被服务器暂存在一个阻塞队列中，被消费者拉取时再由线程取出并组装。 |

通过读取配置，即可生成 Producer 对象。

```java
Properties KafkaProps = new Properties();
KafkaProps.put("bootstrap.servers", "broker1:port1, broker2:port2");
KafkaProps.put("key.serializer", "org.apache.Kafka.common.StringSerializer");
KafkaProps.put("value.serializer", "org.apache.Kafka.common.StringSerializer");
producer = new KafkaProducer<String, String>(KafkaProps);Copy to clipboardErrorCopied
```

### [构造消息](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=构造消息)

实例化 ProducerRecord 类得到消息对象。

创建时必须指定消息所属 Topic 和消息值 Value 。消息发往哪个 Partition 通常由负载均衡机制随机选择。若指定了 Partition 则发送到指定的 Partition，如果没有指定 Partition 但指定了 Key，则由 hasy(key) 决定。

由于 Kafka 只能保证 Partition 内消息的有序性，如果需要保证消息有序到达，Producer 必须指定消息到达的 Partition ，这些消息最终只能被 ConsumeGroup 内的一个 Consumer 消费。

```java
// 三种构造方法
ProducerRecord<String, String> record = new ProducerRecord<>(topic, value);
ProducerRecord<String, String> record = new ProducerRecord<>(topic, key, value);
ProducerRecord<String, String> record = new ProducerRecord<>(topic, partition, key, value);

// 发送给消息系统
producer.send(record);Copy to clipboardErrorCopied
```

### [接收 ACK](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=接收-ack)

发送消息后，生产者有两种方式接收消息系统返回的 ACK :

1.  通过返回的 Future 判断已经发送成功，get 方法会阻塞线程。实现同步等待。

```java
try {
    Future future = producer.send(record); 
    future.get(10000);
} catch (TimeoutException e) {
    e.printStackTrace();
}Copy to clipboardErrorCopied
```

1.  发送消息时传递一个回调对象，实现 Kafka 的 Callback 接口，通过回调判断是否发送成功。实现异步等待。

```java
producer.send(record, new ProducerCallback());

private class ProducerCallback implements Callback {
    @Override
    public void onCompletion(RecordMetadata recordMetadata, Exception e) {
        if (e != null)  e.printStackTrace();
    }
} Copy to clipboardErrorCopied
```

### [生产示例](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=生产示例)

```java
import java.util.Properties;
import org.apache.Kafka.clients.producer.KafkaProducer;
import org.apache.Kafka.clients.producer.ProducerConfig;
import org.apache.Kafka.clients.producer.ProducerRecord;
import org.apache.Kafka.common.serialization.StringSerializer;

public class Producer {
    public static String topic = "test"; 

    public static void main(String[] args) throws InterruptedException {

        Properties p = new Properties();
        p.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "192.168.23.76:9092,192.168.23.77:9092");          
        p.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);       
        p.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);    
        p.put("request.required.acks", "-1");                        
        p.put("producer.type", "async");         

        KafkaProducer<String, String> KafkaProducer = new KafkaProducer<>(p);

        try {
            for(int i = 0; i < 100; i++) {
                String msg = "Hello," + i;
                ProducerRecord<String, String> record = new ProducerRecord<String, String>(topic, msg);   
                KafkaProducer.send(record);                                  
                Thread.sleep(500);
            }
        } finally {
            KafkaProducer.close();
        }

    }
}Copy to clipboardErrorCopied
```

------

## [JAVA 消费消息](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=java-消费消息)

### [导入依赖](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=导入依赖-1)

```xml
<!-- 导入 0.10.2 版本 Kafka -->
<dependency>
    <groupId>org.apache.Kafka</groupId>
    <artifactId>Kafka-clients</artifactId>
    <version>0.10.2.0</version>
</dependency>Copy to clipboardErrorCopied
```

### [配置消费者](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=配置消费者)

在创建 Consumer 对象前，必须配置以下属性：

| 属性                 | 含义               | 备注                              |
| -------------------- | ------------------ | --------------------------------- |
| `bootstrap.servers`  | Kafka broker 地址  | 如果有多个地址用逗号分割          |
| `group.id`           | 所属消费组         |                                   |
| `key.deserializer`   | key 的反序列化类   | 必须实现 Kafka 的 Serializer 接口 |
| `value.deserializer` | value 的反序列化类 | 必须实现 Kafka 的 Serializer 接口 |

开发者还可以选择配置如下属性：

| 属性                | 含义                                                         | 备注 |
| ------------------- | ------------------------------------------------------------ | ---- |
| `fetch.max.bytes`   | consumer 端一次拉取数据的最大字节数                          |      |
| `fetch.min.bytes`   | consumer 端一次拉取数据的最大字节数，默认为 1B。             |      |
| `max.poll.records`  | consumer 端一次拉取数据的最大条数，默认为 500。              |      |
| `fetch.max.wait.ms` | 服务器最大等待时间，默认为 500ms。超过时间后返回所有可用数据。 |      |

通过读取配置，即可生成 Consumer 对象。

```java
Properties kafkaProps = new Properties();
kafkaProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "192.168.23.76:9092");                           
kafkaProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);                 
kafkaProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);                     
kafkaProps.put(ConsumerConfig.GROUP_ID_CONFIG, "duanjt_test");                                           
KafkaConsumer<String, String> KafkaConsumer = new KafkaConsumer<String, String>(kafkaProps);Copy to clipboardErrorCopied
```

### [订阅消息](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=订阅消息)

消费者可以通过以下两种方式订阅 Topic：

1.  subscribe 方法：动态调整组内各个消费者与分区的关系，实现负载均衡。
2.  assign 方法：订阅确定的主题和分区。

```java
// 订阅
consumer.subscribe(Collections.singletonList(Producer.topic));
consumer.assign(Collections.singletonList(new TopicPartition(partitionInfo.topic(), partitionInfo.partition())));
// 解除订阅
consumer.unsubscribe();Copy to clipboardErrorCopied
```

### [拉取消息](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=拉取消息)

Kafka Consumer 采用主动拉取消息系统数据 poll 的方式进行消费，可以对服务器的数据进行延迟处理。以防止消息系统向 Consumer 推送数据过多，导致 Consumer 积压而不堪重负的情况。为避免在服务器无数据的时候一直轮询， Kafka 在 poll 方法有参数允许消费者请求在长轮询中阻塞，等待数据到达。

获取到消息组 ConsumerRecords 后，内部包含多个 ConsumerRecord 对象，记录消息的 topic/partition/offset/key/value 信息。

```java
// 每隔 1s 拉取一次数据
ConsumerRecords<String, String> records = KafkaConsumer.poll(1000);
// 打印数据
records.foreach(record -> {
    System.out.println(String.format("topic:%s,offset:%d,消息:%s", record.topic(), record.offset(), record.value()));
});Copy to clipboardErrorCopied
```

### [提交 Offset](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=提交-offset)

对于消费者而言，异步模式下 committed offset 是落后于 current position 的。如果 consumer 挂掉，那么下一次消费数据又只会从 committed offset 的位置拉取数据，就会导致数据被重复消费。

消费者 offset 更新有以下两种方式：

1.  **自动提交 at-most-once**

设置 enable.auto.commit=true（默认），更新的频率根据参数 auto.commit.interval.ms 来定，定时系统会根据当时 Consumer 收到的消息数量自动更新 offset 。

这可能导致两个问题：

1.  Consumer 程序崩溃，而 Offset 尚未更新。会重复消费部分数据。
2.  Consumer 程序崩溃，但 Offset 已被更新。已收到但未消费的数据永久丢失。

1.  **手动提交 at-least-once**

设置 enable.auto.commit=false，Consumer 收到消息并消费后，再调用方法 consumer.commitSync() 手动更新 offset 。

如果消费失败，则 offset 也不会更新，此条消息会被重复消费。

### [消费示例](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列?id=消费示例)

```java
import java.util.Collections;
import java.util.Properties;
import org.apache.Kafka.clients.consumer.ConsumerConfig;
import org.apache.Kafka.clients.consumer.ConsumerRecord;
import org.apache.Kafka.clients.consumer.ConsumerRecords;
import org.apache.Kafka.clients.consumer.KafkaConsumer;
import org.apache.Kafka.common.serialization.StringDeserializer;

public class Consumer {

    public static void main(String[] args) {
        Properties p = new Properties();
        p.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "192.168.23.76:9092");                           
        p.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);                 
        p.put(ConsumerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringDeserializer.class);                     
        p.put(ConsumerConfig.GROUP_ID_CONFIG, "duanjt_test");                                           

        KafkaConsumer<String, String> KafkaConsumer = new KafkaConsumer<String, String>(p);
        KafkaConsumer.subscribe(Collections.singletonList("test"));

        while (true) {
            ConsumerRecords<String, String> records = KafkaConsumer.poll(100);
            records.foreach(record -> {
                System.out.println(String.format("topic:%s,offset:%d,消息:%s", record.topic(), record.offset(), record.value()));
            });
        }
    }
}Copy to clipboardErrorCopied
```

------

美团技术博客：https://blog.csdn.net/lizhitao/article/details/39499283

常用指令一：https://www.cnblogs.com/itwild/p/12287850.html

常用指令二：https://blog.csdn.net/camel84/article/details/81879118



# [Rocket MQ](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=rocket-mq)

https://www.jianshu.com/p/0b4b1147366f

------

## [Rocket MQ](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=rocket-mq-1)

### [基本介绍](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=基本介绍)

阿里使用 Java 开发的开源消息中间件。被广泛应用在订单，交易，充值，流计算，消息推送，日志流式处理，binglog 分发等场景。

-   **优势**：集群和 HA 实现都很简单。在保持一定的吞吐情况下，在发生宕机和其它故障时消息丢失率更低。因为无论是同步还是异步发送，生产者都会收到实时响应。适合处理高可靠性的数据。
-   **劣势**：跟 kafka 相比吞吐率稍低。

### [整体架构](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=整体架构)

![rmqa](https://mrjokersince1997.github.io/My-Notes/%E5%85%B6%E5%AE%83/%E5%88%86%E5%B8%83%E5%BC%8F/rmqa.png)

-   `Producer`: 数据生产者，向 RMQ 集群生产数据。
-   `Consumer`：数据消费者，连接 Broker 读取生产者生产的消息。
-   `Broker`: Kafka 的服务节点，负责接收 Producer 生产的数据，在本地磁盘对数据进行备份，并提供数据给 Consumer。为最大化吞吐量 Broker 往往只起到中转和存储的作用而不处理业务逻辑。
-   `NameServer`: 所有机器定时向 NameServer 上报自己的状态（超时未发送被剔除），NameServer 内部通过 5 个 HashMap 保存全局信息，提供给其它机器查询。NameServer 可以部署多个，相互独立。机器需同时向多个 NameServer 上报状态信息，从而达到热备份的目的。因为结构简单，无需使用专门的 zookeeper 注册中心来提供协调服务。

### [消费模型](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=消费模型)

![rmqa](https://mrjokersince1997.github.io/My-Notes/%E5%85%B6%E5%AE%83/%E5%88%86%E5%B8%83%E5%BC%8F/consumeModel.png)

RocketMQ 消息按照 `Topic` 和 `Tag` (可选)进行二级数据的组织和隔离，Producer/Consumer 会向指定的 Topic 甚至 Tag 收发数据。

Topic 可拥有若干个 `Queue` ，散落在不同的 Broker 上，从而达到了数据分布式存储的目的，具有水平扩展的能力。

消息均使用 message ID 唯一识别。 Rocket MQ 不对消息的格式做限制，消息 body 是二进制，需要用户完成序列化操作。用户在发送时可以设置 messageKey ，便于之后查询和跟踪。

在 RMQ 中消息的生产/消费均通过 Group （组）来完成，用来标记同一类生产/消费者，一般是集群部署。一个 Group 内可包含多个 Client （客户端）。

每个 `Consumer Group` 都会消费一个 Topic 全量的数据，彼此之间互不干扰。同一个 Consumer Group 下的 Consumer 只能消费到其中一部分 Partition ，通过多个 Consumer 可以达到并行消费的目的。Partition 数量推荐设为 Consumer 数量的整数倍，便于均分。

*Consumer 获取消息后，只有在消息消费完成时才会向服务器返回 ack 。如果没有消费完成，则一定不会 ack 消息。*

### [多副本模式](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=多副本模式)

![rmqa](https://mrjokersince1997.github.io/My-Notes/%E5%85%B6%E5%AE%83/%E5%88%86%E5%B8%83%E5%BC%8F/dleger.png)

RMQ 采用多副本模式，将集群分为多个 `dleger-group` ，每个 group 由 3 台或以上 broker 组成。默认使用同步复制同步刷盘，master 要将消息同步到 slave 才会返回成功，保证 master-slave 的 commitlog 一致性。

定时线程会检测各 broker 状态，当前 master 挂掉后，会触发自动选主保证集群的读写能力不受影响。选主基于 raft 协议，默认会选择 offset 较大的 slave 为主节点，防止消息丢失。

Broker部署相对复杂，Broker分为Master与Slave，一个Master可以对应多个Slave，但是一个Slave只能对应一个Master，Master与Slave的对应关系通过指定相同的Broker Name，不同的Broker Id来定义，BrokerId为0表示Master，非0表示Slave。Master也可以部署多个。

每个Broker与Name Server集群中的所有节点建立长连接，定时(每隔30s)注册Topic信息到所有Name Server。Name Server定时(每隔10s)扫描所有存活broker的连接，如果Name Server超过2分钟没有收到心跳，则Name Server断开与Broker的连接。

### [导入依赖](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=导入依赖)

```xml
<!-- 生产/消费客户端导入依赖-->
<dependency>
    <groupId>org.apache.rocketmq</groupId>
    <artifactId>rocketmq-client</artifactId>
    <version>4.3.1</version>
</dependency>Copy to clipboardErrorCopied
```

------

## [生产者](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=生产者)

### [生产架构](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=生产架构)

在 RMQ 中消息的生产通过 ProduceGroup （生产组）完成。用来标记同一类生产者，一般是集群部署。

一个 ProduceGroup 内可包含多个 Client （客户端）。这是一个逻辑上的概念，使用唯一标识 ClientID （ClientIP + InstanceName）来相互区分，默认为 IP 地址 + 端口号。

用户创建的 Producer 类，如果 ClientID 相同将被视为同一个 Client ，在 Broker 上共用一个内部实例处理。

### [参数配置](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=参数配置)

在 DefaultMQProducer 类内，提供了以下参数给配置。

1.  继承 ClientConfig 类，和 Consumer 类互用。

| 字段                              | 含义                     | 默认值     | 备注     |
| --------------------------------- | ------------------------ | ---------- | -------- |
| String namesrvAddr                | nameServer 地址列表      | 无         | 必填     |
| String clientIP                   | Client IP                | 本机 IP    |          |
| String instanceName               | client 名称              | 当前进程号 |          |
| int clientCallbackExecutorThreads | 客户端收到请求处理线程数 | CPU 核数   | 没什么用 |
| int pollNameServerInterval        | 轮询 nameServer 时间     | 30000(ms)  |          |
| int heartbeatBrokerInterval       | 向 broker 发送心跳时间   | 30000(ms)  |          |
| int persistConsumerOffsetInterval | 持久化消费进度间隔时间   | 5000(ms)   |          |
| String groupName                  | 组名                     |            |          |
| String token                      | broker 认证 Client 身份  |            |          |

1.  DefaultMQProducer 类独有

| 字段                                     | 含义                                           | 默认值        | 备注               |
| ---------------------------------------- | ---------------------------------------------- | ------------- | ------------------ |
| String producerGroup                     | 生产组名                                       |               | 只在事务消息中有用 |
| String createTopicKey                    | 如果未找到 topic 需要自动创建，所用 topic key  | "TBW102"      | 没什么用           |
| int defaultTopicQueueNums                | 如果未找到 topic 需要自动创建，默认 queue 数量 | 4             | 没什么用           |
| int sendMsgTimeout                       | 发送超时时间，超出后抛出异常                   | 3000(ms)      |                    |
| int compressMsgBodyOverHowmuch           | 超出大小对消息压缩                             | 4096(B)       |                    |
| int retryTimesWhenSendFailed             | 普通消息重试次数                               | 2             |                    |
| int retryTimesWhenSendAsyncFailed        | 异步消息重试次数                               | 2             |                    |
| boolean retryAnotherBrokerWhenNotStoreOK | 结果不是 SEND_OK 是否当作失败重发              | false         |                    |
| int maxMessageSize                       | 最大消息尺寸                                   | 4194304(128K) |                    |

### [生产方式](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=生产方式)

生产者生产消息通常分为同步发送、异步发送、单向发送三种方式：

1.  **同步生产 SYNC**

可靠性最强，但性能最低的发送方式。应用在发送消息后将等待返回值，再进行之后的处理。

常用于重要通知邮件、报名短信通知、营销短信系统等。

```java
public class JavaProducerExampleRMQ {

    public static void main(String[] args) throws Exception {

        // 设定生产者
        DefaultMQProducer producer = new DefaultMQProducer("produceGroupName");               // 设定生产组名
        producer.setNamesrvAddr("nameServer_1:9876;nameServer_2:9876");                       // 设定 NameServer 地址
        producer.setToken("token");                                                           // 设定 Token
        producer.start(); 

        // 消息设定
        List<Message> messageList = new ArrayList<>();
        for (int i = 0; i < 50; i++) {
            Message msg = new Message("topic" ,                                               // 设定 Topic 
                    "tag",                                                                    // 设定 Tag（可选）
                    "ORDER-20170101-XXX",                                                               // 设定 Key ，用于消息查询（可选）
                    ("Hello RocketMQ " + i).getBytes("UTF-8")                                 // 设定 Message body 
            );
            // 可以设定消息延迟发送，如超时未支付关闭订单
            // Level 从 1 - 18 依次为 1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h
            message.setDelayTimeLevel(2);                   
            messageList.add(msg);
        }

        // 发送消息并接收结果
        SendResult sendResult = producer.send(messageList);
        System.out.printf("%s%n", sendResult);
        producer.shutdown();
    }
}Copy to clipboardErrorCopied
```

1.  **异步生产 ASYNC**

如果希望获取更好的性能，可以通过异步实现高并发。应用将不再等待返回值，而是通过回调触发相对应的业务。异步生产一旦发送失败，将不支持重试。且不保证消息发送严格有序。

可用于注册成功后通知积分系统发放优惠券。

```java
public class AsyncProducer {
    public static void main(String[] args) throws Exception {
        DefaultMQProducer producer = new DefaultMQProducer("producerGroupName");
        producer.setNamesrvAddr("nameServer:9876");
        producer.setToken("token"); 
        producer.start();

        Message msg = new Message("topic"
            "tag",
            "ORDER-20170101-XXX", 
            ("Hello RocketMQ " + i).getBytes("UTF-8")
        );

        // 异步生产，发送但没有返回值，需要在回调函数上做业务处理
        producer.send(msg, new SendCallback() {
            @Override
            public void onSuccess(SendResult sendResult) {
                System.out.printf(sendResult.getMsgId());
            }
            @Override
            public void onException(Throwable e) {
                e.printStackTrace();
            }
        });

        producer.shutdown();
    }
}Copy to clipboardErrorCopied
```

1.  **一次发送 ONEWAY**

如果对于性能十分敏感，且不需要消息回复。可以发送单向消息而不返回任何结果，不能保障可靠性。

```java
public class OnewayProducer {
   public static void main(String[] args) throws Exception {

       DefaultMQProducer producer = new DefaultMQProducer("producerGroupName");
       producer.setNamesrvAddr("nameServer:9876");
       producer.start();

       for (int i = 0; i < 100; i++) {
           Message msg = new Message("topic", "tag", ("rocketMQ" + i).getBytes(RemotingHelper.DEFAULT_CHARSET));
           // 发送单向消息，没有返回值
           producer.sendOneway(msg);
       }

       producer.shutdown();

   }
}Copy to clipboardErrorCopied
```

------

## [消费者](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=消费者)

### [消费架构](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=消费架构)

在 RMQ 中消息的消费通过 ConsumeGroup （消费组）完成。Broker 要求同组的 Consumer 参数设置必须要一致，要不然会造成数据混乱。

一个 ConsumeGroup 内可包含多个 Client （客户端）。这是一个逻辑上的概念，使用唯一标识 ClientID （ClientIP + InstanceName）来相互区分，默认为 IP 地址 + 端口号。

用户创建的 Consumer 类，如果 ClientID 相同将视为同一个 Client ，在 Broker 上共用一个内部实例。

### [参数配置](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=参数配置-1)

在 DefaultMQPushConsumer 类内，提供了以下参数给配置。

1.  继承 ClientConfig 类，和 Consumer 类互用。

| 字段                              | 含义                     | 默认值     | 备注     |
| --------------------------------- | ------------------------ | ---------- | -------- |
| String namesrvAddr                | nameServer 地址列表      | 无         | 必填     |
| String clientIP                   | Client IP                | 本机 IP    |          |
| String instanceName               | client 名称              | 当前进程号 |          |
| int clientCallbackExecutorThreads | 客户端收到请求处理线程数 | CPU 核数   | 没什么用 |
| int pollNameServerInterval        | 轮询 nameServer 时间     | 30000(ms)  |          |
| int heartbeatBrokerInterval       | 向 broker 发送心跳时间   | 30000(ms)  |          |
| int persistConsumerOffsetInterval | 持久化消费进度间隔时间   | 5000(ms)   |          |
| String groupName                  | 组名                     |            |          |
| String token                      | broker 认证 Client 身份  |            |          |

1.  DefaultMQPushConsumer 类独有

| 字段 | 含义 | 默认值 | 备注 |
| ---- | ---- | ------ | ---- |
|      |      |        |      |

```java
/* DefaultMQPushConsumer 类默认配置（源码） */

public DefaultMQPushConsumer(String consumerGroup) {
    this(consumerGroup, (RPCHook)null, new AllocateMessageQueueAveragely());
}

public DefaultMQPushConsumer(String consumerGroup, RPCHook rpcHook, AllocateMessageQueueStrategy allocateMessageQueueStrategy) {
    // 消费方式： 
    // 1. CLUSTERING 集群，组内所有消费者平均消费一组消息(支持消费失败重发，从而保证消息一定被消费；但消费者配置应一致)
    // 2. BROADCASTING 广播，组内所有消费者消费同样的消息
    this.messageModel = MessageModel.CLUSTERING;           
    // 消费者开始消费的位置：
    // 1. CONSUME_FROM_LAST_OFFSET：第一次启动从队列最后位置消费
    // 2. CONSUME_FROM_FIRST_OFFSET：第一次启动从队列初始位置消费
    // 3. CONSUME_FROM_TIMESTAMP：第一次启动从指定时间点位置消费
    this.consumeFromWhere = ConsumeFromWhere.CONSUME_FROM_LAST_OFFSET;
    // 时间戳
    this.consumeTimestamp = UtilAll.timeMillisToHumanString3(System.currentTimeMillis() - 1800000L);
    // 订阅 topic & tag
    this.subscription = new HashMap();
    // 线程池
    this.consumeThreadMin = 20;
    this.consumeThreadMax = 64;
    this.adjustThreadPoolNumsThreshold = 100000L;
    // 流量控制                             
    this.consumeConcurrentlyMaxSpan = 2000;                     // 单队列并行消费最大跨度
    this.pullThresholdForQueue = 1000;                          // 单队列最大消费消息个数
    this.pullThresholdSizeForQueue = 100;
    this.pullThresholdForTopic = -1;
    this.pullThresholdSizeForTopic = -1;
    this.pullInterval = 0L;                                     // 消息拉取时间间隔
    this.consumeMessageBatchMaxSize = 1;                        // 线程从 consumer 单次拉取数量（顺序消费必须设为1）
    this.pullBatchSize = 32;                                    // consumer 从 broker 单次拉取数量
    this.postSubscriptionWhenPull = false;
    this.unitMode = false;
    this.maxReconsumeTimes = -1;
    this.suspendCurrentQueueTimeMillis = 1000L;
    this.consumeTimeout = 15L;
    // 消费组
    this.consumerGroup = consumerGroup;
    this.groupName = consumerGroup;
    // 集群模式下消息分配策略，默认平均分配
    this.allocateMessageQueueStrategy = allocateMessageQueueStrategy;
    // 实现类，负责具体功能实现
    this.defaultMQPushConsumerImpl = new DefaultMQPushConsumerImpl(this, rpcHook);
    this.asyncTrackReporter = new AsyncTrackReporter();
}Copy to clipboardErrorCopied
```

### [消费方式](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=消费方式)

RocketMQ消息订阅有两种模式，一种是 Push 模式（MQPushConsumer），即 MQServer 主动向消费端推送；另外一种是 Pull 模式（MQPullConsumer），即消费端在需要时主动到 MQServer 拉取。

但在具体实现时，Push 和 Pull 模式都是采用消费端主动拉取的方式，即 consumer 轮询从 broker 拉取消息。

1.  **Push 方式**

实现 DefaultMQPushConsumer 接口。客户端应用向 Consumer 对象注册一个 Listener 接口，Consumer 对象向 Broker 的轮询过程被封装，在收到消息后立刻回调 Listener 接口方法唤醒客户端应用来消费。对用户而言，感觉消息是被推送过来的，使用起来非常便捷。

Push 模式最大的问题是慢消费。如果消费者的速度比发送者的速度慢很多，势必造成消息在 Broker 的堆积。尤其是消息无法被 Consumer 处理时。

```java
public class JavaConsumerExampleRMQ {

    public static void main(String[] args) throws Exception {

        // 设定消费者
        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("CG-consumer_test");         // 设定消费组名
        consumer.setNamesrvAddr("nameServer:9876;nameServer_2:9876");                           // 设定 NameServer 地址
        consumer.setToken("Token");                                                             // 设定 Token
        consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);               // 设定从最开始处消费
        consumer.setConsumeMessageBatchMaxSize(10);                                             // 设定线程最大消费数量，默认为 1 （50 条消息将分给 5 个线程处理）
        consumer.subscribe("stream_rmq_topic", "test");                                         // 设定订阅的 topic 和 tag（ * 表示全部）

        // 注册消息监听，输入参数类型
        // 1. MessageListenerConcurrently 接口：不保证顺序消费
        // 2. MessageListenerOrderly 接口：保证分区内消息被顺序消费
        consumer.registerMessageListener(new MessageListenerConcurrently() {
            @Override
            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs, ConsumeConcurrentlyContext context) {
                for (MessageExt msg : msgs) {
                    try {
                        System.out.println(Thread.currentThread().getName() + " Receive New Messages: " + new String(msg.getBody()));
                    }catch (Throwable throwable){
                        System.out.println("exception happened");
                        logger.error("failed to process,msg:{}",msg,throwable);
                    }
                }
                // 返回成功，消息会被ACK
                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
            }
        });

        // 启动订阅
        consumer.start();
        System.out.printf("Consumer Started.%n");
    }
}Copy to clipboardErrorCopied
```

1.  **Pull 方式**

实现 DefaultMQPullConsumer 接口。应用主动调用 Consumer 的 pull 方法从 Broker 获取消息。需要自己维护 MessageQueue 与 Offset ，建议只有必要时使用。

Pull 方式下 Consumer 可以按需消费，不用频繁接收无法处理的消息。而 Broker 堆积消息也会相对简单，无需记录每一个要发送消息的状态，只需要维护所有消息的队列和偏移量就可以。所以对于慢消费，消息量有限且到来的速度不均匀的情况比较合适。

消息延迟与忙等是 Pull 模式最大的短板。业界较成熟的做法是从短时间开始（不会对 broker 有太大负担），然后指数级增长等待。

```java
public class PullConsumer {
    private static final Map<MessageQueue, Long> OFFSET_TABLE = new HashMap<MessageQueue, Long>();

    public static void main(String[] args) throws MQClientException {
        DefaultMQPullConsumer consumer = new DefaultMQPullConsumer("ConsumerGroupName");

        consumer.start();

        Set<MessageQueue> mqs = consumer.fetchSubscribeMessageQueues("TopicTest");
        for (MessageQueue mq : mqs) {
            System.out.println("Consume from the queue: " + mq);
            SINGLE_MQ:
            while (true) {
                try {
                    PullResult pullResult =
                        consumer.pullBlockIfNotFound(mq, null, getMessageQueueOffset(mq), 32);
                    System.out.println("Result: " + pullResult);
                    putMessageQueueOffset(mq, pullResult.getNextBeginOffset());
                    switch (pullResult.getPullStatus()) {
                        case FOUND:
                            break;
                        case NO_MATCHED_MSG:
                            break;
                        case NO_NEW_MSG:
                            break SINGLE_MQ;
                        case OFFSET_ILLEGAL:
                            break;
                        default:
                            break;
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        consumer.shutdown();
    }

    private static long getMessageQueueOffset(MessageQueue mq) {
        Long offset = OFFSET_TABLE.get(mq);
        if (offset != null)
            return offset;

        return 0;
    }

    private static void putMessageQueueOffset(MessageQueue mq, long offset) {
        OFFSET_TABLE.put(mq, offset);
    }
}Copy to clipboardErrorCopied
```

>   参考资料
>
>   https://dbaplus.cn/news-21-1123-1.html

### [执行流程](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=执行流程)

Consumer 启动后主要执行以下流程：

1.  初始化一个 RebalanceImpl 对象做 rebalance 操作：确认 consumer 负责处理哪些 queue 的消息，默认采用平均分配策略(AVG)。
2.  RebalanceImpl 到 broker 拉取指定 queue 的消息，然后把消息按照 queueId 放到对应的本地的 ProcessQueue 缓存中。拉取消息实际是调用 DefaultMQPushConsumerImpl 类下的 pullMessage 方法进行消息的拉取。
3.  ConsumeMessageService 调用 listener 处理消息，处理成功后清除掉。

```java
public synchronized void start() throws MQClientException {
        switch (this.serviceState) {
            case CREATE_JUST:
                this.serviceState = ServiceState.START_FAILED;
                //1、基本的参数检查，group name不能是DEFAULT_CONSUMER
                this.checkConfig();
                //2、将DefaultMQPushConsumer的订阅信息copy到RebalanceService中
                //如果是cluster模式，如果订阅了topic,则自动订阅%RETRY%topic
                this.copySubscription();
                //3、修改InstanceName参数值为PID
                if (this.defaultMQPushConsumer.getMessageModel() == MessageModel.CLUSTERING) {
                    this.defaultMQPushConsumer.changeInstanceNameToPID();
                }
                //4、新建一个MQClientInstance,客户端管理类，所有的i/o类操作由它管理
                //缓存客户端和topic信息，各种service
                //一个进程只有一个实例
                this.mQClientFactory = MQClientManager.getInstance().getAndCreateMQClientInstance(this.defaultMQPushConsumer, this.rpcHook);
                this.rebalanceImpl.setConsumerGroup(this.defaultMQPushConsumer.getConsumerGroup());
                this.rebalanceImpl.setMessageModel(this.defaultMQPushConsumer.getMessageModel());
                //5、Queue分配策略，默认AVG
                this.rebalanceImpl.setAllocateMessageQueueStrategy(this.defaultMQPushConsumer.getAllocateMessageQueueStrategy());
                this.rebalanceImpl.setmQClientFactory(this.mQClientFactory);
                //6、PullRequest封装实现类，封装了和broker的通信接口
                this.pullAPIWrapper = new PullAPIWrapper(
                    mQClientFactory,
                    this.defaultMQPushConsumer.getConsumerGroup(), isUnitMode());
                //7、消息被客户端过滤时会回调hook
                this.pullAPIWrapper.registerFilterMessageHook(filterMessageHookList);
                //8、consumer客户端消费offset持久化接口
                if (this.defaultMQPushConsumer.getOffsetStore() != null) {
                    this.offsetStore = this.defaultMQPushConsumer.getOffsetStore();
                } else {
                    switch (this.defaultMQPushConsumer.getMessageModel()) {
                        case BROADCASTING://广播消息本地持久化offset
                            this.offsetStore = new LocalFileOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());
                            break;
                        case CLUSTERING://集群模式持久化到broker
                            this.offsetStore = new RemoteBrokerOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());
                            break;
                        default:
                            break;
                    }
                    this.defaultMQPushConsumer.setOffsetStore(this.offsetStore);
                }
                //9、如果是本地持久化会从文件中load
                this.offsetStore.load();
                //10、消费服务，顺序和并发消息逻辑不同,接收消息并调用listener消费，处理消费结果
                if (this.getMessageListenerInner() instanceof MessageListenerOrderly) {
                    this.consumeOrderly = true;
                    this.consumeMessageService =
                        new ConsumeMessageOrderlyService(this, (MessageListenerOrderly) this.getMessageListenerInner());
                } else if (this.getMessageListenerInner() instanceof MessageListenerConcurrently) {
                    this.consumeOrderly = false;
                    this.consumeMessageService =
                        new ConsumeMessageConcurrentlyService(this, (MessageListenerConcurrently) this.getMessageListenerInner());
                }
                //11、只启动了清理等待处理消息服务
                this.consumeMessageService.start();
                //12、注册（缓存）consumer，保证CID单例
                boolean registerOK = mQClientFactory.registerConsumer(this.defaultMQPushConsumer.getConsumerGroup(), this);
                if (!registerOK) {
                    this.serviceState = ServiceState.CREATE_JUST;
                    this.consumeMessageService.shutdown();
                    throw new MQClientException("The consumer group[" + this.defaultMQPushConsumer.getConsumerGroup()
                        + "] has been created before, specify another name please." + FAQUrl.suggestTodo(FAQUrl.GROUP_NAME_DUPLICATE_URL),
                        null);
                }
                //13、启动MQClientInstance，会启动PullMessageService和RebalanceService
                mQClientFactory.start();
                log.info("the consumer [{}] start OK.", this.defaultMQPushConsumer.getConsumerGroup());
                this.serviceState = ServiceState.RUNNING;
                break;
            case RUNNING:
            case START_FAILED:
            case SHUTDOWN_ALREADY:
                ...
                ...
            default:
                break;
        }
        //14、从NameServer更新topic路由和订阅信息
        this.updateTopicSubscribeInfoWhenSubscriptionChanged();
        this.mQClientFactory.checkClientInBroker();//如果是SQL过滤，检查broker是否支持SQL过滤
        //15、发送心跳，同步consumer配置到broker,同步FilterClass到FilterServer(PushConsumer)
        this.mQClientFactory.sendHeartbeatToAllBrokerWithLock();
        //16、做一次re-balance
        this.mQClientFactory.rebalanceImmediately();
    }Copy to clipboardErrorCopied
```

>   参考资料
>
>   1.  参数：https://blog.csdn.net/a417930422/article/details/50700281
>   2.  过程：https://blog.csdn.net/meilong_whpu/article/details/77076298

## [顺序消费](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=顺序消费)

### [消费方式](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=消费方式-1)

顺序消费场景：在网购的时候，我们需要下单，那么下单需要假如有三个顺序，第一、创建订单 ，第二：订单付款，第三：订单完成。也就是这个三个环节要有顺序，这个订单才有意义。

消费端消费的时候，会分配到多个 queue 同时拉取消费。RocketMQ 只能保证同一个 queue 内顺序消费，因此想要实现顺序消费，必须实现以下过程：

1.  **生产者**

Producer 在发送消息的时候，通过选择器把应当按照顺序的消息发到同一个 Queue 中。

```java
public class JavaProducerExampleRMQ2 {

    public static void main(String[] args) throws Exception {

        DefaultMQProducer producer = new DefaultMQProducer("PG-stream_test");
        producer.setNamesrvAddr("nameServer:9876;nameServer_2:9876");    
        producer.setToken("Token");
        producer.start();

        for (int i = 0; i < 100; i++) {
            int orderId = i % 10;
            Message msg = new Message("stream_rmq_topic" ,
                    "test",
                    "20200727",
                    ("Hello RocketMQ " + i).getBytes("UTF-8")
            );
            // send 参数分别为 消息/选择器/ID
            SendResult sendResult = producer.send(msg, new MessageQueueSelector() {
                @Override
                public MessageQueue select(List<MessageQueue> mqs, Message msg, Object arg) {
                    Integer id = (Integer) arg;
                    int index = id % mqs.size();
                    return mqs.get(index);
                }
            }, orderId);
            System.out.printf("返回结果：%s%n", sendResult);
        }

        producer.shutdown();
    }
} Copy to clipboardErrorCopied
```

1.  **消费者**

消费者注册消息监听器为 MessageListenerOrderly ，即使有多个线程也保证消费端只有一个线程去消费消息。

```java
public class JavaConsumerExampleRMQ2 {

    public static void main(String[] args) throws Exception {
        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("consumeGroupName");
        consumer.setNamesrvAddr("nameServer:9876;nameServer_2:9876");   
        consumer.setToken("Token");
        // 必须设定为集群，广播本身就失去顺序保障
        consumer.setMessageModel(MessageModel.CLUSTERING);
        consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_LAST_OFFSET);
        // 必须设定为 1，保证有序不能一次性拉取多个
        consumer.setConsumeMessageBatchMaxSize(1);       
        consumer.subscribe("topic", "tag");

        // 消息监听设定，MessageListenerOrderly 对象在有消费者读取时锁死队列
        consumer.registerMessageListener(new MessageListenerOrderly() {
            @Override
            public ConsumeOrderlyStatus consumeMessage(List<MessageExt> msgs, ConsumeOrderlyContext context) {
                for (MessageExt msg : msgs) {
                    try {
                        System.out.println(Thread.currentThread().getName() + " Receive New Messages: " + new String(msg.getBody()));
                    }catch (Throwable throwable){
                        System.out.println("exception happened");
                    }
                }
                return ConsumeOrderlyStatus.SUCCESS;
            }
        });

        consumer.start();
        System.out.printf("Consumer Started.%n");
    }


}Copy to clipboardErrorCopied
```

### [上锁机制](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=上锁机制)

1.  **Broker 端**

维护全局队列锁 ConcurrentHashMap mqLockTable , 对 ConsumeQueue 上锁。

Cosumer 会周期性的发送 lock queue 的命令给 Broker。顺序消费时 consumer 会在锁定 queue 成功后才开始消费，并且默认每 20 秒就会刷新一下锁。Broker 如果发现锁超过 1 分钟没有刷新，则会自动释放。

1.  **Consumer 端**

维护当前 consumer 端的本地队列锁 MessageQueueLock messageQueueLock ，对本地缓存队列 ProcessQueue 上锁。

消息到达 consumer 后回被放进缓存队列 ProcessQueue 中。而对于顺序消息集群模式下，检查一下当前 ProcessQueue 是否仍然持有 queue 的锁，保障同一时间同一个 queue 只会有一个线程在处理。

*顺序消息处理也必须在同一个 consumer 上，且同一个 queue 的消息只能单线程处理，存在消息堆积的可能。*

### [消息处理](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=消息处理)

普通消息会有两种情况导致消息重新返还给 Broker 重新投递，一种是消息在 consumer 的缓存中等待时间过长，还有一种就是用户代码逻辑中处理失败。

顺序消息用户处理完毕后，只会返回两种结果：

-   `ConsumeOrderlyStatus.SUCCESS` （成功，准备提交）
-   `ConsumeOrderlyStatus.SUSPEND_CURRENT_QUEUE_A_MOMENT` （挂起，准备重试）

因为对于顺序消息，消费处理失败不会返回给 Broker 重新投递，而是会放到本地的缓存队列中重新处理。直到到达重试次数之后，返回并放入 Broker 中的死信队列。不再会因为长时间在缓存中等待而重投，因为重投也不会再交给其它 Consumer 处理。

成功后（默认）会调用 ProcessQueue 的 commit 方法，把获取消息时创建的临时 map 清空，然后记录当前消费的 offset。最后把进度同步给 Broker。

失败后首先检查是否超过最大重试的次数，没超过会放回到 ProcessQueue 的 msgTreeMap 中重试。如果超过了则直接放入 Broker 的死信队列，清空本地缓存。

**AutoCommit**

可以通过 ConsumeOrderlyContext 类的 setAutoCommit 方法设定是否自动提交（默认为自动提交）。

1.  当结果为失败时，autoCommit 设置为 true 或者 false 没有区别。
2.  当结果为成功时，autoCommit 设置为 true 时比设置为 false 多做了 2 个动作：
    -   删除 msgTreeMapTemp 里的消息，这是在上面消费时从 msgTreeMap 转移过来的。
    -   把拉消息的偏移量更新到本地内存中，然后定时更新到 broker。

否则随着消息的消费进行，msgTreeMapTemp 里的消息堆积越来越多，而消费消息的偏移量一直没有更新到 broker 导致 consumer 每次重新启动后都要从头开始重复消费。

------

## [事务信息](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=事务信息)

rocketMQ 从 4.1.3 版本开始支持事务信息，由 TransactionMQProducer 类提供

------

## [Broker](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=broker)

Broker收到消息后的处理线程只负责消息存储，不负责通知consumer或者其它逻辑，最大化消息吞吐量

每条消息存储时都会有一个offset，通过offset是定位到消息位置并获取消息详情的唯一办法，所有的消息查询操作最终都是转化成通过offset查询消息详情

### [消息存储](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=消息存储)

RocketMQ 的在 Broker 中的消息存储是由 consume queue 和 commit log 配合完成的。

consume queue 是消息的逻辑队列，相当于字典的目录，用来指定消息在物理文件commit log上的位置。

commit log 是存储的物理文件。

**ConsumeQueue**

Broker 在收到消息后，通过 MessageStore 将消息存储到 commitLog 中，但是 consumer 在消费消息的时候是按照 topic+queue 的维度来拉取消息的。为了方便读取，MessageStore 将 CommitLog 中消息的 offset 按照 topic+queueId 划分后，存储到不同的文件中，这就是 ConsumeQueue.

consumer来读取文件的时候，只要指定要读的topic和queueId，以及开始offset。因为每个CQUnit的大小是固定的，所以很容易就可以在文件中定位到。找到开始的位置后，只需要连续读取后面指定数量的Unit，然后根据Unit中存的CommitLog的offset就可以到CommitLog中读取消息详情了。

### [消费](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=消费)

Consumer 的时候说到消费消息分为 Pull 和 Push 两种模式，底层其实都是依靠 Pull 实现的。在 Broker 这端处理 PushConsumer 的 Pull 请求的时候，如果消息不存在，会 hold 住请求直到超时或者有新的消息到达Broker。

### [处理流程](https://mrjokersince1997.github.io/My-Notes/#/其它/分布式/消息队列2?id=处理流程)

1.  接收消息

Broker提供的消息发送的接口有：单条消息、批量消息、RETRY消息。Retry消息即consumer消费失败，要求broker重发的消息。

消息重发是有次数限制的，默认是16次。这里会检查是否已经超过最大次数，超过的话将topic设置成DeadQueue会放入死信队列。

Producer或者consumer发送消息后，Broker通过SendMessageProcessor做接收和处理。一个消息的包可以只包含了一条消息，也可以包含多条消息。

1.  存储消息

首先判断broker是否是master，并且master当前是可写的。然后判断commitLog上次flush的时候是否超时，如果超时则返回OS_PAGECACHE_BUSY的错误。最终调用commitLog.putMessage()方法保存消息。下面看下CommitLog的方法实现

每条消息存储前都会产生一个Message ID，通过这个id可以快速的得到消息存储的broker和它在CommitLog中的offset

所有的消息在存储时都是按顺序存在一起的，不会按topic和queueId做物理隔离 每条消息存储时都会有一个offset，通过offset是定位到消息位置并获取消息详情的唯一办法，所有的消息查询操作最终都是转化成通过offset查询消息详情 每条消息存储前都会产生一个Message ID，通过这个id可以快速的得到消息存储的broker和它在CommitLog中的offset Broker收到消息后的处理线程只负责消息存储，不负责通知consumer或者其它逻辑，最大化消息吞吐量 Broker返回成功不代表消息已经写入磁盘，如果对消息的可靠性要求高的话，可以将FlushDiskType设置成SYNC_FLUSH，这样每次收到消息写入文件后都会做flush操作。

https://blog.csdn.net/guolong1983811/article/details/78821926





# [vue](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue)

------

## [vue 概念](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-概念)

### [前端框架](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=前端框架)

前端开发进化过程： **原生JS 》jQuery 等类库 》Vue 等前端框架**

-   jQuery 等类库提供了已封装好的 JS 方法集合，用户在前端开发中可以直接调用（可以使用多个）。
-   Vue 等前端框架提供了完整的项目解决方案，用户在前端开发中必须按照特定框架规范进行开发（只能选择一个）。

目前主流的前端框架有 Vue 、 React 、 Angular 。

### [vue 特征](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-特征)

Vue 主要有以下两大特征：

1.  响应式数据绑定：数据发生改变，视图自动更新（开发者不再关注 dom 操作，进一步提高开发效率）。
2.  可组合视图组件：视图按照功能切分成基本单元（易维护，易重用，易测试）。

### [vue 使用](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-使用)

-   **引入外部文件(CDN)**

```html
<!-- 开发环境版本，包含命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- 生产环境版本，优化文件大小和响应速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>Copy to clipboardErrorCopied
```

-   **命令行工具(CLI)**

vue-cli 是基于 Node.js 的 vue 快捷开发工具，使用前首先要下载并安装 Node.js 开发环境。

1.  安装脚手架

```bash
$ npm install @vue/cli -g          # 全局安装安装 vue-cli 工具Copy to clipboardErrorCopied
```

>   `@vue/cli` 适用于 vue 2.X ，`vue-cli` 适用于旧版本。

1.  创建项目并使用

```bash
# 方式一
$ vue create project-name          # 直接创建项目
$ npm run dev                      # 开发环境启动项目（可配置）        
$ npm run build                    # 运行环境启动项目（可配置）     

# 方式二
$ vue ui                           # 开启图形化工具，用来创建和管理项目Copy to clipboardErrorCopied
```

------

## [vue 对象](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-对象)

vue 对象是管理 vue 的基本单元，开发者可以在 JS 代码中创建 vue 对象。

在 vue 对象中，必须通过 `el` 指定 vue 对象作用域。

```vue
<script>
    var app = new Vue({
      el: '#app',
      ...
    });
</script>Copy to clipboardErrorCopied
```

### [数据显示](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=数据显示)

在 vue 对象中，通过 `data` 存储 vue 对象中的数据。

```html
<!-- 数据显示 -->
<p v-text="message"></p>              <!-- v-text -->
<p>Word is {{ message }}</p>          <!-- 插值表达式：可以对内容进行扩展 --> 
<p v-html="message"></p>              <!-- v-html: 可以直接插入 html 元素 -->  

<!-- vue 对象 -->
<script>
    var app = new Vue({
      el: '#app',
      // 数据
      data: {
        message: 'Hello Vue',         // 数据
        data: []                      // 数组数据
      },
    });
    app.message="GoodBye Vue.";       // vue 对象数据可以被 JS 代码更新
</script>Copy to clipboardErrorCopied
```

### [方法调用](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=方法调用)

-   在 vue 对象中，通过 `methods` 定义 vue 对象中的方法。
-   在 vue 对象中，通过 `computed` 定义计算属性，重复调用时会基于缓存直接返回之前的计算结果，提高效率。

```html
<!-- 方法调用 -->
<button @click="quit"></button>       
<button @click="showLog('Hello')"></button>        

<!-- vue 对象 -->
<script>
    var app = new Vue({
      el: '#app',
      data: {
        message: ''
      },
      // 方法
      methods: {
        quit () {
          this.router.go(-1)
        },
        showLog (message) {
          this.message = message
          console.log(message)
        }
      },
      // 计算属性
      computed: {
      calc (data) {
        return this.num + data
      }
    });
</script>Copy to clipboardErrorCopied
```

-   在 vue 对象中，通过 `created` 定义方法，会在创建 vue 对象时自动调用。在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
-   在 vue 对象中，通过 `mounted` 定义方法，会在创建 vue 对象时自动调用。在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

```html
<!-- 计算结果 -->    
<p>Word is {{ calc(50) }}</p>     

<!-- vue 对象 -->
<script>
  var app = new Vue({
    el: '#app',
    data: {
      num: ''
    },
    // 创建方法
    created () {
      this.num = 100
    },
    // 计算属性

  });
</script>Copy to clipboardErrorCopied
```

### [数据监听](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=数据监听)

在 vue 对象中，通过监听器 `watch` 可以在数据发生变化时触发指定的事件。

```html
<input type="text" v-model="name"></p>

<!-- vue 对象 -->
<script>
  var app = new Vue({
    el: '#app',
    data: {
      name: 'MrJoker',
      num: {
        a: 1,
        b: 2,
        c: 3
      }
    },
    // 监听器
    watch: {
      // 监听一
      name (newName, oldName) {
        console.log(oldName + '>>' + newName)
      },
      // 监听二
      num: {
        handler(newNum, oldNum) {
          console.log('num changed');
        },
        immediate: true,                      // 创建数据时也会立即执行
        deep: true                            // 深度监听下属所有数据
      },
      // 监听三
      'num.a': {      
        handler(newName, oldName) {
          console.log('obj.a changed');
        }
      }
    } 
  })
</script>Copy to clipboardErrorCopied
```

### [数据过滤](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=数据过滤)

在 vue 对象中，通过过滤器 `filter` 可以对要显示的数据进行修饰。

```html
<!-- 使用过滤器 -->
<div>{{message | upper}}</div>                            <!-- 方式一 -->
<div v-bind:id="id | upper"></div>                        <!-- 方式二 -->
<div v-bind:id="id | upper2(2,'hello')"></div>            <!-- 使用过滤器并传递参数 -->

<!-- vue 对象 -->
<script>
  var app = new Vue({
    el: '#app',
    data: {
      name:'Vue',
      message: 'Hello Vue',
      data: []
    },
    // 过滤器
    filter:{
      upper: function(val){
        return val.charAt(0).toUpperCase() + val.slice(1)
      }
    }
  });
</script>

<!-- 全局过滤器 -->
<script>
  Vue.filter('upper2', function(val,arg1,arg2){
    console.log(arg2);
    return val.charAt(arg1).toUpperCase() + val.slice(arg1 + 1);
  })
</script>Copy to clipboardErrorCopied
```

------

## [vue 基础](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-基础)

### [指令绑定](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=指令绑定)

-   vue 使用 `v-bind` 绑定属性，表示该属性内容从 vue-data 中加载。可以用 `:` 代替。
-   vue 使用 `v-on` 绑定事件，表示该事件从 vue-methods 中加载。可以用 `@` 代替。

```html
<input type=button value="按钮" v-bind:title="message" v-on:click="show">

<!-- img 标签的 src 属性使用插值表达式绑定 -->
<img class="box" src="{{url}}" >

<!-- 判断是否使用 textColor 和 textSize 类 -->
<div class="box" :class="{'textColor':isColor, 'textSize':isSize}">Copy to clipboardErrorCopied
```

*JS 默认属性均为字符串，但 vue 绑定属性能自动识别数据为数值、布尔型、数组或对象。*

**可绑定事件**

`@click` 点击事件

**事件修饰符**

当父级元素和子级元素被同一个事件触发指令时，会先执行子级元素的指令，再执行父级元素的指令。

-   `.prevent` 阻止事件默认行为（比如超链接点击跳转，表单点击提交）。
-   `.stop` 阻止冒泡调用，不再执行父级的指令。
-   `.capture` 捕获调用，先执行父级的指令再执行子级的指令。
-   `.self` 该指令只有元素本身被点击才执行，不会被子级的指令冒泡调用。
-   `.once` 事件只触发一次，被触发后该指令无效。

### [表单输入绑定](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=表单输入绑定)

Vue 使用单向绑定机制：后台数据发生改变后，页面显示会自动同步；但如果页面中表单输入发生变化，后台数据不会发生更新。

vue 使用 `v-model` 实现双向绑定。运用于表单输入元素，输入发生变化后台数据也会实时更新。

```html
<input v-model="age" type="number">Copy to clipboardErrorCopied
```

**表单域修饰符**

-   `number` 转化为数值
-   `trim` 去掉首尾空格
-   `lazy` 鼠标离开输入元素后才更新（验证用户名是否已被使用时常用）

### [条件渲染](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=条件渲染)

对于 布尔数据

```html
<script>
  new Vue({
    el:'#app',
    data:{
      existA:false,
      existB:true,
      surface:true
    }
  });
</script>Copy to clipboardErrorCopied
<p v-if="existA">你好，我是A</p>
<p v-else-if="existB">你好，我是B</p>  
<p v-else v-show="surface">不好意思，A和B都不在</p>Copy to clipboardErrorCopied
```

-   v-if: boolean 数据判断是否绘制元素
-   v-show: boolean 数据判断是否显示 / 隐藏元素

### [列表渲染](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=列表渲染)

对于 数组数据

```html
<script>
  var vm = new Vue({
    el:'#app',
    data:{
      list:[1,2,3,4,5,6],
      user:{
        id:1,
        name:'王东浩'
      },
      userList:[
        {id:1, name:'zs1'},
        {id:2, name:'zs2'},
        {id:3, name:'zs3'}
      ]
    }
  });
</script>Copy to clipboardErrorCopied
```

-   v-for: 迭代显示列表(List)元素
    -   普通数组：`<p v-for="(item,index) in list">索引值是{{i}}，内容为{{item}}</p>`
    -   对象键值对：`<p v-for="(val,key,index) in user">键是{{key}}，内容为{{val}}</p>`

数组 (item,index) 第一个属性为内容；第二个属性为索引。 键值 (val,key,index) 第一个属性为内容；第二个属性为键名；第三个属性为索引。

```html
<!--对象数组-->
<tr :key='user.id' v-for='user in userList'>
  <td>{{user.id}}</td>
  <td>{{user.name}}</td>
</tr>Copy to clipboardErrorCopied
```

为方便管理元素，一般需要为每项绑定一个唯一的 key 属性： `<p v-for="item in user" :key="item.id">用户的名字为{{item.name}}</p>`

可以用于循环固定次数：`<p v-for="count in 10">这是第{{count}}次循环</p>`

### [数组数据更新操作(API)](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=数组数据更新操作api)

-   push
-   pop

以上操作直接对原有数组进行修改，页面也会随数据变化实时更新。

-   filter

以上操作会产生新的数组，返回值需要重新赋值去更新页面。

```
Vue.set(vm.list,1,'new data')` 或者 `Vm.$set(vm.list,1,'new data')
```

响应式修改数组元素

------

## [vue 组件](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-组件)

vue 前端框架的基本功能单元是组件，vue 对象本身也是一个组件（根组件）。

### [全局组件](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=全局组件)

`Vue.component` 用于声明全局组件（不推荐）。

在 vue 中， `template` 表示组件模板，即组件要展示的内容。**模板内只能含有一个根元素！**

```js
Vue.component("greet-bar",{  
  template:'
    <div>
      <p>大家好，我是{{name}}</p>
      <button value="改名" v-on:click="changeName"></button>
    </div>
  ',
  data:function(){
    return {name:"王东浩"}
  },
  methods:{
    changeName:function(){
      this.name="甘甜"
    }
  }
})Copy to clipboardErrorCopied
```

全局注册的组件可以直接用在任何的 Vue 根实例 (new Vue) 的模板中。

```html
<div id="app">  
  <greet-bar></greet-bar>
  <greet-bar></greet-bar>
</div>

<script>
  new Vue({
    el:"#app",
    data:{}
  });
</script>Copy to clipboardErrorCopied
```

>   html 文件元素名和属性名不区分大小写，因此不可采用驼峰形式。但在 vue 组件中可以作为驼峰形式识别，全局组件命名为 GreetBar 也能被读取。

### [局部组件](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=局部组件)

为避免用户需要一次性加载过多组件，我们可以定义局部组件，只在指定的 vue 对象中使用。

```js
var greetA = {
  data:function(){
    return {name:"王东浩"}
  ,
  template:'<p>hello {{name}}</p>'
};

var greetB = {
  data:function(){
    return {name:"陈伯言"}
  ,
  template:'<p>hello {{name}}</p>'
};Copy to clipboardErrorCopied
```

在 vue 中声明要调用的组件，就可以在组件内完成调用。

```html
<div id="app">  
  <greet-a></greet-a>  
  <greet-b></greet-b>
</div>

<script>
  new Vue({
    el:"#app",
    data:{},
    components:{
      'GreetA': GreetA,
      'GreetB': GreetB
    },
    // components: { GreetA, GreetB },  
  });
</script>Copy to clipboardErrorCopied
```

### [vue 单文件组件(.vue)](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-单文件组件vue)

在实际项目开发中，我们往往为每一个组件创建一个单独的文件来定义。之间的相互调用统一交由 router 管理。

```vue
<template>
  模板内容 html
</template>

<script>
  业务逻辑 export
</script>

<style>
  组件样式 css
</style>Copy to clipboardErrorCopied
```

------

## [组件交互](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=组件交互)

### [父组件向子组件传值](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=父组件向子组件传值)

在 vue 中， `props` 是单向数据流，用于父组件向子组件传值。

1.  在父组件中定义数据

```html
<div id="app">  
  <greet-bar :first-name='sname' last-name = '赵四'></greet-bar>
</div>

<script>
  new Vue({
    el:"#app",
    data:{sname:"尼古拉斯"}
  });
</script>Copy to clipboardErrorCopied
```

1.  子组件读取并显示

```js
Vue.component("greet-bar",{
  props::['first-name', 'last-name'],  //也可以使用驼峰式接收 firstName
  template:'
    <div>
      <p>大家好，我是{{first-name + "·" + last-name}}</p>
    </div>
  '
})Copy to clipboardErrorCopied
```

### [子组件向父组件传值](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=子组件向父组件传值)

-   **子组件定义事件**

子组件通过触发 `$emit` 事件向父组件传值。

```html
<!-- $emit 须设定事件标记和传递数值 -->
<button @click='$emit("son-data", 0.1)'>点击</button>Copy to clipboardErrorCopied
```

-   **父组件监听事件**

父组件文件中放置的子组件，可以根据事件标记监听事件并调用指定的方法处理。

```html
<!-- $event 为传递数值 -->
<router-view @son-data='handle($event)'> </router-view>
<!-- 可不含，等同于 -->
<router-view @son-data='handle'> </router-view>Copy to clipboardErrorCopied
```

父组件通过调用的方法，保存或使用子组件传来的值。

```js
handle(data){
  this.sonData = data
}Copy to clipboardErrorCopied
```

### [非父子组件传值](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=非父子组件传值)

必须创建一个 vue 对象作为事件中心居中协调，监听两个子组件事件并通过 props 传递给另一个子组件。

### [组件插槽](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=组件插槽)

在组件的 template 中添加 `<slot>默认内容可选</slot>`

可以自动读取 `<greet-bar>内容</greet-bar>` 中的内容并展示。

------

## [vue 前后端交互](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-前后端交互)

传统的原生 JS 开发和 jQuery 都使用 ajax 实现前后端交互，存在以下两个问题：

1.  仍需要处理 dom 操作，操作复杂。
2.  交互为同步操作，可能导致一致性问题。

```js
$.ajax({
  url:'http://localhost:8080',
  success:function:(data){
    ret = data;
    console.log(ret);             // 打印更新后的数据
  }
})
console.log(ret);                 // 打印数据，由于同步操作可能数据尚未更新Copy to clipboardErrorCopied
```

### [promise 对象](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=promise-对象)

在 JavaScript 最新版本标准 ES6 中， 定义了 promise 对象获取异步操作的消息。

-   resolve 函数： 将 promise 对象的状态标记为成功。
-   reject 函数：将 promise 对象的状态标记为失败。

```js
function queryData(url){
  // 创建 promise 对象
  var p = new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState != 4) return;
      if(xhr.readyState == 4 && xhr.status ==200){
        // 执行成功，执行 resolve
        resolve(xhr.responseText);
      }else{
        // 执行失败，执行 reject
        reject("服务器错误");
      }
    };
    xhr.open('get',url);
    xhr.send(null);
  });
  return p;
}Copy to clipboardErrorCopied
```

**发送请求并获取处理结果**

```js
queryData('http://localhost:8080').then(function(data){
  // 成功执行前者，返回数据为 data
  console.log(data);
},function(info){
  // 失败执行后者，返回数据为 info (可不含)
  console.log(info);
});Copy to clipboardErrorCopied
```

-   `p.then` 获取异步正常执行结果
-   `p.catch` 获取异常信息
-   `p.finally` 无论正确与否都会触发

**请求嵌套**

```js
// 执行并通过 then 获取处理结果
queryData('http://localhost:8080').then(function(data){
  console.log(data);
  return queryData('http://localhost:8080/next1');
})
// 执行第二次调用的返回数据
.then(function(data){
  console.log(data);
});Copy to clipboardErrorCopied
```

单一的 Promise 链并不能发现 async/await 的优势，但是，如果需要处理由多个 Promise 组成的 then 链的时候，优势就能体现出来了（很有意思，Promise 通过 then 链来解决多层回调的问题，现在又用 async/await 来进一步优化它）。

**批量处理**

```js
var p1 = queryData('http://localhost:8080/data1');
var p2 = queryData('http://localhost:8080/data2');
var p3 = queryData('http://localhost:8080/data3');
...
Promise.all([p1,p2,p3]).then(
  //所有任务都执行完才能返回结果
);

Promise.race([p1,p2,p3]).then(
  //最先完成者就能返回结果
);Copy to clipboardErrorCopied
```

### [axios 库](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=axios-库)

axios 是基于 promise 实现的 http 客户端。作为第三方库，比官方的 fetch 功能更为强大。

#### [引入 axios](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=引入-axios)

1.  直接引入
2.  在 vue ui 图形化工具中引入

```html
<!--引入 axios -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<!--引入 qs , 一般用于处理提交数据-->
<script src="https://cdn.bootcss.com/qs/6.7.0/qs.min.js"></script>Copy to clipboardErrorCopied
```

#### [全局配置](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=全局配置)

一般在 main.js 文件中设定，可作用于全局。

```js
axios.defaults.timeout = 3000;                       // 超时时间
axios.defaults.baseURL = "http://localhost:8080"     // 默认地址
axios.defaults.headers['mytoken'] = 'asaffdf123'     // 请求头Copy to clipboardErrorCopied
```

#### [请求响应](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=请求响应)

1.  **GET / DELETE 请求**：输入 URL 和 params 参数，参数附着在 URL 上。

```js
axios.get('/get',{
  params:{
    id:123
  }
})
.then(function(ret){
  console.log(ret.data.message)
}Copy to clipboardErrorCopied
```

1.  **POST / PUT 请求**：输入 URL 和表单数据，数据以 json 形式传递。

```js
axios.post('/post',{
  uname:'tom',
  password:123456
})
.then(ret=>{
  console.log(ret.data.message)
}Copy to clipboardErrorCopied
```

>   axios 中的 params与 data 传参的区别: params 传参，参数以 k=v&k=v 格式放置在 url 中传递。 data 传参，参数会在 form 表单中。

**对于返回响应结果 ret**

-   `ret.data` : 响应返回数据，可读取返回数据中某一具体属性。
-   `ret.headers` : 响应头信息
-   `ret.status` : 响应状态码
-   `ret.statusText` : 响应状态信息

#### [同步请求](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=同步请求)

不管是 fetch 和 axios 都是异步发送请求，这是前端界面通用做法。

使用 async/await 可以将 axios 异步请求同步化，async 函数会等待 await 返回数据后再向下执行。

通常放在 try 语句中，如果超时未获得数据则直接进入异常处理。

```js
    async getHistoryData (data) {
      try {
        let res = await axios.get('/api/survey/list/', {
          params: data
        })
        this.tableData = res.data.result
      } catch (err) {
        console.log(err)
      }
    }Copy to clipboardErrorCopied
```

表单提交自带校验方法 `validate(callback)`{ 直接返回 Promise 对象}，默认 valid 为 true 通过。

```js
// 对于 ID 为 addFormRef 的表单
this.$refs.addFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('adddevice', this.addForm)
        console.log(res)
        if (res.code !== 200) return this.$message.error(res.message)
        this.$message.success(res.message)
        this.$router.go(-1)
      })Copy to clipboardErrorCopied
```

**拦截器**

对请求或者响应进行加工处理。

1.  对请求加工处理

```js
axios.intercepter.request.use(function(config){
  // 首个函数执行拦截修改功能
  config.headers.mytoken = 'nihao';
  return config;
},function(error){
  // 第二个函数 反馈错误信息
  console.log(error);
}
)Copy to clipboardErrorCopied
```

1.  对响应结果加工处理

```js
axios.intercepter.response.use(function(res){
  var data = res.data;
  return data;
},function(error){
  console.log(error);
}
)Copy to clipboardErrorCopied
```

------

## [vue 路由](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-路由)

### [什么是路由](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=什么是路由)

路由的作用：把用户远程请求映射到相应的网络资源。可采用以下两种方式：

-   后端路由：服务器根据用户请求 URL 返回 html 页面，浏览器直接显示。（频繁刷新界面）
-   前端路由：服务器根据用户请求 URL 返回 json 数据，浏览根据用户触发事件更新 html 页面。（无法记录历史访问）

现在主流开发使用基于前端路由的 SPA 技术：整个网站只有一个界面，使用 ajax 技术局部更新界面，同时支持浏览器界面的前进后退操作。

### [vue router 插件](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-router-插件)

vue 深度集成了官方路由管理器 vue router。可选【使用用户操作历史或哈希存储历史访问】.

```html
<!--引入 vue router-->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue-router.js"></script>Copy to clipboardErrorCopied
```

开发者在专用的路由 js 文件中定义路由规则。

```js
<script>
  const User = {...};
  const Register = {...};

  // 路由规则
  const router = new VueRouter({
    routes:[
      {path:'/',redirect:'/user'}, // 重定向
      {path:'/user',component:User},
      {path:'/register',component:Register}
    ]
  })

  new Vue({
    el:'#app',
    data:{},
    Router: router
  })
</script>Copy to clipboardErrorCopied
```

在 vue 组件中，点击 router-link 组件实现页面跳转，预留的 router-view 区域将显示指定组件。

```html
<div id="app">
  <!--路由链接-->
  <router-link to="/user">User</router-link>
  <router-link to="/register">Register</router-link>
  <!--路由占位符，显示位置-->
  <router-view></router-view>
</div>Copy to clipboardErrorCopied
```

### [嵌套路由](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=嵌套路由)

```js
<script>
  const Tab1 = {...};
  const Tab2 = {...};
  const Register = {
    template:'
      <div>
        <router-link to="/register/tab1">Tab1</router-link>
        <router-link to="/register/tab2">Tab2</router-link>
        <router-view />
      </div>
    '
  }

  const router = new VueRouter({
    routes:[
      {path:'/',redirect:'/user'}, // 重定向
      {path:'/user',component:User},
      {
        path:'/register',
        component:Register,
        children:[
          {path:'/register/tab1',component:Tab1},
          {path:'/register/tab2',component:Tab2}
        ]}
    ]
  })

  new Vue({
    el:'#app',
    data:{},
    Router: router
  })
</script>Copy to clipboardErrorCopied
```

### [动态路由](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=动态路由)

根据参数自动选择路由

```js
// 动态路径
var router = new VueRouter({
  routes:[
    {path:'/user/:id',component: User}
  ]
})

// 动态显示内容
const User = {
  template:'<div>User {{$route.params.id}}</div>'
}Copy to clipboardErrorCopied
```

但 $route 的方式传参高度耦合，一般使用 props 将组件和路由解耦。还可以对路由路径进行命名。

```js
var router = new VueRouter({
  routes:[
    {path:'/user/:id',
    name:'user',  // 路由命名
    component: User, 
    props:true}  // 动态路径
  ]
})

// 动态显示内容
const User = {
  props:['id'],
  template:'<div>User {{id}}</div>'
}Copy to clipboardErrorCopied
<router-link :to="{name:'user',params:{id:3}}">User</router-link>
```

### [路由语句执行](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=路由语句执行)

#### [查询路由信息](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=查询路由信息)

在 vue 组件中，可以通过 `$route` 查询当前路由的详细信息。在组件内，即 this.$route 。

对于路由 /list/type/11?favorite=yes

```js
{
  path:'/list/type/:id',
  name:'user',  // 路由命名
  component: User, 
  props:true
}Copy to clipboardErrorCopied
```

-   `$route.path` （字符串）返回绝对路径 $route.path='/list/type/11'
-   `$route.params` （对象）动态路径键值对 $route.params.id == 11
-   `$route.query` （对象）查询参数键值对 $route.query.favorite == 'yes'
-   `$route.name` （对象）路径名，没有则为空。 $route.name == 'user'
-   `$route.router` 路由规则所属的路由器（以及其所属的组件）。
-   `$route.matched` 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。

#### [执行路由跳转](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=执行路由跳转)

在 vue 组件中，可以通过调用全局路由对象 `$router` 查的方法实现页面跳转。

push 方法和 等同，执行时跳转指定页面。

```js
this.$router.push('home')                                                /home
this.$router.push({ path: 'home' })                                      /home
this.$router.push({ path: 'home', query: { plan: '123' }})               /home?plan=123（附带查询参数）
this.$router.push({ name: 'user', params: { id: 123 }})                  /list/type/123（根据命名跳转可以附带动态路径）Copy to clipboardErrorCopied
```

go 方法根据历史记录，跳转上一个或下一个页面。

```js
this.$router.go(-1)                  返回之前的页面Copy to clipboardErrorCopied
```

replace 方法替换当前的页面，和 push 方法的不同在于不会历史记录（一般用于 404 页面）。

```js
this.$router.replace('/')Copy to clipboardErrorCopied
```

------

## [vue 项目结构](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-项目结构)

vue 项目由上述两种方式自动创建，其项目结构如下：

-   **node_module 文件夹** / 依赖包目录
-   **public 文件夹** / 静态资源，外部可直接访问
    -   **index.html** / 输出界面
    -   **favicon.ico** / 图标
-   **src 文件夹** / 组件等资源，由静态资源加载
    -   **asserts 文件夹** / css、img 文件
    -   **components 文件夹** / vue 文件
-   **plugins 文件夹** / 插件文件
-   **router 文件夹** / 路由文件
-   **App.vue** / 核心组件
-   **main.js** / 入口文件

还有一些其他配置文件，比如项目配置文件 package.json。 用户可以创建 vue.config.js 对 vue 进行自定义配置，默认覆盖原配置。

## [vue 常用插件](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=vue-常用插件)

### [组件库](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=组件库)

不用自己画组件，可以使网站快速成型。推荐直接在图形化工具内导入。

导入 element-ui 等桌面组件库，bootstrap 等移动端组件库。

### [Element UI 组件库](https://mrjokersince1997.github.io/My-Notes/#/其它/前端/vue?id=element-ui-组件库)

官网：https://element.eleme.cn/#/zh-CN/component/installation

1.  安装依赖包

```js
npm install element-ui -SCopy to clipboardErrorCopied
```

1.  `main.js` 导入资源

```js
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);Copy to clipboardErrorCopied
```

`$` 符用来绑定事件。

this.$refs.tree.getCheckedKeys());

$refs代表一个引用：tree表示组件中某个元素（ref属性设为tree）,然后我们可以通过对象调用方法。

https://www.cnblogs.com/my466879168/p/12091439.html 局部修改css 样式

在属性前加冒号，表示此属性的值是变量或表达式，如果不加，就认为是字符串，所以抛错。!!!!!!!!