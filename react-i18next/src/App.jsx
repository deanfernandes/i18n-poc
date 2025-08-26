import "./App.css";
import { useTranslation } from "../node_modules/react-i18next";
import UserProfile from "./components/UserProfile";

const lngs = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h1>i18n-poc</h1>
      {Object.keys(lngs).map((l) => {
        return (
          <button
            key={l}
            onClick={() => i18n.changeLanguage(l)}
            disabled={i18n.resolvedLanguage === l}
          >
            {lngs[l].nativeName}
          </button>
        );
      })}
      <p>{t("Welcome to React")}</p>

      <UserProfile
        name="John"
        email="john@gmail.com"
        phone="12345678912"
      ></UserProfile>

      {/*XSS*/}
      <p>{t("userProfile:welcomeMessage", { name: "<b>XSS</b>" })}</p>
    </>
  );
}

export default App;
