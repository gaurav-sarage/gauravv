import { Socket as PhxSocket } from "phoenix";
import { chdir } from "process";
import { Dispatch, useEffect, useState, createContext } from "react";

export const SocketContext = createContext<PhxSocket>(null);

function setupSocket(socket: PhxSocket, setSocket: Dispatch<PhxSocket>) {
    if(!socket) {
        const URL = "";
        const phxSocket = new PhxSocket(URL);
        phxSocket.connect();
        setSocket(phxSocket);
    }
}

function teardownSocket(socket: PhxSocket, setSocket: Dispatch<PhxSocket>) {
    if(socket) {
        socket.disconnect();
        setSocket(null);
    }
}

export function Socket({ children }) {
    const [socket, setSocket] = useState<null | PhxSocket>(null);

    useEffect(() => {
        setupSocket(socket, setSocket);
        return () => teardownSocket(socket, setSocket);
    }, [socket]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}