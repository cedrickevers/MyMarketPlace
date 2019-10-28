module.exports = {

  database: process.env.DATABASE || "mongodb://miakis:test@cluster0-shard-00-00-2tcu7.mongodb.net:27017,cluster0-shard-00-01-2tcu7.mongodb.net:27017,cluster0-shard-00-02-2tcu7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
  ,
  port: process.env.PORT || 7777,
  secret: process.env.SECRET || 'market7777',

}
