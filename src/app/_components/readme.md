# Carpetas y/o rutas privadas

En Next.js, el guion bajo "\_" se utiliza para definir rutas que no deben ser accesibles directamente a través de la URL. Estas rutas, también conocidas como rutas privadas o protegidas, generalmente se utilizan para componentes de la interfaz de usuario que no deben ser visibles para los usuarios finales pero son necesarios para el funcionamiento de la aplicación.

- Link: https://nextjs.org/docs/app/getting-started/project-structure#private-folders

## ¿Cómo funciona?

Al colocar un guion bajo delante del nombre de un directorio en la carpeta app de tu proyecto Next.js, estás indicando que esa ruta no debe ser accesible directamente. Por ejemplo, si tienes un directorio llamado \_components dentro de app, los archivos dentro de este directorio no podrán ser accedidos a través de una URL como /components o /components/miComponente.

Esto indica que la carpeta es un detalle de implementación privado y no debe ser considerada por el sistema de enrutamiento, por lo que la carpeta y todas sus subcarpetas quedan fuera del enrutamiento.

---

# Grupos de rutas

Los grupos de rutas se pueden crear envolviendo una carpeta entre paréntesis: **(folderName)**

- Link: https://nextjs.org/docs/app/getting-started/project-structure#route-groups

## ¿Cómo funciona?

Esto indica que la carpeta es para fines organizativos y no debe incluirse en la ruta URL de la ruta.