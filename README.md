### Application Test Paketa

#### how to run ??


- Execute **npm install**
- Pull image docker postgres **docker pull postgres**
- Run container database **docker run -p 5432:5432 -e POSTGRES_PASSWORD=1234 postgres**
- with the database in the air execute the migrations with the command **npm run migartions**
- Exist one user '**super**' with pass '**supermaster**', but you can create more users as long as they are not duplicated.
- execute **npm run start:dev** for run application

### OBS
- In projetc exists collection postman for use
- The application exist auth with jwt, use Authorization header with Bearer after login