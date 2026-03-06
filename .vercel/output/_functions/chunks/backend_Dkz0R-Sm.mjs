import PocketBase from 'pocketbase';

const pb = new PocketBase("https://agence.saltini.optimiseus.fr/");

function getImageUrl(record, imageField) {
    const file = Array.isArray(record[imageField])
        ? record[imageField][0]
        : record[imageField];

    return file ? pb.files.getUrl(record, file) : null;
}

async function getOffres() {
    try {
        return await pb.collection("maison").getFullList({
            sort: "-created",
        });
    } catch (error) {
        console.log("Une erreur est survenue en lisant la liste des maisons", error);
        return [];
    }
}

async function getOffre(id) {
    try {
        const data = await pb.collection("maison").getOne(id);
        return data;
    } catch (error) {
        console.log("Une erreur est survenue en lisant la maison", error);
        return null;
    }
}

async function addOffre(house) {
    try {
        await pb.collection('maison').create(house);
        return {
            success: true,
            message: 'Offre ajoutee avec succes'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la maison', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
}

async function filterByPrix(minPrix, maxPrix) {
    try { 
        return await pb.collection('maison').getFullList({
            filter: `prix>= ${minPrix} && prix <= ${maxPrix}`,
            sort: '-created',
        });
    } catch (error) {
        console.log('Une erreur est survenue en filtrant les maisons par prix', error);
        return [];
    }
}

export { addOffre as a, getOffre as b, getImageUrl as c, filterByPrix as f, getOffres as g };
