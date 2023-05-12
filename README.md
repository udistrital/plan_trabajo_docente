# plan_trabajo_docente_crud
Repositorio para el manejo de planes de trabajo docente del sistema de gestión académica (SGA)

API CRUD desarrollada en NestJS para la gestión de base de datos no relacional (MongoDB).

## Especificaciones Técnicas
### Tecnologías Implementadas y Versiones
- [NestJS](https://github.com/nestjs/nest)
- [MongoDB](https://www.mongodb.com/)

### Variables de Entorno
```
USER: process.env.PLAN_TRABAJO_DOCENTE_CRUD_USER,
PASS: process.env.PLAN_TRABAJO_DOCENTE_CRUD_PASS,
HOST: process.env.PLAN_TRABAJO_DOCENTE_CRUD_HOST,
PORT: process.env.PLAN_TRABAJO_DOCENTE_CRUD_PORT,
DB: process.env.PLAN_TRABAJO_DOCENTE_CRUD_DB,
HTTP_PORT: process.env.PLAN_TRABAJO_DOCENTE_CRUD_HTTP_PORT,
AUTH_DB: process.env.PLAN_TRABAJO_DOCENTE_CRUD_AUTH_DB 
```
**Nota:** Las variables se pueden encontrar en el fichero src/config/configuration.ts

### Ejecución del Proyecto 


```
# 1. Obtener el repositorio de git
git clone https://github.com/udistrital/plan_trabajo_docente_crud.git

# 2. Moverse a la carpeta del repositorio 
cd plan_trabajo_docente_crud

# 3. Moverse a la rama **develop**
git pull origin develop && git checkout develop

# 4. Instalar dependencias
npm install 

# 5. Alimentar todas las variables de entorno que utiliza el pryecto.
PLAN_TRABAJO_DOCENTE_CRUD_HTTP_PORT=8080... 

```
### Ejecución Pruebas 
Pruebas unitarias

```
En proceso
```
## Estado CI

| Develop | Relese 0.0.1 | Master |
| -- | -- | -- |
| [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/plan_trabajo_docente_crud/status.svg?ref=refs/heads/develop)](https://hubci.portaloas.udistrital.edu.co/udistrital/plan_trabajo_docente_crud/) | [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/plan_trabajo_docente_crud/status.svg?ref=refs/heads/release/0.0.1)](https://hubci.portaloas.udistrital.edu.co/udistrital/plan_trabajo_docente_crud/) | [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/plan_trabajo_docente_crud/status.svg)](https://hubci.portaloas.udistrital.edu.co/udistrital/plan_trabajo_docente_crud/) |



### Modelo de Datos

[Modelo de datos](/database/plan_trabajo_docente_crud.png)

### Licencia

This file is part of sintomas_crud.

plan_trabajo_docente_crud is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

plan_trabajo_docente_crud is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with sintomas_crud. If not, see https://www.gnu.org/licenses/.