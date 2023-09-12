# jsramverk-backend
DV1677 H23 lp1 JavaScript-baserade webbramverk - Backend

## Säkerhetshål

Säkerhetshålen var föråldrade verisioner av moduler och packages. Allt som krävdes var en uppdatering av de olika node-modules som var för gamla. Det löstes genom att använda npm audit fix vilket försöker lösa de olika sårbarheterna som finns i npm package och i detta fallet löste det alla problem.

## Körbar applikation

För att få applikationen körbar behövdes en .env fil för att hålla i enviroment värden. Dessa värden behöver vara olika för alla developers och på grund av detta lägger man till de i en .env fil. Eftersom att man ej vill ladda upp dessa till github bör de läggas till i gitignore.

Efter detta behövde vi skapa databasen så att den existerade. Sedan kan man starta backenden med nodemon och frontenden med valfritt verktyg, exempelvis python. Starta backend på port 1337 och frontenden på port 9000 för att slippa ändra något. Därefter kan man nå applikationen på http://localhost:9000/

## Val av ramverk

Som frontend ramverk valde vi att köra med Vue då vi tyckte den såg intressant ut. Vi hade React som ett annat alternativ men i slutändan fick det bli Vue.