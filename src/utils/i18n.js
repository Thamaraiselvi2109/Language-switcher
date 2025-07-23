import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    en: {
        translation: {
            welcome: "Welcome",
            change: "Change Language",
            paragraph: `This is a simple language switcher app built using React and i18next. You can switch languages to see how content changes dynamically.

React is a popular JavaScript library for building user interfaces, and i18next is a powerful internationalization framework that helps manage multi-language content in web applications.

In today’s global environment, it is essential for websites and apps to be accessible to users in their own languages. This app demonstrates how to achieve that using i18next in a React application.

The current implementation supports three languages: English, French, and Hindi. The user can select their preferred language from the dropdown above. Once selected, the interface content updates immediately to reflect the chosen language. This is made possible by the React Context-like mechanism behind the i18next library, which provides translation capabilities across components without the need to pass props manually.

Internationalization, often abbreviated as i18n, involves not only translating text but also formatting dates, currencies, and numbers according to the locale. While this app focuses mainly on basic text translation, it lays the foundation for much more complex multilingual apps.

This language switcher app is a great starting point for developers looking to build multilingual interfaces. It keeps the translation strings separate from the component logic, promoting better code maintainability and reusability. As your app scales, you can store translations in separate JSON files, dynamically load languages, and even integrate with translation services.

Whether you are building a blog, an e-commerce store, or a dashboard, adding multilingual support improves user experience and widens your audience reach. By using libraries like i18next with React, you make your app future-ready and accessible to global users.

Keep experimenting and expanding this base. Add more components, introduce directionality for RTL (Right-to-Left) languages like Arabic, and explore advanced i18n features such as plurals and context-based translations. Happy coding!`
        }
    },

    fr: {
        translation: {
            welcome: "Bienvenue",
            change: "Changer de langue",
            paragraph: `Ceci est une application simple de changement de langue construite avec React et i18next. Vous pouvez changer de langue pour voir comment le contenu change dynamiquement.

React est une bibliothèque JavaScript populaire pour créer des interfaces utilisateur, et i18next est un puissant framework d'internationalisation qui aide à gérer le contenu multilingue dans les applications web.

Dans l’environnement mondial actuel, il est essentiel que les sites et applications soient accessibles aux utilisateurs dans leur propre langue. Cette application montre comment y parvenir en utilisant i18next dans une application React.

L’implémentation actuelle prend en charge trois langues : l’anglais, le français et l’hindi. L'utilisateur peut sélectionner sa langue préférée à partir de la liste déroulante ci-dessus. Une fois sélectionnée, l’interface se met immédiatement à jour pour refléter la langue choisie. Cela est rendu possible grâce au mécanisme de type Context de React, fourni par la bibliothèque i18next, qui permet la traduction entre les composants sans avoir à transmettre les props manuellement.

L’internationalisation, souvent abrégée en i18n, ne consiste pas seulement à traduire le texte, mais aussi à formater les dates, les devises et les nombres en fonction de la locale. Bien que cette application se concentre principalement sur la traduction de base du texte, elle constitue une base pour des applications multilingues beaucoup plus complexes.

Cette application de changement de langue est un excellent point de départ pour les développeurs souhaitant créer des interfaces multilingues. Elle garde les chaînes de traduction séparées de la logique des composants, ce qui favorise une meilleure maintenabilité et réutilisabilité du code. À mesure que votre application évolue, vous pouvez stocker les traductions dans des fichiers JSON séparés, charger les langues dynamiquement et même vous intégrer à des services de traduction.

Que vous construisiez un blog, une boutique en ligne ou un tableau de bord, l’ajout de la prise en charge multilingue améliore l’expérience utilisateur et élargit votre audience. En utilisant des bibliothèques comme i18next avec React, vous préparez votre application pour l’avenir et la rendez accessible aux utilisateurs du monde entier.

Continuez à expérimenter et à étendre cette base. Ajoutez plus de composants, introduisez la gestion des langues RTL comme l’arabe, et explorez les fonctionnalités avancées d’i18n telles que les pluriels et les traductions contextuelles. Bon codage !`
        }
    },

    hi: {
        translation: {
            welcome: "स्वागत है",
            change: "भाषा बदलें",
            paragraph: `यह एक साधारण भाषा परिवर्तक ऐप है जिसे React और i18next का उपयोग करके बनाया गया है। आप देख सकते हैं कि भाषा बदलने पर सामग्री कैसे बदलती है।

React एक लोकप्रिय JavaScript लाइब्रेरी है जिसका उपयोग यूजर इंटरफेस बनाने के लिए किया जाता है, और i18next एक शक्तिशाली अंतरराष्ट्रीयकरण टूल है जो वेब ऐप्स में बहुभाषी कंटेंट को मैनेज करने में मदद करता है।

आज के वैश्विक माहौल में, यह बहुत जरूरी है कि वेबसाइट्स और ऐप्स उपयोगकर्ताओं की अपनी भाषा में सुलभ हों। यह ऐप दिखाता है कि React एप्लिकेशन में i18next का उपयोग करके यह कैसे किया जा सकता है।

वर्तमान कार्यान्वयन तीन भाषाओं का समर्थन करता है: अंग्रेज़ी, फ़्रेंच और हिंदी। उपयोगकर्ता ऊपर दिए गए ड्रॉपडाउन से अपनी पसंदीदा भाषा चुन सकते हैं। चयन के बाद, इंटरफ़ेस तुरंत चयनित भाषा में अपडेट हो जाता है। यह i18next की पृष्ठभूमि में React Context जैसे मैकेनिज्म के कारण संभव हो पाता है, जिससे बिना props पास किए सभी कंपोनेंट्स में ट्रांसलेशन उपलब्ध होता है।

अंतरराष्ट्रीयकरण, जिसे अक्सर i18n कहा जाता है, केवल पाठ का अनुवाद नहीं है, बल्कि दिनांक, मुद्रा और संख्याओं को स्थानीय प्रारूप में रूपांतरित करना भी शामिल है। जबकि यह ऐप मुख्य रूप से टेक्स्ट ट्रांसलेशन पर केंद्रित है, यह अधिक जटिल बहुभाषी ऐप्स के लिए नींव प्रदान करता है।

यह भाषा स्विचर ऐप उन डेवलपर्स के लिए एक बेहतरीन शुरुआत है जो बहुभाषी इंटरफेस बनाना चाहते हैं। यह ट्रांसलेशन स्ट्रिंग्स को कंपोनेंट लॉजिक से अलग रखता है, जिससे कोड को मैनेज और रीयूज़ करना आसान होता है। जैसे-जैसे आपका ऐप स्केल होता है, आप अनुवादों को अलग-अलग JSON फ़ाइलों में स्टोर कर सकते हैं, भाषाएं डायनामिक रूप से लोड कर सकते हैं, और यहां तक कि अनुवाद सेवाओं के साथ एकीकरण भी कर सकते हैं।

चाहे आप ब्लॉग बना रहे हों, एक ई-कॉमर्स स्टोर या एक डैशबोर्ड, बहुभाषी समर्थन जोड़ने से यूजर एक्सपीरियंस बेहतर होता है और आपकी ऑडियंस व्यापक होती है। React के साथ i18next जैसी लाइब्रेरीज़ का उपयोग करके, आप अपने ऐप को भविष्य के लिए तैयार और ग्लोबल यूज़र्स के लिए एक्सेसिबल बना सकते हैं।

इस बेस को एक्सपैंड करने के लिए प्रयोग करते रहें। अधिक कंपोनेंट्स जोड़ें, अरबी जैसी RTL भाषाओं के लिए दिशा समर्थन जोड़ें, और प्लूरल्स और संदर्भ आधारित ट्रांसलेशन जैसी उन्नत i18n सुविधाओं का अन्वेषण करें। कोडिंग का आनंद लें!`
        }
    }
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;