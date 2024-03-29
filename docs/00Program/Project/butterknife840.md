
## 相关地址:
* [ButterKnife 官网地址](http://jakewharton.github.io/butterknife/)
* [ButterKnife Github](https://github.com/JakeWharton/butterknife)
* [ButterKnife 编译时注解,解释比较详细的一个博客](http://dev.qq.com/topic/578753c0c9da73584b025875)

## 使用简介:
> 使用butterKnife之后你会感觉很舒服,结合 **Android-studio** 的插件 __Android Butterknife Zelezny__ 会更好

1. 不用再输入 <code>findViewById(ResId)</code> <code>getResource(R.[string][color].resId)</code>等代码 ,这个使用的最多
2. 简化事件响应流程

## 使用流程

> 这个流程对应的是 **com.jakewharton:butterknife:8.4.0** 的版本 ,这个库期间更新过好几次配置,我直接描述最新配置,这里一定要注意版本对应,否则会编译报错

* 1.project 中的 **build.gradle** 添加 butterknife-gradle-plugin 的8.4.0的版本,

  ```groovy
  buildscript {
    repositories {
      mavenCentral()
    }
    dependencies {
      classpath 'com.jakewharton:butterknife-gradle-plugin:8.4.0'
    }
  }
  ```

* 2.在使用的module的**build.grale**中添加plugin 依赖和库依赖

  `apply plugin: 'com.jakewharton.butterknife'`

  ```groovy
  dependencies {
    compile 'com.jakewharton:butterknife:8.4.0'
    annotationProcessor 'com.jakewharton:butterknife-compiler:8.4.0'
  }
  ```

* 3.开始在项目中使用**ButterKnife**

  ```java
      // View UI
      @BindView(R.id.login_progress)
      ProgressBar mProgressView;
      @BindView(R.id.login_form)
      ScrollView mLoginFormView;
      @BindView(R.id.email_login_form)
      LinearLayout emailLoginForm;
      @BindView(R.id.email) AutoCompleteTextView mEmailView;
      @BindView(R.id.password) EditText mPasswordView;
      @BindView(R.id.keystore) EditText mKeystore;
      
      //click event
      @OnClick(R.id.email_sign_in_button) void onEmailSignInButtonClick() {
              //TODO implement
          }
      
      @OnLongClick(R.id.email_sign_in_button) boolean onEmailSignInButtonLongClick() {
              //TODO implement
              attemptLogin();
              return true;
          }
  ```


#### 常见错误

* `NullPointException` 基本就是版本不一致导致的.

