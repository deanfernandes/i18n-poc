import i18next from "i18next";

i18next.init(
  {
    debug: true,
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          apple_zero: "No apples",
          apple_one: "An apple",
          apple_other: "{{count}} Apples",
          apple: "Apple",
          message: "hello {{name}}",
        },
        login: {
          button: {
            login: "Login",
          },
          register: "Need to register an account? Click here",
          error: "Error logging in ({{error}}). try again later.",
        },
        products: {
          light_weight: "light",
          light_color: "light",
        },
        dashboard: {
          analytics: {
            charts: {
              visits: "Website Visits",
            },
          },
        },
      },
      pt: {
        translation: {
          apple_zero: "Sem maçãs",
          apple_one: "Uma maçã",
          apple_other: "{{count}} Maçãs",
          apple: "Maçã",
          message: "olá {{name}}",
        },
        login: {
          button: {
            login: "Entrar",
          },
          register: "Precisa registrar uma conta? Clique aqui",
          error: "Erro ao fazer login ({{error}}). Tente novamente mais tarde.",
        },
        products: {
          light_weight: "leve",
          light_color: "luz",
        },
        dashboard: {
          analytics: {
            charts: {
              visits: "Visitas ao site",
            },
          },
        },
      },
    },
  },
  (err, _) => {
    if (err) return console.log("error init i18next: ", err);
  }
);

console.log(i18next.t("button.login", { ns: "login" }));
console.log(i18next.t("register", { ns: "login" }));
console.log(
  i18next.t("error", { ns: "login", error: "Username already taken" })
);
console.log(i18next.t("products:light", { context: "color" }));
console.log(i18next.t("analytics.charts.visits", { ns: "dashboard" }));

i18next.changeLanguage("pt");
console.log(i18next.t("login:button.login"));
console.log(i18next.t("login:register"));
console.log(i18next.t("login:error", { error: "Username already taken" }));
console.log(i18next.t("products:light", { context: "color" }));
console.log(i18next.t("dashboard:analytics.charts.visits"));

console.log(i18next.t("apple", { lng: "de" }));

//XSS
console.log(i18next.t("message", { name: "<b>XSS</b>" }));
