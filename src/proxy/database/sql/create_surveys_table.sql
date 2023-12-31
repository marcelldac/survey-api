-- Table: public.surveys

-- DROP TABLE IF EXISTS public.surveys;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS public.surveys
(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL
);

INSERT INTO public.surveys (id, title) VALUES (uuid_generate_v4(), 'John Doe') RETURNING *;


ALTER TABLE IF EXISTS public.surveys
    OWNER TO postgres;
