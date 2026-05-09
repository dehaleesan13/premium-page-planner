import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export type Category = "Weddings" | "Receptions" | "Birthdays" | "Corporate";

export interface PortfolioItem {
  id: string;
  title: string;
  venue: string;
  category: Category;
  image: string;
  span?: "wide" | "tall" | "default";
}

export const PORTFOLIO: PortfolioItem[] = [
  { id: "p1", title: "Roses & Brass", venue: "Chidambaram · Wedding", category: "Weddings", image: work1, span: "tall" },
  { id: "p2", title: "Orchid Banquet", venue: "Cuddalore · Reception", category: "Receptions", image: work2 },
  { id: "p3", title: "Champagne Eve", venue: "Neyveli · Birthday", category: "Birthdays", image: work3 },
  { id: "p4", title: "Crimson Aisle", venue: "Cuddalore · Wedding", category: "Weddings", image: work4, span: "tall" },
  { id: "p5", title: "Diya & Marigold", venue: "Chidambaram · Ceremony", category: "Weddings", image: work5 },
  { id: "p6", title: "Onyx Stage", venue: "Neyveli · Corporate Gala", category: "Corporate", image: work6 },
  { id: "p7", title: "Ivory Cascade", venue: "Cuddalore · Reception", category: "Receptions", image: work2, span: "wide" },
  { id: "p8", title: "Marigold Glow", venue: "Chidambaram · Pooja", category: "Weddings", image: work5 },
];
