# Comando para ver base de datos en mongo 
show databases

# Comando para ver las colecciones en una base de datos
use local
show collections

# Comando para ver los documentos de una colección
db.startup_log.find()
  
# Comando para ver los documentos de una colección con formato de fácil lectura
db.startup_log.find().pretty()

# Comando para saber el número de documentos de una colección
db.startup_log.count()

# Comando para ver los índices de una colección
db.startup_log.getIndexes()

# Comando para insertar documentos en la colección
db.marykay.insert(  
     {  
       reconocimiento: "promocionTrimestral",  
       nivel: 1,
       puntos: "3600",
       premio: ["aretes", "secadora", "cosmetiquera"],
       felicitacion: { asunto: "Felicitación", texto: "Felicidades por tu Nivel 1 de premio trimestral" },
       ganadoras: [ { nombre: "Laura", trimestre: "1_2021", premio_elegido: "aretes"}, { nombre: "Maribel", trimestre: "1_2021" }, { nombre: "Sophie", trimestre: "1_2021" } ]
     }  
  )
db.marykay.insert(  
     {  
       reconocimiento: "promocionTrimestral",  
       nivel: 2,
       puntos: "6000",
       premio: ["maleta", "set de joyerìa", "bolsa"],
       felicitacion: { asunto: "Felicitación", texto: "Felicidades por tu Nivel 2 de premio trimestral" },
       ganadoras: [ { nombre: "Rosy", trimestre: "4_2020"}, { nombre: "Maribel", trimestre: "4_2020" }, { nombre: "Sophie", trimestre: "4_2020" } ],
       numeroGanadorasUltimoTrimestre: 3       
     }  
  )
db.marykay.insert(  
     {  
       reconocimiento: "promocionTrimestral",  
       nivel: 3,
       puntos: "9000",
       premio: ["televisión", "ipad", "reloj"],
       felicitacion: { asunto: "Felicitación", texto: "Felicidades por tu Nivel 3 de premio trimestral" },
       ganadoras: [ { nombre: "Rosy", trimestre: "3_2020"}, { nombre: "Maribel", trimestre: "3_2020" }, { nombre: "Erika", trimestre: "3_2020" } ],
       nombrelargoReconocimiento: "Promoción Trimestral Seminario 2020-2021"
     }  
  )

# Comando para crear un nuevo servicio de mongo
sc.exe create mongodb27018 binPath= "\"D:\Program Files\MongoDB\Server\4.4_2\bin\mongod.exe\" --service --config=\"D:\Program Files\MongoDB\Server\4.4_2\bin\mongod.cfg\"" DisplayName= "mongodb27018" start= " "



