export interface Translation {
  welcome: string;
  goodbye: string;
  english: string;
  french: string;
  home: string;
  name: string;
  demoText: string;
  jobTitle: string;
  emptyProfileImage: string;
  aboutMeHeader: string;
  contactMeText: string;
  aboutMeText: string;
  aboutMeTextSub: string;
  copyright: string;
  connectWithMe: string;
  formContactName: string;
  formContactNamePlaceholder: string;
  formContactNameError: string;
  formContactEmail: string;
  formContactEmailPlaceholder: string;
  formContactEmailError: string;
  formContactEmailErrorInvalid: string;
  formContactSubject: string;
  formContactSubjectPlaceholder: string;
  formContactSubjectError: string;
  formContactMessage: string;
  formContactMessagePlaceholder: string;
  formContactMessageErrorLength: string;
  formGenericRequiredError: string;
  formContactSubmit: string;
  mySkills: string;
}

export const translations: Record<string, Translation> = {
  en: {
    welcome: "Welcome",
    goodbye: "Goodbye",
    french: "French",
    english: "English",
    home: "Home",
    name: "Jean Sebastien Saint Rose",
    demoText: "This the start !",
    jobTitle: "Full-Stack Software Developer",
    emptyProfileImage: "No profile image",
    aboutMeHeader: "About me",
    contactMeText: "Contact me",
    aboutMeText: "Who am I? A passionate software developer based in Ottawa.",
    aboutMeTextSub:
      "Versatile Software Engineer and Full Stack Developer with proven experience in the mental health care sector and enterprise-level compliance management solutions. Proficient in HTML/CSS, TypeScript/JavaScript, and server-side logic using Express.js. Experienced in database management with Neo4j. Holds Ontario College Diplomas in Computer Programming and Computer Networking and Technical Support",
    copyright: "Jean Sebastien Saint Rose. All rights reserved.",
    connectWithMe: "Connect with me",
    formContactName: "Name",
    formContactNamePlaceholder: "Enter your fullname (e.g. John Doe)",
    formContactNameError: "Please enter your name",
    formContactEmail: "Email",
    formContactEmailPlaceholder: "Enter your email",
    formContactEmailError: "Please enter your email",
    formContactEmailErrorInvalid: "Please enter a valid email",
    formContactSubject: "Subject",
    formContactSubjectPlaceholder: "Enter your subject",
    formContactSubjectError: "Please enter your subject",
    formContactMessage: "Message",
    formContactMessagePlaceholder: "Enter your message",
    formContactMessageErrorLength:
      "Your message must be at least 10 characters long",
    formGenericRequiredError: "This field is required",
    formContactSubmit: "Submit",
    mySkills: "My Skills",
  },
  fr: {
    welcome: "Bienvenue",
    goodbye: "Au revoir",
    french: "Français",
    english: "Anglais",
    home: "Accueil",
    name: "Jean Sebastien Saint Rose",
    demoText: "C'est le début !",
    jobTitle: "Développeur logiciel Full-Stack",
    emptyProfileImage: "Pas d'image de profil",
    aboutMeHeader: "À propos de moi",
    contactMeText: "Contactez-moi",
    aboutMeText:
      "Qui suis-je? Un développeur logiciel passionné basé à Ottawa.",
    aboutMeTextSub:
      "Le candidat est un ingénieur logiciel polyvalent et un développeur Full Stack avec une expérience éprouvée dans le secteur des soins de santé mentale et des solutions de gestion de la conformité au niveau de l'entreprise. Maîtrise des langages HTML/CSS, TypeScript/JavaScript, et de la logique côté serveur avec Express.js. Expérimenté dans la gestion de bases de données avec Neo4j. Titulaire de diplômes du Collège de l'Ontario en programmation informatique, en réseautage informatique et en soutien technique",
    copyright: "Jean Sebastien Saint Rose. Tous droits réservés.",
    connectWithMe: "Connectez-vous avec moi",
    formContactName: "Nom",
    formContactNamePlaceholder: "Entrez votre nom complet (ex. John Doe)",
    formContactNameError: "Veuillez entrer votre nom",
    formContactEmail: "Email",
    formContactEmailPlaceholder: "Entrez votre email",
    formContactEmailError: "Veuillez entrer votre email",
    formContactEmailErrorInvalid: "Veuillez entrer un email valide",
    formContactSubject: "Sujet",
    formContactSubjectPlaceholder: "Entrez votre sujet",
    formContactSubjectError: "Veuillez entrer votre sujet",
    formContactMessage: "Message",
    formContactMessagePlaceholder: "Entrez votre message",
    formContactMessageErrorLength:
      "Votre message doit contenir au moins 10 caractères",
    formGenericRequiredError: "Ce champ est obligatoire",
    formContactSubmit: "Envoyer",
    mySkills: "Mes compétences",
  },
};
