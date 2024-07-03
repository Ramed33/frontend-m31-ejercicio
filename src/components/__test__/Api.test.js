import {getUsersApi} from "../Api/index";

const usersMock = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
        lat: "-37.3159",
        lng: "81.1496"
        }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
        }
        },
        {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
        lat: "-43.9509",
        lng: "-34.4618"
        }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
        }
        },
];

describe("getUsersApi", () =>{
    it("should call correct function", () => {
        global.fetch = () => 
            Promise.resolve({
                status:200,
                json: () => Promise.resolve(usersMock),
            });

        const response = getUsersApi();
        expect(response).resolves.toEqual(usersMock);
    });

    it("should call error 404", () => {
        global.fetch = () =>
            Promise.resolve({
                status: 404,
                json: () => Promise.resolve(),
            });

            const response = getUsersApi();
            expect(response).rejects.toThrow(new Error("Petición no encontrada"));
    });

    it("should call server error 500", () => {
        global.fetch = () => 
            Promise.resolve({
                status: 500,
                json: () => Promise.resolve(),
            });

            const response = getUsersApi();
            expect(response).rejects.toThrow(new Error("Error en el servidor"));
    });
});