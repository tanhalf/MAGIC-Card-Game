CREATE TABLE card(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type TEXT,
    name TEXT,
    description TEXT,
    value INT
);

