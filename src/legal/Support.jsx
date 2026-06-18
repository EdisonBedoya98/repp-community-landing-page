import { useTranslation } from "react-i18next"
import LegalLayout from "./LegalLayout"
import { RichP, RichList } from "./RichText"

export default function Support() {
  const { t } = useTranslation("support")
  const tArr = (key) => t(key, { returnObjects: true })

  return (
    <LegalLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <RichP html={t("intro")} />

      <h2>{t("contact.heading")}</h2>
      <RichP html={t("contact.body1")} />
      <RichP html={t("contact.body2")} />

      <h2>{t("topics.heading")}</h2>
      <RichList items={tArr("topics.list")} />

      <h2>{t("privacy.heading")}</h2>
      <RichP html={t("privacy.body")} />

      <h2>{t("purchases.heading")}</h2>
      <RichP html={t("purchases.body")} />

      <h2>{t("legal.heading")}</h2>
      <RichP html={t("legal.body")} />
    </LegalLayout>
  )
}
