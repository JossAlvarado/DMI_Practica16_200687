import Player from "../models/player.js";
import dbConnection from "../config/db.js";

const createPlayer = (rq,rs)=> {
    console.log("Se ha solicitado la creacion de un nuevo usuario");
    rs.status(200);
    rs.send("Se ha solicitado la creacion de un nuevo usuario");
}

const findAll=async (rq,rs)=>{
    console.log("Se ha solicitado la consulta de todos los jugadores");

    const allPlayers =  await Player.findAll()
    console.log(allPlayers);

    rs.status(200);
    rs.send("Se ha solicitado la consulta de todos los jugadores");
}

const FindPlayerByID = (rq,rs)=>{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado buscar al jugador con el id: ${playerID}`);
    rs.status(200)
    rs.send(`Se ha solicitado buscar al jugadopr con el id: ${playerID}`);
}
const FindPlayerByEmail = (rq,rs)=>{
    const email = rq.params.email
    console.log(`Se ha solicitado buscar al jugador con el id: ${email}`);
    rs.status(200)
    rs.send(`Se ha solicitado buscar al jugadopr con el id: ${email}`);
}
const updatePlayer = (rq,rs)=>{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado de la actualiacion de un nuevo usuario: ${playerID}`);
    rs.status(200)
    rs.send(`Se ha solicitado de la actualiacion de un nuevo usuario: ${playerID}`);
}
const changePlayerPortrait = (rq,rs)=>{
     const playerID = rq.params.playerID
    console.log(`Se ha solicitado un cambio con el id: ${playerID}`);
    rs.status(200)
    rs.send(`Se ha solicitado un cambio con el id: ${playerID}`);
}
const deletePlayer = (rq,rs)=>{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado la eliminacion de la cuenta: ${playerID}`);
    rs.status(200)
    rs.send(`Se ha solicitado la eliminacion de la cuenta: ${playerID}`);
}


export {createPlayer,
    FindPlayerByID,
    FindPlayerByEmail,
    updatePlayer,
    changePlayerPortrait,
    deletePlayer,
    findAll
}
