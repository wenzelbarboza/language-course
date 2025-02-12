CREATE TABLE `payments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`paymentId` text NOT NULL,
	`paymentDate` integer,
	`amount` real NOT NULL
);
