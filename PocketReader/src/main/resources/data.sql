DROP TABLE IF EXISTS pokemon;

CREATE TABLE pokemon (
  ID INT PRIMARY KEY,
  POKEMON_NAME VARCHAR(250) NOT NULL,
  KEY_NAME VARCHAR(250) NOT NULL
);

INSERT INTO pokemon (ID, POKEMON_NAME, KEY_NAME) VALUES
  (1, 'Bulbasaur', 'Bulbasaur/bulbasaur_1'),
  (2, 'Charmander', 'Charmander/charmander_1'),
  (3, 'Squirtle', 'Squirtle/squirtle_1');
