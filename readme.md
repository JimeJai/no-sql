# DESARROLLO DE API REST CON DB NO-SQL

Armar una app para administrar la economía y finanzas personales. La app permite el registro de usuarios, los cuales pueden llevar un registro de sus gastos y sus ingresos semanalmente, movimientos con fechas y detalles de cada gasto.

- Un usuario puede:
  - Registrarse
  - Login | Logout
  - Ingresar un nuevo movimiento, el cual puede ser un ingreso o egreso de dinero.
  - Acceder a la información de su cuenta.

La base de datos consta de 2 entidades principales:

- AUTH: Cada usuario registrado tiene asociado un id único, password y un token

- USERS: Cada usuario registrado tiene asociado un id único, nombre completo, email.

- MOVEMENTS: Cada movimiento registrado en la app tiene asociado un id unico, un timestamp en formato ISO, transactionType: 'income' | 'outcome', amount que es un valor numérico decimal y tags: string[] con un valor de máximo 3 tags (['food', 'supermarket', 'dessert'] por ejemplo).

## EJERCICIO

- Sistema de autenticacion de usuarios con auth mediante tokens.
- CRUD a Firestore.

### PASOS

- Realizar diagrama de como quedarían estructurados los datos
- Hasheo de password al registrar usuario.
- Utilizar middleware para validar el token.
- Desarrollar un buen sistema de filtrado para obtención de datos, que no sean sensitivos (case insensitive)

### A TENER EN CUENTA

- Documentar la API de forma clara.
- NO COMMITEAR NI PUSHEAR LAS VARIABLES DE ENTORNO: Malísima práctica de seguridad.
- Tiene que haber una clara distinción de capas y responsabilidades. Cada capa debe tener la lógica correspondiente.
- Los códigos de estado deben estar correctamente utilizados, según corresponda a cada situación.
- Las funciones/métodos debe retornar siempre el mismo tipo de dato, no debería retornar un número o un objeto dependiendo del caso. Para casos de error, lo mejor es arrojar una excepeción/error. Esto es para mantener la coherencia y la intelegibilidad del código.
- Tratar de agrupar lógica para no repetir código (DRY).
- Tratar de tener pocas fuentes de la verdad, cosa de cambiar el código en un sólo punto.
- Detenerse siempre a pensar bien el nombre de las variables/funciones.
- Cada función debe tener una tarea en específico y cumplirla, siendo coherente con su nombre.
