export default {
  data() {
    return {
      remeberAccount: true,
      loading: false,
      result: { message: "" },
      loginForm: {
        account: localStorage.getItem(this.GlobalVars.userLocal)
          ? localStorage.getItem(this.GlobalVars.userLocal)
          : "",
        password: "",
        username: "欧阳姗姗",
        captchCode: ""
      },
      rules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    initLayout() {
      document.querySelector(".loginBody").style.left =
        (document.querySelector(".logingPanel").offsetWidth - 840) / 2 + "px";
      document.querySelector(".loginBody").style.top =
        (document.querySelector(".logingPanel").offsetHeight - 450) / 2 + "px";
      document.querySelector(".footerBody").style.right =
        (document.querySelector(".logingPanel").offsetWidth - 840) / 2 + "px";
    },
    login() {
      this.result.message = "";
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          this.loading = true;
          if (
            this.loginForm.account !== "ehstest" ||
            this.loginForm.account !== this.loginForm.password
          ) {
            this.result.message = "用户名密码错误！";
            this.loading = false;
            return;
          }
          if (this.remeberAccount) {
            localStorage.setItem(
              this.GlobalVars.userLocal,
              this.loginForm.account
            );
          } else {
            localStorage.removeItem(this.GlobalVars.userLocal);
          }
          var sessionInfo ={}
          sessionStorage.setItem(
            this.GlobalVars.userToken,
            this.loginForm.account
          );
          this.$router.push({ name: "home" });
        }
      });
    }
  },
  mounted() {
    this.initLayout();
    window.onresize = () => {
      return (() => {
        this.initLayout();
      })();
    };
  }
};
