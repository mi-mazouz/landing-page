const resources = {
  fr: {
    translation: {
      about: 'à propos',
      skills: 'compétence',
      experience: 'expérience',
      education: 'éducation',
      pricing: 'tarifs',
      aboutTitle: 'Je suis',
      aboutDescription: 'Développeur Full Stack',
      address: 'Adresse',
      available: 'Disponible',
      unavailable: 'Indisponible',
      skillsTitle: 'Compétence professionnelle',
      matchaSubtitle: 'Site de rencontre web et mobile',
      laliloSubtitle: 'Programme de phonétique et de compréhension',
      ouispoonSubtitle: 'Plateforme collaborative',
      opus1IoSubtitle: 'Gérez votre entreprise de service plus efficacement',
      willoSubtitle: 'Nouvelle façon de se brosser les dents'
    }
  },
  en: {
    translation: {
      about: 'about',
      skills: 'skills',
      experience: 'experience',
      education: 'education',
      pricing: 'pricing',
      aboutTitle: "I'm",
      aboutDescription: 'Developer Full Stack',
      address: 'Address',
      available: 'Available',
      unavailable: 'Unavailable',
      skillsTitle: 'Professional skills',
      matchaSubtitle: 'Dating web and mobile application',
      laliloSubtitle: 'Phonics & comprehension program',
      ouispoonSubtitle: 'Collaborative platform',
      opus1IoSubtitle: 'Manage your service business more efficiently',
      willoSubtitle: 'New way to brush your teeth'
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
