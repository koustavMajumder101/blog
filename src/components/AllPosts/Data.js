import ImageOne from "../../assets/images/content/Image-1.jpeg";
import ImageTwo from "../../assets/images/content/Image--2.jpeg";
import ImageThree from "../../assets/images/content/Image-3.jpeg";
import ImageFour from "../../assets/images/content/Image-4.jpeg";
import ImageFive from "../../assets/images/content/Image-5.jpeg";
import ImageSix from "../../assets/images/content/Image--6.jpeg";

export const data = [
  {
    title: "Apartment Therapy",
    content:
      "Apartment Therapy is a blog focusing on interior design. It was launched by Maxwell Ryan in 2001. Ryan is an interior designer who turned to blogging (using the moniker “the apartment therapist”). The blog has reached 20 million followers and has expanded into a full-scale media company.",
  },
  {
    title: "Say Yes",
    content:
      "Say Yes is an award-winning blog created by Liz Stanley in 2006. Although it could be classified as a mom blog as well, since Liz is a mother of three, it goes beyond that, offering useful advice about other topics, including food, and travel.",
  },
  {
    title: "Bright Bazaar",
    content:
      "Bright Bazaar was created by Will Taylor, a journalist-turned-interior designer in 2009. Apart from wonderful home tours and design findings, Will shares other exciting details about his lifestyle, including his outfits, recipes, and life in New York City.",
  },
  {
    title: " A Cup of Jo",
    content:
      "A weekend hobby for Joanna Goddard turned into a full-time job. She started A Cup of Jo in 2007 and became a superstar lifestyle blogger. In fact, the site is barely a personal blog anymore, as Jo now has a team of professional writers who share her interests, such as style, design, food, and motherhood.",
  },
  {
    title: "Dune",
    content:
      "A complex, multi-layered story that explores themes of politics, religion, and ecology.",
  },
  {
    title: "Foundation",
    content:
      "A saga of humanity's struggle for survival in a universe ruled by a powerful and mysterious organization.",
  },
  {
    title: "1984",
    content:
      "A dystopian novel that depicts a totalitarian regime and explores themes of surveillance and government control.",
  },
  {
    title: "Brave New World",
    content:
      "A futuristic society where genetic engineering, psychological manipulation, and a rigid social hierarchy prevail.",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    content:
      "A comedic science fiction series that follows the misadventures of an ordinary human and his alien friend.",
  },
  {
    title: "Neuromancer",
    content:
      "A cyberpunk novel that explores the boundaries between humans and artificial intelligence in a high-tech world.",
  },
];

export const imageData = [
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
  ImageSix,
];

const getRandom = () => Math.floor(Math.random() * 6) + 1;

export const generatePostData = () => {
  return data.map((post) => ({
    ...post,
    image: imageData[getRandom()],
  }));
};
