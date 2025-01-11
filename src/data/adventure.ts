import {type Adventure} from "../types/adventure";

export const adventures: Adventure[] = [
    {
        id: "1",
        title: "Vuelo en Tirolesa en el Dique Cadillal en Tucumán",
        location: "En Cadillal",
        image: "/images/adventures/tiroleza/tiroleza_2.jpg",
        gallery: ["/images/adventures/tiroleza/tiroleza_3.jpg", "/images/adventures/tiroleza/tiroleza_4.jpg", "/images/adventures/tiroleza/tiroleza_5.jpg", "/images/adventures/tiroleza/tiroleza_6.jpg", "/images/adventures/tiroleza/tiroleza.jpg"],
        description: "Iniciaremos la actividad con una charla técnica y de seguridad y la colocación del equipo por parte de neustros guías. En nuestra actividad de tirolesa, te invitamos a disfrutar de un emocionante vuelo de un tramo de 250 metros. En invierno, volarás sobre el agua del lago, mientras que en verano, el nivel del dique desciende, permitiendo que tu vuelo pase sobre áreas verdes. Alcanzarás velocidades de hasta 40 km por hora en esta experiencia inolvidable que combina emoción y belleza natural. Únete a nosotros y descubre la Tucumán de una manera única.",
        category: "Canopy - Tirolesa",
        duration: "30 Minutos",
        difficulty: "Fácil",
        date: ["13:00", "15:00", "17:00"],
        price: 8235,
    },
    {
        id: "2",
        title: "Paseo en Kayak por el Dique Cadillal en Tucumán",
        location: "En Cadillal",
        image: "/images/adventures/kayak/kayak_2.jpg",
        gallery: ["/images/adventures/kayak/kayak_1.jpg", "/images/adventures/kayak/kayak_2.jpg", "/images/adventures/kayak/kayak_3.jpg"],
        description: "Únete a nosotros para un divertido paseo en kayak por el dique Cadillal en Tucumán. Nuestros kayak tienen la capacidad para 1, 2 o 3 personas, lo que garantiza un viaje cómodo y en grupo si lo deseas. La duración del paseo es de 30 minutos, y durante el recorrido, una vez recibido las instrucciones de seguridad y el equipamiento, podrás recorrer el lago libremente. Es una oportunidad para aprender y disfrutar de las maravillas naturales de Tucumán desde una perspectiva única.",
        category: "Kayak - Doky",
        duration: "30 Minutos",
        difficulty: "Fácil",
        date: ["13:00", "15:00", "17:00"],
        price: 8236,
    },
    {
        id: "3",
        title: "Paseo en Barco por el Dique Cadillal en Tucumán",
        location: "En Cadillal",
        image: "/images/adventures/catamaran/camaken.jpg",
        gallery: ["/images/adventures/catamaran/camaken_2.jpg", "/images/adventures/catamaran/camaken_3.jpg", "/images/adventures/catamaran/camaken_4.jpg", "/images/adventures/catamaran/camaken_5.jpg", "/images/adventures/catamaran/camaken_6.jpg"],
        description: "Únete a nosotros para un relajante paseo en barco por el dique Cadillal en Tucumán. Nuestros barcos tienen una capacidad para aproximadamente 70 personas, lo que garantiza un viaje cómodo y pintoresco. La duración del paseo es de 30 minutos, y durante el recorrido, nuestro guía te sumergirá en los aspectos geográficos e históricos de la zona del Cadillal, el lago y la reserva natural de Aguas Chiquitas. Es una oportunidad para aprender y disfrutar de las maravillas naturales de Tucumán desde una perspectiva única.",
        category: "Navegación",
        duration: "30 Minutos",
        difficulty: "Fácil",
        date: ["13:00", "15:00", "17:00"],
        price: 8235,
    }
];