export interface ContactData {
  link: string;
  icon: string;
  heading: string;
  subheading: string;
}

export const contactData: ContactData[] = [
  {
    link: "https://api.whatsapp.com/send?phone=5541995498741",
    icon: "phone",
    heading: "Whatsapp",
    subheading: "(41) 9 9549-8741",
  },
  {
    link: "mailto:gabrieladanieljo@gmail.com",
    icon: "mail",
    heading: "E-mail",
    subheading: "gabrieladanieljo@gmail.com",
  },
  {
    link: "https://www.linkedin.com/in/gabrielasdaniel/",
    icon: "linkedin",
    heading: "Linkedin",
    subheading: "Gabriela Daniel",
  },
  {
    link: "https://medium.com/@gabrieladanieljo",
    icon: "medium",
    heading: "Medium",
    subheading: "@gabrieladanieljo",
  },
];
