// types.ts
// export type PageType = 'home' | 'homepage' | 'about' | 'zeekr' | 'riddara' | 'forthing' | 'jmev' | 'news' | 'locations' | 'contact';

// Brand structure
export interface Brand {
  name: string;
  page: PageType;
}

// Component props
export interface NavbarProps {
  onPageChange: (page: PageType) => void;
  currentPage: PageType;
}

export interface PageComponentProps {
  onBack?: () => void;
}







// types.ts
export type PageType = 
  | "home"
  | "homepage"
  | "zeekr"
  | "riddara"
  | "forthing"
  | "jmev"
  | "about"
  | "career"
  | "news"
  | "faqs"
  | "termsAndConditions"
  | "contact"
  | "locations"
  | "vision"
  | "mission";