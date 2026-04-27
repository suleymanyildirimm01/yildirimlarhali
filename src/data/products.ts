import {
  products as baseProducts,
  type Product,
} from "@/components/products/data/products";

const extraProducts: Product[] = [
  {
    id: "127",
    name: "ÇİM HALI-01",
    image:
      "/products/custom/db58d6_f425bfb2c0c140e5bb533efe741cfbfe~mv2.avif",
  },
  {
    id: "128",
    name: "ÇİM HALI-02",
    image:
      "/products/custom/db58d6_462683b0458c4d2b8f824dd3edc98818~mv2.avif",
  },
  {
    id: "129",
    name: "ÇİM HALI-03",
    image:
      "/products/custom/db58d6_6a5c6c28468d4130b82d71ecbb2f13e1~mv2.avif",
  },
  {
    id: "130",
    name: "ÇİM HALI-04",
    image:
      "/products/custom/db58d6_9f482fa40c38418e9942e7cc5ee973c1~mv2.avif",
  },
  {
    id: "131",
    name: "ÇİM HALI-05",
    image:
      "/products/custom/db58d6_59ff7e37b5374536a6f911b63b03722f~mv2.avif",
  },
  {
    id: "132",
    name: "TURKUAZ PROTOKOL",
    image:
      "/products/custom/db58d6_00948263c18742e18d5ff595cdbc1548~mv2.avif",
  },
  {
    id: "133",
    name: "TUFTİNG",
    image:
      "/products/custom/db58d6_81ea4b657b66419094da457d914a9986~mv2.avif",
  },
  {
    id: "134",
    name: "TUFTİNG",
    image:
      "/products/custom/db58d6_276073b1227a47be8d49582e16ec2db8~mv2.avif",
  },
  {
    id: "135",
    name: "TUFTİNG",
    image:
      "/products/custom/db58d6_2a6592e5da2e47d78b88dd16572b1524~mv2.avif",
  },
  {
    id: "136",
    name: "ÇOCUK HALISI",
    image:
      "/products/custom/db58d6_0e51238f7228440bbdf18d543c6bf30d~mv2.avif",
  },
  {
    id: "137",
    name: "CARAT-04",
    image:
      "/products/custom/db58d6_94e9342220694c0faab464c5fead886c~mv2.avif",
  },
  {
    id: "138",
    name: "CARAT-05",
    image:
      "/products/custom/db58d6_b504558a903c43ccb4d91284133de3ba~mv2.avif",
  },
  {
    id: "139",
    name: "LACİVERT PROTOKOL",
    image:
      "/products/custom/db58d6_ef36bd3f4c864a0d96fc629991c1bb13~mv2.avif",
  },
  {
    id: "140",
    name: "KREM PROTOKOL",
    image:
      "/products/custom/db58d6_9d64de014a834530a397b3ea252ebde1~mv2.avif",
  },
  {
    id: "141",
    name: "BORDO PROTOKOL",
    image:
      "/products/custom/db58d6_88925fe6497247aebb4ababe23a2beb3~mv2.avif",
  },
  { id: "142", name: "CARAT-01", image: "/products/custom/carat.jpg" },
  { id: "143", name: "CARAT-02", image: "/products/custom/carat1.jpg" },
  { id: "144", name: "CARAT-03", image: "/products/custom/carat3.jpg" },
  {
    id: "145",
    name: "CARAT-BUKLE",
    image: "/products/custom/caratbukle.jpg",
  },
  {
    id: "146",
    name: "ÇOCUK-PUZZLE",
    image: "/products/custom/db58d6_7727b93293b0427f9f849a39094d5d27~mv2.webp",
  },
  {
    id: "147",
    name: "SRB-DARK-GREY-KARO",
    image: "/products/custom/A1-SRB-Dark-Grey.jpg",
  },
  {
    id: "148",
    name: "A3-SRB-BLUE-KARO",
    image: "/products/custom/A3-SRB-Blue.jpg",
  },
  {
    id: "149",
    name: "A3-SRB-RED-KARO",
    image: "/products/custom/A3-SRB-Red.jpg",
  },
  {
    id: "150",
    name: "SRB-LIGHT-GREY-KARO",
    image: "/products/custom/B1-SRB-Light-Grey.jpg",
  },
  {
    id: "151",
    name: "SRB-ORANGE-KARO",
    image: "/products/custom/B2-SRB-Orange.jpg",
  },
  {
    id: "152",
    name: "SRB-GREEN-KARO",
    image: "/products/custom/B3-SRB-Green.jpg",
  },
  {
    id: "153",
    name: "X-TRA-WOOD-PVC",
    image: "/products/custom/X-TRA-WOOD-1228.jpg",
  },
  {
    id: "154",
    name: "N04-NATURAL-WOOD-PVC",
    image: "/products/custom/N04-Natural-Wood-2706.jpg",
  },
  {
    id: "155",
    name: "X-TRA-WOOD-PVC",
    image: "/products/custom/X-TRA-WOOD-1239.jpg",
  },
  {
    id: "156",
    name: "N03-NATURAL-WOOD-PVC",
    image: "/products/custom/N03-Natural-Wood-2609.jpg",
  },
  {
    id: "157",
    name: "PVC-VINLY",
    image: "/products/custom/pvc-vinly_3-770x330.webp",
  },
];

export type { Product };

export const products: Product[] = [...baseProducts, ...extraProducts];
