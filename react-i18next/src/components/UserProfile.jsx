import React from "react";
import { withTranslation } from "../../node_modules/react-i18next";

function UserProfile({ name, email, phone, t, i18n }) {
  return (
    <div>
      <h2>{t("userProfile:title")}</h2>
      <h3>{t("userProfile:welcomeMessage", { name })}</h3>

      <h4>{t("userProfile:contact.title")}</h4>
      <p>
        {t("userProfile:contact.email")}: {email}
      </p>
      <p>
        {t("userProfile:contact.phone")}: {phone}
      </p>
    </div>
  );
}

export default withTranslation()(UserProfile);
