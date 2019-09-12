const resources = {
  fr: {
    translation: {
      about: 'à propos',
      skills: 'compétence',
      experience: 'expérience',
      education: 'éducation',
      pricing: 'tarifs'
    }
  },
  en: {
    translation: {
      about: 'about',
      skills: 'skills',
      experience: 'experience',
      education: 'education',
      pricing: 'pricing'
    }
  }
};

const config = {
  fallbackLng: 'en',
  debug: false,
  resources
};

function updateContent() {
  Object.keys(resources[i18next.language].translation).map(function(htmlName) {
    const elementsToTranslate = document.getElementsByName(htmlName);

    [...elementsToTranslate].map(element => {
      element.innerHTML = i18next.t(htmlName);
    });
  });
}

function changeLanguage(language) {
  i18next.changeLanguage(language);
}

i18next.use(i18nextBrowserLanguageDetector).init(config, function(error) {
  updateContent();
});

i18next.on('languageChanged', function() {
  updateContent();
});
