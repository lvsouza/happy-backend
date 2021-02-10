import Orphanage from "../models/Orphanage";
import { ImagesView } from "./ImagesView";

export const OrphanagesView = {
    render: (orphanage: Orphanage) => {
        return {
            id: orphanage.id,
            name: orphanage.name,
            about: orphanage.about,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: ImagesView.renderMany(orphanage.images),
        }
    },
    renderMany: (orphanages: Orphanage[]) => {
        return orphanages.map(orphanage => OrphanagesView.render(orphanage));
    }
}
