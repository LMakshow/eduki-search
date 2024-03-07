export type EdukiElasticRequest = {
  limit?: number;
  p?: number;
  q?: string;
  world: string;
};

export interface Items {
  materials: Material[];
  suggestion?: any;
}
export interface Material {
  title: string;
  description: string;
  bundleMaterialsPrice: number;
  coverPath: string;
  isInYellowList: boolean;
  distributionType: number;
  sources: string;
  bundleListTotal: string;
  bundleMaterials: BundleMaterial[];
  isBundleInteractive: boolean;
  isActive: boolean;
  titleUpdatedByHuman: boolean;
  materialFiles: MaterialFile[];
  createdAt: string;
  firstPreviewImage: FirstPreviewImage;
  world: string;
  price: number;
  inFavorites: number;
  averageRating: number;
  learningYears: LearningYear[];
  id: number;
  isCompletedByAuthor: boolean;
  bundle: boolean;
  slug: string;
  schoolPrices: SchoolPrices;
  totalFeedbacks: number;
  descriptionUpdatedByHuman: boolean;
  languages: string[];
  materialTopCategories: MaterialTopCategory[];
  author: Author;
  fileTypes: string;
  tags: string[];
  schoolTypes: SchoolType[];
  authorFeatured: boolean;
  totalPages: number;
  isShadow: boolean;
  materialTypes: MaterialTopCategory[];
  isStandaloneInteractive: boolean;
  hasBibPreview: boolean;
  materialClassGrades: MaterialTopCategory[];
  hasFixedPrice: boolean;
}
interface SchoolType {
  id: number;
  title: string;
  interdisciplinary: boolean;
}
interface Author {
  followersNumber: number;
  becameSellerAt: string;
  searchMode: boolean;
  details: Details;
  id: number;
  slug: string;
}
interface Details {
  profileBackgroundPath: string;
  world: string;
  totalMaterials: number;
  publicName: string;
  imagePath: string;
  needsSellerInfo: boolean;
  subtitle: string;
  privateProfile: boolean;
  teachableCertified: boolean;
  instagramProfile: string;
}
interface MaterialTopCategory {
  id: number;
  title: string;
}
interface SchoolPrices {
  price: Price;
}
interface Price {
  size_601_700: number;
  size_901_1000: number;
  size_201_300: number;
  size_0_100: number;
  size_501_600: number;
  size_701_800: number;
  size_101_200: number;
  size_301_400: number;
  size_401_500: number;
  size_801_900: number;
}
interface LearningYear {
  tooltip: string;
  id: number;
  title: string;
}
interface MaterialFile {
  createdAt: string;
  type: string;
}
interface BundleMaterial {
  coverPath: string;
  firstPreviewImage: FirstPreviewImage;
  price: number;
  description: string;
  language: string;
  id: number;
  title: string;
  slug: string;
}
interface FirstPreviewImage {
  plain: string;
  watermarked: string;
}
