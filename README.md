# JournalApp



## Bloque del boton de login

Para evitar que el usuario pulse dos veces el boton de login se ha creado el siguiente proceso:

Se han creado dos tipos adicionales:

1. uiStartLoading: '[UI] Start loading'
2. uiFinishLoading: '[UI] Finish loading'

A la vez se han creado dos acciones que modifican nuestro state en el *reducer* uiReducer (estas funciones no reciben argumentos)

La primera funcion, uiStartLoading, debe de colocar la propiedad loading en true. Mientras que la segunda funcion, uiFinishLoading, debe de colocar la propiedad loading en false.

Esas acciones tendran el nombre de startLoading y finishLoading respectivamente.
Se realizaran los distintos *dispatch* en cada accion