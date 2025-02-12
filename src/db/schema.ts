import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";
import dayjs from "dayjs";

export const paymentsTable = sqliteTable("payments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull(),
  email: text("email").notNull(),
  paymentId: text("paymentId").notNull(),
  paymentDate: integer("paymentDate", {
    mode: "timestamp",
  }).$defaultFn(() => dayjs().toDate()),
  amount: real("amount").notNull(),
});
