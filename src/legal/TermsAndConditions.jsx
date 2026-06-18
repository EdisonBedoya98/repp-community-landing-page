import { useTranslation } from "react-i18next"
import LegalLayout from "./LegalLayout"
import { RichP, RichList } from "./RichText"

export default function TermsAndConditions() {
  const { t } = useTranslation("terms")
  const tArr = (key) => t(key, { returnObjects: true })

  return (
    <LegalLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <RichP html={t("intro")} />

      <h2>{t("section1.heading")}</h2>
      <RichP html={t("section1.body")} />

      <h2>{t("section2.heading")}</h2>
      <RichP html={t("section2.body")} />
      <RichList items={tArr("section2.list")} />

      <h2>{t("section3.heading")}</h2>
      <RichP html={t("section3.body")} />

      <h2>{t("section4.heading")}</h2>
      <RichP html={t("section4.body")} />
      <RichList items={tArr("section4.list")} />

      <h2>{t("section5.heading")}</h2>
      <RichP html={t("section5.body1")} />
      <RichP html={t("section5.body2")} />

      <h2>{t("section6.heading")}</h2>
      <RichP html={t("section6.body")} />

      <h2>{t("section7.heading")}</h2>
      <RichP html={t("section7.body1")} />
      <RichP html={t("section7.body2")} />

      <h2>{t("section8.heading")}</h2>
      <RichP html={t("section8.body")} />

      <h2>{t("section9.heading")}</h2>
      <RichP html={t("section9.body")} />

      <h2>{t("section10.heading")}</h2>
      <RichP html={t("section10.body")} />

      <h2>{t("section11.heading")}</h2>
      <RichP html={t("section11.body")} />

      <h2>{t("section12.heading")}</h2>
      <RichP html={t("section12.body1")} />
      <RichP html={t("section12.body2")} />

      <h2>{t("section13.heading")}</h2>
      <RichP html={t("section13.body")} />

      <h2>{t("section14.heading")}</h2>
      <RichP html={t("section14.body")} />

      <h2>{t("section15.heading")}</h2>
      <RichP html={t("section15.body")} />

      <h2>{t("section16.heading")}</h2>
      <RichP html={t("section16.body")} />

      <h2>{t("section17.heading")}</h2>
      <RichP html={t("section17.body")} />

      <h2>{t("section18.heading")}</h2>
      <RichP html={t("section18.body")} />
    </LegalLayout>
  )
}
