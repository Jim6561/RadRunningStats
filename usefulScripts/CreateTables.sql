-- Table: public."Race"

-- DROP TABLE public."Race";

CREATE TABLE public."Race"
(
    "Id" integer NOT NULL DEFAULT nextval('"Race_Id_seq"'::regclass),
    racename character varying(255) COLLATE pg_catalog."default",
    event_date date,
    CONSTRAINT "Race_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Race"
    OWNER to gvapenbnrbmadi;