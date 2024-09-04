const whereAmI = async(lat, ing) => {
    try {
        let api = await fetch(`https://geocode.xyz/${lat},${ing}?geoit=json`);
        if (!api.ok) {
            throw new Error(`Problem getting location data ${api.status}`);
        }
        let data = await api.json();
        console.log(`You are in ${data.city}, ${data.country}`);
    } catch (error) {
        console.error(error);
    }
}
whereAmI(52.508, 13.381)