-- Table: public."race"

-- DROP TABLE public."race";

CREATE TABLE public."race"
(
    race_id serial,
    event_date date NOT NULL,
    distance character varying(255)  NOT NULL COLLATE pg_catalog."default",
    race_name character varying(255)  NOT NULL COLLATE pg_catalog."default",
    CONSTRAINT "Race_pkey" PRIMARY KEY ("race_id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."race"
    OWNER to gvapenbnrbmadi;