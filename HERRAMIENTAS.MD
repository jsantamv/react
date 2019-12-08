Estas son las herramientas que usaremos en el curso:

Navegador: Especialmente Chrome ya que cuenta con óptimas herramientas de desarrollo.
React Developer Tools: Es una herramienta Open Source creada por Facebook y tiene instalación para Chrome o Firefox. Nos dejará ver el código de React inspeccionando elementos.
Editor de texto: Puedes usar cualquiera, en este curso sugerimos Visual Studio Code. Tiene muchos plugins útiles para el desarrollo.
Prettier: Es un plugin que hace que el código se vea bien sin importar cómo esta escrito.

Create-react-app es una aplicación moderna que se usa desde una línea de comando. Antes de ella se configuraba todo el entorno manualmente lo cual tomaba mucho tiempo.

Pasos para obtenerlo:
Se debe instalar desde la línea de comando usando
npm install -g create-react-app

Una vez instalado se crea la carpeta del proyecto con
create-react-app -nombre del proyecto-

En este punto se estará instalando React y otras herramientas, también se configurará el entorno usando Webpack.

Una vez se instala todo entra a la carpeta src donde estará todo el código fuente de la aplicación, siendo el más importante index.js que es el punto de entrada a la aplicación.

Finalmente para correr la aplicación se usa el comando
npm run start

Otras herramientas:

Babel: Traduce Javascript moderno (JSX) a un Javascript que todos los navegadores puedan interpretar.
Eslint: Lee el código y avisa de errores.