import io from "socket.io-client";
import feathers from "@feathersjs/client";
import { API_URI } from "./common";

export const app = feathers()
  .configure(
    feathers.socketio(
      io(API_URI, {
        transports: ["websocket"],
        pingTimeout: 3000,
        pingInterval: 5000
      })
    )
  )
  .configure(
    feathers.authentication({
      storage: window.localStorage // To store our accessToken
    })
  );

export const usersService = app.service("users");
