import { useLanguage } from "@/languages/useLanguage";
import { ref, computed, reactive } from "vue";

type profileCardSkillsType = {
  img: string;
  name: string;
  myRelationToSkill: string;
  url: string;
};

const index = ref(0);
const { langTranslations } = useLanguage();

const getIndex = () => {
  return index.value;
};

const getLastGalleryIndex = () => {
  return profileCardSkills.length - 3;
};

const changeIndex = (direction: "left" | "right") : void | 0 | 1 => {
  if (direction === "left") {
    if (index.value === 0) {
      return 
    }
    index.value--;
  } else {
    if (index.value === profileCardSkills.length - 3) {
      return 
    }
    index.value++;
  }
};

const displayedProfileCardSkills = computed(() => {
  return profileCardSkills.slice(
    index.value,
    index.value + 3
  );
});

export const useProfileCardSkills = () => {
  return {
    displayedProfileCardSkills,
    profileCardSkills,
    changeIndex,
    getIndex,
    getLastGalleryIndex
  };
};

const profileCardSkills: Array<profileCardSkillsType> = reactive([
  {
    img: "/images/vuejs.svg",
    name: "Vue 3",
    myRelationToSkill:
      "I excell at Vue 3 with Typescript witheiether the  ooptions or compostion Api. I have been using it for the past 2 years and I have built a few projects with it. ",
    url: "https://v3.vuejs.org/",
  },
  {
    img: "/images/reactjs-icon.svg",
    name: "React",
    myRelationToSkill:
      "I have been using React for the past 2 years and I have built a few projects with it. ",
    url: "https://reactjs.org/",
  },
  {
    name: "AdonisJs",
    img: "/images/adonisjs.svg",
    myRelationToSkill:
      "I have been using AdonisJs for the past 2 years and I have built a few projects with it. ",
    url: "https://adonisjs.com/",
  },
  {
    img: "/images/html5.svg",
    name: "HTML 5",
    myRelationToSkill: "Your experience with HTML 5.I have been using AdonisJs for ",
    url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    img: "/images/css.svg",
    name: "CSS",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd CSS.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    img: "/images/digital-ocean.svg",
    name: "Digital Ocean",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd Digital Ocean.",
    url: "https://www.digitalocean.com/",
  },
  {
    img: "/images/tailwindcss.svg",
    name: "Tailwind CSS",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd Tailwind CSS.",
    url: "https://tailwindcss.com/",
  },
  {
    img: "/images/jquery.svg",
    name: "JQuery",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd JQuery.",
    url: "https://jquery.com/",
  },
  {
    img: "/images/bootstrap.svg",
    name: "Bootstrap",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd Bootstrap.",
    url: "https://getbootstrap.com/",
  },
  {
    img: "/images/nodejs.svg",
    name: "Node.js",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd Node.js.",
    url: "https://nodejs.org/",
  },
  {
    img: "/images/mysql.svg",
    name: "MySQL",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd MySQL.",
    url: "https://www.mysql.com/",
  },
  {
    img: "/images/github.svg",
    name: "GitHub",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd GitHub.",
    url: "https://github.com/",
  },
  {
    img: "/images/gitlab.svg",
    name: "GitLab",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd GitLab.",
    url: "https://about.gitlab.com/",
  },
  {
    img: "/images/linux.svg",
    name: "AlmaLinux",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd AlmaLinux.",
    url: "https://almalinux.org/",
  },
  {
    img: "/images/vite.svg",
    name: "Vite",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd Vite.",
    url: "https://vitejs.dev/",
  },
  {
    img: "/images/java.svg",
    name: "Java",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd Java.",
    url: "https://www.oracle.com/java/",
  },
  {
    img: "/images/neo4j.svg",
    name: "Neo4J Cypher",
    myRelationToSkill: "Your experience with yeah doe loreum espon on o mmannafsjdhfsdkjfhsdksfkdjhfskd Cypher.",
    url: "https://neo4j.com/developer/cypher/",
  }
]);
