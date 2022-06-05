
import i18n from "i18next";

import { translations } from "@kwj-team/react-quiz-components";

i18n
    .init({
        resources: {
            en: { translation: translations.en },
        },
        fallbackLng: "en",
        debug: true,
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    })

export default i18n;
