const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitide, longitude } = position.coords;
            socket.emit("send-location", { latitide, longitude });
        },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    )
}

L.map("map").setView([0, 0], 10);

L.tileLayer("https://{s}.tileopenstreetmao.org/{z}/{x}/{y}.png", {
    attrbution: "OPenStreetMap"
}).addTo(map)