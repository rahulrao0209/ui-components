export type DateDetails = {
  dayName: string;
  monthName: string;
  day: number;
  month: number;
  year: number;
  monthOrder: MonthOrder;
};

export type MonthOrder = "previous" | "current" | "next";
