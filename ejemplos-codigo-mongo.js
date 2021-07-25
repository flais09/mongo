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

# Comando para crear un tercer servicio de mongo
sc.exe create mongodb27019 binPath= "\"D:\Program Files\MongoDB\Server\4.4_3\bin\mongod.exe\" --service --config=\"D:\Program Files\MongoDB\Server\4.4_3\bin\mongod.cfg\"" DisplayName= "mongodb27019" start= "auto"


# Comando para abrir el shell de un nodo de un puerto específico
mongo --port 27019 

# Comando para importar
mongoimport /dataset/products.json -d m103 -c products --port 26000 -u m103-admin -p m103-pass --authenticationDatabase admin

# Configuración para definir replica set. Agregar a mongod.cfg
replication: 
  replSetName: replicaset43

# Comando para ver el estatus del replica set 
rs.status()

# Comando para inicializar el replica set
rs.initiate()

# Comando para agregar un nodo al replica set
rs.add({host:"127.0.0.1:27018", priority:1, votes:1})

# Comando para conocer la configuración del replica set
rs.config()

# Comando para asignar a una variabla cfg la información del replica set
cfg=rs.config()

# Comando para cambiar la prioridad de los miembros del replica set de 3 miembros
cfg.members[0].priority=0.5
cfg.members[1].priority=2
cfg.members[2].priority=3

# Comando para reconfigurar el replica set
rs.reconfig(cfg)

# Comando para saber el tiempo que tardan en actualizarse los nodos secundarios
rs.printSecondaryReplicationInfo()


