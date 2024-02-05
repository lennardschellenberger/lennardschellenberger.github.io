 const languages = {
    'de': {
        'header-description':           'Student Gesundheit und Digitalisierung',
        'nav-big-start':                'START',
        'nav-big-about':                'ÜBER',
        'nav-big-projects':             'PROJEKTE',
        'nav-big-contact':              'KONTAKT',
        'nav-small-start':              'START',
        'nav-small-about':              'ÜBER',
        'nav-small-projects':           'PROJEKTE',
        'nav-small-contact':            'KONTAKT',
        'about-header':                 'Über mich',
        'about-description':            'Ich bin Lennard Schellenberger. Student im Bereich Gesundheit und Digitalisierung.',
        'about-skills-header':          'Meine Fähigkeiten',
        'about-skills-skill-1':         'HTML und CSS',
        'about-skills-skill-2':         'Javascript',
        'about-skills-skill-3':         'C++',
        'about-skills-lang-1':          'Deutsch',
        'about-skills-lang-1-level':    'Muttersprache',
        'about-skills-lang-2':          'Englisch',
        'about-skills-lang-2-level':    'Sehr gut',
        'about-skills-lang-3':          'Niederländisch',
        'about-skills-lang-3-level':    'Gut',
        'about-skills-lang-4':          'Chinesisch',
        'about-skills-lang-4-level':    'Grundlagen',
        'download-cv':                  'Download-Lebenslauf',
        'projects-header':              'Meine Projekte',
        'projects-project-1':           'Eine Website über mich',
        'contact-header':               'Kontakt',
        'contact-form-text':            'Schreiben Sie mir eine Nachricht',
        'contact-form-send':            'SENDEN',
        'footer-imprint':               'Impressum'


    },
    'en': {
        'header-description':           'Student Health and Digitalization',
        'nav-big-start':                'START',
        'nav-big-about':                'ABOUT',
        'nav-big-projects':             'PROJECTS',
        'nav-big-contact':              'CONTACT',
        'nav-small-start':              'START',
        'nav-small-about':              'ABOUT',
        'nav-small-projects':           'PROJECTS',
        'nav-small-contact':            'CONTACT',
        'about-header':                 'About me',
        'about-description':            'I am Lennard Schellenberger. Student in the field of Health and Digitalization',
        'about-skills-header':          'My Skills',
        'about-skills-skill-1':         'HTML and CSS',
        'about-skills-skill-2':         'Javascript',
        'about-skills-skill-3':         'C++',
        'about-skills-lang-1':          'German',
        'about-skills-lang-1-level':    'Mother Tongue',
        'about-skills-lang-2':          'English',
        'about-skills-lang-2-level':    'Very good',
        'about-skills-lang-3':          'Dutch',
        'about-skills-lang-3-level':    'Good',
        'about-skills-lang-4':          'Chinese',
        'about-skills-lang-4-level':    'Basics',
        'download-cv':                  'Download CV',
        'projects-header':              'My Projects',
        'projects-project-1':           'A Website about me',
        'contact-header':               'Contact',
        'contact-form-text':            'Send me a message',
        'contact-form-send':            'SEND',
        'footer-imprint':               'Imprint'

    },
    'nl': {
        'header-description':           'Student Gezondheid en Digitalisering',
        'nav-big-start':                'START',
        'nav-big-about':                'ÜBER',
        'nav-big-projects':             'PROJEKTE',
        'nav-big-contact':              'KONTAKT',
        'nav-small-start':              'START',
        'nav-small-about':              'ÜBER',
        'nav-small-projects':           'PROJEKTE',
        'nav-small-contact':            'KONTAKT',
        'about-header':                 'Über mich',
        'about-description':            'Ich bin Lennard Schellenberger. Student im Bereich Gesundheit und Digitalisierung.',
        'about-skills-header':          'Meine Fähigkeiten',
        'about-skills-skill-1':         'HTML und CSS',
        'about-skills-skill-2':         'Javascript',
        'about-skills-skill-3':         'C++',
        'about-skills-lang-1':          'Deutsch',
        'about-skills-lang-1-level':    'Muttersprache',
        'about-skills-lang-2':          'Englisch',
        'about-skills-lang-2-level':    'Sehr gut',
        'about-skills-lang-3':          'Niederlänsisch',
        'about-skills-lang-3-level':    'Gut',
        'about-skills-lang-4':          'Chinesisch',
        'about-skills-lang-4-level':    'Grundlagen',
        'download-cv':                  'Download-Lebenslauf',
        'projects-header':              'Meine Projekte',
        'projects-project-1':           'Eine Website über mich',
        'contact-header':               'Kontakt',
        'contact-form-text':            'Schreiben Sie mir eine Nachricht',
        'contact-form-send':            'SENDEN',
        'footer-imprint':               'Impressum'

    }
 };

 function changeLanguage(lang) {
  document.getElementById('header-description').innerText =         languages[lang]['header-description'];
  document.getElementById('nav-big-start').innerText =              languages[lang]['nav-big-start'];
  document.getElementById('nav-big-about').innerText =              languages[lang]['nav-big-about'];
  document.getElementById('nav-big-projects').innerText =           languages[lang]['nav-big-projects'];
  document.getElementById('nav-big-contact').innerText =            languages[lang]['nav-big-contact'];
  document.getElementById('nav-small-start').innerText =            languages[lang]['nav-small-start'];
  document.getElementById('nav-small-about').innerText =            languages[lang]['nav-small-about'];
  document.getElementById('nav-small-projects').innerText =         languages[lang]['nav-small-projects'];
  document.getElementById('nav-small-contact').innerText =          languages[lang]['nav-small-contact'];
  document.getElementById('about-header').innerText =               languages[lang]['about-header'];
  document.getElementById('about-description').innerText =          languages[lang]['about-description'];
  document.getElementById('about-skills-header').innerText =        languages[lang]['about-skills-header'];
  document.getElementById('about-skills-skill-1').innerText =       languages[lang]['about-skills-skill-1'];
  document.getElementById('about-skills-skill-2').innerText =       languages[lang]['about-skills-skill-2'];
  document.getElementById('about-skills-skill-3').innerText =       languages[lang]['about-skills-skill-3'];
  document.getElementById('about-skills-lang-1').innerText =        languages[lang]['about-skills-lang-1'];
  document.getElementById('about-skills-lang-1-level').innerText =  languages[lang]['about-skills-lang-1-level'];
  document.getElementById('about-skills-lang-2').innerText =        languages[lang]['about-skills-lang-2'];
  document.getElementById('about-skills-lang-2-level').innerText =  languages[lang]['about-skills-lang-2-level'];
  document.getElementById('about-skills-lang-3').innerText =        languages[lang]['about-skills-lang-3'];
  document.getElementById('about-skills-lang-3-level').innerText =  languages[lang]['about-skills-lang-3-level'];
  document.getElementById('about-skills-lang-4').innerText =        languages[lang]['about-skills-lang-4'];
  document.getElementById('about-skills-lang-4-level').innerText =  languages[lang]['about-skills-lang-4-level'];
  document.getElementById('download-cv').innerText =                languages[lang]['download-cv'];
  document.getElementById('projects-header').innerText =            languages[lang]['projects-header'];
  document.getElementById('projects-project-1').innerText =        languages[lang]['projects-project-1'];
  document.getElementById('contact-header').innerText =             languages[lang]['contact-header'];
  document.getElementById('contact-form-text').innerText =          languages[lang]['contact-form-text'];
  document.getElementById('contact-form-send').innerText =          languages[lang]['contact-form-send'];
  document.getElementById('footer-imprint').innerText =             languages[lang]['footer-imprint'];
}
