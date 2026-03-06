import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export function getImageUrl(record, imageField) {
    const file = Array.isArray(record[imageField])
        ? record[imageField][0]
        : record[imageField];

    return file ? pb.files.getUrl(record, file) : null;
}

export async function getOffres() {
    try {
        return await pb.collection("maison").getFullList({
            sort: "-created",
        });
    } catch (error) {
        console.log("Une erreur est survenue en lisant la liste des maisons", error);
        return [];
    }
}

export async function getOffre(id) {
    try {
        return await pb.collection("maison").getOne(id);
    } catch (error) {
        console.log("Une erreur est survenue en lisant la maison", error);
        return null;
    }
}

export async function addOffre(house) {
    try {
        await pb.collection("maison").create(house);
        return {
            success: true,
            message: "Offre ajoutee avec succes",
        };
    } catch (error) {
        console.log("Une erreur est survenue en ajoutant la maison", error);
        return {
            success: false,
            message: "Une erreur est survenue en ajoutant la maison",
        };
    }
}

export async function filterByPrix(minPrix, maxPrix) {
    try {
        return await pb.collection("maison").getFullList({
            filter: `prix >= ${minPrix} && prix <= ${maxPrix}`,
            sort: "-created",
        });
    } catch (error) {
        console.log("Une erreur est survenue en filtrant les maisons par prix", error);
        return [];
    }
}

export async function getAgents() {
    try {
        return await pb.collection("Agent").getFullList({
            sort: "-created",
        });
    } catch (error) {
        console.log("Une erreur est survenue en lisant la liste des agents", error);
        return [];
    }
}

export async function getAgent(id) {
    try {
        return await pb.collection("Agent").getOne(id);
    } catch (error) {
        console.log("Une erreur est survenue en lisant l'agent", error);
        return null;
    }
}

export async function getOffresByAgent(agentId) {
    try {
        return await pb.collection("maison").getFullList({
            filter: `Agent="${agentId}"`,
            sort: "-created",
        });
    } catch (error) {
        console.log("Une erreur est survenue en lisant les offres de l'agent", error);
        return [];
    }
}

export async function setFavori(house) {
    try {
        await pb.collection("maison").update(house.id, {
            favori: !house.favori,
        });
    } catch (error) {
        console.log("Une erreur est survenue en mettant a jour le favori", error);
    }
}
export async function getFavoris() {
    try {
        return await pb.collection("maison").getFullList({
            filter: "favori = true",
            sort: "-created",
        });
    } catch (error) {
        console.log("Une erreur est survenue en lisant les favoris", error);
        return [];
    }
}