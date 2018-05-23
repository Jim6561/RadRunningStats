-- Table: public.race

-- DROP TABLE public.race;

CREATE TABLE public.race
(
    race_id serial NOT NULL,
    event_date date NOT NULL,
    distance character varying(255) COLLATE pg_catalog."default" NOT NULL,
    location character varying(255) COLLATE pg_catalog."default",
    race_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    distance_miles numeric,
    winning_time numeric,
    first_quartile_time numeric,
    median_time numeric,
    third_quartile_time numeric,
    last_time numeric,
    finishers integer,
    CONSTRAINT "Race_pkey" PRIMARY KEY (race_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.race
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
    split_time numeric,
    net_time numeric,
    gun_time numeric,
    pace numeric,
    PRIMARY KEY (runner_result_id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.runner_result
    OWNER to gvapenbnrbmadi;