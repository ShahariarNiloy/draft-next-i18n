import { Locale, i18n } from "../../i18n-config";
import { getTranslations } from "../../lib/get-translation";
import { TranslationProvider } from "../components/TranslationsProvider";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const translations = await getTranslations(params.lang);

  return (
    <html lang={params.lang}>
      <body>
        <TranslationProvider initialTranslations={translations}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
