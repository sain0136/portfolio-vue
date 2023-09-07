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
  },
};
