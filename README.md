# PocketReader

Build:
(at root of repo)
mvn clean install
java -jar target/PocketReader-0.0.1-SNAPSHOT.jar

Run Frontend:
(under root/src/main/webapp/ui)
npm start

Important information:
So, as of right now, there isn't a proper build of our application so installation of Node and Maven along with Ecclipse would help when building this project successfully, along with PostgreSQL (Email me @ jlutz@cmail.carleton.ca for DB Information)


Relevent parts of Repo: 

Frontend is under https://github.com/TooManyJohns/PocketReader/tree/main/PocketReader/src/main/webapp/ui/src where you can find relevent code for loading our model we created using CustomVision AI. 

Our model can be found here: https://github.com/TooManyJohns/PocketReader/blob/main/PocketReader/src/main/webapp/ui/src/services/model/model.json (Not much will be got out of this, as most is explained in our report about how we went about creating this)

You can find where we point to our API through Java here: https://github.com/TooManyJohns/PocketReader/tree/main/PocketReader/src/main/java/com/jlcv/pocketreader/pokemon
