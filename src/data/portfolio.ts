export const categories = ["All", "Product", "Brand", "Editorial", "Systems"] as const;

export type Category = Exclude<(typeof categories)[number], "All">;
export type Filter = (typeof categories)[number];

export type Project = {
  id: string;
  index: string;
  title: string;
  category: Category;
  year: string;
  role: string;
  summary: string;
  image: string;
  alt: string;
  objectPosition: string;
};

export const projects: Project[] = [
  {
    id: "kinnow",
    index: "01",
    title: "Kinnow Route",
    category: "Product",
    year: "2026",
    role: "Product design",
    summary:
      "A harvest board for citrus growers: orchard blocks, crew days, and cold-store slots in one place.",
    image: "/work/kinnow.jpg",
    alt: "Wooden crates of oranges in a misty orchard at dawn",
    objectPosition: "center 60%",
  },
  {
    id: "mandi",
    index: "02",
    title: "Mandi",
    category: "Product",
    year: "2025",
    role: "Product design",
    summary:
      "Millers book wheat against live mandi rates. Farmers see the settlement before the truck leaves the yard.",
    image: "/work/mandi.jpg",
    alt: "Wheat spilling from a jute sack beside a brass balance scale",
    objectPosition: "center",
  },
  {
    id: "loom",
    index: "03",
    title: "Loom House",
    category: "Brand",
    year: "2024",
    role: "Identity",
    summary:
      "Identity for a Ludhiana handloom atelier — a wordmark, a lookbook, and a site that lets the cloth lead.",
    image: "/work/loom.jpg",
    alt: "Stacks of folded ivory, charcoal, and indigo handloom cotton",
    objectPosition: "center",
  },
  {
    id: "night",
    index: "04",
    title: "Night Press",
    category: "Editorial",
    year: "2025",
    role: "Product and type",
    summary:
      "A longform reader set like a journal. Measured columns, a soft night ink, and type that does not shout.",
    image: "/work/night.jpg",
    alt: "An open blank notebook and a fountain pen under a desk lamp",
    objectPosition: "center",
  },
  {
    id: "ledger",
    index: "05",
    title: "Field Ledger",
    category: "Systems",
    year: "2024",
    role: "Design systems",
    summary:
      "A component library and the documentation behind it, built for a regional bank's internal tools.",
    image: "/work/ledger.jpg",
    alt: "A closed clothbound book on an oak table in a sunlit archive",
    objectPosition: "center 70%",
  },
  {
    id: "issue",
    index: "06",
    title: "Issue 14",
    category: "Editorial",
    year: "2023",
    role: "Art direction",
    summary:
      "Art direction for a culture quarterly on Punjab's cities. Covers, grids, and paper chosen for the essay.",
    image: "/work/issue.jpg",
    alt: "A printing press beside a tall stack of blank cream paper",
    objectPosition: "center",
  },
];

export const practice = [
  {
    index: "01",
    title: "Interface",
    detail: "Flows, screens, and the states between them. I prototype in the browser.",
  },
  {
    index: "02",
    title: "Editorial",
    detail: "Type, measure, and grids for reading — issues, readers, and long pages.",
  },
  {
    index: "03",
    title: "Identity",
    detail: "Marks, voice, and a short set of rules a team will actually keep.",
  },
  {
    index: "04",
    title: "Engineering",
    detail: "TypeScript and React. I ship the interface, not only the frames.",
  },
  {
    index: "05",
    title: "Systems",
    detail: "Tokens, components, and documentation that stay quiet on purpose.",
  },
  {
    index: "06",
    title: "Direction",
    detail: "Photography, paper, and working with people who know the material.",
  },
] as const;
