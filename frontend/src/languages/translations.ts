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
  aboutMeText?: string;
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
    aboutMeText: "Who am I? A passionate software developer based in Ottawa."
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
    aboutMeText: "Qui suis-je? Un développeur logiciel passionné basé à Ottawa."
  },
};
