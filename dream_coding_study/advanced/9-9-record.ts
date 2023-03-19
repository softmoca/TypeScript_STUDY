type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  //page를 key로 삼고 pageinfo를 value로 삼으면  된다.
  home: { title: "Home123" },
  about: { title: "About235234" },
  contact: { title: "Contact23423" },
};

type Product = "cat" | "dog";
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
