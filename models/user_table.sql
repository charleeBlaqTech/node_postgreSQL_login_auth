CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"firstname" VARCHAR(50) NOT NULL,
	"surname" VARCHAR(50) NOT NULL,
	"email" VARCHAR(100),	
);