-- Table: public."race"

-- DROP TABLE public."race";

CREATE TABLE public."race"
(
    race_id serial,
    event_date date NOT NULL,
    distance character varying(255)  NOT NULL COLLATE pg_catalog."default",
    location character varying(255)  COLLATE pg_catalog."default",
    race_name character varying(255)  NOT NULL COLLATE pg_catalog."default",
    CONSTRAINT "Race_pkey" PRIMARY KEY ("race_id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."race"
    OWNER to gvapenbnrbmadi;





-- DROP TABLE public."runner_result";

CREATE TABLE public.runner_result
(
    runner_result_id serial NOT NULL,
    race_id integer NOT NULL,
    name character varying(255) NOT NULL,
    sex character(1),
    age smallint,
    city character varying(255),
    state character(2),
    place smallint,
    div_tot character varying(255),
    div character varying(255),
    bib_number character varying(255),
    split_time integer,
    net_time integer,
    gun_time integer,
    pace integer,
    PRIMARY KEY (runner_result_id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.runner_result
    OWNER to gvapenbnrbmadi;