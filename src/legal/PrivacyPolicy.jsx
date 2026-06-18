import { useTranslation } from "react-i18next"
import LegalLayout from "./LegalLayout"
import { RichP, RichList } from "./RichText"

export default function PrivacyPolicy() {
  const { t } = useTranslation("privacy")
  const tArr = (key) => t(key, { returnObjects: true })

  return (
    <LegalLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <RichP html={t("intro1")} />
      <RichP html={t("intro2")} />

      <h2>{t("section1.heading")}</h2>

      <h3>{t("section1.sub1Heading")}</h3>
      <RichP html={t("section1.sub1Body")} />

      <h3>{t("section1.sub2Heading")}</h3>
      <RichP html={t("section1.sub2Body")} />

      <h3>{t("section1.sub3Heading")}</h3>
      <RichP html={t("section1.sub3Body")} />
      <RichList items={tArr("section1.sub3List")} />

      <h3>{t("section1.sub4Heading")}</h3>
      <RichP html={t("section1.sub4Body")} />

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
      <RichList items={tArr("section7.list")} />
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
      <RichP html={t("section12.body")} />
    </LegalLayout>
  )
}
